function kaliTerusRekursif(angka) {
    var tmp = String(angka)
    if (tmp == 0) {
        return 1
    } else {
        var tampung = tmp.slice(1)
        return Number(tmp[0]) * kaliTerusRekursif(Number(tampung))
    }
}

console.log(kaliTerusRekursif(66));
console.log(kaliTerusRekursif(3));
console.log(kaliTerusRekursif(24));