const out = document.getElementById("out");

var copy = (arr) => {
    return arr.map(a => a);
}

var randomAndRemove = (arr) => {
    var i = Math.floor(arr.length * Math.random());
    const a = arr[i];
    arr.splice(i, 1);
    return a;
}

var isVowel = (a) => {
    return a[0] === "a" || a[0] === "e" || a[0] === "i" || a[0] === "o" || a[0] === "u" || a[0] === "A" || a[0] === "E" || a[0] === "I" || a[0] === "O" || a[0] === "U"
}

var getWord = () => {
    var names = copy(words.math.names);
    var modifiers = copy(words.math.modifier);
    var types = copy(words.math.type);

    var out = "";

    if (Math.random() < 0.5) {
        var o = Math.random();
        if (o < 0.2) {
            out += randomAndRemove(names).plain + "-" + randomAndRemove(names).plain + " ";
        } else if (o < 0.5) {
            out += randomAndRemove(names).type + " ";
        } else {
            out += randomAndRemove(names).possessive + " ";
        }
    }

    const fuck = Math.random() * 4;
    for (var i = 0; i < fuck; i++) {
        out += randomAndRemove(modifiers) + " ";
    }
    out += randomAndRemove(types);

    const fdsa = Math.random();
    if (fdsa < 0.5) {
        if (isVowel(out[0])) {
            out = "An " + out;
        } else {
            out = "A " + out;
        }
    } else {
        out = "The " + out;
    }

    return out;
}

var generate = () => {
    var out = "";
    const fuck = Math.random() * 200 + 3;
    for (var i = 0; i < fuck; i++) {
        out += getWord();
        if (i < fuck - 1) {
            const j = Math.random();
            if (j < 0.3) {
                out += " of ";
            } else if (j < 0.6) {
                out += " using ";
            } else {
                out += " leveraging ";
            }
        }
    }
    return out;
}

out.innerText = generate();
