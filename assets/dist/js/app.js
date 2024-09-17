// On page load or when changing themes, best to add inline in `head` to avoid FOUC


var LampBtn=document.querySelector(".btn")
var lamp=document.querySelector("#lamp")
var LampBtn = document.querySelector(".btn");
var lamp = document.querySelector("#lamp");

lamp.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  LampBtn.style.top = "53%";
  setTimeout(() => {
    LampBtn.style.top = "49%";
  }, 200); 
  // Toggle dark mode
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
});