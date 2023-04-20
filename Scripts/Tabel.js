let solarP = []; let Hydrop =[]; let Offshore = []; let Onshore =[]; let OtherRe =[]; let TotalLo =[];

//Get specified amount of data from specified dataset
fetch('https://api.energidataservice.dk/dataset/ElectricityBalanceNonv?offset=0&filter=%7B%22PriceArea%22:[%22DK1%22]%7D&sort=HourUTC%20DESC&timezone=dk') 
    .then(response => response.json())
    .then(data=> {
        //alert(`retrieved ${data.limit} of ${data.total}`);
        //console.group("Data retrieved:");
        //data.records.forEach(record => console.log(record));
        //data.records.TotalLoad.forEach(record => console.log(record));
        console.log(data);
        for(let i = 1; i < data.records.length; i++){
            
        
            solarP.push(data.records[i].SolarPower);
            Hydrop.push(data.records[i].HydroPower);
            Offshore.push(data.records[i].OffshoreWindPower);
            Onshore.push(data.records[i].OnshoreWindPower);
            OtherRe.push(data.records[i].OtherRenewable);
            TotalLo.push(data.records[i].TotalLoad); 
           
            
        }
        console.log(solarP[0]);
        console.log(Hydrop[0]);
        console.log(Offshore[0]);
        console.log(Onshore[0]);
        console.log(OtherRe[0]);
        console.log(TotalLo[0]);

       
        //console.groupEnd();
    });
    function Percent() {
    
    var grun = 0;
    
    

    grun = ((solarP[0]+Hydrop[0]+Offshore[0]+Onshore[0]+OtherRe[0])/TotalLo[0])*100;
    

    document.getElementById("grun").value = grun.toFixed(2);
    

    }

    function loadDataIn(data)
    {
        
        for(let i = 0; i < data.records.length; i++){
            solarP.pop(data.records[i].SolarPower);
            console.log(solarP[i]);
        }
    }
    