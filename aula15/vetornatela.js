let valores = [8,1,7,4,2,9]

//console.log(valores)

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

// O for in para arrays e objetos
for (let pos in valores) {
    
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//BUSCAR VALORES DENTRO DE UM VETOR: indexOf()

let pos = valores.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`)