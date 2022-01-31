"use strict";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { format } from "date-fns";
import { note } from "../src/function.js";
import { storage } from "../src/storage";
import { ui } from "../src/data";

const today = new Date();
const formattedDate = format(today, "dd/MM/yyyy");
const divButton = document.querySelector(".b1");

document.querySelector(".today").textContent = formattedDate;
document.querySelector(".dateInput").valueAsDate = today;

divButton.addEventListener("click", () => {
  document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});

document.querySelector(".submit").addEventListener("click", () => {
  note.checkTitle(document.querySelector(".title").value);
});

document.querySelector(".search").addEventListener("keyup", (e) => {
  note.search(e);
});
