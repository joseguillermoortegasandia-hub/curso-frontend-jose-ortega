function calculadora (){
  let num1= Number(prompt("Ingrese el primer numero"));
  let num2= Number(prompt("Ingrese el segundo numero"));
  let operacion= prompt("Ingrese la operacion que desea realizar: suma, resta, multiplicacion, division");

  if (operacion === "suma") {
    alert(sumar(num1, num2));

  } else if (operacion === "resta") {
    alert(restar(num1, num2));

  } else if (operacion === "multiplicacion") {
   alert(multiplicar(num1, num2));

  } else if (operacion === "division") {
    alert(dividir(num1, num2));

  } else {
    alert("Operacion no valida");
  }
}
