// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu   = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // 2. Hero slideshow (Home Page)
  const slides = document.querySelectorAll('.hero-bg');
  if (slides.length > 1) {
    let slideIndex = 0;
    slides.forEach((s, i) => s.style.opacity = i === 0 ? '0.3' : '0');
    setInterval(() => {
      slides[slideIndex].style.opacity = '0';
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].style.opacity = '0.3';
    }, 5000);
  }

  // 3. Quantity stepper (Product Detail Page)
  const qtyInput = document.getElementById('qty');
  const incBtn   = document.getElementById('inc');
  const decBtn   = document.getElementById('dec');
  if (qtyInput && incBtn && decBtn) {
    incBtn.addEventListener('click', () => qtyInput.stepUp());
    decBtn.addEventListener('click', () => qtyInput.stepDown());
  }

  // 4. Add to Cart & Order Now (Product Detail Page)
  let cartCount = 0;
  const addBtn   = document.querySelector('.product-detail-page .btn');
  const orderBtn = document.querySelector('.product-detail-page .btn-secondary');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      cartCount++;
      alert(`Added to cart. Total items: ${cartCount}`);
    });
  }
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      alert('Proceeding to order page...');
    });
  }

  // Event form validation (tanpa regex)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('eventForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      if (!this.fullName.value.trim())             valid = false; // 1
      const email = this.email.value;
      if (!email.includes('@') || !email.includes('.')) valid = false; // 2
      if (!this.birthDate.value)                   valid = false; // 3
      if (![...this.gender].some(r => r.checked))  valid = false; // 4
      if (!this.terms.checked)                     valid = false; // 5

      if (!valid) {
        alert('Please complete all fields correctly.');
      } else {
        alert('Registration submitted! Thank you.');
        this.reset();
      }
    });
  }
});
