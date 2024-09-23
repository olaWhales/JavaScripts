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


const { grades } = require("./filter.js");
test("add 5 to each score", () => {
    let testScore = [85, 92, 78, 88, 95];
    let result = grades(testScore);
    let expected = [90, 97, 83, 93, 100];
    expect(result).toBe(expected);
});

const { square } = require("./filter.js");
test("squaroot of the score", () => {
    let testScore = [2, 4, 6, 8, 10];
    let result = grades(testScore);
    let expected = [4, 16, 36, 64, 100];
    expect(result).toBe(expected);
});




