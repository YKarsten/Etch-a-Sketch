
const container = document.querySelector("div")
let childArray=[]
let userInput;
const resetButton = document.querySelector("button");

//Specifiy the canvas size.
function getUserInput(){
    do {
        userInput = parseInt(prompt("Please enter the size of the new canvas (max supported size is 100x100"))
        // return userInput;
    } while (userInput > 100 || 
             userInput < 2 || 
             Number.isInteger(userInput) === false);
}

// Delete the previous canvas
function resetCanvas() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
}

// Draw a new canvas according to the user Input
function createCanvas(userInput){
    container.style.gridTemplateRows=`repeat(${userInput}, 1fr)`
    container.style.gridTemplateColumns=`repeat(${userInput}, 1fr)`

    for (let i=0; i<(userInput*userInput); i++){
        let childDiv= document.createElement("div");
        childDiv.classList.add("childDiv")
    
        childDiv.style.backgroundColor ="yellow"
        childDiv.style.borderStyle="solid"
        // childDiv.style.border=0;
        childDiv.style.margin=0;
        // childDiv.textContent=`${i}`
    
        container.appendChild(childDiv);
        childArray[i]=childDiv;
    }
    
    childArray.forEach((child) =>{
        child.addEventListener("mouseover", ()=> {
            child.style.backgroundColor="black";
        })
    })
}

// Click the button to reset and draw a new canvas according to user input
resetButton.addEventListener("click",()=>{
    getUserInput();
    resetCanvas();
    createCanvas(userInput);
}
)


//Draw a default canvas
for (let i=0; i<(12*12); i++){
    let childDiv= document.createElement("div");
    childDiv.classList.add("childDiv")

    childDiv.style.backgroundColor ="yellow"
    childDiv.style.borderStyle="solid"
    // childDiv.style.border=0;
    childDiv.style.margin=0;
    childDiv.textContent=`${i}`

    container.appendChild(childDiv);
    childArray[i]=childDiv;
}

// Hover effect BW
childArray.forEach((child) =>{
    child.addEventListener("mouseover", ()=> {
        child.style.backgroundColor="black";
    })
})



