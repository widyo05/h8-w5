function hapusSimbol(str) {
    var tmp = []
    var hasil = ''
    tmp.push((str.match(/[a-z,0-9]+/gi)))
    for (var i = 0; i < tmp.length; i++) {
        for (var j = 0; j < tmp[i].length; j++) {
            hasil += tmp[i][j]
        }
    }
    return hasil
}

console.log(hapusSimbol('test%$4aa'));
console.log(hapusSimbol('devel0p3r s3j@@ati'));
console.log(hapusSimbol('ma@#k!an~')); 