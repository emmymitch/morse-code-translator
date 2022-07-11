import {morseDictionary} from "./javascript/morse-dictionary.js";
import {translateEnglishToMorse} from "./javascript/english-morse.js";

const translatorInput = document.querySelector(".input-box");
const translatorOutput = document.querySelector(".translator-output");
const EngToMorseButton = document.querySelector("#buttonEngMorse");

const displayEnglishToMorseTranslation = () => {
    const input = translatorInput.value;
    translatorOutput.innerText = translateEnglishToMorse(input);
}

EngToMorseButton.addEventListener("click", displayEnglishToMorseTranslation);