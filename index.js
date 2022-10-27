/*
1600 = 6
1700 = 4
1800 = 2
1900 = 0
2000 = 6

1 = 0
2 = 3
3 = 3
4 = 6
5 = 1
6 = 4
7 = 6
8 = 2
9 = 5
10 = 0
11 = 3
12 = 5

X = (Dia + N.Mes + Año + 1/4 A + N.Siglo) / 7 
*/
function Siglo(Año) {
  Sig = Math.floor(Año / 100);
  switch (Sig) {
    case 20: {
      return 6;
    }
    case 19: {
      return 0;
    }
    case 18: {
      return 2;
    }
    case 17: {
      return 4;
    }
    case 16: {
      return 6;
    }
  }
}

function NuMes(Mes) {
  switch (Mes) {
    case 1: return 0; case 2: return 3; case 3: return 3; case 4: return 6; case 5: return 1;case 6: return 4; case 7: return 6; case 8: return 2; case 9: return 5; case 10: return 0; case 11: return 3; case 12: return 5;
    
  }
}

function randomDate() {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  Año = Math.trunc(getRandomArbitrary(1950, 2040));
  Mes = Math.trunc(getRandomArbitrary(1, 12));
  Dia = 0;
  if (Mes == 2) {
    Dia = Math.trunc(getRandomArbitrary(1, 28));
  } else Dia = Math.trunc(getRandomArbitrary(1, 31));
}

function calcularDia(Dia, Mes, Año) {
  Last2Dig = Año.toString().slice(-2);
  Qua = parseInt(Last2Dig) / 4;
  dif = 0;
  if (Last2Dig % 4 == 0 && (Mes == 01 || Mes == 02)) {
    dif = 1;
  }

  SumaDia =
    Dia + NuMes(Mes) + Siglo(Año) + Math.floor(Qua) - dif + parseInt(Last2Dig);
  Day = SumaDia % 7;
  switch (Day) {
    case 0:
      diaSem = "Domingo";
      break;
    case 1:
      diaSem = "Lunes";
      break;
    case 2:
      diaSem = "Martes";
      break;
    case 3:
      diaSem = "Miercoles";
      break;
    case 4:
      diaSem = "Jueves";
      break;
    case 5:
      diaSem = "Viernes";
      break;
    case 6:
      diaSem = "Sabado";
      break;
  }
}

function calcularFecha() {
  randomDate();
  calcularDia(Dia, Mes, Año);
//   console.log(Dia + " " + Mes + " " + Año);
  // console.log(diaSem)
}

// function aa(){
//     const start = new Date();
//     {

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name? ", function (answer) {
//   console.log(`Oh, so your name is ${answer}`);
//   console.log("Closing the interface");
//   rl.close();
//   const end = new Date() - start;
//   endi = end / 1000
// console.log(`Tardaste ${endi} segundos`);
// });
// }

// }
// aa();

function gameDay() {
  const start = new Date();
  // El código a medir

  calcularFecha();

  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`${Dia}-${Mes}-${Año}, Qué día cayó? `, function (answer) {
    if (answer) {
      if (diaSem.toLowerCase() == answer.toLowerCase()) {
        console.log(`Correcto, cayó el día ${diaSem} `);
      } else {
        console.log(`Incorrecto, cayó el día ${diaSem} `);
      }
      rl.close();
      const end = new Date() - start;
      endi = end / 1000;
      console.log(`Tardaste ${endi} segundos`);
    } else console.log("no paso answer");
  });
}
// gameDay();

function calcularAños() {
  for (let i = 1700; i < 1800; i++) {
  Año = i;
  var casi = 0;
    Last2Dig = Año.toString().slice(-2);
  Qua = parseInt(Last2Dig) / 4;
  var casi = Siglo(Año) + Math.floor(Qua) + parseInt(Last2Dig) ;
  console.log(Año + " = " + casi % 7);
   
  }
  return casi % 7; 
}
calcularAños()