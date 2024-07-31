var clicksValue = 0;
var progress = 1;
var progressBar = document.getElementById("progressBar");
var levelUpValue = "1000";
var level = 1;

progressBar.setAttribute("max", levelUpValue);
function addClicks(){
    clicksValue++;
    progress++;
    document.getElementById("clicks").innerHTML = "Clicks: " + clicksValue;
    progressBar.setAttribute("value", progress);
    


//levels
if(progress == levelUpValue){
    levelUpValue = "5000";
    progressBar.setAttribute("max", levelUpValue);
    progress = 0;
    level = 2;
    document.getElementById("level").innerHTML = "Level: " + level;
    levelUp.style.display = "block"
}
if(progress == levelUpValue){
    levelUpValue = "10000";
    progressBar.setAttribute("max", levelUpValue);
    progress = 0;
    document.getElementById("level").text = "Level: " + level;
    levelUp.style.display = "block"
}

//mouse movement
/*var mouseX = event.clientX;
var mouseY = event.clientY - 50;

var plusOne = document.createElement("p");
plusOne.setAttribute("id", "plusOne");
plusOne.innerText = "+1";
plusOne.style.left= mouseX + "px";
plusOne.style.top = mouseY + "px";

var parent = document.getElementById("plusOne");
parent.appendChild(plusOne);
*/
}


const audio = new Audio();
audio.src = "/click2.mp3";

//switch menus
var collectionMenu = document.getElementById("collection");
var storeMenu = document.getElementById("store");
var multiplayerMenu = document.getElementById("multiplayer");
var profileMenu = document.getElementById("profile");

var collection = document.getElementById("navBarItem1");
var store = document.getElementById("navBarItem2");
var multiplayer = document.getElementById("navBarItem3");
var profile = document.getElementById("navBarItem4");

function openCollection(){
    storeMenu.style.display = "none";
    store.style.opacity = "0.7";
    multiplayerMenu.style.display = "none";
    multiplayer.style.opacity = "0.7";
    profileMenu.style.display = "none";
    profile.style.opacity = "0.7";
    collectionMenu.style.display = "block";
    collection.style.opacity = "1";
}

function openStore(){
    storeMenu.style.display = "block";
    store.style.opacity = "1";
    multiplayerMenu.style.display = "none";
    multiplayer.style.opacity = "0.7";
    profileMenu.style.display = "none";
    profile.style.opacity = "0.7";
    collectionMenu.style.display = "none";
    collection.style.opacity = "0.7";
}

function openMultiplayer(){
    storeMenu.style.display = "none";
    store.style.opacity = "0.7";
    multiplayerMenu.style.display = "block";
    multiplayer.style.opacity = "1";
    profileMenu.style.display = "none";
    profile.style.opacity = "0.7";
    collectionMenu.style.display = "none";
    collection.style.opacity = "0.7";
}

function openProfile(){
    storeMenu.style.display = "none";
    store.style.opacity = "0.7";
    multiplayerMenu.style.display = "none";
    multiplayer.style.opacity = "0.7";
    profileMenu.style.display = "block";
    profile.style.opacity = "1";
    collectionMenu.style.display = "none";
    collection.style.opacity = "0.7";
}

//local save 
//save game
setInterval (function(){
    saveGame();
    
}, 1000)

//load game 
function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if(typeof savedGame.clicks !== "undefined"){
        clicksValue = savedGame.clicks;
        document.getElementById("clicks").innerHTML = "Clicks: " + clicksValue;
    }
    if(typeof savedGame.progress !== "undefined"){
        progress = savedGame.progress;
        progressBar.setAttribute("value", progress);
    }
    if(typeof savedGame.unlocked !== "undefined"){
        unlocked = savedGame.unlocked;
        if(unlocked[0] >= 1){
            document.getElementById("one").setAttribute("src", "Images/1in250(1).png");
            document.getElementById("textOne").innerText = "Pete" + '(X' + unlocked[0] + ')';
        }  
        if(unlocked[1] >=1 ){
            document.getElementById("two").setAttribute("src", "Images/1in250(2).png");
            document.getElementById("textTwo").innerText = "Frikkie" + '(X' + unlocked[1] + ')';
        } 
        if(unlocked[2] >=1 ){
            document.getElementById("three").setAttribute("src", "Images/1in250(3).png");
            document.getElementById("textThree").innerText = "Paul" + '(X' + unlocked[2] + ')';
        } 
        if(unlocked[3] >=1){
            document.getElementById("four").setAttribute("src", "Images/1in500(1).png");
            document.getElementById("textFour").innerText = "Dwayne" + '(X' + unlocked[3] + ')';
        } 
        if(unlocked[4] >=1){
            document.getElementById("five").setAttribute("src", "Images/1in500(2).png");
            document.getElementById("textFive").innerText = "John" + '(X' + unlocked[4] + ')';
        } 
        if(unlocked[5] >=1){
            document.getElementById("six").setAttribute("src", "Images/1in500(3).png");
            document.getElementById("textSix").innerText = "Mary" + '(X' + unlocked[5] + ')';
        } 
        if(unlocked[6] >=1){
            document.getElementById("seven").setAttribute("src", "Images/1in1000(1).png");
            document.getElementById("textSeven").innerText = "UFO" + '(X' + unlocked[6] + ')';
        } 
        if(unlocked[7] >=1){
            document.getElementById("eight").setAttribute("src", "Images/1in1000(2).png");
            document.getElementById("textEight").innerText = "Rocket" + '(X' + unlocked[7] + ')';
        } 
        if(unlocked[8] >=1){
            document.getElementById("nine").setAttribute("src", "Images/1in1000(3).png" + '(X' + unlocked[8] + ')');
            document.getElementById("textNine").innerText = "Satelite";
        } 
        if(typeof savedGame.level !== "undefined"){
            level = savedGame.level;
            document.getElementById("level").innerHTML = "Level: " + level;
        }
    }
    
};

function saveGame(){
    var gameSave = {
        clicks: clicksValue,
        progress: progress,
        levelUpValue: levelUpValue,
        unlocked: unlocked,
        level: level
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};


window.onload = function(){
    loadGame();
};
