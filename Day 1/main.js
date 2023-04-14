/*Resolução Day 1 
operação de igualdade entre valores
Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo 
para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );
*/

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } 
  else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }
// retorna: As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes


if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  }
// retorna: As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo 

if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }
// retorna: As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes  

// criando uma função 