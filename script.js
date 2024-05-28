// Java-Script für das Burger- Menu

// Definierung einer Funktion
function initApp() {
    // Verknüpfung von Elementen
    // Variable "hamburgerBtn" wird verknüpft mit einem Element aus unserer
    // HTML-Datei mit der ID "burger-button"
    const hamburgerBtn = document.getElementById('burger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    // Definierung einer Funktion innerhalb der Funktion initApp()
    const toggleMenu = function () {
        // im Element mobileMenu innerhalb der Liste von Klassen
        // wechsel (toggle) zwischen den Klassen 'flex' und 'hidden'
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    // Ausführung der Child-Function (toggleMenu)
    // ADDEventListener = hinzufügen eines Zuhörers, welcher auf ein entsprechendes 'Event'
    // reagiert. Das Event in diesem Fall ist 'click'
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

// Ausführung der zuvor definierten Funktion
document.addEventListener('DOMContentLoaded', initApp)

// Java-Script für die Gallerie (Home-Section)

// Warte bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Initialisiere Variablen für Bildergalerie
    const slides = document.querySelectorAll(".home-slide"); // Alle Bilder sammeln
    const prevButton = document.querySelector(".home-prev"); // Vorheriger Button
    const nextButton = document.querySelector(".home-next"); // Nächster Button
    let currentSlide = 0; // Index des aktuellen Bildes

    // Funktion, um das aktuelle Bild anzuzeigen
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("home-current-image", "home-slide-animation");
        });

        slides[index].classList.add("home-current-image", "home-slide-animation");
    }

    // Funktion, um zum vorherigen Bild zu wechseln
    function showPreviousSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    // Funktion, um zum nächsten Bild zu wechseln
    function showNextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Event-Listener für vorherigen und nächsten Button
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Zeige das erste Bild an
    showSlide(currentSlide);
});

// ---------------------------> Jurassic Hive Gallery Slider <-------------------------------

// Java-Script für die Gallerie (Projekt1)

// Warte bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Initialisiere Variablen für Bildergalerie
    const slides = document.querySelectorAll(".projekt1-slide"); // Alle Bilder sammeln
    const prevButton = document.querySelector(".projekt1-prev"); // Vorheriger Button
    const nextButton = document.querySelector(".projekt1-next"); // Nächster Button
    let currentSlide = 0; // Index des aktuellen Bildes

    // Funktion, um das aktuelle Bild anzuzeigen
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("projekt1-current-image", "projekt1-slide-animation");
        });

        slides[index].classList.add("projekt1-current-image", "projekt1-slide-animation");
    }

    // Funktion, um zum vorherigen Bild zu wechseln
    function showPreviousSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    // Funktion, um zum nächsten Bild zu wechseln
    function showNextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Event-Listener für vorherigen und nächsten Button
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Zeige das erste Bild an
    showSlide(currentSlide);

    // Intersection Observer für das Video
    const jurassicRunthrough = document.getElementById('jurassic_runthrough');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                jurassicRunthrough.play();
            } else {
                jurassicRunthrough.pause();
                jurassicRunthrough.currentTime = 0;
            }
        });
    });

    observer.observe(jurassicRunthrough);
});

// ------------------>  Java-Script für die Gallerie (Persona)

// Warte bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Initialisiere Variablen für Bildergalerie
    const slides = document.querySelectorAll(".persona-slide"); // Alle Bilder sammeln
    const prevButton = document.querySelector(".persona-prev"); // Vorheriger Button
    const nextButton = document.querySelector(".persona-next"); // Nächster Button
    let currentSlide = 0; // Index des aktuellen Bildes

    // Funktion, um das aktuelle Bild anzuzeigen
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("persona-current-image", "persona-slide-animation");
        });

        slides[index].classList.add("persona-current-image", "persona-slide-animation");
    }

    // Funktion, um zum vorherigen Bild zu wechseln
    function showPreviousSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    // Funktion, um zum nächsten Bild zu wechseln
    function showNextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Event-Listener für vorherigen und nächsten Button
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Zeige das erste Bild an
    showSlide(currentSlide);

    // Intersection Observer für das Video
    const jurassicRunthrough = document.getElementById('jurassic_runthrough');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                jurassicRunthrough.play();
            } else {
                jurassicRunthrough.pause();
                jurassicRunthrough.currentTime = 0;
            }
        });
    });

    observer.observe(jurassicRunthrough);
});

// ----------------------> Projekt 2 (Bizzling) Gallerys <------------------

// Java-Script für die Gallerie (Projekt2 Bizzling)

// Warte bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Initialisiere Variablen für Bildergalerie
    const slides = document.querySelectorAll(".projekt2-slide"); // Alle Bilder sammeln
    const prevButton = document.querySelector(".projekt2-prev"); // Vorheriger Button
    const nextButton = document.querySelector(".projekt2-next"); // Nächster Button
    let currentSlide = 0; // Index des aktuellen Bildes

    // Funktion, um das aktuelle Bild anzuzeigen
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("projekt2-current-image", "projekt2-slide-animation");
        });

        slides[index].classList.add("projekt2-current-image", "projekt2-slide-animation");
    }

    // Funktion, um zum vorherigen Bild zu wechseln
    function showPreviousSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    // Funktion, um zum nächsten Bild zu wechseln
    function showNextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Event-Listener für vorherigen und nächsten Button
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Zeige das erste Bild an
    showSlide(currentSlide);

    // Intersection Observer für das Video
    const jurassicRunthrough = document.getElementById('bizling_runthrough');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                jurassicRunthrough.play();
            } else {
                jurassicRunthrough.pause();
                jurassicRunthrough.currentTime = 0;
            }
        });
    });
    observer.observe(jurassicRunthrough);
});

// ----------------------> Projekt 3 (MitVergnügen App) Gallery <------------------

// Java-Script für die Gallerie (Projekt3 MitVergnügen App)

// Warte bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Initialisiere Variablen für Bildergalerie
    const slides = document.querySelectorAll(".projekt3-slide"); // Alle Bilder sammeln
    const prevButton = document.querySelector(".projekt3-prev"); // Vorheriger Button
    const nextButton = document.querySelector(".projekt3-next"); // Nächster Button
    let currentSlide = 0; // Index des aktuellen Bildes

    // Funktion, um das aktuelle Bild anzuzeigen
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("projekt3-current-image", "projekt3-slide-animation");
        });

        slides[index].classList.add("projekt3-current-image", "projekt3-slide-animation");
    }

    // Funktion, um zum vorherigen Bild zu wechseln
    function showPreviousSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    // Funktion, um zum nächsten Bild zu wechseln
    function showNextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Event-Listener für vorherigen und nächsten Button
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Zeige das erste Bild an
    showSlide(currentSlide);

    // Intersection Observer für das Video
    const jurassicRunthrough = document.getElementById('jurassic_runthrough');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                jurassicRunthrough.play();
            } else {
                jurassicRunthrough.pause();
                jurassicRunthrough.currentTime = 0;
            }
        });
    });
    observer.observe(jurassicRunthrough);
});



// ------------------> Java-Script für read-more button (About)

var contentExpanded1 = false;
var contentExpanded2 = false;
var contentExpanded3 = false;
var contentExpanded4 = false;

function toggleContent1() {
    var content = document.getElementById('hiddenContent1');
    var toggleLink = document.querySelector('.toggle-link1');

    if (!content || !toggleLink) {
        return;
    }

    contentExpanded1 = !contentExpanded1;
    content.classList.toggle('expanded', contentExpanded1);
    toggleLink.textContent = contentExpanded1 ? '← show_less_' : '→ show_more_';

    // Führe die Scroll-Aktion nach Abschluss der Toggle-Animation aus
    setTimeout(function () {
        scrollToSection(contentExpanded1 ? 'navsec0' : 'aboutSection');
    }, 0);
}

function toggleContent2() {
    var content = document.getElementById('hiddenContent2');
    var toggleLink = document.querySelector('.toggle-link2');

    if (!content || !toggleLink) {
        return;
    }

    contentExpanded2 = !contentExpanded2;
    content.classList.toggle('expanded', contentExpanded2);
    toggleLink.textContent = contentExpanded2 ? '← show_less_' : '→ show_more_';

    // Führe die Scroll-Aktion nach Abschluss der Toggle-Animation aus
    setTimeout(function () {
        scrollToSection(contentExpanded2 ? 'navsec0' : 'workSection');
    }, 0);
}

function toggleContent3() {
    var content = document.getElementById('hiddenContent3');
    var toggleLink = document.querySelector('.toggle-link3');

    if (!content || !toggleLink) {
        return;
    }

    contentExpanded3 = !contentExpanded3;
    content.classList.toggle('expanded', contentExpanded3);
    toggleLink.textContent = contentExpanded3 ? '← show_less_' : '→ show_more_';

    // Führe die Scroll-Aktion nach Abschluss der Toggle-Animation aus
    setTimeout(function () {
        scrollToSection(contentExpanded3 ? 'navsec0' : 'workSection');
    }, 0);
}

function toggleContent4() {
    var content = document.getElementById('hiddenContent4');
    var toggleLink = document.querySelector('.toggle-link4');

    if (!content || !toggleLink) {
        return;
    }

    contentExpanded3 = !contentExpanded3;
    content.classList.toggle('expanded', contentExpanded3);
    toggleLink.textContent = contentExpanded3 ? '← show_less_' : '→ show_more_';

    // Führe die Scroll-Aktion nach Abschluss der Toggle-Animation aus
    setTimeout(function () {
        scrollToSection(contentExpanded3 ? 'navsec0' : 'workSection');
    }, 0);
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'instant' });
    }
}

// Toggle - Vollbildmodus
document.addEventListener('DOMContentLoaded', function () {
    var gallery = document.getElementById('projekt1-gallery');
    var slides = gallery.getElementsByClassName('projekt1-slide');
    var currentSlideIndex = 0;

    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
        currentSlideIndex = index;
    }

    function previousImage(event) {
        event.stopPropagation();
        if (currentSlideIndex > 0) {
            showSlide(currentSlideIndex - 1);
        } else {
            showSlide(slides.length - 1);
        }
    }

    function nextImage(event) {
        event.stopPropagation();
        if (currentSlideIndex < slides.length - 1) {
            showSlide(currentSlideIndex + 1);
        } else {
            showSlide(0);
        }
    }

    var prevButton = gallery.querySelector('.projekt1-prev');
    var nextButton = gallery.querySelector('.projekt1-next');

    prevButton.addEventListener('click', previousImage);
    nextButton.addEventListener('click', nextImage);
});

function toggleFullScreen(image) {
    var elem = image;

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

function previousImage(event) {
    event.stopPropagation();
    // Hier den Code für das Zurückwechseln zum vorherigen Bild einfügen
}

function nextImage(event) {
    event.stopPropagation();
    // Hier den Code für das Wechseln zum nächsten Bild einfügen
}

//  Swipe-Verhalten für Bildergalerien auf mobilen Endgeräten
document.addEventListener('DOMContentLoaded', function () {
    var gallery = document.getElementById('projekt1-gallery');
    var slides = gallery.getElementsByClassName('projekt1-slide');
    var currentSlideIndex = 0;
    var hammer = new Hammer(gallery);

    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
        currentSlideIndex = index;
    }

    function previousImage() {
        if (currentSlideIndex > 0) {
            showSlide(currentSlideIndex - 1);
        } else {
            showSlide(slides.length - 1);
        }
    }

    function nextImage() {
        if (currentSlideIndex < slides.length - 1) {
            showSlide(currentSlideIndex + 1);
        } else {
            showSlide(0);
        }
    }

    var prevButton = gallery.querySelector('.projekt1-prev');
    var nextButton = gallery.querySelector('.projekt1-next');

    prevButton.addEventListener('click', previousImage);
    nextButton.addEventListener('click', nextImage);

    // Swipe-Unterstützung hinzufügen
    hammer.on('swipeleft', nextImage);
    hammer.on('swiperight', previousImage);

    // Initialisiere die Anzeige des ersten Bildes
    showSlide(0);
});

// ------------- Scroll-Funktionen -----------------

document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.pageYOffset;
    // let isFooterVisible = false;

    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const desiredTop = viewportHeight * 0.0;
    const desiredBottom = viewportHeight * 0.9;

    const scrollElements = document.querySelectorAll('.scrollElement');
    const scrollElement2s = document.querySelectorAll('.scrollElement2');
    const backToWork = document.querySelector('.backtowork');
    const workSection = document.getElementById('work');
    const header = document.getElementById('header');
    // const footer = document.getElementById('footer');

    if (!header) {
        console.error('Header element not found');
    }
    if (!footer) {
        console.error('Footer element not found');
    }
    if (!workSection) {
        console.error('Work section element not found');
    }
    if (scrollElements.length === 0) {
        console.warn('No scrollElements found');
    }
    if (scrollElement2s.length === 0) {
        console.warn('No scrollElement2 elements found');
    }

    function updateElementVisibility(element, isElement2 = false) {
        const elementRect = element.getBoundingClientRect();
        const isVisible = (elementRect.top < desiredBottom && elementRect.bottom > desiredTop) || window.pageYOffset === 0;

        element.style.opacity = isVisible ? 1 : 0;

        if (isElement2) {
            element.style.transition = isVisible ? 'transform 0.8s ease' : 'transform 1.4s ease';
            element.style.transform = isVisible ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0.2)';
        }
    }

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;

        scrollElements.forEach(element => updateElementVisibility(element));
        scrollElement2s.forEach(element => updateElementVisibility(element, true));

        // Control header behavior
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else if (currentScrollPos > 0) {
            header.style.top = "-8vh";
        }

        // // // Control footer behavior
        // if (documentHeight <= viewportHeight) {
        //     // If the document height is less than or equal to viewport height,
        //     // show the footer by default
        //     footer.style.bottom = "0";
        //     isFooterVisible = true;
        // } else if (currentScrollPos + window.innerHeight >= documentHeight) {
        //     // If the user has scrolled to the bottom of the page, show the footer
        //     footer.style.bottom = "0";
        //     isFooterVisible = true;
        // } else if (prevScrollPos > currentScrollPos && isFooterVisible) {
        //     // If the user scrolls up and the footer is visible, hide it
        //     footer.style.bottom = "-8rem";
        //     isFooterVisible = false;
        // }

        // Show/hide "backtowork" button
        if (workSection) {
            backToWork.style.display = (prevScrollPos < currentScrollPos && currentScrollPos > workSection.offsetTop) ? 'flex' : 'none';
        }

        prevScrollPos = currentScrollPos;
    }

    // Initial call to handle the case when the page loads
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

//  Script für Videos werden nur abgespielt, wenn sie im sichtbaren bereich sind

document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer für alle Elemente mit der Klasse "vid"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    });

    // Alle Elemente mit der Klasse "vid" beobachten
    const videoElements = document.querySelectorAll('.vid');
    videoElements.forEach(videoElement => {
        observer.observe(videoElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if the device supports touch events
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');

    // Only add the hover event listeners if it's not a touch device
    if (!isTouchDevice) {
        submitBtn.addEventListener('mouseenter', function () {
            btnText.style.animation = 'slide-text 16s linear infinite'; // nur Text animieren
        });

        submitBtn.addEventListener('mouseleave', function () {
            btnText.style.animation = 'none';
        });
    } else {
        // Apply the animation by default on touch devices
        btnText.style.animation = 'slide-text 16s linear infinite';
    }
});

//  Script für Contact Formular E-Mail formspree
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Nachricht gesendet!');
            form.reset();
        } else {
            alert('Fehler beim Senden der Nachricht.');
        }
    }).catch(error => {
        alert('Fehler beim Senden der Nachricht.');
    });
});



















