var date = new Date().getTime();
var user= new Date (prompt('Enter your date of birth')).getTime();
var age = Math.floor((date-user) / (1000 * 60 * 60 * 24 *365));
document.write(age);


