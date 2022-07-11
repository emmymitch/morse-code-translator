import morseDictionary from "./morse-dictionary.js";

export const translateMorseToEnglish = (morse) => {
    const miniDic = Object.entries(morseDictionary);

    if (morse == undefined){
        return "Please input text";
    }

    //Split into morse words
    const morseWordsArr = morse.split(" | | ");
    //Split words into letters in a 2D array
    const splitWordsArr = morseWordsArr.map(word => {
        return word.split(" | ");
    });

    //Iterates over both levels of splitWordsArr
    for (let i=0; i<splitWordsArr.length; i++){
        for (let j=0; j<splitWordsArr[i].length; j++){

            //Iterate over entries array
            for (let k=0; k<miniDic.length; k++){
                if (splitWordsArr[i][j] == miniDic[k][1]){
                    splitWordsArr[i][j] = miniDic[k][0];
                }
            }
        }
        splitWordsArr[i] = splitWordsArr[i].join("");
    }
    return splitWordsArr.join(" ");
}