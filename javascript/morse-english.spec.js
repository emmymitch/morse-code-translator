import {expect, it} from "@jest/globals";
import {morseDictionary} from "./morse-dictionary";
import {translateMorseToEnglish} from "./morse-english";

//Positive tests
it("Should translate .... | . | .-.. | .-.. | --- to 'hello'", () => {
    const result = translateMorseToEnglish(".... | . | .-.. | .-.. | ---");
    expect(result).toBe("hello");
})

it("Should translate ... | --- | ... to 'sos'", () => {
    const result = translateMorseToEnglish("... | --- | ...");
    expect(result).toBe("sos");
})

it("Should translate numbers", () => {
    const result = translateMorseToEnglish(".---- | ..--- | ...-- | ....- | ..... | -.... | --... | ---.. | ----.");
    expect(result).toBe("123456789");
})

it("Should translate special characters", () => {
    const result = translateMorseToEnglish(".-.-. | -....- | -..-. | -...- | ---... | .-.-.- | ..--.. | .--.-. | .-... | .-..-. | ..--.- | -.-.-- | -.--.-");
    expect(result).toBe(`+-/=:.?@&"_!(`);
})

it("Should translate sentences", () => {
    const result = translateMorseToEnglish("- | .... | .. | ... | | .. | ... | | .- | | ... | . | -. | - | . | -. | -.-. | . | .-.-.-");
    expect(result).toBe("this is a sentence.");
})

it("Should return a string", () => {
    const result = translateMorseToEnglish("... | --- | ...");
    expect(typeof result).toBe("string");
})


//Negative tests
it("Should request input when none given", () => {
    const result = translateMorseToEnglish();
    expect(result).toBe("Please input text");
})