const{ filterPractice } = require("./filter.js");
test("student score", () => {
    let testScore = [50,90,73,56,40,69,20,80,85,70];
    let result = filterPractice(testScore);
    let expected = [90, 73, 80, 85, 70];
    expect(result).toBe(expected);
});


const { bookshop } = require("./filter.js");
test("student score", () => {
    let bookClub = ["emily", "jack", "Sophia", "Daniel"];    let result = filterPractice(testScore);
    let expected = {
                "Emily" : "Pride and Prejudice Jane Austen",
                "Jack" : "1984 George Orwell",
                "Sophia" : "The Great Gatsby F.Scott Fitzgerald",
                "Daniel" : "Jane Eyre Charlotte Brontë"
            };
    expect(result).toBe(expected);
});

