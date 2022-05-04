

function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let splitString = string.split("");
    if(num >= 26) num = num - 26;
    const result = []
    splitString.forEach(letter => {
        if(letter !== " ") {
            let code = alphabet.indexOf(letter) + num;
            if(code >= 26) code = code - 26;
            result.push(alphabet[code]);
        } else {
            result.push(" ")
        }
    })
    return result.join("");
}
module.exports = caesarCipher;