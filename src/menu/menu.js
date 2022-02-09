import './menu.css';

export function createMenu() {
  const content = document.querySelector('#content');

  const items = [
    { title: 'wer', description: 'Lorem 123asd', price: '$20' },
    { title: 'Expresso', description: 'fgj 1nfg3asd', price: '$20' },
    { title: 'Expresso', description: 'Lorem 123asd', price: '$22130' },
    { title: 'etr', description: 'Lorem123 123asd', price: '$20' },
    { title: 'fgh', description: 'vbn 123asd', price: '$2230' },
    { title: 'Expresso', description: 'Lorem 1fdg23asd', price: '$20' },
    { title: ' x', description: 'uio 123asd', price: '$12320' },
    { title: 'Expresso', description: 'Lorem 123asd', price: '$20' },
  ];

  let listedItems = [];
  for (let i = 0; i < items.length; i++) {
    let liItem = document.createElement('li');
    let title = document.createElement('p');
    let description = document.createElement('p');
    let price = document.createElement('p');

    title.textContent = items[i].title;
    description.textContent = items[i].description;
    price.textContent = items[i].price;

    liItem.appendChild(title);
    liItem.appendChild(description);
    liItem.appendChild(price);

    listedItems.push(liItem);
  }
  console.log(listedItems);
  return listedItems;
}
