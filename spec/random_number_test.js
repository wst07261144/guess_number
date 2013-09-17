/**
 * Created with JetBrains RubyMine.
 * User: wst
 * Date: 13-9-17
 * Time: 下午4:41
 * To change this template use File | Settings | File Templates.
 */
describe("get_random_number", function () {

    it("length should be 4", function () {
        expect(get_random_number().length).toEqual(4);
    })
    it("the four numbers should be different", function () {
        expect(is_repeat(get_random_number())).toBeTruthy();
    })
    it("random numbers are produced",function(){
        expect(random_test()).toBeTruthy();

    })
});
