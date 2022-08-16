'use strict';

module.exports.generateRandomnumber = async (event) => {
const randomNumer =  parseInt(Math.random()*100);
console.log("The Randon generated number is ",randomNumer);
return randomNumer;
};
