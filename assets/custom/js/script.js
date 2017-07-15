(function ($) {
    'use strict';

    $(window).load(function () {

        /* Image cache */
        $('.gallery-item').each(function() {
            var src = $(this).attr('href');
            var img = document.createElement('img');

            img.src = src;
            $('#image-cache').append(img);
        });

    });

    $(document).ready(function () {

        /* Sticky Header */
        $(".sticky-header").sticky({topSpacing: 0});

        /* Slider Revolution */

        // Slider0 for John

        $("#slider0").revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            autoHeight: "on",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: false,
                    swipe_direction: "horizontal"
                },
                arrows: {
                    style: "hades",
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: true,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    }
                },
                bullets: {
                    style: "",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    space: 7,
                    h_offset: 0,
                    v_offset: 40,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                }
            },

            lazyType: "smart",
            disableProgressBar: "off",
            responsiveLevels: [4000, 1200, 992, 768, 320],
            gridwidth: [1130, 910, 580, 300],
            gridheight: [600, 800, 1024, 568]
        });


        // Slider1 for Jessica and Samantha

        $("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            autoHeight: "on",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: false,
                    swipe_direction: "horizontal"
                },
                bullets: {
                    style: "",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    space: 7,
                    h_offset: 0,
                    v_offset: 40,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                }
            },

            lazyType: "smart",
            disableProgressBar: "off",
            responsiveLevels: [4000, 1200, 992, 768, 320],
            gridwidth: [1130, 910, 580, 300],
            gridheight: [600, 800, 1024, 568]
        });

        /* Preloader */
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

        /* Animated Counter */
        $('.count-container span').counterUp({
            delay: 10, // the delay time in ms
            time: 3000 // the speed time in ms
        });

        /* Magnific Popup */
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /* Progress Tracker */
        (function () {
            $('body').progressTracker({

                // Allows for navigating between content sections
                linking: true,

                // "constant" = always visiable
                // "hover" = shows on mouse hover
                tooltip: "hover",

                // The number specified is added to the default value at which the tracker changes to the next section.
                positiveTolerance: 0,

                // The number specified is subtracted from the default value at which the tracker changes to the next section.
                negativeTolerance: 60,

                // Only displays the progress tracker when the user is between the top of the first section and the bottom of the last;
                // It is only shown when the tracker sections are in view.
                // Specify false if you want the tracker to always show.
                displayWhenActive: false,

                // Specify the value (in pixels) that you wish the progress tracker to be hidden when it is below that.
                disableBelow: 0,

                // Specifies what the plugin takes into account when deciding when to switch to the next section.
                // "tracker" or "viewport"
                tracking: "viewport"

            });

            // Register custom scrollTop
            $('.progress-tracker ul li a.pt-circle').off('click').on('click', function(e) {
                softScroll(this, e);
            });

        })();

        /* Soft Scroll */
        (function () {
            $('.nav a, .menu-item a').click(function (e) {
                softScroll(this, e);

                window.setTimeout(function() {
                    classie.remove(document.body, 'show-menu');
                }, 500);
                return false;
            });
            $('.scrollTop a').scrollTop();
        })();

        /* Off-Canvas Menu */
        (function () {

            var bodyEl = document.body,
                content = document.querySelector('.content-wrap'),
                openbtn = document.getElementById('open-button'),
                closebtn = document.getElementById('close-button');

            function init() {
                initEvents();
            }

            function initEvents() {
                openbtn.addEventListener('click', toggleMenu);
                if (closebtn) {
                    closebtn.addEventListener('click', toggleMenu);
                }

                // close the menu element if the target it´s not the menu element or one of its descendants..
                content.addEventListener('click', function (ev) {
                    var target = ev.target;
                    if (classie.hasClass(bodyEl, 'show-menu') && target !== openbtn) {
                        toggleMenu();
                    }
                });
            }

            function toggleMenu() {
                $( bodyEl ).toggleClass( 'show-menu' );
            }

            init();

        })();

        /* Isotope Portfolio */
        (function () {
            var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-sizer'
                }
            });

            grid.imagesLoaded(function () {
                grid.isotope();
            });

            grid.isotope({filter: '*'});

            // filter items on button click
            $('#isotope-filters').on('click', 'a', function () {
                var filterValue = $(this).attr('data-filter');
                grid.isotope({filter: filterValue});
            });

        })();

        /* Back to top */
        (function () {
            $("#back-top").hide();

            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        })();

        /* Circle Progress */
        (function () {
            function animateElements() {
                $('.progressbar').each(function () {
                    var elementPos = $(this).offset().top;
                    var topOfWindow = $(window).scrollTop();
                    var percent = $(this).find('.circle').attr('data-percent');
                    var percentage = parseInt(percent, 10) / parseInt(100, 10);
                    var animate = $(this).data('animate');
                    if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                        $(this).data('animate', true);
                        $(this).find('.circle').circleProgress({
                            startAngle: -Math.PI / 2,
                            value: percent / 100,
                            thickness: 3,
                            fill: {
                                color: '#E84855'
                            }
                        }).on('circle-animation-progress', function (event, progress, stepValue) {
                            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                        }).stop();
                    }
                });
            }

            // Show animated elements
            animateElements();
            $(window).scroll(animateElements);
        })();

        /* Stellar Parallax */
        (function () {
            var stellarActivated = false;

            function react_to_window() {
                if ($(window).width() <= 1024) {
                    if (stellarActivated == true) {
                        $(window).data('plugin_stellar').destroy();
                        stellarActivated = false;
                    }
                } else {
                    if (stellarActivated == false) {

                        $.stellar({
                            horizontalScrolling: false,
                            responsive: true,
                            horizontalOffset: 0,
                            verticalOffset: 0,
                            scrollProperty: 'scroll',
                            parallaxBackgrounds: true
                        });

                        $(window).data('plugin_stellar').init();
                        stellarActivated = true;
                    }
                }
            }

            $(window).resize(function () {
                react_to_window();
            });

            react_to_window()

        })();

        /* Contact Form */
        (function () {
            // Get the form.
            var form = $('#ajax-contact');

            // Get the messages div.
            var formMessages = $('#form-messages');

            // Set up an event listener for the contact form.
            $(form).submit(function (e) {
                // Stop the browser from submitting the form.
                e.preventDefault();

                // Serialize the form data.
                var formData = $(form).serialize();

                // Submit the form using AJAX.
                $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: formData
                    })
                    .done(function (response) {
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass('alert alert-danger');
                        $(formMessages).addClass('alert alert-success');

                        // Set the message text.
                        $(formMessages).text(response);

                        // Clear the form.
                        $('#name').val('');
                        $('#email').val('');
                        $('#message').val('');
                    })
                    .fail(function (data) {
                        // Make sure that the formMessages div has the 'error' class.
                        $(formMessages).removeClass('alert alert-success');
                        $(formMessages).addClass('alert alert-danger');

                        // Set the message text.
                        if (data.responseText !== '') {
                            $(formMessages).text(data.responseText);
                        } else {
                            $(formMessages).text('Oops! An error occured and your message could not be sent.');
                        }
                    });
            });

        })();

        /* Google map */
        (function () {
            var gmapIsReady = false;

            $('.gm-toggle-link').click(function () {
                if (!gmapIsReady) {
                    initGmap();
                }
                $('#gm-panel').slideToggle('slow');
            });


            function initGmap() {
                gmapIsReady = true;

                // Create an array of styles.
                var styles = [
                    {
                        stylers: [
                            {saturation: -100}
                        ]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [
                            {lightness: 100},
                            {visibility: "simplified"}
                        ]
                    }, {
                        featureType: "road",
                        elementType: "labels",
                        stylers: [
                            {visibility: "off"}
                        ]
                    }
                ];

                // Create a new StyledMapType object, passing it the array of styles,
                // as well as the name to be displayed on the map type control.
                var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

                // Create a map object, and include the MapTypeId to add
                // to the map type control.
                var $latlng = new google.maps.LatLng(52.5075419, 13.4261419),
                    $mapOptions = {
                        zoom: 13,
                        center: $latlng,
                        panControl: false,
                        zoomControl: true,
                        scaleControl: false,
                        mapTypeControl: false,
                        scrollwheel: false,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                        }
                    };
                var map = new google.maps.Map(document.getElementById('google-map'), $mapOptions);

                google.maps.event.trigger(map, 'resize');

                //Associate the styled map with the MapTypeId and set it to display.
                map.mapTypes.set('map_style', styledMap);
                map.setMapTypeId('map_style');

                var marker = new google.maps.Marker({
                    position: $latlng,
                    map: map,
                    title: ""
                });
            }

        })();

        /* Flickr feed */
        //jQuery('#basicuse').jflickrfeed({
        //    limit: 4,
        //    qstrings: {
        //        id: '32532032@N06'
        //    },
        //    itemTemplate: '<li>' +
        //    '<a href="{{image_b}}"><img src="{{image_s}}" class="img-rounded" alt="{{title}}" /></a>' +
        //    '</li>'
        //});

    });

    // Soft scroll
    var softScroll = function(target, event) {
        event.preventDefault();
        var targetNavElem = $(target).attr('href');
        if (targetNavElem[0] != '#') {
            window.open(targetNavElem);
            return false;
        }

        var scrollSpeed = 400
        var scrollOvershoot = 10

        var targetScrollPos = $(targetNavElem).offset().top - $('header .mp-nav').height() + 40;

        if (window.pageYOffset > targetScrollPos) {
            $('html, body').animate({
                scrollTop: targetScrollPos - scrollOvershoot
            }, scrollSpeed);
        } else {
            $('html, body').animate({
                scrollTop: targetScrollPos + scrollOvershoot
            }, scrollSpeed);
        }

        $('html, body').animate({
            scrollTop: targetScrollPos
        }, 100);
    };

    /* Google Analytics */
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {(i[r].q = i[r].q || []).push(arguments)};
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-40696437-12', 'auto');
    ga('send', 'pageview');

})(jQuery);
