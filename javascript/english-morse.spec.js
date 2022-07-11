import {expect, it} from "@jest/globals";
import {morseDictionary} from "./morse-dictionary";
import {translateEnglishToMorse} from "./english-morse";

//Positive tests
it("Should translate 'Hello' to ....|.|.-..|.-..|---", () => {
    const result = translateEnglishToMorse("Hello");
    expect(result).toBe("....|.|.-..|.-..|---");
})

it("Should translate 'SOS' to ...|---|...", () => {
    const result = translateEnglishToMorse("SOS");
    expect(result).toBe("...|---|...");
})

it("Should translate numbers in string form", () => {
    const result = translateEnglishToMorse("123456789");
    expect(result).toBe(".----|..---|...--|....-|.....|-....|--...|---..|----.");
})

it("Should translate special characters", () => {
    const result = translateEnglishToMorse(`+-/=:.?@&"_!(`);
    expect(result).toBe(".-.-.|-....-|-..-.|-...-|---...|.-.-.-|..--..|.--.-.|.-...|.-..-.|..--.-|-.-.--|-.--.-");
})

it("Should translate sentences", () => {
    const result = translateEnglishToMorse("This is a sentence.");
    expect(result).toBe("-|....|..|...||..|...||.-||...|.|-.|-|.|-.|-.-.|.|.-.-.-");
})

it("Should return a string", () => {
    const result = translateEnglishToMorse("Hello");
    expect(typeof result).toBe("string");
})


//Negative tests
it("Should translate remove unknown characters", () => {
    const result = translateEnglishToMorse("touché");
    expect(result).toBe("-|---|..-|-.-.|....");
})

it("Should request input when none given", () => {
    const result = translateEnglishToMorse();
    expect(result).toBe("Please input text");
})