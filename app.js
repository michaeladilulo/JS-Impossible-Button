const button = document.querySelector('button');

button.addEventListener('mouseover', function() {
    const h = Math.floor(Math.random() * window.innerHeight);
    const w = Math.floor(Math.random() * window.innerWidth);
    button.style.left = `${h}px`;
    button.style.top = `${w}px`;
});

button.addEventListener('click', function() {
    button.innerText = 'You got me!'
    document.body.style.backgroundColor = 'green';
})