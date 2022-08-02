const input = document.querySelector('input');
const titleInput = document.getElementById('main_title');

input.addEventListener('keyup', updateValue);

function updateValue(event) {
  titleInput.textContent = event.target.value;
}

let submit = document.getElementById("submit_button");
submit.addEventListener("click", blankOrNot);

function blankOrNot(event){
event.preventDefault();

let titleElem = document.querySelector("#title_input");
let nounElem = document.querySelector("#noun");
let verbElem = document.querySelector("#verb");
let adjectiveElem = document.querySelector("#adjective");

let thyTitle = titleElem.value;
let noun = nounElem.value;
let verb = verbElem.value;
let adjective = adjectiveElem.value;

let fill = "Please fill in all fields!"

if  (document.querySelector("#title_input").value.length == 0){
    alert(fill);
}
else if (document.querySelector("#noun").value.length == 0){
    alert(fill);
}
else if (document.querySelector("#verb").value.length == 0){
    alert(fill);
}
else if (document.querySelector("#adjective").value.length == 0){
    alert(fill);
}
else {
    // document.write(`Last night I ate a ${noun}, and today I just had to ${verb}. What a(n) ${adjective} day!`);
    document.getElementById("story_result").innerHTML = `Last night I ate a ${noun}, and today I just had to ${verb}. What a(n) ${adjective} day!`;
    let divContainer = document.querySelectorAll(".form_container");
    for (let i = 0; i<divContainer.length; i++){
    divContainer[i].style["color"] = "#ffffff";
    divContainer[i].style["margin"] = "0%"
    }
    let divContainer2 = document.querySelectorAll("#submit_button");
    for (let i = 0; i<divContainer2.length; i++){
    divContainer2[i].style["color"] = "#ffffff";
    divContainer2[i].style["background-color"] = "#ffffff";
    divContainer2[i].style["border-color"] = "#ffffff"
    divContainer2[i].style["box-shadow"] = "0px 0px 0px"
    divContainer2[i].style["text-shadow"] = "0px 0px 0px"
    }
    let divContainer3 = document.querySelectorAll("input");
    for (let i = 0; i<divContainer3.length; i++){
    divContainer3[i].style["background-color"] = "#ffffff";
    divContainer3[i].style["color"] = "#ffffff";
    divContainer3[i].style["margin"] = "0%";
    divContainer3[i].style["caret-color"] = "#ffffff";
    divContainer3[i].style["border-top"] = "solid -10px #ffffff";
    divContainer3[i].style["border-bottom"] = "solid -10px #ffffff"
    divContainer3[i].style["border-left"] = "solid -10px #ffffff";
    divContainer3[i].style["border-right"] = "solid -10px #ffffff";
    divContainer3[i].style["border-color"] = "#ffffff";
        }
    let divContainer4 = document.querySelectorAll("body");
    for (let i = 0; i<divContainer4.length; i++){
        divContainer4[i].style["caret-color"] = "#ffffff"
    }
    }
}

