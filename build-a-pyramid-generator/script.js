function pyramid(char, height, inverted) {
    let result = "\n";
    for (let i = 0;
        i < height;
        i++) {
            let level = inverted ? i : height - 1 - i;
        let spaces = " ".repeat(level);
        let chars = char.repeat(2 * (height - level) - 1);
        result += spaces + chars + "\n";
    } return result;
}