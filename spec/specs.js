var app = require("../grader.js")

describe("the grader function", function(){


it("returns a graded based on the number range", function() {
expect(app.letterGrader(59)).toEqual("F")
});
it("returns a graded based on the number range", function() {
expect(app.letterGrader(99)).toEqual("A")
});

it("returns an average of scores", function() {
expect(app.averageScore([25,30,15,30,45])).toEqual(29)
});

it("returns a median of scores", function() {
expect(app.medianScore([52,80,80,86,94])).toEqual(80)
});
it("returns a median of scores", function() {
expect(app.medianScore([52,80,80,86,86,86,94])).toEqual(80)
});

it("returns a mode of scores", function() {
expect(app.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92)
});
it("returns a mode of scores", function() {
expect(app.modeScore([82, 92, 100, -100, 5, 5, 5, 100, 86])).toEqual(5)
});



});