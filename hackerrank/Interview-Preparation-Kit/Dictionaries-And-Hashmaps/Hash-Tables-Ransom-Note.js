/**
 * Hash Tables: Ransom Note
 */

function checkMagazine(magazine, note) {

    const magazineArr = magazine.split(' ')
    const noteArr = note.split(' ')
    const dic = {};

    for (let word of magazineArr) {
        dic[word] ? dic[word] += 1 : dic[word] = 1
    }

    for (let word of noteArr) {
        if (dic[word] >= 1) {
            dic[word] -= 1;
        } else {
            return console.log('No');
        }
    }

    console.log('Yes')
}
