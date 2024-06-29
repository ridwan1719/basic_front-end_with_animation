document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');

    for (let i = 0; i < 37; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.top = `${Math.random() * 100}vh`;
        leaf.style.left = `${-Math.random() * 100}vw`; // Start off-screen to the left
        leaf.style.transform = `rotate(${Math.random() * 360}deg)`; // Apply random initial rotation
        //leaf.style.filter = `blur(${Math.random() * 1.5}px)`
        container.appendChild(leaf);
    }
});
