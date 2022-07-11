import {morseDictionary} from "./javascript/morse-dictionary.js";
import {translateEnglishToMorse} from "./javascript/english-morse.js";

const translatorInput = document.querySelector(".input-box");
const translatorOutput = document.querySelector(".translator-output");

const displayEnglishToMorseTranslation = () => {
    const input = event.target.value;
    translatorOutput.innerText = translateEnglishToMorse(input);
}

translatorInput.addEventListener("change", displayEnglishToMorseTranslation);