"use strict";

const loginBtn = document.getElementById("login-btn");
const loginModal = document.querySelector(".login-bg");
const loginClose = document.getElementById("login-close");


loginBtn.addEventListener("click",()=>{
    loginModal.classList.add("active");
});
loginClose.addEventListener("click",()=>{
    loginModal.classList.remove("active");
});


const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar-container");
const searchClose = document.getElementById("search-close");


searchBtn.addEventListener("click",()=>{
    searchBar.classList.toggle("active");
    searchBtn.classList.toggle('fa-times');
});


//we have to remove login and search bar when page scrolls

window.onscroll=()=>{
    searchBar.classList.remove("active");
    searchBtn.classList.remove('fa-times');
    loginModal.classList.remove("active");
}

const videoBtn = document.querySelectorAll(".vid-btn");

videoBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
        document.querySelector(".vid-slider .active").classList.remove("active");
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector(".vid").src=src;
    })
});


// reviews section
const review = [
    {
        id:1,
        name:"Sara Jones",
        job:"UX Designer",
        img:"./images/pic1.png",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 2,
      name: "susan smith",
      job: "web developer",
      img: "./images/pic3.png",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "./images/pic2.png",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "./images/pic4.png",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
];



const pic = document.getElementById("pic");
const author = document.querySelector(".name");
const job = document.querySelector(".work");
const desc = document.querySelector(".desc");


const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");
const randomBtn = document.getElementById("random-btn");


let currentItem = 0;

function showPerson(person) {
    let rev = review[person];
    author.textContent = rev.name;
    pic.src = rev["img"];
    job.textContent = rev["job"];
    desc.textContent = rev["text"];
}

prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
});

nextBtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>3){
        currentItem = 0;
    }
    showPerson(currentItem);
});

let random = Math.floor(Math.random() * 4);

randomBtn.addEventListener("click",()=>{
    currentItem = Math.floor(Math.random() * review.length);
    showPerson(currentItem);
})