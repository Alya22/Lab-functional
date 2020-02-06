function ask(name, age, country) {

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }

    if (arguments[0] == "донну") {
        console.log("Я вас видел в " + arguments[0])
    } else {
        console.log("Ниразу не видел в " + arguments[0])
    }

    if (arguments[1] > 3) {
        console.log("Поздравляю, скоро конец")
    } else {
        console.log("Сочувствую, еще долго..")
    }
}
ask(prompt("В каком универе ты учишься?"), prompt("Какой курс?"));

var exp = function(name, age) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

exp("донну", " 5")