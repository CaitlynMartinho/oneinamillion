const earth = document.getElementById("earthImg");
let type;
var popUpBtn = document.getElementById("popUpBtn");
var collected = document.getElementById("popUpMenu");
var collectedText = document.getElementById("popUpText");
var collectedImg = document.getElementById("popUpImg");
var unlocked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const items = [
{
    type: 1,
    name: 'Pete',
    src: 'Images/1in250(1).png',
    id: 'one',
    textid: 'textOne',
},
{
    type: 2,
    name: 'Frikkie',
    src: 'Images/1in250(2).png',
    id: 'two',
    textid: 'textTwo',
},
{
    type: 3,
    name: 'Paul',
    src: 'Images/1in250(3).png',
    id: 'three',
    textid: 'textThree',
},
{
    type: 4,
    name: 'Dwayne',
    src: 'Images/1in500(1).png',
    id: 'four',
    textid: 'textFour',
},
{
    type: 5,
    name: 'John',
    src: 'Images/1in500(2).png',
    id: 'five',
    textid: 'textFive',
},
{
    type: 6,
    name: 'Mary',
    src: 'Images/1in500(3).png',
    id: 'six',
    textid: 'textSix',
},
{
    type: 7,
    name: 'UFO',
    src: 'Images/1in1000(1).png',
    id: 'seven',
    textid: 'textSeven',
},
{
    type: 8,
    name: 'Rocket',
    src: 'Images/1in1000(2).png',
    id: 'eight',
    textid: 'textEight',
},
{
    type: 9,
    name: 'Satelite',
    src: 'Images/1in1000(3).png',
    id: 'nine',
    textid: 'textNine',
}];

//generate random number
earth.addEventListener("click",function checkUnlock (){
    let in250 = Math.round(Math.random()*249 +1);
    let in500 = Math.round(Math.random()*499 +1);
    let in1000 = Math.round(Math.random()*999 +1);

    if (in250 == 2){
        type = Math.round(Math.random()*2 + 1);
        unlock(type);
    }
    if(in500 == 4){
        type = Math.round(Math.random()*2 + 4);
        unlock(type); 
    }
    if(in1000 == 4){
        type = Math.round(Math.random()*3 + 6);
        unlock(type); 
    }


},false)

function unlock (type){
    let itemType = items[type - 1];
    let itemId = document.getElementById(itemType.id);
    let textId = items[type -1].textid;
    itemId.src = itemType.src;
    unlocked[type - 1]++;
    collected.style.display = "block"
    collectedText.innerText = "Collected: " + itemType.name;
    collectedImg.setAttribute("src", itemType.src);
    text.innerText = itemType.name;

    if(unlocked[type - 1] > 1){
        let text = document.getElementById(textId);
        text.innerText = itemType.name + '(X' + unlocked[type-1] + ')'
        
    } 
};




