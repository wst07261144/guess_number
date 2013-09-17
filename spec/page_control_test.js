

describe("get_input_text",function(){
    it("get_input_text() pass",function(){
        document.getElementById("input1").value= "1234"
        expect(parseInt( get_input_text())).toEqual(parseInt("1234"))
    })
})



