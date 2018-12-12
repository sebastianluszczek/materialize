document.addEventListener('DOMContentLoaded', function () {

    // sidenav initialization
    const sidenav_init = M.Sidenav.init(document.querySelectorAll('.sidenav'), {});

    // scrollspy initialization
    const scrollspy_init = M.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {
        scrollOfset: 100
    });


    // nav solid after scroll
    const main_nav = document.querySelector('.transparent');
    document.addEventListener('scroll', function () {
        if (window.scrollY <= 100) {
            main_nav.style = `background-color: rgba(40, 40, 100, ${window.scrollY/100}) !important;`
        } else if (window.scrollY > 100) {
            main_nav.style = `background-color: rgba(40, 40, 100, 1) !important;`
        }
    })
});