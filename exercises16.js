function totalDigitRekursif(angka) {
    var str = String(angka)
    if (str == 0) {
        return 0
    } else {
        var tmp = str.slice(1)
        return Number(str[0]) + totalDigitRekursif(Number(tmp))
    }
}

console.log(totalDigitRekursif(512));
console.log(totalDigitRekursif(1542));
console.log(totalDigitRekursif(5));