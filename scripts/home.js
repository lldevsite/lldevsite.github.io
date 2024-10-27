let showcase = ['coffeecultures.it', 'steagritech.it', 'rampollo.com', 'coffeecultures.it', 'steagritech.it'];
let index = 2;

window.onload = function () {
    load('./components/footer.html', 'footer');


    // load cards
    for (let i = 0; i < 5; i++) {
        switch (i) {
            case 0:
                load('../components/card.html', 'card-container', { 'name': showcase[i], 'class': 'left-el transparent' });
                break;
            case 1:
                load('../components/card.html', 'card-container', { 'name': showcase[i], 'class': 'left-el' });
                break;
            case 2:
                load('../components/card.html', 'card-container', { 'name': showcase[i], 'class': '' });
                break;
            case 3:
                load('../components/card.html', 'card-container', { 'name': showcase[i], 'class': 'right-el' });
                break;
            case 4:
                load('../components/card.html', 'card-container', { 'name': showcase[i], 'class': 'right-el transparent' });
                break;
            default:
                break;
        }
    }

    document.getElementById('btn-right').addEventListener('click', function () {

        document.getElementsByClassName('card')[2].classList.add('left-el');
        document.getElementsByClassName('card')[3].classList.remove('right-el');

        document.getElementsByClassName('card')[4].classList.remove('transparent');
        document.getElementsByClassName('card')[4].classList.add('fadein');


        document.getElementsByClassName('card')[4].addEventListener('animationend', function () {
            document.getElementsByClassName('card')[4].classList.remove('fadein');
            document.getElementsByClassName('card')[1].classList.add('transparent');
            document.getElementsByClassName('card')[0].remove();

            let toload = (index + 3) % showcase.length;
            index = (index + 1) % showcase.length;

            console.log(toload + '   ' + index)


            load('../components/card.html', 'card-container', { 'name': showcase[toload], 'class': 'right-el transparent' });
        });


    });

    document.getElementById('btn-left').addEventListener('click', function () {

        document.getElementsByClassName('card')[2].classList.add('right-el');
        document.getElementsByClassName('card')[1].classList.remove('left-el');
        
        document.getElementsByClassName('card')[0].classList.remove('transparent');
        document.getElementsByClassName('card')[0].classList.add('fadein');
        
        document.getElementsByClassName('card')[0].addEventListener('animationend', function () {
            document.getElementsByClassName('card')[0].classList.remove('fadein');
            document.getElementsByClassName('card')[3].classList.add('transparent');
            document.getElementsByClassName('card')[4].remove();

            let toload = (index - 3 + showcase.length) % showcase.length;
            index = (index - 1 + showcase.length) % showcase.length;


            console.log(toload + '   ' + index)


            loadInFront('../components/card.html', 'card-container', { 'name': showcase[toload], 'class': 'left-el transparent' });
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


