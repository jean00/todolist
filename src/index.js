'use strict';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { format } from 'date-fns';
import { note } from '../src/function.js';

const today = new Date();
const formattedDate = format(today, 'dd/MM/yyyy');
const divButton = document.querySelector('.b1');

document.querySelector('.today').textContent = formattedDate;
document.querySelector('.dateInput').valueAsDate = today;

divButton.addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
})

document.querySelector('.submit').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
    note.getInput();
})
