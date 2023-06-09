const Elforbrug = [];
var numOne = 0, numTwo = 0, sum = 0;
    

//funktion som generer et cirkel diagram 

function piechart() {
    //function som ganger bruger inputtet sammen med den gennemsnitlige pris for 1 kWh
    numOne = parseInt(document.getElementById("first").value);
    
    numTwo = 0.893;
    numThree = 0.124;
    sum = numOne * numTwo;
    CO2sum = numOne * numThree;
    document.getElementById("answer").innerHTML = sum.toFixed(2);
    document.getElementById("CO2").innerHTML = CO2sum.toFixed(2);

    
    Elforbrug.push(numOne);

    

    window.alert(Elforbrug);
    
    //variabler
    
   
    var sumkoel = 0, sumkom = 0, sumovn = 0, summik = 0, sumvas = 0, sumtoer = 0, sumopv = 0, sumrest = 0;
    var numkoel = 0, numkom = 0, numovn = 0, nummik = 0, numvas = 0, numtoer = 0, numopv = 0;
    var tidkom = 0, tidovn = 0, tidmik = 0, tidvas = 0, tidtoer = 0, tidopv = 0;
    //ændrer bruger inputtet til integer
    numkoel = parseFloat(document.getElementById("Køle").value);
    numkom = parseFloat(document.getElementById("Komfur").value);
    tidkom = parseFloat(document.getElementById("Komfur-tid").value);
    numovn = parseFloat(document.getElementById("Ovn").value);
    tidovn = parseFloat(document.getElementById("Ovn-tid").value);
    nummik = parseFloat(document.getElementById("Mikroovn").value);
    tidmik = parseFloat(document.getElementById("Mikro-tid").value);
    numvas = parseFloat(document.getElementById("Vaskemaskine").value);
    tidvas = parseFloat(document.getElementById("Vask-tid").value);
    numtoer = parseFloat(document.getElementById("Tørretumbler").value);
    tidtoer = parseFloat(document.getElementById("Tørre-tid").value);
    numopv = parseFloat(document.getElementById("Opvaskemaskine").value);
    tidopv = parseFloat(document.getElementById("Opvask-tid").value);


    
    //omregner talene til procenter
    sumkoel= ((numkoel/numOne)/12)*100;
    sumkom= (((numkom*tidkom)*30)/numOne)*100;
    sumovn= (((numovn*tidovn)*4)/numOne)*100;
    summik= (((nummik*tidmik)*30)/numOne)*100;
    sumvas= ((((numvas/100)*tidvas)*4)/numOne)*100; 
    sumtoer= ((((numtoer/100)*tidtoer)*4)/numOne)*100; 
    sumopv= ((((numopv/100)*tidopv)*4)/numOne)*100; 

    console.log(sumkoel,sumkom,sumovn,summik,sumvas,sumtoer,sumopv);

    sumrest = 100 - (sumkoel+sumkom+sumovn+summik+sumvas+sumtoer+sumopv);

    //opstart på at lave cirkel diagrammet
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "EL fordeling af hvidevare på månedligt forbrug af  " + numOne + " kWh"
        },
        data: [{
            //sætter de forskellige variabler til diagrammet
            type: "pie",
            startAngle: 0,
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
                {y: sumopv.toFixed(2), label: "Opvaskemaskine"},
                {y: sumrest.toFixed(2), label: "Andet"}

            ]
        }]
    });
    chart.render();
    
    }
    
 