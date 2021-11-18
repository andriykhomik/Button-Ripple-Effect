const buttons= document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        const x = e.clientX;
        const y = e.clientY;
        const top = y - buttonTop;
        const left = x - buttonLeft;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = top + 'px';
        circle.style.left = left + 'px';
        this.appendChild(circle);

        setTimeout(()=> circle.remove(), 500);
    })
})

