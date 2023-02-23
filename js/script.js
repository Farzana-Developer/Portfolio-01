// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typedSpeed: 70,
    backSpeed:80,
});
const asked = document.querySelectorAll('.faq');
asked.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})