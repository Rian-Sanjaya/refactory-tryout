function reverse(str) {
    var result = '';
    
    for (var i=str.length-1; i>-1; i--) {
        result += str[i];
    }

    return result;
}