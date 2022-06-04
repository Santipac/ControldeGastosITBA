const $inputText = document.querySelector('#inputText');
const $inputNumber = document.querySelector('#inputNumber');
const tabla = document.querySelector('#tablita');
const $total = document.querySelector('#total');
const $submit = document.querySelector('#btn-cta')
const $spanTotal = document.querySelector('.span-1')
const $spanIndividual = document.querySelector('.span-2')

let suma = 0;
let amigos = []



const constructor = (e) =>{
    //CREA LOS td
    const $tr = document.createElement('tr')
    const $tdName = document.createElement('td');
    const $tdImport = document.createElement('td');
    $tr.appendChild($tdName)
    $tr.appendChild($tdImport)
        //Agrega Texto a los td
        $tdName.textContent = `${$inputText.value}`
        $tdImport.textContent = `$${$inputNumber.value}`
    //Los hace hijo de
    e.appendChild($tr)
} 

const sumaTotal = () =>{
    suma+= new Number($inputNumber.value)
    $spanTotal.textContent = suma
    
    amigos.push($inputText.value)
    $spanIndividual.textContent = suma / amigos.length

}



$submit.addEventListener('click',(e) =>{
    e.preventDefault()
    constructor(tabla)
    sumaTotal()
} )
