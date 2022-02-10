import './contact.css';
import ImgAbout from '../images/lisa-fotios.jpg';

export function createContact() {
  const container = document.querySelector('#content');

  const contact = document.createElement('div');
  const img = document.createElement('img');
  const information = document.createElement('div');
  const header2 = document.createElement('h2');
  const aboutUs = document.createElement('p');
  const header3 = document.createElement('h3');
  const address = document.createElement('p');
  const phone = document.createElement('p');
  const email = document.createElement('p');
  container.dataset.id = '2';
  contact.id = 'contact';
  img.id = 'img-about';
  img.src = ImgAbout;
  img.alt = 'Coffe shop image.';
  information.id = 'information';
  header2.id = 'title';
  aboutUs.id = 'about-us';
  address.id = 'address';
  phone.id = 'phone';
  email.id = 'email';

  header2.textContent = 'About Us';
  aboutUs.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
  architecto, et ad harum, odio dolores nobis, nostrum nisi itaque
  recusandae sunt delectus corrupti numquam quam? Lorem ipsum dolor
  sit, amet consectetur adipisicing elit. Molestias ullam accusantium
  nostrum rem libero error?`;
  header3.textContent = 'Contact';
  address.textContent = 'Av. Colón 1420, Córdoba, Argentina.';
  phone.textContent = '+49 941 99999';
  email.textContent = 'fakeemail@gmail.com';

  information.append(header2, aboutUs, header3, address, phone, email);
  contact.append(img, information);

  return contact;
}
