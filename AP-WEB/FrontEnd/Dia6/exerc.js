let comprimento_1 = 12;

let comprimento_2 = 12;

let comprimento_3 = 12;

if (comprimento_1 != comprimento_2 || comprimento_2 != comprimento_3 || comprimento_1 != comprimento_3) {
    console.log("O triângulo é Isósceles")
} else if (comprimento_1 == comprimento_2 && comprimento_2 == comprimento_3) {
    console.log("É um triângulo Equilátero")
} else {
    console.log("O triângulo é Escaleno")
}