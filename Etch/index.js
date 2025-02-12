const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16, 30px)"


for (let row =0; row < 16; row++){
    for(let col = 0; col < 16; col++){
        const square = document.createElement("div");
        square.style.width = "30px";
        square.style.height = "30px";
        square.style.border = "1px solid #ccc";


        square.addEventListener("mouseover", function(e){
            e.target.style.background = "blue";
        })
        container.appendChild(square);
    }
}

document.body.appendChild(container);
