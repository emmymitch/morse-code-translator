import morseDictionary from "./javascript/morse-dictionary.js";

// const morseDictionary = {
//     a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..",
//     j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.",
//     s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--..",
//     "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
//     "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
//     "+": ".-.-.", "-": "-....-", "/": "-..-.", "=": "-...-", ":": "---...", ".": ".-.-.-",
//     "$": "...-..-", "?": "..--..", "@": ".--.-.", "&": ".-...", '"': ".-..-.", "_": "..--.-",
//     "!": "-.-.--", "(": "-.--.-", ")": "-.--.-"
// }


export const translateEnglishToMorse = (english) => {
    const morseTranslation = [];
    const charArr = english.split("");

    for (let i=0; i<charArr.length; i++){

        //Keep spaces via an element containing an empty string
        if (charArr[i] == " "){
            morseTranslation.push("");

        //Remove unknown characters
        } else if (morseDictionary[charArr[i]] == undefined){
            continue;

        } else {
            morseTranslation.push(morseDictionary[charArr[i]]);
        }
    }
    return morseTranslation.join("|");
}

console.log(translateEnglishToMorse("it's too hot today"));