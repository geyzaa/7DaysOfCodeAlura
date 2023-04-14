Como utilizar operadores de comparação em Javascript
 (>)	Maior que	(a > b)
 (<)	Menor que	(a < b)
 (>=)	Maior ou igual a	(a >= b)
 (<=)	Menor ou igual a	(a <= b)
 (==)	Igual a	(a == b)
 (!=)	Diferente de	(a !== b)
 (===)	Idêntico a	(a === b)
 (!==)	Não idêntico a	(a !== b)
 (&&)	E/and	(a && b)
 (ll)	Ou/or	(a ll b)

Na Programação, trabalha-se com dados dos mais variados tipos, alguns exemplos: 
 booleanos: verdadeiro ou falso
 números: inteiros, ponto flutuante
 tipos mais complexos: estruturas e objetos. 
 strings: sequências (ou cadeias) de caracteres que usamos para, entre outras coisas, manipular textos.

> O que é uma String?
 Strings são sequências de caracteres alfanuméricos (letras, números e/ou símbolos) amplamente usadas em programação. 
 Em Javascript, uma string sempre estará entre aspas.

> O JavaScript considera tanto aspas simples como aspas duplas, ex:
 const frase = "Mergulhando em tecnologia com Alura"; 
 const frase = ‘Mergulhando em tecnologia com Alura’;
 console.log('Mergulhando em tecnologia com Alura') 

> Objeto String
 rever, não entendi bem ?????? 

> É possível interpolar, concatenar, checar posições de caracteres ou ainda substituir partes de strings.
 Formas de usar são descritas abaixo: 

> Concatenando strings: juntar duas ou mais strings e formar uma nova. Ex: 
 let nome = "Geyza"
 let sobreNome ="Oliveira"
 let nomeCompleto = "Meu nome completo é : " + nome + sobreNome
 -
 Para concatenar as strings nome e sobreNome com a string de texto que é o valor de nomeCompleto,
 usamos o operador de adição (+). Podemos usar também +=, ex: 

 let nome = "Geyza"
 let saudacoes = "Seja bem-vinda "
 saudacoes += nome 

 Dessa forma temos a saída: Seja Bem-vinda Geyza

> Interpolando strings (template strings): No JavaScript, é uma alternativa mais prática para manipular string 
sem a necessidade de fazer concatenação, pois para textos grandes seria inviável. Ex: 

 let nome = "Geyza"
 let saudacoes =`Seja bem-vinda ${nome}`

 outro ex: 
 let nome = "José"
 let poema = `
   E agora, ${nome}?
   A festa acabou,
   a luz apagou,
   o povo sumiu,
   a noite esfriou,
   e agora, ${nome}?
   e agora, você?
   você que é sem nome,
   que zomba dos outros,
   você que faz versos,
   que ama, protesta?
   e agora, ${nome}?

 para a utilização da template string, ela deve estar entre crases (`) e, para fazer a interpolação, 
 o valor ou variável deve estar dentro da estrutura${valor}. 
 Vale ressaltar que usando *template strings* temos a opção de utilizar a quebra de linha normalmente, sem caracteres de escape para isso, como\n`.

Explicação de porquê é possível usar esses métodos (buscar no artigo) 

> algumas propriedades e métodos úteis e bem práticos para trabalhar com strings nas aplicações.

.length : essa propriedade informa o tamanho de uma string 
  const palavra="geyza";
 console.log(palavra.length) //5 
{é exatamente a mesma propriedade que acessamos quando queremos descobrir o comprimento (ou seja, a quantidade de elementos) em um array.}

charAt() : acessar um caractere de uma string. 
 OBS: por baixo dos panos, strings são arrays de caracteres, e em cada posição temos o caractere que compõe a string. Ex: 

 console.log("geyza".charAt(3)) //z   
 {retornará o caractere z, que é o valor que consta na posição 3 da string - arrays em JavaScript começam na posição 0 (zero).}
 Outra alternativa é usar a notação de colchetes para encontrar um caractere da string, ex: 

 const palavra="Geyza"
 console.log(palavra[0]) //G  
 {O resultado da execução do charAt() é uma string.}

indexOf() : retorna a posição de um caractere dentro da string.
 const palavra="Geyza"
 console.log(palavra.indexOf("a")) //4
 {fique atento caso o caractere que se busca na string seja encontrado em mais de uma posição, pois será retornada somente a primeira ocorrência} 
 ex: 
 const palavra="Divertidamente"
 console.log(palavra.indexOf("e")) //3
 . . . 
  continua . . . 