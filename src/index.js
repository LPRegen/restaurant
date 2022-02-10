import './style.css';
import Logo from './images/logo.png';
import Github from './images/github.png';
import { createHome } from './home/home.js';
import { createMenuItems } from './menu/menu.js';
import { createContact } from './contact/contact';

function createTabs() {
  let tabs = ['Home', 'Menu', 'Contact'];
  let listedItems = [];

  for (let i = 0; i < tabs.length; i++) {
    const li = document.createElement('li');
    li.textContent = tabs[i];
    li.classList.add('tab');
    li.addEventListener('click', () => createContent(i));
    listedItems.push(li);
  }

  return listedItems;
}

const selectTab = function (e) {
  if (e.target !== this) {
    for (const tab of this.childNodes) {
      if (e.target === tab) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
  }
};

function createHeader() {
  const header = document.createElement('header');
  const img = document.createElement('img');
  const ul = document.createElement('ul');

  img.src = Logo;
  img.id = 'logo';
  img.alt = 'Coffee beans logo.';
  ul.id = 'tabs';

  createTabs().forEach((tab) => ul.appendChild(tab));
  ul.addEventListener('click', selectTab);
  img.addEventListener('click', () => ul.childNodes[0].click());
  ul.childNodes[0].click();

  header.appendChild(img);
  header.appendChild(ul);

  return header;
}

function createContent(i) {
  const content = document.querySelector('#content');

  const createFunctions = [createHome, createMenuItems, createContact];
  if (!content.firstElementChild) {
    content.appendChild(createFunctions[i]());
  } else if (content.firstElementChild.dataset.id != i) {
    content.replaceChild(createFunctions[i](), content.firstElementChild);
  }
}

function createFooter() {
  const footer = document.createElement('footer');
  const anchor = document.createElement('a');
  const img = document.createElement('img');

  anchor.id = 'github';
  anchor.setAttribute('href', 'https://github.com/LPRegen');
  anchor.setAttribute('target', '_blank');
  anchor.textContent = 'LPRegen';
  img.src = Github;
  img.alt = 'Github icon';

  footer.appendChild(anchor);
  anchor.appendChild(img);

  return footer;
}

document.body.insertAdjacentElement('afterbegin', createHeader());
document.body.insertAdjacentElement('beforeend', createFooter());
