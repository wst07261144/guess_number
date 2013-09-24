
describe("compare", function () {

    it("given '1234', when user input '5678', then should be '0A0B' ", function () {
        var random_number, user_input, result;

        random_number = '1234';
        user_input = '5678';

        result = compare_numbers(random_number, user_input);

        expect(result).toEqual('0A0B');

    })
    it("given '2467', when user input '2467', then should be '4A0B' ", function () {
        var random_number, user_input, result;

        random_number = '2467';
        user_input = '2467';

        result = compare_numbers(random_number, user_input);
        expect(result).toEqual("4A0B");

    })


    it("given '7590', when user input '5079', then should be '0A4B' ", function () {
        var random_number, user_input, result;

        random_number = '7590';
        user_input = '5079';

        result = compare_numbers(random_number, user_input);
        expect(result).toEqual("0A4B");

    })
    it("given '2765', when user input '2319', then should be '1A0B' ", function () {
        var random_number, user_input, result;

        random_number = '2765';
        user_input = '2319';

        result = compare_numbers(random_number, user_input);
        expect(result).toEqual("1A0B");

    })
    it("given '3506', when user input '5306', then should be '2A2B' ", function () {
        var random_number, user_input, result;

        random_number = '3506';
        user_input = '5306';

        result = compare_numbers(random_number, user_input);
        expect(result).toEqual("2A2B");

    })
    it("given '4862', when user input '4256', then should be '1A2B' ", function () {
        var random_number, user_input, result;

        random_number = '4862';
        user_input = '4256';

        result = compare_numbers(random_number, user_input);
        expect(result).toEqual("1A2B");

    })


})
