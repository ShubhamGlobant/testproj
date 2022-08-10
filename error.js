
function handleError(someError){
    let callerArgs = arguments; // we can also access handleError.caller.arguments
    let temp = Object.assign({},arguments);
    console.log("Check this=>",JSON.stringify(callerArgs));
    throw new Error('Its an error '+JSON.stringify(callerArgs));
   

}


module.exports = {
    handleError
}