function letterToSignal(letter) {
    switch(letter) {
        case "A":
            signal = [
                false, true, true, true, true, true, true,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                false, true, true, true, true, true, true
            ]
            break;
        case "B":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                false, true, true, false, true, true, false
            ]
            break;
        case "C":
            signal = [
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                false, true, false, false, false, true, false
            ]
            break;
        case "D":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                false, true, true, true, true, true, false
            ]
            break;
        case "E":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, false, false, false, true
            ]
            break;
        case "F":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, false,
                true, false, false, true, false, false, false,
                true, false, false, true, false, false, false,
                true, false, false, false, false, false, false
            ]
            break;
        case "G":
            signal = [
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, true, false, true,
                true, false, false, false, true, false, true,
                false, true, false, false, true, true, false
            ]
            break;
        case "H":
            signal = [
                true, true, true, true, true, true, true,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "I":
            signal = [
                true, false, false, false, false, false, true,
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, true
            ]
            break;
        case "J":
            signal = [
                false, false, false, false, true, true, false,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                true, true, true, true, true, true, false
            ]
            break;
        case "K":
            signal = [
                true, true, true, true, true, true, true,
                false, false, false, true, false, false, false,
                false, false, true, false, true, false, false,
                false, true, false, false, false, true, false,
                true, false, false, false, false, false, true
            ]
            break;
        case "L":
            signal = [
                true, true, true, true, true, true, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true
            ]
            break;
        case "M":
            signal = [
                true, true, true, true, true, true, true,
                false, true, false, false, false, false, false,
                false, false, true, false, false, false, false,
                false, true, false, false, false, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "N":
            signal = [
                true, true, true, true, true, true, true,
                false, false, true, false, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, false, true, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "O":
            signal = [
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                false, true, true, true, true, true, false
            ]
            break;
        case "P":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                false, true, true, true, false, false, false
            ]
            break;
        case "Q":
            signal = [
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, true, false, true,
                true, false, false, false, false, true, false,
                false, true, true, true, true, false, true
            ]
            break;
        case "R":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                false, true, true, true, false, true, true
            ]
            break;
        case "S":
            signal = [
                false, true, true, false, false, true, false,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                false, true, false, false, true, true, false
            ]
            break;
        case "T":
            signal = [
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false
            ]
            break;
        case "U":
            signal = [
                true, true, true, true, true, true, false,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                true, true, true, true, true, true, false
            ]
            break;
        case "V":
            signal = [
                true, true, true, true, true, false, false,
                false, false, false, false, false, true, false,
                false, false, false, false, false, false, true,
                false, false, false, false, false, true, false,
                true, true, true, true, true, false, false
            ]
            break;
        case "W":
            signal = [
                true, true, true, true, true, true, true,
                false, false, false, false, false, true, false,
                false, false, false, false, true, false, false,
                false, false, false, false, false, true, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "X":
            signal = [
                true, true, false, false, false, true, true,
                false, false, true, false, true, false, false,
                false, false, false, true, false, false, false,
                false, false, true, false, true, false, false,
                true, true, false, false, false, true, true
            ]
            break;
        case "Y":
            signal = [
                true, true, true, false, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, false, true, true, true,
                false, false, false, true, false, false, false,
                true, true, true, false, false, false, false
            ]
            break;
        case "Z":
            signal = [
                true, false, false, false, false, true, true,
                true, false, false, false, true, false, true,
                true, false, false, true, false, false, true,
                true, false, true, false, false, false, true,
                true, true, false, false, false, false, true
            ]
            break;
        case "0":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, true, true, true, true, true, true
            ]
            break;
        case "1":
            signal = [
                false, true, false, false, false, false, false,
                true, true, true, true, true, true, true,
            ]
            break;
        case "2":
            signal = [
                true, false, false, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, true, true, true, false, false, true
            ]
            break;
        case "3":
            signal = [
                true, false, false, false, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, true, true, true, true, true, true
            ]
            break;
        case "4":
            signal = [
                true, true, true, true, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "5":
            signal = [
                true, true, true, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, true, true, true
            ]
            break;
        case "6":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, true, true, true
            ]
            break;
        case "7":
            signal = [
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
            ]
            break;
        case "8":
            signal = [
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, true, true, true, true, true, true
            ]
            break;
        case "9":
            signal = [
                true, true, true, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, true, true, true, true, true, true
            ]
            break;
        case " ":
                signal = [
                    false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false
                ]
                break;
        case ".":
            signal = [
                false, false, false, false, false, false, true
            ]
            break;
        case ",":
            signal = [
                false, false, false, false, false, false, true,
                false, false, false, false, false, true, false
            ]
            break;
        case "'":
            signal = [
                true, true, false, false, false, false, false
            ]
            break;
        case ":":
            signal = [
                false, false, true, false, false, true, false
            ]
            break;
        case "!":
            signal = [
                true, true, true, true, true, false, true
            ]
            break;
        case "?":
            signal = [
                false, true, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, false, false, false, true, false, true,
                true, false, false, true, false, false, false,
                false, true, true, false, false, false, false
            ]
            break;
        default:
            signal = [
                false, false, false, false, false, false, false
            ]
            break;
    }
    return signal;
}