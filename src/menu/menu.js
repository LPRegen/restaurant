import { divide } from 'lodash';
import './menu.css';

export function createMenuItems() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  container.id = 'menu';
  content.dataset.id = '1';
  const items = [
    {
      name: 'Expresso',
      description: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor.',
      price: '$3',
    },
    {
      name: 'Affogato',
      description: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor.',
      price: '$3',
    },
    {
      name: 'Americano',
      description: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor.',
      price: '$3',
    },
    {
      name: 'Cappuccino',
      description: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor.',
      price: '$3',
    },
    {
      name: 'Cold Brew Coffee',
      description: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor.',
      price: '$3',
    },
    {
      name: 'Doppio',
      description: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor.',
      price: '$3',
    },
  ];
  items.forEach((item) => {
    const itemName = item.name;
    const itemDescription = item.description;
    const itemPrice = item.price;

    const cardItem = document.createElement('div');
    const name = document.createElement('h3');
    const description = document.createElement('p');
    const priceOrder = document.createElement('div');
    const price = document.createElement('p');
    const order = document.createElement('button');

    cardItem.classList.add('item');
    name.classList.add('name');
    description.classList.add('description');
    priceOrder.classList.add('price-order');
    price.classList.add('price');
    order.classList.add('order');

    name.textContent = itemName;
    description.textContent = itemDescription;
    price.textContent = itemPrice;
    order.textContent = 'Order';

    priceOrder.append(price, order);
    cardItem.append(name, description, priceOrder);
    container.append(cardItem);
  });

  content.appendChild(container);

  return container;
}
