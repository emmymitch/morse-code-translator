import morseDictionary from "./morse-dictionary.js";

export const translateMorseToEnglish = (morse) => {
    let englishTranslation = "";

    if (morse == undefined){
        return "Please input text";
    }

    const morseArr = morse.split(" | ");

    const miniDic = Object.entries(morseDictionary);
    console.log(miniDic);
    for (let i=0; i<morseArr.length; i++){
        for (let j=0; j<miniDic.length; j++){
            
            if (morseArr[i] == miniDic[j][1]){
                englishTranslation += miniDic[j][0];

            } else if (morseArr[i] == " "){
                englishTranslation += " ";

            } else {
                continue;
            }
        }

    }

    return englishTranslation;
}