document.addEventListener('DOMContentLoaded', () => {

  fetch('header.html')
    .then(res => {
      if (!res.ok) throw new Error('Header failed to load');
      return res.text();
    })
    .then(data => {

      const mount = document.getElementById('header');

      if (!mount) {
        console.error('No #header element found in DOM');
        return;
      }

      mount.innerHTML = data;

      // IMPORTANT: scope everything inside mounted header
      const toggle = mount.querySelector('.menu-toggle');
      const nav = mount.querySelector('.nav-links');

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('active');
        });
      }

      // ACTIVE LINK FIX
      const links = mount.querySelectorAll('.nav-main a');

      let currentPage = window.location.pathname
        .split('/')
        .pop()
        .split('?')[0]
        .split('#')[0];

      if (!currentPage) currentPage = 'index.html';

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
          link.classList.add('active');
        }
      });

    })
    .catch(err => {
      console.error('HEADER ERROR:', err);
    });

});