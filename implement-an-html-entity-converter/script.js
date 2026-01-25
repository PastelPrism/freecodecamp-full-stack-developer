function convertHTML(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "&":
        result += "&amp;";
        break;
      case "<":
        result += "&lt;";
        break;
      case ">":
        result += "&gt;";
        break;
      case '"':
        result += "&quot;";
        break;
      case "'":
        result += "&apos;";
        break;
      default:
        result += string[i];
    }
  }
  return result;
}