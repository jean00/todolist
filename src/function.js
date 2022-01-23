"use strict";

import { format } from "date-fns";
import { ui } from "../src/data";

const notes = () => {
  let collection = [];
  let i = 0;

  const getInput = () => {
    let prova = new Date(document.querySelector(".dateInput").valueAsDate);
    let obj = {
      title: document.querySelector(".title").value,
      description: document.querySelector(".notes").value,
      date: format(prova, "dd/MM/yyyy"),
    };
    collection.push(obj);
    ui.HTMLelement(obj, i);
    i = i + 1;
  };

  const removeEl = (datavalue) => {
    collection.splice(collection.indexOf(datavalue), 1);
  };

  const modify = (obj, array2, notesta, titleta, date, divnotes) => {
    if (titleta.value !== "") {
      obj.title = titleta.value;
      array2[0].textContent = titleta.value;
    }

    if (notesta.value !== "") {
      obj.description = notesta.value;
      divnotes.textContent = notesta.value;
    }

    if (date.value !== "") {
      obj.date = date.value;
      array2[1].textContent = date.value;
    }
  };

  /*const today = (todayDate) => {
    console.log(collection);
    const prova = collection.filter(
      (collection) => collection.date === todayDate
    );
    ui.filter(maindiv);
  };*/
  return { getInput, removeEl, modify };
};

const note = notes();
export { note };
