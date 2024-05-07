const body = document.querySelector("body");
const backBtnCon = document.querySelector(".back_to_minDiv");
const backbtn = document.querySelector('.backbtn');
const navigation = document.querySelector('.navigation');
const showHiddenBtn = document.querySelectorAll(".show_minDiv");
showHiddenBtn.forEach((hiddenBtn) =>{
  hiddenBtn.addEventListener("click", function (){
    var hiddenDiv = this.nextElementSibling;
    if(hiddenDiv.style.display === "none" || hiddenDiv.style.display === ""){
      let allHiddenDiv = document.querySelectorAll(".second_nav_minDiv");
      allHiddenDiv.forEach((hideDiv) =>{
        if(hideDiv !== hiddenDiv){
          hideDiv.style.display = "none";
        }
      });
      hiddenDiv.style.display = "block";
      backBtnCon.style.display = "block"
    }else{
      hiddenDiv.style.display = "none";
      backBtnCon.style.display = "none";
      body.style.overflow = "auto";
    }
    console.log(hiddenDiv);
    backbtn.addEventListener("click", ()=>{
      hiddenDiv.style.display = "none";
      backBtnCon.style.display = "none";
    });
  });


});


//////////////////////////////////////////////////////////////
const hamburgerMenuBtn = document.getElementById("nav-menu");
let menuNavUl = document.querySelector(".second_nav_ul_one");
let closeNavUl = document.querySelector(".close_second_nav");
const closeNavUlBtn = document.querySelector(".close_sec_btn");
hamburgerMenuBtn.addEventListener("click", ()=>{
  if(window.innerWidth <= 1030){
    menuNavUl.classList.toggle("active");
    closeNavUl.classList.toggle("active");
  }else{
    menuNavUl.classList.remove("active");
    closeNavUl.classList.remove("active");
  }
});
closeNavUlBtn.addEventListener("click", ()=>{
  menuNavUl.classList.remove("active");
  closeNavUl.classList.remove("active");
})

///////////////////////////////////////////////////////////////////
let loginContainer = document.querySelector('.menus_container');
const showLoginBtn = document.querySelector(".showLoginBtn");

showLoginBtn.addEventListener("click", ()=> {
  if(showLoginBtn.textContent === 'log in'){
    loginContainer.style.display = 'block';
    showLoginBtn.textContent = 'close';
    showLoginBtn.style.backgroundColor = "black";
  }else{
    loginContainer.style.display = 'none';
    showLoginBtn.textContent = 'log in';
    showLoginBtn.style.backgroundColor = '#21919b';
  }
  console.log(loginContainer);
});

const navLoginBtn = document.querySelector(".navLoginBtn");
navLoginBtn.addEventListener("click", function(){
  loginContainer.style.display = "block";
})
//////////////////////////////////////////////////////////////////////
const closeMenuLoginBtn = document.querySelector(".close_menus");
const menusContainer = document.querySelector(".menus_container");
closeMenuLoginBtn.addEventListener("click", ()=>{
  menusContainer.style.display = "none";
});
/////////////////////////////////////////////////////////////////////
let searchContainer = document.querySelector(".searchContainer");
const searchCloseBtn = document.querySelector(".close_search_btn");
searchCloseBtn.addEventListener("click", ()=>{
  searchContainer.style.display = "none";
});
const searchNavBtn = document.querySelector(".searchNavBtn");
searchNavBtn.addEventListener("click", function(){
  searchContainer.style.display = "block";
});
const desktopSearchBtn = document.querySelector('.pry_searchBtn');
desktopSearchBtn.addEventListener("click", ()=>{
  searchContainer.style.display = "block";
})
/////////////////////////////////////////////////////////////////////////
const joinNavBtn = document.querySelector(".joinNavBtn");
let joinContainer = document.querySelector(".joinContainer");
const closeJoinBtn = document.querySelector(".close_joinBtn");

joinNavBtn.addEventListener("click",()=>{
  joinContainer.classList.add("active");
});
closeJoinBtn.addEventListener("click", ()=>{
  joinContainer.classList.remove("active");
});
/////////////////////////////////////////////////////////////////////////////
const upgradeUl = document.querySelector(".upgrade-search ul");
const showUpgradeBtn = document.querySelector(".search-btn");
showUpgradeBtn.addEventListener("click", ()=>{
  if(upgradeUl.style.display === "none"){
    upgradeUl.style.display = "block";
  }else{
    upgradeUl.style.display = "none";
  }
})