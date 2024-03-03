let name = "Petrus";
let xp = "10000";
let rank = "";

switch (true){
    case xp < 1000:
        rank = ("Ferro")
            break

    case xp > 1000 && xp < 3000:
        rank = ("Prata")
            break

    case xp > 3000 && xp < 5000:
        rank = ("Ouro")
            break

    case xp > 5000 && xp < 7000:
        rank = ("Platina")
            break

    case xp > 7000 && xp < 8000:
        rank = ("Diamante")
            break

    case xp > 8000 && xp < 9000:
        rank = ("Ascendente")
            break

    case xp > 9000 && xp < 10000:
        rank = ("Imortal")
            break

    case xp >= 10000:
        rank = ("Radiante")
            break

}

console.log("O Herói de nome "  + name +  " está no nível " +  rank);


