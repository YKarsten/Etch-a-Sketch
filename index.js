// Create a 16x16 grid of sqaure divs on the webpage
// Put the square divs into the div.container
// Pick a method to create the divs using
// CSS Grid
// Remove Borders and margins as they adjust the size of the boxes?

const container = document.querySelector("div");

for (let i=1;i<=16*16; i++){
    let childDiv= document.createElement("div");

    childDiv.style.backgroundColor ="yellow"
    childDiv.style.borderStyle="solid"
    // childDiv.style.border=0;
    childDiv.style.margin=0;
    childDiv.textContent=`${i}`

    container.appendChild(childDiv);
}