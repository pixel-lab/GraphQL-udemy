//name export -> as many as needed
const message = "########## message > graphql setup file > message.js";

//default export -> can export only one //this also can export as `export {name as default};`

 const name = 'Sankha';
 //export {name as default}

 const addition = (a,b) => a+b
 const subtraction = (a,b) => a-b
 export {addition as default, subtraction,message};