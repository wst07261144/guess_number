describe("get_result", function () {
    it("the result are correct", function () {
        localStorage.setItem("fixed", "1234");
        localStorage.setItem("key", "1");
        expect(get_result("5678")[0]).toEqual("2");
        expect(get_result("5678")[1]).toEqual("0A0B");
    })

})
describe("six_controller", function () {
    it("You win", function () {
        six_controller("1", "4A0B");
        expect(document.getElementById("output").value).toEqual("You win");
        expect(document.getElementById("prompt").value).toEqual("You guessed " + guessed_times() + " times");
    })
    it("you also have " + chance_times() + " chance", function () {
        six_controller("8", "1A2B");
        expect(document.getElementById("output").value).toEqual("1A2B");
        expect(document.getElementById("prompt").value).toEqual("you just have " + chance_times() + " chance");
    })
    it("Game over", function () {
        six_controller("10", "4A0B");
        expect(document.getElementById("output").value).toEqual("Game over");
        expect(document.getElementById("prompt").value).toEqual("You have guessed 6 times");
        six_controller("11", "2A2B");
        expect(document.getElementById("output").value).toEqual("Game over");
        expect(document.getElementById("prompt").value).toEqual("You have guessed 6 times");
        page_Inti();
    })
})





