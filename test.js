import { names } from "./name.js";

const root = document.getElementById('root');

const component = (tagName, text) => {
  return `
  <${tagName}>${text}</${tagName}>
  `;
}

let arr = [];
names.forEach((child) => {
  const template = component('h1', child);
  arr.push(template);
  root.innerHTML = arr.join('');
});