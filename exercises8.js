function cariPelaku(str) {
    var tmp = []
    tmp.push(str.match(/abc/g))
    for (var i = 0; i < tmp.length; i++) {
        return tmp[i].length
    }
}

console.log(cariPelaku('mabcvabc'));
console.log(cariPelaku('abcdabdc'));
console.log(cariPelaku('bcabcac'));