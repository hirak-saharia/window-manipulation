

Project: Bankist Website

 1. How the DOM really works  > Very Important
 2. Selecting, Creating, and Deleting Elements > Very Important
 3. Syles, Attributes and Classes > Very Important
 4. Implementing Smooth Scrolling > Important
 5. Types of Events and Event Handlers 
 6. Event Propagation: Bubling and Capturing > Very Important
 7. Event Propagation in Practice > Very Important
 8. Even Delegation: Implementing Page Navigation > Very Important
 9. DOM Traversing > Very Important
 10. Buliding a Tabbes Component > Very Important
 11. Passing Arguments to Event Handlers > Important
 12. Implementing a Sticky Navigation: The Scroll Event  > Important
 13. A better way: The Intersection Observer API > Important
 14. Revealing Elements on Scroll
 15. Lazy Loading Images
 16. Buliding a Slider Component: Part 1 > Very Important
 17. Buliding a Slider Component: Part 2 > Very Important
 18. Lifecycle DOM Events
 19. Efficient Script Loading: defer and async > Very Important



 1. ? How the DOM really works:
    - Allow us to make JS interact with the browser,
    - We can write JS to create, modify and delete HTML elements, 
    - Set styles, classes and attributes, and listen and respond to events,
    - DOM tree is generated from an HTML document, which we can then interact with,
    - DOM is very complex API that contains lots of methods and properties to interact with the DOM tree.
        - .querySelector() / .addEventListener() / .createElement() / .innerHTML / .textContent / .children / etc....


 2. Selecting, Creating, and Deleting Elements: 
    - // Selecting elements
        console.log(document.documentElement);
        console.log(document.head);
        console.log(document.body);

        document.querySelector('.header');
        const allSections = document.querySelectorAll('.section');
        console.log(allSections);

        document.getElementById('section--1');
        const allButtons = document.getElementsByTagName('button');
        console.log(allButtons);

        console.log(document.getElementsByClassName('btn'));

    - // Creating elements
        - // Creating and Inserting elements
            // .insertAdjacentHTML
            const message = document.createElement('div');
            message.classList.add('cookie-message');
            message.textContent =
            'We use cookies for improved functionality and analytics.';
            message.innerHTML =
            'We use cookies for improved functionality and analytics. <button class= "btn btn--close-cookie"> Got it! </button>';
            // header.prepend(message); // Prepending basically adds the element as the first child of this element
            header.append(message); // we can also add as a last child
            // header.append(message.cloneNode(true));

            // header.before(message);
            // header.after(message);

            // Delete element
            document
            .querySelector('.btn--close-cookie')
            .addEventListener('click', function () {
                message.remove();
                // to remove child element but first select the parent element
                message.parentElement.removeChild(message); // DOM traversing
            });

3. Syles, Attributes and Classes:
    - // Styles
            message.style.backgroundColor = '#37383d';
            message.style.width = '120%';

            console.log(message.style.color);
            console.log(message.style.backgroundColor);

            console.log(getComputedStyle(message).height);
            console.log(getComputedStyle(message).color);

            message.style.height =
            Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

            document.documentElement.style.setProperty('--color-primary', 'orangered'); // seting custom property color

            // Attributes
            const logo = document.querySelector('.nav__logo');
            console.log(logo.alt);
            console.log(logo.className);

            logo.alt = 'Beautiful minimalist logo';
            // Non-standard
            console.log(logo.designer);
            console.log(logo.getAttribute('designer'));
            logo.setAttribute('company', 'Bankist');

            console.log(logo.src);
            console.log(logo.getAttribute('src'));

            const link = document.querySelector('.nav__link--btn');
            console.log(link.href);
            console.log(link.getAttribute('href'));

            // Data attributes
            console.log(logo.dataset.versionNumber);

            // Classes
            logo.classList.add('c', 'j');
            logo.classList.remove('c', 'j');
            logo.classList.toggle('c');
            logo.classList.contains('c'); // not icludes

            // dont use
            logo.className = 'jonas';




4. Implementing Smooth Scrolling:
    -   const btnScrollTo = document.querySelector('.btn--scroll-to');
        const section1 = document.querySelector('#section--1');

        btnScrollTo.addEventListener('click', function (e) {
        const s1coords = section1.getBoundingClientRect();
        console.log(s1coords);

        console.log(e.target.getBoundingClientRect());

        console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

        console.log(
            'height/width viewport',
            document.documentElement.clientHeight,
            document.documentElement.clientWidth
        );

        // Scrolling - current position + current scroll
        //   window.scrollTo(
        //     s1coords.left + window.pageXOffset,
        //     s1coords.top + window.pageYOffset
        //   );

        //   window.scrollTo({
        //     left: s1coords.left + window.pageXOffset,
        //     top: s1coords.top + window.pageYOffset,
        //     behavior: 'smooth',
        //   });

        // Modern way to scroll - works on all modern browsers
        section1.scrollIntoView({ behavior: 'smooth' });
        });


5. Types of Events and Event Handlers:
    - So, an event is basically a signal that is generated by a certain dumb node and a signal means that something has happened, for example, a click somewhere or the mouse moving, or the user triggering the full screen mode and really anything of importance that happens on our webpage, generates an event.

    // Mouseenter event
    const h1 = document.querySelector('h1');

    const alertH1 = function (e) {
    alert('addEventListener: Greet! You are reading the heading :D');

    //   h1.removeEventListener('mouseenter', alertH1);
    }; // modern way

    h1.addEventListener('mouseenter', alertH1);

    setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

    // h1.onmouseenter = function (e) {
    //   alert('addEventListener: Greet! You are reading the heading :D');
    // }; // old ways


6. Event Propagation: Bubling and Capturing: 
    - So called capturing phase and a bubbling phase.
    - By default, events can only be handled in the target, and in the Bubbling phase. However, we can also set up EventListener in the Capturing Phase. 

        // Attaching the EventHandlers to the navigation link and also all of its parent elements. Then, as we click this link, we will give all these elements random background colors, and this will then allow us to visualize exactly how event bubbling is happening. rgb(255,255,255)

            const randomInt = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);
            const randomColor = () =>
            `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
            // console.log(randomColor(0, 255));
            document.querySelector('.nav__link').addEventListener('click', function (e) {
            //   console.log('LINK');
            this.style.backgroundColor = randomColor();
            console.log('LINK', e.target, e.currentTarget);
            console.log(e.currentTarget === this);

            // Stop propagation
            //   e.stopPropagation();
            });

            // parent element
            document.querySelector('.nav__links').addEventListener('click', function (e) {
            //   console.log('LINK');
            this.style.backgroundColor = randomColor();
            console.log('CONTAINER', e.target, e.currentTarget);
            });

            document.querySelector('.nav').addEventListener('click', function (e) {
            //   console.log('LINK');
            this.style.backgroundColor = randomColor();
            console.log('NAV', e.target, e.currentTarget);
            });



 8. Even Delegation: Implementing Page Navigation: 
    - In event delegation, we use the fact that events bubble up. And we do that by putting the eventListener on a common parent of all the elements that we are interested in.

    document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        // console.log('LINK');
        const id = this.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
    }); */ // --> this forEach is not efficient when we have 1000, or 10000 elements that will impact performance.

    // So, we will need to implement better solution by using events delegation to handle multiple elements---------------techinques--->>>>
    //1. Add event listener to common parent element
    //2. Determine what common elelent originated the event

    document.querySelector('.nav__links').addEventListener('click', function (e) {
    //   console.log(e.target);
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        // console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        // console.log('LINK');
    }
    });



9. DOM Traversing : 
    -Dom traversing is basically walking through the Dom. Which means that we can select an element based on another element. And this is very important because sometimes we need to select elements relative to a certain other element. For example, a direct child or a direct parent element. Or sometimes we don't even know the structure of the Dom at runtime. And in all these cases, we need Dom traversing.
     - Example > And so let's now work with this h1 element here, and from here we're gonna go downwards, upwards and also sideways.

        const h1 = document.querySelector('h1');

        // going downwards: selecting child element
        console.log(h1.querySelectorAll('.highlight'));
        console.log(h1.childNodes); //direct children
        console.log(h1.children); //direct children - gives live html collection
        h1.firstElementChild.style.color = 'white';
        h1.lastElementChild.style.color = 'orangered';

        // going upwards: selecting parents
        console.log(h1.parentNode);
        console.log(h1.parentElement);

        // So let's say that on the page, we had multiple headers so multiple elements with a class of header, but for some reason we only wanted to find the one that is a parent element of h1. So of all h1 element here. And so for that, we can use closest.
        h1.closest('header').style.background = 'var(--gradient-secondary)';

        h1.closest('h1').style.background = 'var(--gradient-primary)';

        // Going sideways: selecting siblings
        console.log(h1.previousElementSibling);
        console.log(h1.nextElementSibling);

        console.log(h1.previousSibling);
        console.log(h1.nextSibling);

        // let's say that we wanted to change some style to all the siblings but accept the element itself.
        console.log(h1.parentElement.children);
        [...h1.parentElement.children].forEach(function (el) {
        if (el !== h1) el.style.transform = 'scale(0.5)';
        });


11. Passing Arguments to Event Handlers:
    - Let's now create a nice effect on our page navigation, where all the links fade out when we hover over one of them, except for the link that we actually hovered over. And this will teach us something really valuable, which is how to pass arguments into event handler functions.

     // Menu fade animation - Passing Arguments to Event handlers
        nav.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('nav__link')) {
            const link = e.target;
            const siblings = link.closest('.nav').querySelectorAll('.nav__link');
            const logo = link.closest('.nav').querySelector('img');

            siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;
            });
            logo.style.opacity = 0.5;
        }
        });

        nav.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('nav__link')) {
            const link = e.target;
            const siblings = link.closest('.nav').querySelectorAll('.nav__link');
            const logo = link.closest('.nav').querySelector('img');

            siblings.forEach(el => {
            if (el !== link) el.style.opacity = 1;
            });
            logo.style.opacity = 1;
        }
        });

        - Refactoring the code structure ----------using bind() method and this function
        const handleHover = function (e) {
            // console.log(this, e.currentTarget);
            if (e.target.classList.contains('nav__link')) {
                const link = e.target;
                const siblings = link.closest('.nav').querySelectorAll('.nav__link');
                const logo = link.closest('.nav').querySelector('img');

                siblings.forEach(el => {
                if (el !== link) el.style.opacity = this;
                });
                logo.style.opacity = this;
            }
            };

        // Passing an "argument" into handler
        nav.addEventListener('mouseover', handleHover.bind(0.5));
        nav.addEventListener('mouseout', handleHover.bind(1));


12. Implementing a Sticky Navigation: The Scroll Event
    - The navigation bar becomes attached to the top of the page after we scroll to a certain point.
    - So, as we scroll down, once we then reach a certain point, the menu bar here becomes attached to the top of the page.

    // Sticky Navigation
    const initialCoords = section1.getBoundingClientRect();
    console.log(initialCoords);

    window.addEventListener('scroll', function () {
    console.log(window.scrollY);

    if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
    });

13. A better way: The Intersection Observer API:
    - Lets now implement the same sticky navigation using the new  intersection observer API.
    - This API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.
    - const initialCoords = section1.getBoundingClientRect();
    console.log(initialCoords);

    window.addEventListener('scroll', function () {
    console.log(window.scrollY);

    if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
    });

    */
    // Sticky navigation: Intersection Observer API
    // const obsCallback = function (entries, observe) {
    //   entries.forEach(entry => {
    //     console.log(entry);
    //   });
    // };
    // const obsOptions = {
    //   root: null,
    //   threshold: [0, 0.2],
    // };

    // const observer = new IntersectionObserver(obsCallback, obsOptions);
    // observer.observe(section1);

    const header = document.querySelector('.header');
    const navHeight = nav.getBoundingClientRect().height;
    console.log(navHeight);

    const stickyNav = function (entries) {
    const [entry] = entries;
    //   console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
    };
    const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
    });
    headerObserver.observe(header);


14. Revealing Elements on Scroll: 
    -  Reveal elements as we scroll close to them using the Intersection obeserver API
    - add > section--hidden from css into the index.html > section1, section2, section3 and section3
    - Now remove this classes as we approach of these sections.
    - Since, we already looping over all sections, it would probably be a better idea to add the class section--hidden in the html also using JavaScript, not do it manually in html, instead, implement it in JavaScript. 

    const allSections = document.querySelectorAll('.section');

    const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
    });

    allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
    });


15. Lazy Loading Images: 
    - Performance is very important when building any website
    - And images have by far the biggest impact on page loading.
    - So, images sould be optimized on any page.
    - This issue can be resolved by Lazy loaging
    - So, the main ingredient to this lazy loading strategy is that we have a very low resolution image, which is really small and which is loaded, right in the beginning.
    - remove the "lazy-img" from img class in html for a second to see the actual image
    - again put it back
    const imgTargets = document.querySelectorAll('img[data-src]');
    // console.log(imgTargets);

    const loadImg = function (entries, observer) {
    const [entry] = entries;
    //   console.log(entry);

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
    });

    imgTargets.forEach(img => imgObserver.observe(img));



16. Buliding a Slider Component: Part 1
    - First thing > establish initial condition where they are all side by side.
    - Set the transform property to these percentages.
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');

        const slides = document.querySelectorAll('.slide');
        const btnLeft = document.querySelector('.slider__btn--left');
        const btnRight = document.querySelector('.slider__btn--right');

        let curSlide = 0;

        const maxSlide = slides.length;

        const slider = document.querySelector('.slider');
        slider.style.transform = 'scale(0.4) translateX(-800px)';
        slider.style.overflow = 'visible'; // to see the other slides

        // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
        // 0%, 100%, 200%, 300%

        const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
        };
        goToSlide(0);
        // To go next slide
        const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        goToSlide(curSlide);
        };

        const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        };

        btnRight.addEventListener('click', nextSlide);
        btnLeft.addEventListener('click', prevSlide);
        // if (curSlide === maxSlide - 1) {
        //   curSlide = 0;
        // } else {
        //   curSlide++;
        // }

        // curSlide++;
        // goToSlide(curSlide);

        // slides.forEach(
        //   (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
        // );
        // });
        //curSlide -100%, 0%, 100%, 200%

// Part2: 
    const createDots = function () {
    slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide="${i}"></button>`
        );
    });
    };
    createDots();

    // to see which slide is currently the active one whenever changes the slide
    const activateDot = function (slide) {
    document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
    activateDot(0);

    