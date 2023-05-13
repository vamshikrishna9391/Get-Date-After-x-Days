const addDays = require("date-fns/addDays");
let date = addDays(new Date(2020, 7, 22), 12);
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
