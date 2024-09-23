const { numbers } = require("./arraySorting.js");
test("test to extract keys and value in element" , ()=> {
    let number = [1,1,2,3,2];
    let result = numbers(number)
    let expected = {"1" : 2,
                    "2" : 2,
                    "3" : 1
                }
    expect(expected).tobe(result);
});
