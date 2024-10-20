window.onload = function () {
    load('footer.html', 'footer')




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
        if (window.scrollY > elements[0][i].offsetTop + (elements[0][i].offsetHeight/1.3)){
            elements.forEach(e =>{
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
