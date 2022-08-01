"use strict";

function updateTime(e) {
  const valueToBeUpdated = e.target.value;
  document.documentElement.style.setProperty("--time", `${valueToBeUpdated}s`);
}

function updateHeight(e) {
  const valueToBeUpdated = e.target.value;
  document.documentElement.style.setProperty("--up", `-${valueToBeUpdated}px`);
}
