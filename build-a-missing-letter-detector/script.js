function fearNotLetter(string) {
    for (let i = 0; i < string.length - 1;
        i++) {
            let current = string.charCodeAt(i);
        let next = string.charCodeAt(i + 1);
        if (next !== current + 1) {
            return String.fromCharCode(current + 1);

        }
    }
    return undefined;
}