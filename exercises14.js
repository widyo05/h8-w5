function changeVocals(str) {
    var kata = str.split('')
    var vokal = 'aiueoAIUEO'
    var kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var indeks;
    var tmp = []

    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < vokal.length; j++) {
            if (kata[i] === vokal[j]) {
                indeks = kamus[j + 1]
                kata[i] = kamus[j + 1]
            }
        }
        tmp.push(kata[i])
    }
    return tmp
}
function reverseWord(str) {
    var balik = '';
    for (var i = str.length - 1; i >= 0; i--) {
        balik += str[i]
    }
    return balik;
}

function setLowerUpperCase(str) {
    var newReverse = ''
    for (var i = 0; i < str.length; i++) {
        hurufbesar = str[i].toUpperCase();
        hurufKecil = str[i].toLowerCase();

        if (str[i] === hurufKecil) {
            newReverse += hurufbesar;
        } else if (str[i] === hurufbesar) {
            newReverse += hurufKecil;
        }
    }
    return newReverse;
}

function removeSpaces(str) {
    var tmp = '';
    for (i = 0; i < str.length; i++) {
        if (str === ' ') {
            tmp += str[i]
        }
        return tmp
    }

    function passwordGenerator(name) {
        if (name.length < 5) {
            return 'Minimal karakter yang diinputkan adalah 5 karakter';
        } else {
            var alterVocal = changeVocals(name);
            var reversing = reverseWord(alterVocal);
            var lowerUpperName = setLowerUpperCase(reversing);
            var letRemoveSpace = removeSpaces(lowerUpperName);

            return letRemoveSpace;
        }
    }

}