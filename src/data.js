"use strict";
import { note } from "../src/function.js";

const notes = () => {
  const HTMLelement = (obj, i) => {
    const parentdiv = document.querySelector(".todos");
    const topdiv = document.createElement("div");
    const maindiv = document.createElement("div");
    const divtitle = document.createElement("div");
    const divnotes = document.createElement("div");
    const divdate = document.createElement("div");
    const div = document.createElement("div");
    const divsetting = document.createElement("span");
    const divremove = document.createElement("span");
    const datavalue = document.createAttribute("data-value");
    datavalue.value = i;

    topdiv.className = "topdiv";
    maindiv.className = "maindiv";
    divtitle.className = "divtitle";
    divdate.className = "divdate";
    div.className = "div";
    divsetting.className = "modify";
    divremove.className = "remove";

    divtitle.textContent = obj.title;
    divdate.textContent = obj.date;
    divnotes.textContent = obj.description;
    divsetting.innerHTML = '<i class="fas fa-cog"></i>';
    divremove.innerHTML = '<i class="fas fa-trash"></i>';

    topdiv.appendChild(divtitle);
    topdiv.appendChild(divdate);
    div.appendChild(divsetting);
    div.appendChild(divremove);
    topdiv.appendChild(div);
    maindiv.appendChild(topdiv);
    maindiv.appendChild(divnotes);
    parentdiv.appendChild(maindiv);
    maindiv.setAttributeNode(datavalue);
    console.log(datavalue);

    divremove.addEventListener("click", () => {
      removeNote(datavalue, maindiv);
    });

    divsetting.addEventListener("click", () => {
      modifynote(obj, topdiv, divnotes);
    });
  };

  const removeNote = (datavalue, maindiv) => {
    maindiv.parentNode.removeChild(maindiv);
    note.removeEl(datavalue);
  };

  const modifynote = (obj, topdiv, divnotes) => {
    const main = document.querySelector(".main");
    const container = document.createElement("div");
    const maindiv = document.createElement("div");
    const closediv = document.createElement("div");
    const form = document.createElement("form");
    const titleta = document.createElement("textarea");
    const notesta = document.createElement("textarea");
    const date = document.createElement("input");
    const button = document.createElement("input");

    container.className = "modifypopup";
    maindiv.className = "modifypopup-content";
    closediv.className = "close2";
    titleta.className = "newTitle";
    notesta.className = "newNotes";
    date.className = "dateInput";
    button.className = "submit2";

    titleta.placeholder = "title";
    notesta.placeholder = "notes";
    date.type = "date";
    button.type = "button";

    button.value = "modify";

    form.appendChild(titleta);
    form.appendChild(notesta);
    form.appendChild(date);
    form.appendChild(button);
    maindiv.appendChild(form);
    maindiv.appendChild(closediv);
    container.appendChild(maindiv);
    main.appendChild(container);

    button.addEventListener("click", () => {
      container.style.display = "none";
      const array2 = topdiv.childNodes;
      note.modify(obj, array2, notesta, titleta, date, divnotes);
    });
  };

  return { HTMLelement };
};
const ui = notes();
export { ui };
