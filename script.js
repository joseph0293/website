
// Making the content visible after FULL page load

window.addEventListener('load', function () {
    // Hide loader
    const loader = document.getElementById('loader');
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease-in-out';

    // Show and fade in page content
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
});


// Using Lottie for the loader animation - Lottie animation loads a little too late, so I commented it out for now

// document.body.style.visibility = 'hidden';

// document.addEventListener('DOMContentLoaded', () => {
//     // Inject Lottie animation
//     lottie.loadAnimation({
//         container: document.getElementById('lottie-animation'), // The div to render the animation
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'images/loading.json' // Update path if needed
//     });
// });

// window.addEventListener('load', () => {
//     const loader = document.getElementById('loader');
//     loader.style.display = 'none';
//     document.body.style.visibility = 'visible';
// });


// Typewriter. In case needed:

// const textDisplay = document.getElementById('typetext')
// const phrases = ['brands...', 'visuals...', 'experiences...', 'code...', 'motion...']
// let i = 0
// let j = 0
// let currentPhrase = []
// let isDeleting = false
// let isEnd = false

// function loop() {
//     isEnd = false
//     textDisplay.innerHTML = currentPhrase.join('')

//     if (i < phrases.length) {

//         if (!isDeleting && j <= phrases[i].length) {
//             currentPhrase.push(phrases[i][j])
//             j++
//             textDisplay.innerHTML = currentPhrase.join('')
//         }

//         if (isDeleting && j <= phrases[i].length) {
//             currentPhrase.pop(phrases[i][j])
//             j--
//             textDisplay.innerHTML = currentPhrase.join('')
//         }

//         if (j == phrases[i].length) {
//             isEnd = true
//             isDeleting = true
//         }

//         if (isDeleting && j === 0) {
//             currentPhrase = []
//             isDeleting = false
//             i++
//             if (i === phrases.length) {
//                 i = 0
//             }
//         }
//     }
//     const spedUp = Math.random() * (40 - 20) + 15
//     const normalSpeed = Math.random() * (200 - 100) + 50
//     const time = isEnd ? 1000 : isDeleting ? spedUp : normalSpeed
//     setTimeout(loop, time)
// }

// loop()


// Not sure what this is supposed to do. I'll leave it here for now.

// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector(
//             "body").style.visibility = "hidden";
//         document.querySelector(
//             "#spinner").style.visibility = "visible";
//     } else {
//         document.querySelector(
//             "#spinner").style.display = "none";
//         document.querySelector(
//             "body").style.visibility = "visible";
//     }
// };



//ENTIRE WEBSITE IN DARK MODE!!!

// Process:
// 0. Add html for dark mode icon through JS
// 1. Check for the dark mode state in local storage
// 2. If dark mode state is Yes: a) Set the css file to dark mode, b) Set the logo to dark mode version, c) Switch button to dark mode, d) Set the dark mode state to local storage
// 3. If dark mode state is No: a) Set the css file to regular, b) Set the logo to light mode version, c) Switch button to light mode, d) Set the dark mode state to local storage 


// Execution:
// 0.

function darkmodebutton() {

    // HTML for the dark mode button


    const darkdiv = document.createElement('div');
    darkdiv.className = 'darkmodebutton';

    darkdiv.innerHTML = `
    <div class="darkmodebutton" title="Toggle Dark Mode">
    <div class="container">
        <input type="checkbox" id="theme-toggle" class="hidden-checkbox">
        <label for="theme-toggle" class="toggle-button">
            <div class="icon-wrapper">
                <svg class="icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
                <svg class="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            </div>
        </label>
    </div>
</div>`

    document.body.appendChild(darkdiv);


    // CSS for the dark mode button


    let darkbuttonstyling = `
/* General Styles */
.darkmodebutton {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 30px;
    transition: 0.3s;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Hide the checkbox */
.hidden-checkbox {
    display: none;
}

/* Button Styling */
.toggle-button {
    background: #374151;
    border: none;
    padding: 14px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    transition: 0.3s, transform 0.5s ease-in-out;
}

/* Rotation  */
.toggle-button:has(.hidden-checkbox:checked) {
    transform: rotate(180deg);
}

.toggle-button:hover {
    background: #4b5563;
}

.darkmodebutton:has(.hidden-checkbox:checked) .toggle-button {
    background: #e5e7eb;
}

.darkmodebutton:has(.hidden-checkbox:checked) .toggle-button:hover {
    background: ##d1d5db;
}

/* Icon Wrapper */
.icon-wrapper {
    position: relative;
    width: 24px;
    height: 24px;
}

/* Icon Styles */
.icon {
    position: absolute;
    width: 100%;
    height: 100%;
    stroke: currentColor;
    transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;
}


.sun {
    opacity: 0;
    transform: rotate(-180deg);
    stroke: #374151;
}

.moon {
    opacity: 1;
    transform: rotate(0deg);
    stroke: #f3f4f6;
}

/* Toggle between sun and moon */
.hidden-checkbox:checked+.toggle-button .sun {
    opacity: 1;
    transform: rotate(0deg);
}

.hidden-checkbox:checked+.toggle-button .moon {
    opacity: 0;
    transform: rotate(180deg);
}

/* Change Theme of Icon */
.darkmodebutton:has(.hidden-checkbox:checked) {
    color: #f3f4f6;
}
`
    // This creates a stylesheet for the button and adds it to the document head (this is so that I don't have to add the html & css to every page)
    let darkbuttonstylesheet = document.createElement("style")
    darkbuttonstylesheet.textContent = darkbuttonstyling
    document.head.appendChild(darkbuttonstylesheet)
}



function hover(img) {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === 'dark') {
        img.src = "images/logo-dark2.svg"
    } else if (storedTheme === 'light') {
        img.src = "images/logo2.svg"
    }
}

function hoverOut(img) {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === 'dark') {
        img.src = "images/logo-dark.svg"
    } else if (storedTheme === 'light') {
        img.src = "images/logo.svg"
    }
}

// Switching the theme here:
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStylesheet = document.querySelector('link[rel="stylesheet"][href*="main.css"], link[rel="stylesheet"][href*="darkmode.css"]');
    const storedTheme = localStorage.getItem("theme");
    const nav = document.querySelector('.javanav');
    const logo = document.querySelector('.logo1');


    nav.addEventListener('click', function () {
        this.classList.toggle('active');
        const storedThemeforlogo = localStorage.getItem("theme");
        if (storedThemeforlogo === 'dark') {
            if (this.classList.contains('active')) {
                logo.src = 'images/logo-dark2.svg'
            } else {
                logo.src = 'images/logo-dark.svg'
            }
        } else {
            if (storedThemeforlogo === 'light') {
                if (this.classList.contains('active')) {
                    logo.src = 'images/logo2.svg'
                } else {
                    logo.src = 'images/logo.svg'
                }
            }
        }
    });


    // Function to update the button and theme & logo switching

    const selfimg = document.querySelector('.self-image');
    const selftop = document.querySelector('.self-top-image');

    function updateTheme(theme) {
        if (theme === "dark") {
            if (selfimg && selftop) {
                selfimg.src = 'images/self-dark.png';
                selftop.src = 'images/self-top-dark.png';
            }
            themeStylesheet.href = "css/darkmode.css"; // Switch to dark mode
            themeToggle.checked = true; // Show sun icon
            localStorage.setItem("theme", "dark"); // Save to local storage

            // Set initial logo based on theme
            const logo = document.querySelector('.logo1');
            const logodesktop = document.getElementById('logodesktop');
            logo.src = 'images/logo-dark.svg' // Dark mode logo
            logodesktop.src = 'images/logo-dark.svg' // Dark mode logo

        } else if (theme === "light") {
            if (selfimg) {
                selfimg.src = 'images/self.png';
                selftop.src = 'images/self-top.png';
            }
            themeStylesheet.href = "css/main.css"; // Switch to light mode
            themeToggle.checked = false; // Show moon icon
            localStorage.setItem("theme", "light"); // Save to local storage

            logo.src = 'images/logo.svg' // Light mode logo
            logodesktop.src = 'images/logo.svg' // Light mode logo

        }
    }

    // Apply saved theme on page load
    if (storedTheme === "dark") {
        updateTheme("dark");
    } else {
        updateTheme("light"); // Default to light mode if no value exists
    }

    // Toggle theme when button is clicked
    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            updateTheme("dark");
        } else {
            updateTheme("light");
        }
    });
});



// CALL THE FUNCTION:

darkmodebutton()


// Hiding the navbar on scroll down and showing it on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector('.navscroll');
const scrollThreshold = 70; // Only hide after 70px (because I added margin to nav bar)

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Hide the navbar when scrolled more than 70px down (because I added margin to nav bar)
        navbar.style.transform = 'translateY(-120%)';
    } else {
        // Show the navbar when scrolling up
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});
