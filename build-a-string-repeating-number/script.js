function repeatStringNumTimes(string, number) {
    if (number <= 0) {
        return "";
    }
    let result = "";
    for (let i = 0;
        i < number; i++) {
        result += string;
    } return result;
}