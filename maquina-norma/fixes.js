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