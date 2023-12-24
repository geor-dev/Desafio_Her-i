let heroi = ["Leon", 5000];
let nivel;
switch (true) {
    case heroi[1] < 1000:
         nivel = "Ferro";
        break;
    case heroi[1] < 2000:
        nivel = "Bronze";
        break;
    case heroi[1] < 5000:
        nivel = "Prata";
        break;
    case heroi[1] < 7000:
        nivel = "Ouro";
        break;
    case heroi[1] < 8000:
        nivel = "Platina";
        break;
    case heroi[1] < 9000:
        nivel = "Ascendente";
        break;
    case heroi[1] < 10000:
        nivel = "Imortal";
        break;

}

console.log(`O Herói de nome ${heroi[0]} está no nível de ${nivel}`)



