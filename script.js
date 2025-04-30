document.addEventListener('DOMContentLoaded', function() {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href')) || (window.location.pathname === '/' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Contact form handler (if present)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const successMsg = document.getElementById('successMessage');
      if (successMsg) {
        successMsg.style.display = 'block';
        contactForm.reset();
        setTimeout(function() {
          successMsg.style.display = 'none';
        }, 4000);
      }
    });
  }
});