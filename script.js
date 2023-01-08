const sizeSelector = 33;

function randomColor1() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var Color1 = "rgb(" + x + "," + y + "," + z + ")";
    return Color1;
    };

function randomColor2() {
    var z = Math.floor(Math.random() * 256);
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var Color2 = "rgb(" + x + "," + y + "," + z + ")";
    return Color2;
    };

function loadDivs() {

    for(let i = 0; i < (sizeSelector*sizeSelector); i++) {
        //Create, name, and append divs
        const newContent = document.createElement("div");
        newContent.id = 'div' + i;
        const divTarget = document.getElementById("container");
        divTarget.appendChild(newContent);

        //Randomize color on mouse-in
        const gridSelector = document.getElementById("div" + i);
        gridSelector.addEventListener("mouseover", function() {
            gridSelector.style.backgroundColor = randomColor1();
        });
        //Randomize color on mouse-out
        gridSelector.addEventListener("mouseout", function() {
            gridSelector.style.backgroundColor = randomColor2();
        });
    
        
    }
    //Modify grid columns count based on selected size
    document.getElementById("container").style.gridTemplateColumns = "repeat(" + sizeSelector + ", " + 1 + "fr)";
    document.getElementById("container").style.gridTemplateRows = "repeat(" + sizeSelector + ", " + 1 + "fr)";
};

