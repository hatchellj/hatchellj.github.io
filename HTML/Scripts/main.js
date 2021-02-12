//Setting up a function to let the image change on click
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'vance-images/vance-solinari-image.jpeg'){
        myImage.setAttribute('src','vance-images//Vance.jfif');
    }else{
        myImage.setAttribute('src','vance-images/vance-solinari-image.jpeg')
    }
}

//Adding a personalized greeting. 

//First, add a button
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//Allows button to reset input
myButton.onclick = function(){
    setUserName();  
}

//Set the user's name
function setUserName(){
    let myName = prompt('Please tell me your name: ');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = `Vance is cool, right ${myName} ?`;
    }
}

//allows user's name to be remembered between sessions by storing a cache locally
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name')
    myHeading.textContent = `Vance is cool, right ${myName} ?`;
}


