"use strict"

var employeeSalaries = {
	'chief' : 35000,
	'manager' : 12800,
	'controller' : 11400,
	'receptionist' : 9500,
	'staff' : 8700,
	'driver' : 8500,
	'worker' : 8200
}

var employeeSalaries2 = {}

var totalSalary = 0;
var totalSalary2 = 0;

for(var salary in employeeSalaries) 
	totalSalary += employeeSalaries[salary];

console.log(totalSalary);

for(var salary2 in employeeSalaries2)
	totalSalary2 += employeeSalaries2[salary2];

console.log(totalSalary2);