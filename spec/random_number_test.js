describe("get_random_number", function () {

    it("given random number ,then length should be 4", function () {
        expect(get_random_number().length).toEqual(4);
    })
    it("given four random number ,then the four numbers should be different", function () {
        expect(is_repeat(get_random_number())).toBeTruthy();
    })
    it("given four random number,then the numbers are random ", function () {
        expect(random_test()).toBeTruthy();

    })
});
