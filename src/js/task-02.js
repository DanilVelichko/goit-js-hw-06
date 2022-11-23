const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = option => {
  const list = document.querySelector("ul");
  
  const elements = ingredients.map(option => {
    const item = document.createElement("li");
    item.textContent = option;
    item.classList.add('item');
    return item;
  });

  list.append(...elements);
};

createList(ingredients);
