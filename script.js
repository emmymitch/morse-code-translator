import {morseDictionary} from "./javascript/morse-dictionary.js";
import {translateEnglishToMorse} from "./javascript/english-morse.js";
import { translateMorseToEnglish } from "./javascript/morse-english.js";

const translatorInput = document.querySelector(".main__input-box");
const translatorOutput = document.querySelector(".translator-output");
const EngToMorseButton = document.querySelector("#buttonEngMorse");
const MorseToEngButton = document.querySelector("#buttonMorseEng");

const displayEnglishToMorseTranslation = () => {
    const input = translatorInput.value;
    translatorOutput.innerText = translateEnglishToMorse(input);
}

const displayMorseToEnglishTranslation = () => {
    const input = translatorInput.value;
    translatorOutput.innerText = translateMorseToEnglish(input);
}

EngToMorseButton.addEventListener("click", displayEnglishToMorseTranslation);
MorseToEngButton.addEventListener("click", displayMorseToEnglishTranslation);