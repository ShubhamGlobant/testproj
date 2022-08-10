
function processData(data){
    let total = 0;
    tempFunc();
    if(data && data[0]){
        for(let each in data){
            for(let every in data[each]){
                if(data[each][every].value && data[each][every].percent){
                    total += data[each][every].value;
                }else if(data[each][every].value2 && data[each][every].percent){
                    total += data[each][every].value2;
                }else{
                    total += data[each][every].value3;
                }
            }
        }
    }
    return total;

}



module.exports = {
    processData
}