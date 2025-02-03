gsap.from(".hero-heading", {
    y: 400,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    stagger: 0.15
})
gsap.from("#getstrtd", {
    y: 400,
    opacity: 0,
    duration: 2,
    delay: 1.5,

})
gsap.from("#sub-text", {
    y: 400,
    opacity: 0,
    duration: 2,
    delay: 1.5,

})

gsap.from(".animal1", {
    x: -1200,
    duration: 2,
    delay: 1,

})

gsap.from(".animal2", {
    x: 1200,
    duration: 2,
    delay: 1,
})
gsap.from("#dogbone", {
    y: 1200,
    x: 1200,
    duration: 2,
    delay: 1,
})
gsap.from("#dogpaws", {
    x: -600,
    y: -600,
    duration: 2,
    delay: 1,
})





















//Testimonials
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panels.forEach(p => p.classList.remove('active'));
        panel.classList.add('active');
    });
});
// contact message sent function 

function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}
// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the element with id "current-year"
document.getElementById('current-year').textContent = currentYear;
