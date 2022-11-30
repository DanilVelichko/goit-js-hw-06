// Напиши скрипт, який:
//* 1. Порахує і виведе в консоль кількість категорій в ul#categories,
//* тобто елементів li.item.

const navLiItem = document.querySelectorAll('li.item');
console.log('Number of categories:', navLiItem.length); //3


// 2. Для кожного элемента li.item у списку ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість
// елементів в категорії(усіх < li >, вкладених в нього).
// const navLiElements = document.querySelectorAll("li");
// console.log('Category:', navLiElements);

const navEl = document.querySelector("li"); //Start element 
// console.log(navEl);

const firstChildNavEl = navEl.children[0];
console.log("Category:",  firstChildNavEl.textContent);

const firstChildNavElements = navEl.children[1];
// console.log("UL Child Elements:", firstChildNavElements);

const firstChildrenLi = firstChildNavElements.children;
console.log("Elements:", firstChildrenLi.length);


const navAllElementsLi = document.querySelectorAll("li"); // All Li collection block finded
// console.log("navAllElementsLi:", navAllElementsLi);

const secondChildNavEl = navAllElementsLi[5]; 
// console.log("Category:", secondChildNavEl);

const productElement = secondChildNavEl.firstElementChild;
console.log("Category:", productElement.textContent);

const secondLi = secondChildNavEl.children[1];
// console.log("secondLi:", secondLi);

const secondLiChildren = secondLi.children;
console.log("Elements:", secondLiChildren.length);

const lastChildNavEl = navAllElementsLi[9];
// console.log("Last Category:", lastChildNavEl);

const lastTitleElement = lastChildNavEl.firstElementChild;
console.log("Category:", lastTitleElement.textContent);

const lastLiChildren = lastChildNavEl.children[1];
// console.log("LastLi:", lastLiChildren.length);

const lastChildren = lastLiChildren.children;
console.log("Elements:", lastChildren.length);