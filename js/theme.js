(function ($) {
  "use strict";

  var nav_offset_top = $("header").height();
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".main_menu_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".main_menu_area").addClass("navbar_fixed");
        } else {
          $(".main_menu_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  /*----------------------------------------------------*/
  /*  Main Slider js
    /*----------------------------------------------------*/
  // function main_slider() {
  //   if ($("#main_slider").length) {
  //     $("#main_slider").revolution({
  //       sliderType: "standard",
  //       sliderLayout: "fullwidth",
  //       delay: 400000,
  //       disableProgressBar: "on",
  //       navigation: {
  //         onHoverStop: "off",
  //         touch: {
  //           touchenabled: "on"
  //         },
  //         arrows: {
  //           style: "normal",
  //           enable: false,
  //           hide_onmobile: true,
  //           hide_under: 992,
  //           hide_onleave: true,
  //           hide_delay: 200,
  //           hide_delay_mobile: 1200,
  //           left: {
  //             h_align: "left",
  //             v_align: "center",
  //             h_offset: 0,
  //             v_offset: 0
  //           },
  //           right: {
  //             h_align: "right",
  //             v_align: "center",
  //             h_offset: 0,
  //             v_offset: 0
  //           }
  //         },
  //         bullets: {
  //           enable: true,
  //           hide_onmobile: true,
  //           hide_under: 768,
  //           style: "hesperiden",
  //           hide_onleave: false,
  //           direction: "vertical",
  //           h_align: "left",
  //           v_align: "center",
  //           h_offset: 80,
  //           v_offset: 0,
  //           space: 10,
  //           tmp: ""
  //         }
  //       },
  //       responsiveLevels: [4096, 1320, 1199, 992, 767, 480],
  //       gridwidth: [1170, 1170, 960, 720, 700, 300],
  //       gridheight: [950, 950, 950, 700, 500, 500],
  //       lazyType: "smart",
  //       fallbacks: {
  //         simplifyAll: "off",
  //         nextSlideOnWindowFocus: "off",
  //         disableFocusListener: false
  //       }
  //     });
  //   }
  // }
  // main_slider();

  /*----------------------------------------------------*/
  /*  Testimonials Slider
    /*----------------------------------------------------*/
  // function testimoninals_carousel() {
  //   if ($(".testimonials_slider").length) {
  //     $(".testimonials_slider").owlCarousel({
  //       loop: true,
  //       margin: 130,
  //       items: 3,
  //       nav: false,
  //       autoplay: false,
  //       smartSpeed: 1500,
  //       dots: true,
  //       center: true,
  //       responsiveClass: true,
  //       responsive: {
  //         0: {
  //           items: 1,
  //           center: false,
  //           margin: 0
  //         },
  //         700: {
  //           items: 2,
  //           center: false,
  //           margin: 30
  //         },
  //         992: {
  //           items: 3,
  //           margin: 70
  //         },
  //         1200: {
  //           items: 3,
  //           margin: 130
  //         }
  //       }
  //     });
  //   }
  // }
  // testimoninals_carousel();

  /*----------------------------------------------------*/
  /*  Shap Slider
    /*----------------------------------------------------*/
  //  function shap_carousel() {
  //   if ($(".app_gallery").length) {
  //     $(".app_gallery").owlCarousel({
  //       loop: true,
  //       margin: 0,
  //       items: 1,
  //       nav: false,
  //       autoplay: true,
  //       autoplayTimeout: 4500,
  //       smartSpeed: 1500,
  //       dots: true,
  //       navSpeed: 100,
  //        mouseDrag: false,
  //       touchDrag: true,
  //       // dotsData: "&bull",
  //       // dotsData: true,
  //       responsiveClass: true,
  //       center: true,
  //       responsive: {
  //         0: {
  //           items: 1,
  //           autoHeight: true,
  //           mouseDrag: false,
  //           touchDrag: true
  //         },
  //         600: {
  //           items: 1,
  //           autoHeight: true,
  //           mouseDrag: false,
  //           touchDrag: true
  //         },
  //         1050: {
  //           items: 3,
  //           autoWidth: true
  //         }
  //       }

  //     });
  //   }
  // }
  // shap_carousel();
   function shap_carousel() {
    if ($(".app_gallery").length) {
      $(".app_gallery").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 1500,
        dots: true,
        navSpeed: 100,
        // dotsData: "&bull",
        // dotsData: true,
        responsiveClass: true,
        center: true

      });
    }
  }
  shap_carousel();

  /*----------------------------------------------------*/
  /*  Skill Bar
    /*----------------------------------------------------*/
  // function progressBarConfig() {
  //   var progressBar = $(".progress");
  //   if (progressBar.length) {
  //     progressBar.each(function () {
  //       var Self = $(this);
  //       Self.appear(function () {
  //         var progressValue = Self.data("value");

  //         Self.find(".progress-bar").animate({
  //             width: progressValue + "%"
  //           },
  //           1000
  //         );

  //         Self.find(".number").countTo({
  //           from: 0,
  //           to: progressValue,
  //           speed: 1000
  //         });
  //       });
  //     });
  //   }
  // }
  // progressBarConfig();

  // $(".counter").counterUp({
  //   delay: 10,
  //   time: 1000
  // });

  /*----------------------------------------------------*/
  /*  appcontent_isotope
    /*----------------------------------------------------*/
  // function home_gallery() {
  //   if ($(".ms_appcontent_inner").length) {
  //     // Activate isotope in container
  //     $(".ms_appcontent_inner").imagesLoaded(function () {
  //       $(".ms_appcontent_inner").isotope({
  //         itemSelector: ".ms_p_item",
  //         layoutMode: "masonry",
  //         percentPosition: true,
  //         columnWidth: 1
  //       });
  //     });
  //   }
  // }
  // home_gallery();

  /*----------------------------------------------------*/
  /*  appcontent js
    /*----------------------------------------------------*/
  // function appcontent_isotope() {
  //   if ($(".appcontent_filter ul li").length) {
  //     // Add isotope click function
  //     $(".appcontent_filter ul li").on("click", function () {
  //       $(".appcontent_filter ul li").removeClass("active");
  //       $(this).addClass("active");

  //       var selector = $(this).attr("data-filter");
  //       $(".ms_appcontent_inner").isotope({
  //         filter: selector,
  //         animationOptions: {
  //           duration: 450,
  //           easing: "linear",
  //           queue: false
  //         }
  //       });
  //       return false;
  //     });
  //   }
  // }

  // appcontent_isotope();

  // $(document).ready(function () {
  //   $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
  //     disableOn: 700,
  //     type: "iframe",
  //     mainClass: "mfp-fade",
  //     removalDelay: 160,
  //     preloader: false,

  //     fixedContentPos: false
  //   });
  // });

  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/

  if ($("#mapBox1").length) {
    var $lat = $("#mapBox1").data("lat");
    var $lon = $("#mapBox1").data("lon");
    var $zoom = $("#mapBox1").data("zoom");
    var $marker = $("#mapBox1").data("marker");
    var $info = $("#mapBox1").data("info");
    var $markerLat = $("#mapBox1").data("mlat");
    var $markerLon = $("#mapBox1").data("mlon");
    var map = new GMaps({
      el: "#mapBox1",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [{
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [{
            visibility: "simplified"
          },
          {
            hue: "#ff0000"
          }
        ]
      }]
    });

    map.addMarker({
      lat: $markerLat,
      lng: $markerLon,
      icon: $marker,
      infoWindow: {
        content: $info
      }
    });
  }
})(jQuery);

// $(".firststep_button").on("click", function () {
//   $(".firststep").toggleClass("opened");

//   if ($(".firststep").hasClass("opened")) {
//     console.log("ima klasu");
//     $(".firststep p").text(
//       "We aim to create user-friendly enviroment for an honest community governing and funding a network capable of paying individuals and businesses for work that adds value to this platform from participants all over the world. Teslafunds is launched in the interest of fair distribution. Miners from all over the world can join the network and mine using AMD or NVIDIA GPUs supporting the idea of unstoppable, decentralized, censorship-resistant, permission-less, unchangeable blockchains."
//     );
//     // $(".firststep").removeClass("opened");
//     $(".firststep_button").text("Read Less");
//   } else {
//     // $(".firststep").addClass("opened");
//     $(".firststep p").text(
//       "We aim to create user-friendly enviroment for an honest community governing and funding a network capable of paying individuals and businesses for work that adds value to this platform from participants all over the world."
//     );
//     $(".firststep_button").text("Read More");
//     console.log("nema klasu");
//   }
// });

// $(".smartgold_button").on("click", function () {
//   $(".smartgold").toggleClass("opened");

//   if ($(".smartgold").hasClass("opened")) {
//     console.log("ima klasu");
//     $(".smartgold p").text(
//       "By tapping into the transformative technology that blockchain is, we have created a user friendly, transparent, and secure platform where users can buy gold and diamonds from the comfort of their homes. In order to buy Gold and / or Diamond(s) from Goldiam platform a user will need to make request to the platform and make payment in Goldiam coins.The minimum amount of Gold that can be bought on the Goldiam platform is 1 g and for Diamond, the minimum is 0.35 ct.The user can withdraw Gold and Diamond(s) anytime he / she wants along with the security license shall be shipped to your home."
//     );
//     // $(".firststep").removeClass("opened");
//     $(".smartgold_button").text("Read Less");
//   } else {
//     // $(".firststep").addClass("opened");
//     $(".smartgold p").text(
//       "By tapping into the transformative technology that blockchain is, we have created a user friendly, transparent, and secure platform where users can buy gold and diamonds from the comfort of their homes."
//     );
//     $(".smartgold_button").text("Read More");
//     console.log("nema klasu");
//   }
// });

// $(".globeunion_button").on("click", function () {
//   $(".globeunion").toggleClass("opened");

//   if ($(".globeunion").hasClass("opened")) {
//     console.log("ima klasu");
//     $(".globeunion p").text(
//       "GlobeUnion is a cryptocurrency to fiat payment platform and a smart answer to money transfer. With our GlobeUnion platform we will be able to allow our users to send or receive Goldiam coins. So no matter in which part of the world you are, you can receive or send these coins to your relative everywhere.The receiver will be able to collect the coins or change them to fiat.This service will be international with the main aim to install Goldiam ATMs available worldwide for easy deposit and withdrawal for all our members, as well as provide a hardware wallet which will connect to the Goldiam platform as a secure and trusted way to keep the funds safe.Moreover, user can fix a amount to be sent on specific day in a month and send it to his / her family or anyone."
//     );
//     // $(".firststep").removeClass("opened");
//     $(".globeunion_button").text("Read Less");
//   } else {
//     // $(".firststep").addClass("opened");
//     $(".globeunion p").text(
//       "GlobeUnion is a cryptocurrency to fiat payment platform and a smart answer to money transfer. With our GlobeUnion platform we will be able to allow our users to send or receive Goldiam coins."
//     );
//     $(".globeunion_button").text("Read More");
//     console.log("nema klasu");
//   }
// });

// $(".goldiambox_button").on("click", function () {
//   $(".goldiambox").toggleClass("opened");

//   if ($(".goldiambox").hasClass("opened")) {
//     console.log("ima klasu");
//     $(".goldiambox p").text(
//       "GoldiamBox wallet gives users a incentive to invest. With the Goldiambox wallet users will be rewarded for holding Goldiam Coins. The amount of the Goldiambox rewards is generated by mining blocks and their mining rewards.Goldiam has fixed the reward for each block mined at 0.48 Goldiam Coins (GOL).Out of every block mined, the miner is rewarded with 0.32 GOL and 0.16 GOL is reserved in the Goldiambox wallet which will be then distributed automaticly among all the coin - holders and asset - holders proportionaly.GoldiamBox Wallet lets you earn coins by doing nothing. All you need to do is to hold the coins, Gold or Diamond(s)."
//     );
//     // $(".firststep").removeClass("opened");
//     $(".goldiambox_button").text("Read Less");
//   } else {
//     // $(".firststep").addClass("opened");
//     $(".goldiambox p").text(
//       "GoldiamBox wallet gives users a incentive to invest. With the Goldiambox wallet users will be rewarded for holding Goldiam Coins."
//     );
//     $(".goldiambox_button").text("Read More");
//     console.log("nema klasu");
//   }
// });

// $(".navbar-nav").children().on("click", function () {
//   event.preventDefault();
//   let elemName = $(this).attr("name");
//   console.log(elemName);
//   $('html, body').animate({
//     scrollTop: $(`#${elemName}`).offset().top
//   }, 1500);

// })

// $(".navbar-brand").on("click", function () {
//   $('html, body').animate({
//     scrollTop: $("#home").offset().top
//   }, 1500);
// })

// $(document).on('click', 'a[href^="#"]', function (event) {

//   $('html, body').animate({
//     scrollTop: $($.attr(this, 'href')).offset().top
//   }, 500);
// });