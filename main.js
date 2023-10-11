function multiplication() {


    

    var tableContain = document.getElementById('tab');
    var loopS = document.getElementById('loopstart').value;
    var loopE= document.getElementById('loopend').value;
    
        // display.innerHTML = '' ;

        // display2.innerHTML = '';

    for ( var i=1; i<=loopS; i++ ) {
        var tableDiv = document.createElement("div");
        tableDiv.style.margin = "10px";
        tableDiv.style.border = "1px solid black";
        tableDiv.style.textAlign = "center";
        tableDiv.innerHTML = i + "<h3>Multiplication Table</h3>";


        var tableList = document.createElement("ul");
        tableList.style.listStyle = 'none';
        tableList.style.padding = "0";


    
        // display.innerHTML= display.innerHTML +  i + ' ' + 'times'+ ' ';
        for (var j=1; j<=loopE; j++){
            const listItem = document.createElement("li");
            listItem.innerHTML +=  i + " " + "X" + " " + j + " "  + "=" + " " + i * j ;
            tableList.appendChild(listItem);
        }    

        tableDiv.appendChild(tableList);
        tableContain.appendChild(tableDiv);
    };



   
}