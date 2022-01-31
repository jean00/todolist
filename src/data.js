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
    const innerdiv = document.createElement("div");
    const divsetting = document.createElement("span");
    const divremove = document.createElement("span");
    const datavalue = document.createAttribute("data-value");
    const checked = document.createElement("input");
    const divcheck = document.createElement("span");

    datavalue.value = i;

    checked.type = "checkbox";
    checked.style.display = "inline";
    checked.value = "done";

    topdiv.className = "topdiv";
    maindiv.className = "maindiv";
    divtitle.className = "divtitle";
    divdate.className = "divdate";
    div.className = "div";
    divsetting.className = "modify";
    divremove.className = "remove";
    innerdiv.className = "innerdiv";
    divcheck.className = "checkdiv";
    divnotes.className = "divnotes";
    checked.className = "checked";

    divtitle.textContent = obj.title;
    divdate.textContent = obj.date;
    divnotes.textContent = obj.description;
    divsetting.innerHTML = "<i class='fas fa-cog'></i>";
    divremove.innerHTML = "<i class='fas fa-trash'></i>";

    topdiv.appendChild(divcheck);
    divcheck.appendChild(checked);
    innerdiv.appendChild(divtitle);
    innerdiv.appendChild(divdate);
    topdiv.appendChild(innerdiv);
    div.appendChild(divsetting);
    div.appendChild(divremove);
    innerdiv.appendChild(div);
    maindiv.appendChild(topdiv);
    maindiv.appendChild(divnotes);
    parentdiv.appendChild(maindiv);
    maindiv.setAttributeNode(datavalue);

    divremove.addEventListener("click", () => {
      removeNote(datavalue, maindiv, obj);
    });

    divsetting.addEventListener("click", () => {
      modifynote(obj, innerdiv, divnotes);
    });

    checked.addEventListener("click", () => {
      removeNote(datavalue, maindiv);
    });
  };

  const removeNote = (datavalue, maindiv, obj) => {
    maindiv.parentNode.removeChild(maindiv);
    note.removeEl(datavalue, obj);
  };

  const modifynote = (obj, innerdiv, divnotes) => {
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

    closediv.innerHTML = "<i class='far fa-times-circle'></i>";

    maindiv.appendChild(closediv);
    form.appendChild(titleta);
    form.appendChild(notesta);
    form.appendChild(date);
    form.appendChild(button);
    maindiv.appendChild(form);
    container.appendChild(maindiv);
    main.appendChild(container);

    closediv.addEventListener("click", () => {
      let popup = document.querySelectorAll(".modifypopup");
      for (let i = 0; i < popup.length; i++) {
        popup[i].style.display = "none";
      }
    });

    button.addEventListener("click", () => {
      container.style.display = "none";
      const array2 = innerdiv.childNodes;
      note.modify(obj, array2, notesta, titleta, date, divnotes);
    });
  };
  return { HTMLelement };
};
const ui = notes();
export { ui };
