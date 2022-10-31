// Create a 16x16 grid of sqaure divs on the webpage
// Put the square divs into the div.container
// Pick a method to create the divs using
//  float/clear
//  inline-block
//  flexbox
//  CSS Grid
// Remove Borders and margins as they adjust the size of the boxes?

const container = document.querySelector("div");

for (let i=0;i<=16; i++){
    let childDiv= document.createElement("div");
    childDiv.style.backgroundColor ="yellow"
    childDiv.textContent="I was created in a js file."
    container.appendChild(childDiv);
}