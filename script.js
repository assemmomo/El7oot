let locationPage1 = document.querySelector(".locationPage1");
let locationPage2 = document.querySelector(".locationPage2");
let locationPage3 = document.querySelector(".locationPage3");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let closeLocation1 = document.querySelector(".closeLocation1");
let closeLocation2 = document.querySelector(".closeLocation2");
let closeLocation3 = document.querySelector(".closeLocation3");


btn1.addEventListener("click", function () {
    locationPage1.classList.add("active");
    document.querySelector(".locationPageImg").src="./imgs/24.jpeg";
    document.querySelector(".locationPageL").innerHTML = "شارع 24 متفرع من شارع 30 القاهرة";
    document.querySelector(".pcNums").innerHTML =  "number of pc : 50";
    document.querySelector(".locationPageLink").href = "https://maps.app.goo.gl/GnGkRdSqQ5j7xnb18";
});
btn2.addEventListener("click", function () {
    locationPage1.classList.add("active");
    document.querySelector(".locationPageImg").src="./imgs/myame 4.jpeg";
    document.querySelector(".locationPageL").innerHTML = "ميامي الاكاديمية اول شارع يمين";
    document.querySelector(".pcNums").innerHTML =  "number of pc : 30";
    document.querySelector(".locationPageLink").href = "https://maps.app.goo.gl/tv1KrPGM8Zn9dk1A9";
});
btn3.addEventListener("click", function () {
    locationPage1.classList.add("active");
    document.querySelector(".locationPageImg").src="./imgs/15 4.jpeg";
    document.querySelector(".locationPageL").innerHTML = "سيدي بشر قبلي شارع 15";
    document.querySelector(".pcNums").innerHTML =  "number of pc : 37";
    document.querySelector(".locationPageLink").href = "https://maps.app.goo.gl/G2u8364Vk3rpr7L26";
});
closeLocation1.addEventListener("click", function () {
    locationPage1.classList.remove("active");
});
