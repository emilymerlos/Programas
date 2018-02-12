var Hospital = "Health care GT";
alert(Hospital);
document.write(Hospital);
console.log(Hospital);

var nombre_paciente = prompt("Ingrese nombre del paciente");

document.write(nombre_paciente);
console.log(nombre_paciente);

var edad_paciente = prompt("Ingrese edad del paciente");

document.write(edad_paciente);
console.log(edad_paciente);

var userInput = Number(prompt("Ingrese numero de Clinica", ""));
document.write(userInput);
console.log(userInput);
switch(userInput){
  case 1:
    alert("Nutricionista");
    console.log("Nutricionista");
    console.log("Dra Kravietz");
    document.write("Nutricionista = Dra Kravietz");
    break;
  case 2:
    alert("Endocrinologo");
    console.log("Endocrinologo");
    console.log("Dr Ronaldo");
    document.write("Endocrinologo = Dr Ronaldo");
    break;
  case 3:
    alert("Psiquiatra");
    console.log("Psiquiatra");
    console.log("Dr Paniagua");
    document.write("Psiquiatra = Dr Paniagua");
    break;
  case 4:
    alert("Pediatra");
    console.log("Pediatra");
    console.log("Dr Leonardo");
    document.write("Pediatra = Dr Leonardo");
    break;
  case 5:
    alert("Ginecologo");
    console.log("Ginecologo");
    console.log("Dr Cordon");
    document.write("Ginecologo = Dr Cordon");
    break;
  case 6:
    alert("Internista");
    console.log("Internista");
    console.log("Dr Gomez");
    document.write("Internista = Dr Gomez");
    break;
  default:
alert("no es una Clinica valida");
}

var numero_paciente = prompt("Ingrese numero del paciente");

document.write(numero_paciente);
console.log(numero_paciente);




