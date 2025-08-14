// Efek typing untuk greeting
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.style.opacity = 1;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            element.style.borderRight = "none"; // hilangkan cursor
        }
    }
    typing();
}

// Pilih sapaan sesuai waktu
window.onload = function() {
    const hour = new Date().getHours();
    let greeting;
    if(hour < 12) {
        greeting = "☀️ Selamat pagi, halo semua!";
    } else if(hour < 18) {
        greeting = "🌤️ Selamat siang, halo semua!";
    } else {
        greeting = "🌙 Selamat malam, halo semua!";
    }

    const greetElement = document.getElementById("greeting");
    typeEffect(greetElement, greeting, 80);
};
