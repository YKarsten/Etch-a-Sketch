// Add a button to the top of the screen that will send the user a popup 
// asking for the number of squares per side for the new grid.
// Once entered, the existing grid should be removed and a new grid 
// should be generated in the same total space as before (e.g. 960px wide)
// so that you’ve got a new sketch pad. 
// Tip: Set the limit for the user input to a maximum of 100.
// A larger number of squares results in more computer resources being used,
// potentially causing delays, freezing, or crashing that we want to prevent.


let userInput;
const resetButton = document.querySelector("button");

//Specifiy the canvas size.
function getUserInput(){
    do {
        userInput = parseInt(prompt("Please enter the size of the new canvas (max supported size is 100x100"))
        return userInput;
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
    // container.style.gridTemplateColumns = repeat(userInput, 1fr);
    // container.style.gridTemplateRows = repeat(userInput, 1fr);
    for (let i=0; i<(userInput*userInput); i++){
        let childDiv= document.createElement("div");
        childDiv.classList.add("childDiv")
    
        childDiv.style.backgroundColor ="yellow"
        childDiv.style.borderStyle="solid"
        childDiv.style.margin=0;
        childDiv.textContent=`${i}`
    
        container.appendChild(childDiv);
        childArray[i]=childDiv;
    }
    // Give it the desired hover effect
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





const container = document.querySelector("div")
// container.style.gridTemplateColumns = repeat(userInput, 1fr);
// container.style.gridTemplateRows = repeat(userInput, 1fr);
let childArray=[]


//Draw a default canvas
for (let i=0; i<(256); i++){
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


