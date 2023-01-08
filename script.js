const sizeSelector = 16;

function loadDivs() {

    for(let i = 0; i < (sizeSelector*sizeSelector); i++) {
        //Create, name, and append divs
        const newContent = document.createElement("div");
        newContent.id = 'div' + i;
        const divTarget = document.getElementById("container");
        divTarget.appendChild(newContent);
        console.log("Element created.");
        
        //Change color on mouse-in
        const gridSelector = document.getElementById("div" + i);
        gridSelector.addEventListener("mouseover", function() {
            gridSelector.style.backgroundColor = "yellow";
        });
        //Change color on mouse-out
        gridSelector.addEventListener("mouseout", function() {
            gridSelector.style.backgroundColor = "red";
        });
    
        
    }


};

