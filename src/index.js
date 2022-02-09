import _, { create } from 'lodash'; //! Import lodash library.
import './style.css'; //! Import CSS file.
import Logo from './images/logo.png';
import Github from './images/github.png';
import { createHome } from './home/home.js';
import { createMenu } from './menu/menu';

function createTabs() {
  let tabs = ['Home', 'Menu', 'Contact'];
  let listedItems = [];

  for (let i = 0; i < tabs.length; i++) {
    const li = document.createElement('li');
    li.textContent = tabs[i];
    li.classList.add('tab');
    listedItems.push(li);
    li.addEventListener('click', () => createContent(i));
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
  ul.childNodes[0].click();

  header.appendChild(img);
  header.appendChild(ul);

  return header;
}

function createContent(i) {
  const content = document.querySelector('#content');
  const createFunctions = [createHome, createMenu];
  if (!content.firstChild) {
    content.replaceWith(createFunctions[i]());
  } else {
    content.replaceWith(createFunctions[i]());
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
