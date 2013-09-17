/**
 * Created with JetBrains RubyMine.
 * User: wst
 * Date: 13-9-17
 * Time: 下午4:43
 * To change this template use File | Settings | File Templates.
 */
describe("compare",function(){
    it("compares are correct",function(){
        expect(compare_numbers( "1234","5678")).toEqual("0A0B");
        expect(compare_numbers( "2467","2467")).toEqual("4A0B");
        expect(compare_numbers( "7590","5079")).toEqual("0A4B");
        expect(compare_numbers( "3506","5306")).toEqual("2A2B");
        expect(compare_numbers( "4862","4256")).toEqual("1A2B");
    })
})
