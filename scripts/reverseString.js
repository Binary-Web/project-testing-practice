function reverseString(string) {
    let arr = string.split('');
    arr = arr.reverse();
    const text = arr.join("");
    return text;
}

module.exports = reverseString;