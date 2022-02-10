// import { create } from 'lodash';
import './home.css';
import HomeImgResized from '../images/coffee-resized.jpg';

export function createHome() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  const information = document.createElement('div');
  const title = document.createElement('h1');
  const spanTitle = document.createElement('span');
  const description = document.createElement('h3');
  const makeOrder = document.createElement('button');
  const img = document.createElement('img');

  content.dataset.id = 0;
  container.id = 'home';
  information.id = 'information';
  title.id = 'title';
  description.id = 'description';
  makeOrder.id = 'make-order';
  makeOrder.classList.add('btn');
  img.id = 'home-img';
  img.src = HomeImgResized;
  img.alt = 'Image of two coffee cups.';

  title.textContent = 'Hello ';
  spanTitle.textContent = 'Coffee!';
  description.textContent = `Start your day with us! Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Cupiditate, officia. Lorem ipsum dolor sit amet.`;
  makeOrder.textContent = 'Make Your Order';
  makeOrder.addEventListener('click', () => tabs.childNodes[1].click());

  title.appendChild(spanTitle);
  information.appendChild(title);
  information.appendChild(description);
  information.appendChild(makeOrder);
  container.appendChild(information);
  container.appendChild(img);
  content.appendChild(container);

  return container;
}
