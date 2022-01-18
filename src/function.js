'use strict';

import { ui } from '../src/data';

const notes = () => {
    let collection = [];
    let i = 0;

    const getInput = () => {
        let obj = {
            title: document.querySelector('.title').value,
            description: document.querySelector('.notes').value,
            date: document.querySelector('.dateInput').value.toString(),
        }
        collection.push(obj);
        console.log(collection, obj);
        ui.HTMLelement(obj, i);
        i = i + 1;
    };

    const removeEl = (datavalue) => {
        collection.splice(collection.indexOf(datavalue), 1);
    };

    const modify = (obj, array2, notesta, titleta, divnotes) => {
        if(titleta.value !== "")
        {
            obj.title = titleta.value;
            console.log(titleta.value);
            array2[0].textContent = titleta.value;
            console.log(obj)
        }

        if(notesta !== "")
        {
            obj.description = notesta.value;
            console.log(notesta.value);
            divnotes.textContent = notesta.value;
        }
    }

    return { getInput, removeEl, modify }
}

const note = notes();
export { note }