import {expect, it} from "@jest/globals";
import {translate} from "./script";


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

it("Should return a string", () => {
    const result = translate("Hello");
    expect(typeof result).toBe("string");
})