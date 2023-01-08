const sizeSelector = 16;

function loadDivs() {

    console.log("function initiated.");

    for(let i = 0; i < (sizeSelector*sizeSelector); i++) {

        const newContent = document.createElement("div");
        newContent.id = 'div' + i;
        const divTarget = document.getElementById("container");
        divTarget.appendChild(newContent);
        console.log("Element created.");
    
        
    }


};