'use strict';

// set date-----------------------------------------
const date = document.getElementById("date");
date.innerHTML = new Date().getUTCFullYear();

// close link----------------------------------------
const navToggle = document.querySelector(".nav_toggle");
const linksContainer = document.querySelector(".links_container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () =>{
  linksContainer.classList.toggle("links_slide");
});






const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top_link");

window.addEventListener("scroll", () =>{
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight){
      navbar.classList.add("fixed_nav")
  }else{
      navbar.classList.remove("fixed_nav");
  }

  if(scrollHeight > 500){
    topLink.classList.add("show_link"); 
}else{
    topLink.classList.remove("show_link");
}
});



const scrolllinks = document.querySelectorAll(".scroll_link");

scrolllinks.forEach(link => {
  link.addEventListener("click", (e) =>{
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    // const containerHeight = linksContainer.getBoundingClientRect().height;
    // const fixedNav = navbar.classList.contains("fixed_nav");
    let position = element.offsetTop - navHeight;
    window.scrollTo({
        left: 0,
        top: position,
    });
  });
});