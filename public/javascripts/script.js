// ------------ DROPDOWN BUTTON ------------
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function (dropdown) {
        const dropdownBtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        dropdownBtn.addEventListener('mouseenter', function () {
            dropdownContent.classList.remove('hidden');
        });
        
        dropdown.addEventListener('mouseleave', function () {
            dropdownContent.classList.add('hidden');
        });
    });
});
// ------------ DROPDOWN BUTTON ------------

// ------------ CIRCULAR TEXT ------------
document.addEventListener("DOMContentLoaded", function () {
    const circularText = document.querySelector('.circular-text');
    const text = circularText.getAttribute('data-text');    
    const chars = text.split('');
    const angle = 360 / chars.length;

    chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.transform = `rotate(${angle * i}deg) translate(100px) rotate(${angle * i * -1}deg)`;
        circularText.appendChild(span);
    });
});

// ------------ CIRCULAR TEXT ------------
