// import { create } from 'lodash';
import './home.css';
import HomeImg from '../images/coffee.jpg';

export function createHome() {
  const content = document.querySelector('#content');
  const information = document.createElement('div');
  const title = document.createElement('h1');
  const spanTitle = document.createElement('span');
  const description = document.createElement('h3');
  const makeOrder = document.createElement('button');
  const img = document.createElement('img');

  information.id = 'information';
  title.id = 'title';
  description.id = 'description';
  makeOrder.id = 'make-order';
  makeOrder.classList.add('btn');
  img.id = 'home-img';
  img.src = HomeImg;
  img.alt = 'Image of two coffee cups.';

  title.textContent = 'Hello ';
  spanTitle.textContent = 'Coffee!';
  description.textContent = `Start your day with us! Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Cupiditate, officia. Lorem ipsum dolor sit amet.`;
  makeOrder.textContent = 'Make Your Order';

  title.appendChild(spanTitle);
  information.appendChild(title);
  information.appendChild(description);
  information.appendChild(makeOrder);
  content.appendChild(information);
  content.appendChild(img);
  return content;
}
