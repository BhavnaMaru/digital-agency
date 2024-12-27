// slider

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 1,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation: true,
        autoplayTimeout: 2000,
        navigationText: ["", ""],
        pagination: true,
        autoplay: true,
        loop: true,
        dots: true,
        autoplayHoverPause: true
    });
});

// faq

document.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('[data-toggle]');

      togglers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
           const selector = e.currentTarget.dataset.toggle
           const block = document.querySelector(`${selector}`);
          if (e.currentTarget.classList.contains('active')) {
            block.style.maxHeight = '';
          } else {
            block.style.maxHeight = block.scrollHeight + 'px';
          }

           e.currentTarget.classList.toggle('active')
        })
      })
      })
