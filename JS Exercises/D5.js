/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1")
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let element of pets){
  console.log(element)
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2")
pets.sort()
console.log(pets)
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Esercizio 3")
console.log(pets.reverse())
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4")
pets.push(pets[0])
pets.shift(pets[0])
console.log(pets)
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("Esercizio 5")
// creo un generatore di stringhe di 2 lettere per la targa
function randomString(){
  let str =[]
for (i=0; i<2; i++){
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let random = Math.floor(Math.random()*characters.length)
  str.push(characters[random])
}
return str.join("")
}
//creo un generatore di 3 numeri per la targa
function randomLPNumber(){
  let numTar =[]
  for (i=0; i<3; i++){
    const numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let random = Math.floor(Math.random()*numeri.length)
    numTar.push(numeri[random])
  }
  return numTar.join("")
}
//svolgo effettivamente l'esercizio
for (element of cars){
  element.licensePlate= randomString() + randomLPNumber() + randomString()
}
console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6")
let toyota = {
    brand: 'Toyota',
    model: 'Yaris',
    color: 'white',
    trims: ['life', 'style', 'r-line'],
    licensePlate: "FD655HF"
}
cars.push(toyota)
console.log("le macchine ora presenti nell'array cars sono:")
console.log(cars)

for (i=0; i<cars.length;i++){
  cars[i].trims.pop()
}
console.log("ho eliminato l'ultimo elemento della proprietà trims ad ogni oggetto di cars")
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7")
const justTrims = []
for (i=0; i<cars.length;i++){
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8")
for (element of cars){
  if(element.color.startsWith("b")===true){
    console.log(element.brand + element.model + " Fizz")
  }
  else{
    console.log(element.brand + element.model + " Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
console.log("Esercizio 9")
while (i<= numericArray.indexOf(32)){
console.log(numericArray[i])
i++
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
console.log("Esercizio 10")
let position = []

for (element of charactersArray){
  switch (true){
    case element==='a': position.push(1)
      break; 
    case element==='b': position.push(2)
      break;
    case element==='c': position.push(3)
      break;
    case element==='d': position.push(4)
      break;
    case element==='e': position.push(5)
      break;
    case element==='f': position.push(6)
      break;
    case element==='g': position.push(7)
      break;
    case element==='h': position.push(8)
      break;
    case element==='i': position.push(9)
      break;
    case element==='j': position.push(10)
      break;
    case element==='k': position.push(11)
      break;
    case element==='l': position.push(12)
      break;
    case element==='m': position.push(13)
      break;
    case element==='n': position.push(14)
      break;
    case element==='o': position.push(15)
      break;
    case element==='p': position.push(16)
      break;
    case element==='q': position.push(17)
      break;
    case element==='r': position.push(18)
      break;
    case element==='s': position.push(19)
      break;
    case element==='t': position.push(20)
      break;
    case element==='u': position.push(21)
      break;
    case element==='v': position.push(22)
      break;
    case element==='w': position.push(23)
      break;
    case element==='x': position.push(24)
      break;
    case element==='y': position.push(25)
      break;
    case element==='z': position.push(25)
      break;  
    default: 
  }
}
console.log(position)