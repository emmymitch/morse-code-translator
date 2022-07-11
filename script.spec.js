import {expect, it} from "@jest/globals";
import {translate} from "./script";

//Positive tests
it("Should translate 'Hello' to ....|.|.-..|.-..|---", () => {
    const result = translate("Hello");
    expect(result).toBe("....|.|.-..|.-..|---")
})

it("Should translate numbers in string form", () => {
    const result = translate("123456789");
    expect(result).toBe(".----|..---|...--|....-|.....|-....|--...|---..|----.");
})

it("Should translate special characters", () => {
    const result = translate(`+-/=:.$?@&"_!(`);
    expect(result).toBe("  -....-|-..-.|-...-|---...|.-.-.-|..--..|.--.-.|.-...|.-..-.|..--.-|-.-.--|-.--.-");
})

it("Should translate sentences", () => {
    const result = translate("This is a sentence.");
    expect(result).toBe("-|....|..|...||..|...||.-||...|.|-.|-|.|-.|-.-.|.||.-.-.-");
})

it("Should return a string", () => {
    const result = translate("Hello");
    expect(typeof result).toBe("string");
})


//Negative tests
it("Should translate unknown characters as unknown", () => {
    const result = translate("touché");
    expect(result).toBe("-|---|..-|-.-.|....|unknown");
})

it("Should request input when none given", () => {
    const result = translate();
    expect(result).toBe("Please input text");
})