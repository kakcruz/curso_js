var agora = new Date() // função para buscar hora atual do seu script
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 ){
    console.log('Good Morning!')
}else if (hora <= 18){
    console.log('Goord Afternoon!')
}else{
    console.log('Good Night!')
}