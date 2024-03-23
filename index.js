// Write your solution in this file!
var customerName = 'bob'
var bestCustomer
const favCustomer = 'Kev'

function upperCaseCustomerName(custName){
    // console.log(customerName)
    customerName=customerName.toUpperCase()
    // console.log(customerName)
    // return custName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    favCustomer = 'bob'
    if(favCustomer === bob){
        console.log(`Your favorite customer is ${favCustomer}`)
    }else{
        console.log('Assignment to constant variable.')
    }
}

