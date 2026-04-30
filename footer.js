fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    const yearEl = document.querySelector('.year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });