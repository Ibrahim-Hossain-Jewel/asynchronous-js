//Check asynchronous method working properly or not in javascript takeOrder(), processOrder(), completeOrder();

const takeOrder = (customer,callback)=>{
    console.log(`Take order for ${customer}`);
    callback(customer);
}
function processOrder(customer,callback) {
    console.log(`Process order for ${customer}`);
    setTimeout(()=>{
        console.log("Cooking completed!");
        console.log(`Order processed for ${customer} `);
        callback(customer);
    },3000);
}
const completeOrder = (customer,callback) =>{
    console.log(`Completed order for ${customer}`);
    callback();
}
//function definition is completed now call the function.
//here occured an callback hell position
takeOrder('customer 1',(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer,()=>{
            console.log("All execution is completed here");
        });
    });
});




