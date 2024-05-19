// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
const element_button1 = document.querySelector(".element_button1");
const element_button2 = document.querySelector(".element_button2");
const element_button3 = document.querySelector(".element_button3");
const element = document.querySelector(".element");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

// document.addEventListener('click', () => {
//   const cards = document.querySelectorAll('.element_button1 ');
//   cards.forEach(element_button1  => {
//       const randomAngle = Math.random() * 20+6;// Random angle between -15 and 15 degrees
//       element_button1.style.transform = `rotate(${randomAngle}deg)`;
//   });
// });

document.addEventListener('click', () => {
  const cards = document.querySelectorAll('.element_button1 ');
  cards.forEach(element_button1  => {
      const randomAngle = Math.random() * 360-180;// Random angle between -15 and 15 degrees
      element_button1.style.setProperty('--random-rotation', `${randomRotation}deg`);;
  });
});

document.addEventListener('click', () => {
  const cards = document.querySelectorAll('.element_button2 ');
  cards.forEach(element_button2  => {
      const randomAngle = Math.random() * 360-180;// Random angle between -15 and 15 degrees
      element_button2.style.setProperty('--random-rotation', `${randomRotation}deg`);;
  });
});

document.addEventListener('click', () => {
  const cards = document.querySelectorAll('.element_button3 ');
  cards.forEach(element_button3  => {
      const randomAngle = Math.random() * 360-180;// Random angle between -15 and 15 degrees
      element_button3.style.setProperty('--random-rotation', `${randomRotation}deg`);;
  });
});


