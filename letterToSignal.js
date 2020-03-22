function letterToSignal(letter) {
    switch(letter) {
        case "A":
            signal = [
                false, false, false, false, false, false, false,
                false, true, true, true, true, true, true,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                false, true, true, true, true, true, true
            ]
            break;
        case "B":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                false, true, true, false, true, true, false
            ]
            break;
        case "C":
            signal = [
                false, false, false, false, false, false, false,
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                false, true, false, false, false, true, false
            ]
            break;
        case "D":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                false, true, true, true, true, true, false
            ]
            break;
        case "E":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, false, false, false, true
            ]
            break;
        case "F":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, false,
                true, false, false, true, false, false, false,
                true, false, false, true, false, false, false,
                true, false, false, false, false, false, false
            ]
            break;
        case "G":
            signal = [
                false, false, false, false, false, false, false,
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, true, false, true,
                true, false, false, false, true, false, true,
                false, true, false, false, true, true, false
            ]
            break;
        case "H":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "I":
            signal = [
                false, false, false, false, false, false, false,
                true, false, false, false, false, false, true,
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, true
            ]
            break;
        case "J":
            signal = [
                false, false, false, false, false, false, false,
                false, false, false, false, true, true, false,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                true, true, true, true, true, true, false
            ]
            break;
        case "K":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                false, false, false, true, false, false, false,
                false, false, true, false, true, false, false,
                false, true, false, false, false, true, false,
                true, false, false, false, false, false, true
            ]
            break;
        case "L":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true
            ]
            break;
        case "M":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                false, true, false, false, false, false, false,
                false, false, true, false, false, false, false,
                false, true, false, false, false, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "N":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                false, false, true, false, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, false, true, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "O":
            signal = [
                false, false, false, false, false, false, false,
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                false, true, true, true, true, true, false
            ]
            break;
        case "P":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                false, true, true, true, false, false, false
            ]
            break;
        case "Q":
            signal = [
                false, false, false, false, false, false, false,
                false, true, true, true, true, true, false,
                true, false, false, false, false, false, true,
                true, false, false, false, true, false, true,
                true, false, false, false, false, true, false,
                false, true, true, true, true, false, true
            ]
            break;
        case "R":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                true, false, false, false, true, false, false,
                false, true, true, true, false, true, true
            ]
            break;
        case "S":
            signal = [
                false, false, false, false, false, false, false,
                false, true, true, false, false, true, false,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                false, true, false, false, true, true, false
            ]
            break;
        case "T":
            signal = [
                false, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false
            ]
            break;
        case "U":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, false,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                false, false, false, false, false, false, true,
                true, true, true, true, true, true, false
            ]
            break;
        case "V":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, false, false,
                false, false, false, false, false, true, false,
                false, false, false, false, false, false, true,
                false, false, false, false, false, true, false,
                true, true, true, true, true, false, false
            ]
            break;
        case "W":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                false, false, false, false, false, true, false,
                false, false, false, false, true, false, false,
                false, false, false, false, false, true, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "X":
            signal = [
                false, false, false, false, false, false, false,
                true, true, false, false, false, true, true,
                false, false, true, false, true, false, false,
                false, false, false, true, false, false, false,
                false, false, true, false, true, false, false,
                true, true, false, false, false, true, true
            ]
            break;
        case "Y":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, false, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, false, true, true, true,
                false, false, false, true, false, false, false,
                true, true, true, false, false, false, false
            ]
            break;
        case "Z":
            signal = [
                false, false, false, false, false, false, false,
                true, false, false, false, false, true, true,
                true, false, false, false, true, false, true,
                true, false, false, true, false, false, true,
                true, false, true, false, false, false, true,
                true, true, false, false, false, false, true
            ]
            break;
        case "0":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, false, false, false, false, false, true,
                true, true, true, true, true, true, true
            ]
            break;
        case "1":
            signal = [
                false, false, false, false, false, false, false,
                false, true, false, false, false, false, false,
                true, true, true, true, true, true, true,
            ]
            break;
        case "2":
            signal = [
                false, false, false, false, false, false, false,
                true, false, false, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, true, true, true, false, false, true
            ]
            break;
        case "3":
            signal = [
                false, false, false, false, false, false, false,
                true, false, false, false, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, true, true, true, true, true, true
            ]
            break;
        case "4":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                false, false, false, true, false, false, false,
                true, true, true, true, true, true, true
            ]
            break;
        case "5":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, true, true, true
            ]
            break;
        case "6":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, true, true, true
            ]
            break;
        case "7":
            signal = [
                false, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
            ]
            break;
        case "8":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, true, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, false, false, true, false, false, true,
                true, true, true, true, true, true, true
            ]
            break;
        case "9":
            signal = [
                false, false, false, false, false, false, false,
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
                    false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false
                ]
                break;
        case ".":
            signal = [
                false, false, false, false, false, false, false,
                false, false, false, false, false, false, true
            ]
            break;
        case ",":
            signal = [
                false, false, false, false, false, false, false,
                false, false, false, false, false, false, true,
                false, false, false, false, false, true, false
            ]
            break;
        case "'":
            signal = [
                false, false, false, false, false, false, false,
                true, true, false, false, false, false, false
            ]
            break;
        case ":":
            signal = [
                false, false, false, false, false, false, false,
                false, false, true, false, false, true, false
            ]
            break;
        case "!":
            signal = [
                false, false, false, false, false, false, false,
                true, true, true, true, true, false, true
            ]
            break;
        case "?":
            signal = [
                false, false, false, false, false, false, false,
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