/*
 * 1 Užduotis (if/else)
 *
 * Percentage >= 90% : Grade A
 * Percentage >= 80% : Grade B
 * Percentage >= 70% : Grade C
 * Percentage >= 60% : Grade D
 * Percentage >= 40% : Grade E
 * Percentage < 40%  : Grade F
 */

const percentage = 30;
let Grade;

if (percentage >= 90) {
  Grade = "Grade A";
} else if (percentage >= 80) {
  Grade = "Grade B";
} else if (percentage >= 70) {
  Grade = "Grade C";
} else if (percentage >= 60) {
  Grade = "Grade D";
} else if (percentage >= 40) {
  Grade = "Grade E";
} else {
    Grade = "Grade F"
}

console.log(Grade);

/*
 * 2 Užduotis (switch/case)
 * 
 * Percentage >= 90% : Grade A
 * Percentage >= 80% : Grade B
 * Percentage >= 70% : Grade C
 * Percentage >= 60% : Grade D
 * Percentage >= 40% : Grade E
 * Percentage < 40%  : Grade F
 * 
*/

const percentage2 = 60;
let grade2;

switch(true) {
    case (percentage2 >= 90): grade2 = 'Grade A';
    break;
    case (percentage2 >= 80): grade2 = 'Grade B';
    break;
    case (percentage2 >= 70): grade2 = 'Grade C';
    break;
    case (percentage2 >= 60): grade2 = 'Grade D';
    break;
    case (percentage2 >= 40): grade2 = 'Grade E';
    break;
    default: grade2 = 'Grade F'
};

console.log(grade2);

/*
 * 3 Užduotis (functions)
 * 
 * Parašyti funkciją, kuri sudeda du skaičius su sąlygom:
 * Jeigu atsakymas didesnis už 10, funkcija turi grąžinti pranešimą "Atsakymas didesnis už 10".
 * Jeigu įvesti skaičiai yra lygūs, funkcija turi grąžinti pranešimą "Veiksmas negalimas".
 * Jeigu atsakymas yra tarp 20 ir 30 arba tarp 50 ir 60, funkcija turi grąžinti pranešimą "Sėkmigai įvykdytą".
*/

let a = 15;
let b = 10;
let ats;

function addition(a, b, ats) {
    if (a === b){
        ats = 'Veiksmas negalimas';
    } else if((a + b > 20 && a + b < 30) || (a + b > 50 && a + b < 60)) {
        ats = 'Sekmingai ivykdyta';
    } else if(a + b > 10) ats = 'Atsakymas didesnis uz 10'

    return ats;
}

console.log(addition(a, b, ats));

/*
 * 4 Užduotis (objects)
 * 
 * Parodykite 2 būdus, kaip galime atspausdinti "boeing" reikšmę
 * 
*/

const person = {
    firstName: 'Jonas',
    lastName: 'Jonaitis',
    vehicles: {
      car: "BMW",
      airlines: {
        boeing: "777"
      }
    }
  }

console.log(person.vehicles.airlines.boeing);
console.log(person['vehicles']['airlines']['boeing']);

/*
 * 5 Užduotis (arrays)
 * 
 * 7.1 Sukurkite masyvą [1, 2, 3, 4, 5]
 * 7.2 Pridėkite skaičių 0 į masyvo pradžią
 * 7.3 Pridėkite skaičių 6 į masyvo pabaigą
 * 
*/

const array = [1, 2, 3, 4, 5];
array.push(6);
array.unshift(0);

console.log(array);


/*
 * 6 Užduotis (arrays)
 * 
 * Išfiltruokite užbaigtas užduotis (isCompleted)
*/

const tasks = [
  {
    id: 1,
    text: 'One',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Two',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Three',
    isCompleted: true
  }
];

function checkIsComplete(task) {
    return task.isCompleted;
}

const result = tasks.filter(checkIsComplete);
console.log(result);

/*
 * 7 Užduotis (arrays)
 * 
 * Naudodamiesi "map", sukonstruokite naują masyvą, kuris atrodytų taip:
 * 
 * [
 *   {
 *      text: "1",
 *      isCompleted: "Ne"
 *   },
 *   {
 *      text: "2",
 *      isCompleted: "Ne"
 *   },
 *   {
 *      text: "3",
 *      isCompleted: "Taip"
 *   }
 * ]
*/


const newTask = tasks.map(task => ({text: `${task.id}`, isCompleted: task.isCompleted ? 'Taip' : 'Ne'}));

console.log(newTask);
