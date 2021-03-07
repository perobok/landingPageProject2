/*
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


let navMenu = document.querySelector(".navbar__menu");
let ul = document.querySelector("#navbar__list");
let liEl;
let aLink;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav // I added dimensions and some styling to the nav menu container. 
//I took text content of h2 tags and puted them inside the newly created anchor element

navMenu.style.cssText = 'height: 55px; background-color: black;';

let allSections = document.querySelectorAll('.landing__container');

for (let i = 0; i < allSections.length; i++) {
    liEl = allSections[i].querySelector("h2").textContent;

    let stavkaListe = document.createElement('li');
    let textLi = document.createTextNode(''); // empty string because we dont need any text inside only ancher tag bellow!!!

    stavkaListe.appendChild(textLi);
    ul.appendChild(stavkaListe);

    let aLink = document.createElement('a');
    aLink.setAttribute('href', "#section");

    let link = document.querySelector('h2');
    stavkaListe.appendChild(aLink).textContent = liEl;
    stavkaListe.classList.add("btn");
    aLink.classList.add('link');


} // Set the nav bar to hide after 7 seconds and after that to if scroll to show up again.

setTimeout(function() {
    navMenu.style.height = 0;
    ul.style.visibility = "hidden";

}, 7000);

window.addEventListener('scroll', function() {
    //console.log(window.scrollY);
    if (window.scrollY > 0) {
        ul.style.visibility = "visible"; // I made button visible when it reaches -30px of targetPosition4. 
        navMenu.style.height = "55px";

    }

})


// Add class 'active' to the selected button/link

let btns = document.querySelectorAll(".btn"); //selected all elements with class btn. We made class btn in loop on line 61.
console.log(btns);


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() { // I add eventListener onclick so in next step we can remove every potential active class and next create one if it's clicked. 
        btns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
}

// Add class 'active' when section is in scope. 

let sectionsAll = document.querySelectorAll('.pero');

for (let i = 0; i < sectionsAll.length; i++) {
    window.addEventListener("scroll", function() { 
        let currentPosition = window.scrollY;
        let sectionTop = sectionsAll[i].getBoundingClientRect().top + currentPosition - 100;
        let sectionBottom = sectionsAll[i].getBoundingClientRect().bottom + currentPosition - 100;
if (currentPosition > Math.round(sectionTop) && currentPosition < Math.round(sectionBottom)) {
        sectionsAll.forEach(sect => sect.classList.remove('your-active-class'));
        sectionsAll[i].classList.add('your-active-class');
        btns.forEach(btn => btn.classList.remove('active'));
        btns[i].classList.add('active');

        console.log(currentPosition);
        console.log(sectionTop);
        console.log(sectionBottom);
    }
    })
}


// Scroll to section on link click

function scrollToSection() {

    let arrayOfLinks = document.querySelectorAll(".link");

    for (i = 0; i < allSections.length; i++) {
        let section = allSections[i];
        let anchor = arrayOfLinks[i];
        let targetPosition = section.getBoundingClientRect().top;
        anchor.addEventListener('click', function() {
            window.scrollTo(0, targetPosition)
        })
    }
}
scrollToSection();


//Showing the button when reaches the last sectionn

window.addEventListener('scroll', function() {

for (i=1; i<= sectionsAll.length; i++) {
    if (sectionsAll.length == i) {
        let topButton = document.querySelector('.top_button');
        topButton.style.visibility = "visible"; // I made button visible when it reaches last section
  
    }
}
});