const sizeSelector = 5;
//Collect user input
const inputField = document.getElementById("input");

//Set gridsize to user input
const inputButton = document.getElementById("button");
inputButton.addEventListener("click", function() {
    let sizeSelector = inputField.value;
    if(sizeSelector > 100) {
        let reselection =  prompt("Please choose a number between 1 and 100.");
        let sizeSelector = reselection;
        loadDivs(sizeSelector);
    } else (
    loadDivs(sizeSelector));
});

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let Color1 = "rgb(" + x + "," + y + "," + z + ")";
    let Color2 = "rgb(" + a + "," + b + "," + c + ")";
    return Color1;
    return Color2;
    };

function loadDivs(sizeSelector) {

    for(let i = 0; i < (sizeSelector*sizeSelector); i++) {
        //Create, name, and append divs
        let newContent = document.createElement("div");
        newContent.id = 'div' + i;
        let divTarget = document.getElementById("container");
        divTarget.appendChild(newContent);
        //Randomize color on mouse-in
        let gridSelector = document.getElementById("div" + i);
        gridSelector.addEventListener("mouseover", function() {
            gridSelector.style.backgroundColor = randomColor();
        });
        //Randomize color on mouse-out
        gridSelector.addEventListener("mouseout", function() {
            gridSelector.style.backgroundColor = randomColor();
        });
    
        
    }
    //Modify grid column and row count based on selected size
    document.getElementById("container").style.gridTemplateColumns = "repeat(" + sizeSelector + ", " + 1 + "fr)";
    document.getElementById("container").style.gridTemplateRows = "repeat(" + sizeSelector + ", " + 1 + "fr)";
};

document.getElementById("reset").addEventListener("click", function() {
    location.reload();
})