// Mobile Nav Toggle
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Booking Simulation
const bookingForm = document.querySelector('#booking-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dest = document.querySelector('#dest').value;
    const container = document.querySelector('.booking-container');
    container.innerHTML = `
        <div class="success-msg">
            <h2>Confirmed!</h2>
            <p>Your trip to <strong>${dest}</strong> is being prepared. Check your email!</p>
            <button onclick="location.reload()" class="btn-search" style="margin-top:15px">Book Another</button>
        </div>`;
});

// Contact Form Simulation
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.innerText = "Message Sent!";
    btn.style.background = "#27ae60";
    contactForm.reset();
    setTimeout(() => {
        btn.innerText = "Send Message";
        btn.style.background = "#ff5a5f";
    }, 3000);
});