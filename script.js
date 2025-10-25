// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Carrossel de depoimentos
let index = 0;
const depoimentos = document.querySelectorAll('.depoimento');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function mostrarDepoimento(i) {
  depoimentos.forEach(dep => dep.classList.remove('active'));
  depoimentos[i].classList.add('active');
}

next.addEventListener('click', () => {
  index = (index + 1) % depoimentos.length;
  mostrarDepoimento(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + depoimentos.length) % depoimentos.length;
  mostrarDepoimento(index);
});
