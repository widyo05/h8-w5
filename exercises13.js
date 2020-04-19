function sorting(arrNumber) {

    var tmp;
    for (i = 0; i < arrNumber.length; i++) {
        for (j = 0; j < arrNumber.length; j++) {

            if (arrNumber[j] > arrNumber[j + 1]) {
                tmp = arrNumber[j]
                arrNumber[j] = arrNumber[j + 1]
                arrNumber[j + 1] = tmp
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    var hitung = 0;
    if (arrNumber.length === 0) {
        return '';
    } else {
        hitung = 1;
        var maks;
        maks = arrNumber[0];
        for (k = 1; k < arrNumber.length; k++) {
            if (maks !== arrNumber[k]) {
                maks = arrNumber[k];
                hitung = 1;
            } else if (maks === arrNumber[k]) {
                hitung++
            }
        }
    }
    console.log('angka paling besar adalah ' + maks + ' dan jumlahnya sebanyak ' + hitung)

}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest
}
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kecountan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kecountan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));