let solarP = [];
let Biomass = 0;
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
            solarP.pop(data.records[i].Biomass);
            console.log(solarP[i]);
        }
        //console.groupEnd();
    });

    function loadDataIn(data)
    {
        
        for(let i = 0; i < data.records.length; i++){
            solarP.pop(data.records[i].SolarPower);
            console.log(solarP[i]);
        }
    }
    