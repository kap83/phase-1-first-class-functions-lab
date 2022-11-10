
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}
//use negative symbol for counting backwards

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (integer) => (function(fare) {return fare * integer})

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (array, fn) => fn(array)