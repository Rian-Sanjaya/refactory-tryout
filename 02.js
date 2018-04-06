function combine() {
    var result = [];

    for (var i=0; i<arguments.length; i++) {
        var argument = arguments[i];

        if (Array.isArray(argument)) {
            for (var j=0; j<argument.length; j++) {
                result.push(argument[j]);
            }
        }
    }

    return result.join(' ');
}