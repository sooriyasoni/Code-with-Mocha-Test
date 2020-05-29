const check = require('../q2');
//const expect = require('chai').expect;
const fs = require('fs');
const assert = require('assert').strict;

// one actual .tsv file and one test file for test
var actualFile = fs.readFileSync("general.tsv", "utf8");
var testFile = fs.readFileSync("checkSumTest.tsv", "utf8");

describe('check()', function () {
    //lets fail the test by passing invalid argument
    it('test should return 0 if the input is not a number string', function () {
        assert.equal(check(1), 0);
        //we can also use expect here

    });

    //Test with empty file should return 0
    context('without arguments to check if it returns 0', function () {
        it('should return 0', function () {
            assert.equal(check(), 0);
            //we can also use expect here
            // expect(check()).to.equal(0);
        })
    })

    // tests to check with valid .tsv files
    context('with file argument', function () {
        it('should return the checksum of actual tsv', function () {
            assert.equal(check(actualFile), 32121);
            //we can also use expect here
            // expect(check(actualFile)).to.equal(32121)
        })
        it('should return the checksum of testfile.tsv', function () {
            assert.equal(check(testFile), 18);
            //we can also use expect here
            // expect(check(testFile)).to.equal(18)

        })
    })
})