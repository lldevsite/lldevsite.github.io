let showcase = ['rampollo.com', 'studio22mq.it', 'steagritech.it', 'coffeecultures.it', 'steagritech.it'];
let urls = ['https://ranpollo.com/', 'https://loryy9.github.io/studio_22mq/', 'https://www.steagritech.it/', 'https://coffeecultures.it/', 'https://www.steagritech.it/'];
let index = 2;

showcase = [
    {
        'name': 'rampollo.com',
        'url': 'https://ranpollo.com/',
        'type': 'E-commerce'
    },
    {
        'name': 'studio22mq.it',
        'url': 'https://loryy9.github.io/studio_22mq/',
        'type': 'Demo'
    },
    {
        'name': 'steagritech.it',
        'url': 'https://www.steagritech.it/',
        'type': 'Landing page'
    },
    {
        'name': 'coffeecultures.it',
        'url': 'https://coffeecultures.it/',
        'type': 'E-commerce'
    },
    {
        'name': 'steagritech.it',
        'url': 'https://www.steagritech.it/',
        'type': 'Landing page'
    }
];


window.onload = function () {
    load('./components/footer.html', 'footer');

    // document.getElementById('card-container').addEventListener('touchstart', function () {
    //     console.log('scrolle')
    //     document.getElementById('btn-right').click();
    // });

    document.getElementById('btn-right').addEventListener('click', function () {
        let c = document.getElementsByClassName('card');

        c[1].classList.remove('left-el');
        c[1].classList.add('left-left-el');
        c[1].classList.add('fadeout');

        c[4].classList.remove('right-right-el');
        c[4].classList.add('right-el');
        c[4].classList.add('fadein');

        c[3].classList.remove('right-el');
        c[3].classList.add('center-el');

        c[2].classList.add('left-el');
        c[2].classList.remove('center-el');

        c[4].addEventListener('animationend', function () {
            c[1].classList.remove('fadeout');
            c[4].classList.remove('fadein');
            c[0].remove();

            let toload = (index + 3) % showcase.length;
            index = (index + 1) % showcase.length;

            load('../components/card.html', 'card-container', { 'name': showcase[toload].name, 'class': 'right-right-el', 'url': showcase[toload].url, 'type': showcase[toload].type });
        });
    });

    document.getElementById('btn-left').addEventListener('click', function () {
        let c = document.getElementsByClassName('card');

        c[3].classList.remove('right-el');
        c[3].classList.add('right-right-el');
        c[3].classList.add('fadeout');

        c[0].classList.remove('left-left-el');
        c[0].classList.add('left-el');
        c[0].classList.add('fadein');

        c[1].classList.remove('left-el');
        c[1].classList.add('center-el');

        c[2].classList.add('right-el');
        c[2].classList.remove('center-el');

        c[0].addEventListener('animationend', function () {
            c[3].classList.remove('fadeout');
            c[0].classList.remove('fadein');
            c[4].remove();

            let toload = (index - 3 + showcase.length) % showcase.length;
            index = (index - 1 + showcase.length) % showcase.length;

            loadInFront('../components/card.html', 'card-container', { 'name': showcase[toload].name, 'class': 'left-left-el', 'url': showcase[toload].url, 'type': showcase[toload].type });
        });
    });
}

window.addEventListener('scroll', function () {

    let line = document.querySelectorAll('#path > path');
    let icon = document.querySelectorAll('#path > g');
    let textbox = document.getElementsByClassName('path-section');

    let elements = [
        textbox,
        icon,
        line
    ];

    for (let i = 0; i < elements[0].length; i++) {
        if (window.scrollY > elements[0][i].offsetTop + (elements[0][i].offsetHeight / 1.3)) {
            elements.forEach(e => {
                e[i].classList.add('appear-on-screen');
            })
        }
    }



    // if (window.scrollY > (document.getElementsByClassName('right')[0].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
    //     document.getElementsByClassName('right')[0].classList.add('appear-on-screen');
    // }
    // if (window.scrollY > (document.getElementsByClassName('left')[0].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
    //     document.getElementsByClassName('left')[0].classList.add('appear-on-screen');
    // }
    // if (window.scrollY > (document.getElementsByClassName('right')[1].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
    //     document.getElementsByClassName('right')[1].classList.add('appear-on-screen');
    // }
    // if (window.scrollY > (document.getElementsByClassName('left')[1].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
    //     document.getElementsByClassName('left')[1].classList.add('appear-on-screen');
    // }
});


