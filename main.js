let luckPhrases = [
    'O caminho para realizar nossos sonhos fica menor, a cada passo de superação que damos',
    'Em um mundo cheio de adversidades, quem não desiste sempre sairá como vencedor no final',
    'Cada dificuldade ultrapassada te faz mais forte',
    'A vida é um eterno recomeço!',
    'Não deixe que ninguém te menospreze, reconheça o seu valor, pois você é incrível',
    'Durma tarde, acorde cedo e trabalhe com muito sono',
    'E se a vida se tornar uma barra, que seja de chocolate!',
    'A felicidade mora em um pedaço de bolo. E eu comi.',
    'Sucesso bem que podia ser igual problema e aparecer do nada.',
    'Simpatia para ganhar dinheiro: acorde cedo, tome banho e vá trabalhar.',
    'Quando achar que o mundo gira em torno de você, vá ao médico, pode ser labirintite.'
]
let randomNumber = Math.round(Math.random()*10)
let screenPhrase = ""
const selectButton = document.querySelector('#cookieLuck')
const selectAgain = document.querySelector('#tryAgain')
const screen1 = document.querySelector(".cookieLuckOpen")
const screen2 = document.querySelector(".cookieLuckOpened")
let e = true

console.log(luckPhrases[Number(randomNumber)])
console.log(Number(randomNumber))

selectButton.addEventListener('click', handleTryClick)
selectAgain.addEventListener('click', tryLuckAgain)

function handleTryClick(event) {
    event.preventDefault()
    console.log(luckPhrases[Number(randomNumber)])
    console.log(Number(randomNumber))
    if ((Number(randomNumber)) >= luckPhrases.length){
    randomNumber = Math.round(Math.random()*10)
}   else {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    screenPhrase = luckPhrases[Number(randomNumber)] 

    document.querySelector(".cookieLuckOpened h3").innerText = screenPhrase
}}

function tryLuckAgain() {
    screen2.classList.add('hide')
    screen1.classList.remove('hide')
    randomNumber = Math.round(Math.random()*10)
}
