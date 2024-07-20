let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

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
    on: {
      slideChange: function () {
        const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
        paginationBullets.forEach((bullet, index) => {
          bullet.classList.toggle('swiper-pagination-bullet-active', index === swiper.realIndex);
        });
      }
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

// Add the handleSubmit function for form submission
function handleSubmit(event) {
  event.preventDefault();

  const scriptId = document.getElementById('scriptId').value;
  const scriptURL = `https://script.google.com/macros/s/${scriptId}/exec`;
  const form = document.forms['enrollForm'];

  // Show spinner immediately
  const spinner = document.getElementById('spinner');
  spinner.classList.add('show');

  fetch(scriptURL, { 
      method: 'POST', 
      body: new FormData(form) 
  })
  .then(response => {
      spinner.classList.remove('show'); // Hide spinner
      if (response.ok) {
          return response.text(); // Read response
      } else {
          return response.text().then(text => {
              throw new Error(text);
          });
      }
  })
  .then(data => {
      // Show the toast
      const toast = document.getElementById('toast');
      toast.classList.add('show');

      // Hide the toast after 1 second and redirect
      setTimeout(() => {
          toast.classList.remove('show');
          window.location.href = 'https://p1research.org/#home'; // Replace with your success page URL
      }, 1000); // Shortened time
  })
  .catch(error => {
      spinner.classList.remove('show'); // Hide spinner
      console.error('Error!', error.message);
      alert(`There was a problem with your form submission: ${error.message}`);
  });
}

document.getElementById('enrollForm').addEventListener('submit', handleSubmit);
