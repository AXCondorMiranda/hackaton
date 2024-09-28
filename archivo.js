document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = "TEMA OSCURO";
toggleThemeBtn.style.position = "fixed";
toggleThemeBtn.style.bottom = "20px";
toggleThemeBtn.style.right = "50vw";
toggleThemeBtn.style.padding = "40px";
toggleThemeBtn.style.backgroundColor = "#333";
toggleThemeBtn.style.color = "#fff";
toggleThemeBtn.style.border = "none";
toggleThemeBtn.style.borderRadius = "5px";
toggleThemeBtn.style.cursor = "pointer";
document.body.appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const buttons = document.querySelectorAll('.options-container-about button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = `Visita mi perfil de ${this.textContent.trim()}`;
        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        tooltip.style.position = 'absolute';
        tooltip.style.top = `${rect.top - 30}px`;
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.padding = '5px 10px';
        tooltip.style.backgroundColor = '#333';
        tooltip.style.color = '#fff';
        tooltip.style.borderRadius = '5px';
    });

    button.addEventListener('mouseleave', function() {
        document.querySelector('.tooltip').remove();
    });
});
function typeWriter(text, element, delay = 30) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

const aboutMeTextElement = document.querySelector('.text-container-about p');

const aboutMeText = "Soy un desarrollador apasionado por la tecnología y la programación. Disfruto de los videojuegos, ir al gimnasio, investigar y explorar nuevas ideas conversando con inteligencia artificial. Mantengo un equilibrio entre mis intereses y el desarrollo de software para fomentar la creatividad y el aprendizaje continuo.";

window.onload = () => {
    typeWriter(aboutMeText, aboutMeTextElement);
};
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Formulario enviado con éxito');
        form.reset();
    } else {
        alert('Por favor, completa todos los campos');
    }
});

