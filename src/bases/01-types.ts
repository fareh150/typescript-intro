export let name: string = "Fareh Romero"


export const age: number = 30

export const isValid: boolean = true


name = "pepe"

export const templateString = `esto es un string 
multilinea
que puede tener 
" dobles
' simple
dar valores ${name}
expresion ${1+1}
números: ${age}
boolean ${isValid}`

console.log(templateString);
