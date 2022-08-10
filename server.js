//'use strict' depricated in strict mode

const express = require('express')
const app = express()
const port = 3002
const {handleError} = require('./error');
const {processData} = require('./process-data');

async function testFn(flag,param2){
  try{
    
    return 'working';
  }catch(er){
    throw handleError('Its an error');
  }
   
}

testFn(false,2,{data:[{name:"shubham",age:27,address:{pincode:411041,street:"SINHAGAD ROAD", city:"PUNE", country:"INDIA",tags:["home","my place"]}}]});

app.get('/test', (req, res) => {
    testFn(false,2,{data:[{name:"shubham",age:27,address:{pincode:411041,street:"SINHAGAD ROAD", city:"PUNE", country:"INDIA",tags:["home","my place"]}}]});
  res.send('Hello World!');
  
});

app.get('/process', (req, res) => {
  processData(req.body)
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})