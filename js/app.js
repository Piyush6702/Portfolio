let openbtn=document.querySelector('.open-nav')

let closebtn=document.querySelector('.close-nav')



let navbar=document.querySelector('.nav')

openbtn.addEventListener('click',()=>{
    // openbtn.classList.add('not-active')
    navbar.classList.add('navslide')
})

closebtn.addEventListener('click',()=>{

  navbar.classList.remove('navslide')
})
// ==========nav bar JS=============

let animatetext = document.getElementById("animatetext");

let addressEl = document.querySelector(".address-mail");
let text = "Hi ! I'm Piyush Singh";

let speed = 100;
let idx = 1;

changetext();
function changetext() {
  animatetext.innerText = text.slice(0, idx);
  if (idx === 8) {
    // addressEl.style.opacity=1;
    idx++;
  } else if (idx > text.length) {
    idx = 1;
    // addressEl.style.opacity=0;
  } else {
    idx++;
  }

  setTimeout(changetext, speed);
}

// setTimeout(() => {
//     addressEl.style.visibility='visible'
// }, 200);

// === education transition====

let education = document.getElementById("Education");
console.log(education)

education.addEventListener('mouseover', function (){
  let line=document.querySelector('.line')  
  let circle2=document.getElementById('circle-2')  
  let circle3=document.getElementById('circle-3')  


  let progressbar=document.querySelector('.progressbar').classList.add("edu-active");
  let collegediv=document.querySelector(".college")
  let interdiv=document.querySelector(".inter")
  let highsdiv=document.querySelector(".highschool")


  highsdiv.classList.add("edu-active");
  interdiv.classList.add("edu-active");
  collegediv.classList.add("edu-active");
  
  circle2.style.top=collegediv.offsetHeight + 'px'
  circle3.style.top=collegediv.offsetHeight+interdiv.offsetHeight + 'px'
  line.style.height=collegediv.offsetHeight+interdiv.offsetHeight+highsdiv.offsetHeight+'px'
});

education.addEventListener('mouseout', function (){
    let progressbar=document.querySelector('.progressbar').classList.remove("edu-active");
    let collegediv=document.querySelector(".college").classList.remove("edu-active");
    let interdiv=document.querySelector(".inter").classList.remove("edu-active");
    let highsdiv=document.querySelector(".highschool").classList.remove("edu-active");
  });



  // =============Testimonial===========

  let testmonial = document.querySelector(".testmonial .text");
let userimg = document.querySelector(".user-details img");
let username = document.querySelector(".user-name");
let userrole = document.querySelector(".user-role");

let testmonialdata = [

  {
    name: "Shashwat Shukla",
    position: "Executive Secretary (COSSCO)",
    photo: "shashwat_sir",
    text:
    "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many Co-ordinators.",
  },
  {
    name: "Arun kumar Rajput",
    position: "Project Lead (Buildathon)",
    photo: "arun",
    text:
    "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. I'm looking forward to work with him again !",
  }
];


let status=1;


function updatedetails() {
    
    let {name,position,photo,text}=testmonialdata[status];

    testmonial.innerHTML=text;
    userimg.src='./images/'+photo+'.jpg'
    username.innerHTML=name
    userrole.innerHTML=position

    status++;

    if(status > testmonialdata.length-1){
        status=0;
    }

}

setInterval(updatedetails,9000);


// =============================

let skills =document.getElementById('Skills')

skills.addEventListener('mouseover',()=>{
  skills.style.opacity='1'
})

skills.addEventListener('mouseout',()=>{
  skills.style.opacity='0'
})


let projectdiv=document.getElementById('Projects')
let projects=document.querySelector('.projects')

console.log(projects)

projectdiv.addEventListener('mouseover', function (){
  projects.classList.add('slidein')
})

projectdiv.addEventListener('mouseout', function (){
  projects.classList.remove('slidein')
})

