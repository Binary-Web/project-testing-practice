function capitalize(string) {
        const arr = [];
        const a = string.split(" ");
        a.forEach((element) => {
            if(element!="") {

                const text = element.toLowerCase();
                const char1 = text.charAt(0);
                arr.push(`${char1.toUpperCase()}${text.slice(1, element.length)}`)
            }
        })
        return arr.join(" ")
    
}

module.exports = capitalize;