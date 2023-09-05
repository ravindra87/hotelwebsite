$(document).ready(function () {
  AOS.init();
  // Menu Button
  const $menu = $("#menu-btn");
  const $navbar = $(".header .navbar");

  $menu.click(function () {
    $menu.toggleClass("fa-times");
    $navbar.toggleClass("active");
  });

  $(window).scroll(function () {
    $menu.removeClass("fa-times");
    $navbar.removeClass("active");
  });

  // Smooth scrolling for navigation links
  $(".nav-link").click(function (event) {
    event.preventDefault();

    // Get the target section's ID from the href attribute
    const target = $(this).attr("href");

    // Scroll smoothly to the target section
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      100
    ); // 800 milliseconds for the animation duration

    // Remove the active class from all links
    $(".nav-link").removeClass("active");

    // Add the active class to the clicked link
    $(this).addClass("active");
  });

  // Home Slider
  const homeSwiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Room Slider
  const roomSwiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 75000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loopedSlides: 4,
    breakpoints: {
      0: {
        slidesPerView: 1,
        loopedSlides: 1,
      },
      768: {
        slidesPerView: 2,
        loopedSlides: 2,
      },
      991: {
        slidesPerView: 3,
        loopedSlides: 3,
      },
    },
  });

  // Gallery Slider
  const gallerySwiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
    },
  });

  // Review Slider
  const reviewSwiper = new Swiper(".review-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // FAQ Boxes

  $(".box h3").click(function () {
    const $box = $(this).parent(".box");
    $box.toggleClass("active");
    $(".box").$not($box).removeClass("active");
  });

  // text animation

  // Add this JavaScript code
  // end

  // Form Submission
  const $userForm = $("#userform");
  const $submittedDetails = $("#submittedDetails");
  const $submittedName = $("#submittedName");
  const $submittedEmail = $("#submittedEmail");
  const $submittedMessage = $("#submittedMessage");
  const $submitButton = $(".form-btn");

  $userForm.submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
      submitForm();
    }
  });

  function validateForm() {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (name === "") {
      alert("Please enter your name.");
      return false;
    }

    if (email === "") {
      alert("Please enter your email address.");
      return false;
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (message === "") {
      alert("Please enter your message.");
      return false;
    }

    return true;
  }

  function submitForm() {
    $submitButton.text("Submitting...");
    $submitButton.prop("disabled", true);
    $submissionNotification.show();

    // Simulate form submission success
    setTimeout(function () {
      // const name = $("#name").val();
      // const email = $("#email").val();
      // const message = $("#message").val();

      // $submittedName.text(name);
      // $submittedEmail.text(email);
      // $submittedMessage.text(message);

      $userForm[0].reset();
      $submissionNotification.hide();

      $submitButton.text("Submit");
      $submitButton.prop("disabled", false);
    }, 2000);
  }
});
