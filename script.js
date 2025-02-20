// Make the logo wink when nav is toggled


const nav = document.querySelector('.javanav');
const logo = document.querySelector('.logo1');

nav.addEventListener('click', function () {
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
        logo.src = 'images/logo2.svg'
    } else {
        logo.src = 'images/logo.svg'
    }
})


// Making logo wink on hover for desktop

function hover(img) {
    img.src = "images/logo2.svg"
}

function hoverOut(img) {
    img.src = "images/logo.svg"
}



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

// 1. Check for the dark mode state in local storage
// 2. If dark mode state is Yes: a) Set the css file to dark mode, b) Set the logo to dark mode version, c) Switch button to dark mode, d) Set the dark mode state to local storage
// 3. If dark mode state is No: a) Set the css file to regular, b) Set the logo to light mode version, c) Switch button to light mode, d) Set the dark mode state to local storage 

// const darkbutton = document.querySelector('.darkmode');
// darkbutton.addEventListener('click', function () {
//     document.body.classList.toggle('dark')
//     if (document.body.classList.contains('dark')) {
//         darkbutton.src = 'images/sun.svg'
//         // Add the dark mode state to local storage
//         localStorage.setItem('darkmode', 'enabled')
//     } else {
//         darkbutton.src = 'images/moon.svg'
//         // Remove the dark mode state from local storage
//         localStorage.setItem('darkmode', 'disabled')
//     }
// })