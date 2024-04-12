// ==UserScript==
// @name         Simulador Norma - Fixes
// @namespace    http://tampermonkey.net/
// @version      2024-04-01
// @description  Pequenos ajuste no simulador para facilitar o uso
// @author       dsadriel
// @match        https://www.inf.ufrgs.br/~rma/simuladores/norma.html
// @icon         https://dsadriel.dev/assets/pacote.png
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const input = document.querySelector("textarea");

    // Adiciona suporte a tabs
    input.addEventListener('keydown', e => {
        if (e.key === "Tab") {
            insertTab(e.target)
            e.preventDefault();
        }
    });

    // Salva o conteúdo no localStorage
    input.addEventListener('keyup', e => {
        localStorage.setItem('mn-rascunho', e.target.value);
    });

    // Carrega o rascunho
    input.value = localStorage.getItem('mn-rascunho');

    // Adiciona o resultado em pares
    setInterval(() => {
        let e = [...document.querySelectorAll('td b')].filter(a => a.innerText.includes('Saída') && !a.innerText.includes(')'));
        let pair = [0, 0]

        if (e.length) {
            let val = parseInt(e[0].innerText.split(' ')[1]);

            if (val > 0) {

                while (val % 2 == 0) {
                    pair[0] += 1;
                    val /= 2;
                }
                while (val % 3 == 0) {
                    pair[1] += 1;
                    val /= 3;
                }
            }

            e[0].innerHTML += ` <i style="color: gray;">(${pair[0]}, ${pair[1]})</i>`;
        }
    }, 500);

    // Adiciona um campo para inserir os pares
    setInterval(() => {

        let input = document.querySelectorAll('td input');

        if (input.length == 1) {

            let parent = input[0].parentNode;
            let pair = document.createElement('input');

            pair.setAttribute('type', 'text');
            pair.onkeyup = () => {
                let val = pair.value.split(',').map(a => parseInt(a)).slice(0, 2);
                if(!val[0]) val[0] = 0;
                if(!val[1]) val[1] = 0;
                input[0].value = Math.pow(2, val[0]) * Math.pow(3, val[1]);

                input[0].dispatchEvent(new Event('input', { bubbles: true }));

                pair.value = val.join(',');
            }
            
            input[0].onkeyup = () => {
                pair.value = '';

            }

            parent.appendChild(document.createElement('br'));
            parent.appendChild(document.createTextNode('Par: '));
            parent.appendChild(pair);

        }
    }, 500);

})();


function insertTab(inputElement) {
    const start = inputElement.selectionStart;
    const end = inputElement.selectionEnd;
    const value = inputElement.value;

    // Insere um tab na posição atual do cursor
    inputElement.value = value.substring(0, start) + '\t' + value.substring(end);

    // Move o cursor para após o tab
    inputElement.selectionStart = inputElement.selectionEnd = start + 1;
}
