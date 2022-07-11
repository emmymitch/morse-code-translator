import morseDictionary from "./morse-dictionary.js";

export const translateEnglishToMorse = (english) => {
    const morseTranslation = [];

    if (english == undefined){
        return "Please input text";
    }

    const charArr = english.split("");

    for (let i=0; i<charArr.length; i++){
        //Keep spaces via an element containing an empty string
        if (charArr[i] == " "){
            morseTranslation.push("");

        //Remove unknown characters
        } else if (morseDictionary[charArr[i].toLowerCase()] == undefined){
            continue;

        } else {
            morseTranslation.push(morseDictionary[charArr[i].toLowerCase()]);
        }
    }
    return morseTranslation.join("|");
}
