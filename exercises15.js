function makanTerusRekursif(waktu) {
    var makan = 0
    if (waktu === 0) {
        return 0
    } else if (waktu > 0 && waktu < 16) {
        return 1
    } else {
        makan++
        return makan + makanTerusRekursif(waktu - 15)
    }
}
console.log(makanTerusRekursif(66));
console.log(makanTerusRekursif(100));
console.log(makanTerusRekursif(90));