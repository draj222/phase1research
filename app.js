let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar')

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


  // var swiper = new Swiper(".team-slider", {
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   loop:true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },

  //   on: {
  //     slideChange: function () {
  //         const paginationBullets = document.querySelectorAll('.team .swiper-pagination-bullet');
  //         paginationBullets.forEach((bullet, index) => {
  //             bullet.classList.toggle('swiper-pagination-bullet-active', index === swiper.activeIndex);
  //         });
  //     }
  // },

  //   breakpoints: {
  //       540: {
  //         slidesPerView: 1,
          
  //       },
  //       768: {
  //         slidesPerView: 2,
          
  //       },
  //       1024: {
  //         slidesPerView: 3,
          
  //       },
  //     },
  // });


  var swiper = new Swiper(".team-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        const paginationBullets = document.querySelectorAll('.team .swiper-pagination-bullet');
        paginationBullets.forEach((bullet, index) => {
          bullet.classList.toggle('swiper-pagination-bullet-active', index === swiper.realIndex);
        });
      }
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  

  const resumeInput = document.getElementById('resume');
  const fileLabel = document.getElementById('fileLabel');
  const resumeLabel = document.createElement('label');
  resumeLabel.setAttribute('for', 'resume');
  resumeLabel.id = 'resumeLabel';
  resumeLabel.innerText = 'Choose File';
  
  resumeInput.addEventListener('change', function() {
    const files = resumeInput.files;
    if (files.length > 0) {
      fileLabel.style.color = '#44a1e9';
      resumeLabel.classList.add('file-selected');
      fileLabel.innerText = files[0].name;
      resumeLabel.style.color = 'green';
      resumeLabel.innerText = 'File Uploaded';
    } else {
      fileLabel.style.color = 'red';
      resumeLabel.classList.remove('file-selected');
      resumeLabel.innerText = 'Choose File';
    }
  });
  
  fileLabel.parentNode.insertBefore(resumeLabel, resumeInput.nextSibling);