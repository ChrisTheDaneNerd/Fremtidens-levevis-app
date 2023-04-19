var numOne = 0, numTwo = 0, sum = 0;
numOne = parseInt(document.getElementById("first").value);

function multi(){
    //function som ganger bruger inputtet sammen med den gennemsnitlige pris for 1 kWh
    
    
    numTwo = 0.893;
    sum = numOne * numTwo;
    document.getElementById("answer").value = sum.toFixed(2);

    const Elforbrug = [];
    Elforbrug.push(numOne);

    

    window.alert(Elforbrug);

}




//funktion som generer et cirkel diagram 

function piechart() {
    
    //variabler

    var num1;
    num1 = 1600;
    var sumkoel = 0, sumkom = 0, sumovn = 0, summik = 0, sumvas = 0, sumtoer = 0, sumopv = 0;
    var numkoel, numkom, numovn, nummik, numvas, numtoer, numopv;
    //ændrer bruger inputtet til integer
    numkoel = parseInt(document.getElementById("Køle").value);
    numkom = parseInt(document.getElementById("Komfur").value);
    numovn = parseInt(document.getElementById("Ovn").value);
    nummik = parseInt(document.getElementById("Mikroovn").value);
    numvas = parseInt(document.getElementById("Vaskemaskine").value);
    numtoer = parseInt(document.getElementById("Tørretumbler").value);
    numopv = parseInt(document.getElementById("Opvaskemaskine").value);

    
    //omregner talene til procenter
    sumkoel= (numkoel/num1)*100;
    sumkom= (numkom/num1)*100;
    sumovn= (numovn/num1)*100;
    summik= (nummik/num1)*100;
    sumvas= (numvas/num1)*100; 
    sumtoer= (numtoer/num1)*100; 
    sumopv= (numopv/num1)*100; 

    //opstart på at lave cirkel diagrammet
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Desktop Search Engine Market Share - 2016"
        },
        data: [{
            //sætter de forskellige variabler til diagrammet
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                //procenter og deres navne på diagrammet
                {y: sumkoel.toFixed(2), label: "Køleskab/ køle fryserskab"},
                {y: sumkom.toFixed(2), label: "Komfur"},
                {y: sumovn.toFixed(2), label: "Ovn"},
                {y: summik.toFixed(2), label: "Mikrovn"},
                {y: sumvas.toFixed(2), label: "Vaskemaskine"},
                {y: sumtoer.toFixed(2), label: "Tørretumbler"},
                {y: sumopv.toFixed(2), label: "Opvaskemaskine"}
            ]
        }]
    });
    chart.render();
    
    }
    
 



