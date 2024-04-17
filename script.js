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