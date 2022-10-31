// Create a 16x16 grid of sqaure divs on the webpage
// Put the square divs into the div.container
// Pick a method to create the divs using
// CSS Grid
// Remove Borders and margins as they adjust the size of the boxes?

const container = document.querySelector("div");
let childArray=[]

for (let i=0; i<16*16; i++){
    let childDiv= document.createElement("div");

    childDiv.style.backgroundColor ="yellow"
    childDiv.style.borderStyle="solid"
    // childDiv.style.border=0;
    childDiv.style.margin=0;
    childDiv.textContent=`${i}`

    container.appendChild(childDiv);
    childArray[i]=childDiv;
}

// console.log(childArray)
// console.log(childArray.length)

// Set up a “hover” effect so that the grid divs change color 
// when your mouse passes over them, leaving a (pixelated) trail 
// through your grid like a pen would.

childArray.forEach((child) =>{
    child.addEventListener("mouseover", ()=> {
        child.style.backgroundColor="black";
    })
})

