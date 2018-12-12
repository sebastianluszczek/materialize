document.addEventListener('DOMContentLoaded', function () {

    // sidenav initialization
    const sidenav_init = M.Sidenav.init(document.querySelectorAll('.sidenav'), {});

    // slider - carousel
    var carousel_init = M.Carousel.init(document.querySelectorAll('.carousel'), {
        fullWidth: true,
        indicators: true
    });

    // modal initialization
    const modal_init = M.Modal.init(document.querySelectorAll('.modal'), {});

    // modal initialization
    const tabs_init = M.Tabs.init(document.querySelectorAll('.tabs'), {});

    // select input initialization
    const select_init = M.FormSelect.init(document.querySelectorAll('select'), {});
});