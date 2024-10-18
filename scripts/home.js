window.onload = function () {
    load('footer.html', 'footer')




}

window.addEventListener('scroll', function () {
    if (window.scrollY > (document.getElementsByClassName('right')[0].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
        document.getElementsByClassName('right')[0].classList.add('slide-from-right');
    }
    if (window.scrollY > (document.getElementsByClassName('left')[0].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
        document.getElementsByClassName('left')[0].classList.add('slide-from-left');
    }
    if (window.scrollY > (document.getElementsByClassName('right')[1].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
        document.getElementsByClassName('right')[1].classList.add('slide-from-right');
    }
    if (window.scrollY > (document.getElementsByClassName('left')[1].offsetTop + document.getElementsByClassName('right')[0].offsetHeight)) {
        document.getElementsByClassName('left')[1].classList.add('slide-from-left');
    }
});
