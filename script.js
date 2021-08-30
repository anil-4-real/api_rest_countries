// comparing two JSOn without using order, we can use _.isEqual(json1, json2) which will return either true or false
var obj1 = { "name":"Person 1", "age":"5" };
var obj2 = { "age":"5", "name": "Person 1" };

console.log(_.isEqual(obj1, obj2));   //true


//rest countries and print all countries name, region, sub region and population
const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
    
    xhr.responseType = 'json';
    xhr.onload = () =>{
        const data = xhr.response;
      console.log(data)
      
      let arr = [];
      for(var i=0; i<data.length; i++){
        
        //printing flags url
        console.log(data[i]["flag"])
        
        //pushing name, region, subregion and population to an array
          arr.push([
                     `Name:${data[i]['name']}`,  
                     `Region:${data[i]['region']}`, 
                     `SubRegion:${data[i]['subregion']}`, 
                     `Population:${data[i]['population']}`
                   ]);
      }
      
      console.log(arr);
    }
    xhr.send();
} 
getCountries();
