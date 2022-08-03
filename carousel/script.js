const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

const fill = (dot) => {
    const progress = document.querySelector('.progress');

    for (s of progress.children) {
        console.log(s);
        s.style.cssText = 'background-color: #bbb;';
    }

    if (dot === 0) {
        one.style.cssText = 'background-color:#5a5a5a;'
    } else if (dot === 1) {
        two.style.cssText = 'background-color:#5a5a5a;'
    } else if (dot === 2) {
        three.style.cssText = 'background-color:#5a5a5a;'
    } else if (dot === 3) {
        four.style.cssText = 'background-color:#5a5a5a;'
    }
    
}

fill(0);

prev.addEventListener('click', () => {
    const slides = document.querySelector('.slides-group'); 
    const active = document.querySelector('.show');

    let listIndex = [...slides.children].indexOf(active) - 1;
    if (listIndex < 0) {
        listIndex = slides.children.length - 1;
    } else if (listIndex >= slides.children.length) {
        listIndex = 0;
    }
    slides.children[listIndex].classList.add('show');
    active.classList.remove('show');
    fill(listIndex);
});

next.addEventListener('click', () => {
    const slides = document.querySelector('.slides-group'); 
    const active = document.querySelector('.show');

    let listIndex = [...slides.children].indexOf(active) + 1;
    if (listIndex < 0) {
        listIndex = slides.children.length - 1;
    } else if (listIndex >= slides.children.length) {
        listIndex = 0;
    }
    slides.children[listIndex].classList.add('show');
    active.classList.remove('show');
    fill(listIndex);
});

one.addEventListener('click', () => {
    const slides = document.querySelector('.slides-group'); 
    const active = document.querySelector('.show');

    slides.children[0].classList.add('show');
    active.classList.remove('show');

    fill(0);
});

two.addEventListener('click', () => {
    const slides = document.querySelector('.slides-group'); 
    const active = document.querySelector('.show');

    slides.children[1].classList.add('show');
    active.classList.remove('show');

    fill(1);
});

three.addEventListener('click', () => {
    const slides = document.querySelector('.slides-group'); 
    const active = document.querySelector('.show');

    slides.children[2].classList.add('show');
    active.classList.remove('show');

    fill(2);
});

four.addEventListener('click', () => {
    const slides = document.querySelector('.slides-group'); 
    const active = document.querySelector('.show');

    slides.children[3].classList.add('show');
    active.classList.remove('show');

    fill(3);
});

const interval = 5000;
const start = () => {
    const slides = document.querySelector('.slides-group');

    setInterval(() => {
        let active = document.querySelector('.show');
        let listIndex = [...slides.children].indexOf(active) + 1;

        if (listIndex < 0) {
            listIndex = slides.children.length - 1;
        } else if (listIndex >= slides.children.length) {
            listIndex = 0;
        }

        slides.children[listIndex].classList.add('show');
        active.classList.remove('show');
        fill(listIndex)
    }, interval);
}

start();