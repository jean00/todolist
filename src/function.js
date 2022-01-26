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
      done: "",
    };
    console.log(obj);
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

  const check = (obj, checked) => {
    if (checked.checked == true) {
      obj.done = "done";
      console.log(obj);
    } else {
      obj.done = "";
      console.log(obj);
    }
  };

  const search = (e) => {
    console.log(e.target.value);
    const filteredtodos = e.target.value;

    displaytodo(filteredtodos);
  };

  const displaytodo = (filteredtodos) => {
    let maindiv = document.querySelectorAll(".maindiv");
    let titles = document.querySelectorAll(".divtitle");

    for (let i = 0; i < maindiv.length; i++) {
      console.log(maindiv[i], titles[i].textContent);
      console.log(titles[i].textContent, filteredtodos);
      if (titles[i].textContent !== filteredtodos) {
        maindiv[i].style.display = "none";
      } else {
        if (titles[i].textContent === filteredtodos)
          maindiv[i].style.display = "block";
      }
      if (filteredtodos.length === 0) {
        for (let j = 0; j < maindiv.length; j++) {
          maindiv[i].style.display = "block";
        }
      }
      console.log(typeof titles[i].textContent, typeof filteredtodos);
    }
  };

  return { getInput, removeEl, modify, check, search };
};

const note = notes();
export { note };
