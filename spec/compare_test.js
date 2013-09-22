/**
 * Created with JetBrains RubyMine.
 * User: wst
 * Date: 13-9-17
 * Time: 下午4:43
 * To change this template use File | Settings | File Templates.
 */
describe("compare",function(){
    it("the result are error complete",function(){
        expect(compare_numbers( "1234","5678")).toEqual("0A0B");

    })
    it("figures are correct partial or complete but location is false",function(){
        expect(compare_numbers( "5431","4378")).toEqual("0A2B");
        expect(compare_numbers( "7590","5079")).toEqual("0A4B");

    })
    it("figures are correct partial or complete and a location is true",function(){
        expect(compare_numbers( "2765","2419")).toEqual("1A0B");
        expect(compare_numbers( "4862","4256")).toEqual("1A2B");


    })
    it("figures are correct partial or complete and two locations are true",function(){
        expect(compare_numbers( "7504","8304")).toEqual("2A0B");
        expect(compare_numbers( "3506","5306")).toEqual("2A2B");

    })
    it("three locations are true",function(){
        expect(compare_numbers( "6385","6785")).toEqual("3A0B");
        expect(compare_numbers( "2467","2467")).toEqual("4A0B");

    })
    it("you guess right",function(){
        expect(compare_numbers( "2467","2467")).toEqual("4A0B");

    })
})
