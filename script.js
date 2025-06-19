document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu   = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
});