// condicional 
const status_pago = true;

if (status_pago) {
    console.log("Cliente pagou a sua conta!")

}
else {
    console.log("Cliente não pagou a sua conta!")

}

const tem_produto = false;
const valor = 100;

if (valor > 10) {
    console.log("Cliente não pode pagar")
} else if (valor > 10 && tem_produto) {
    console.log("Cliente pode pagar")
} else {
    console.log("Pode fechar a loja")
}