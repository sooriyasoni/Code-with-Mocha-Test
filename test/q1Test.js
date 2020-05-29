const check = require('../q1');
//const expect = require('chai').expect;
const assert = require('assert').strict;

describe('check()', function () {
    context('without or Invalid arguments', function () {

        // test by passing invalid argument using assert
        it('test if input is not valid or not a number string', function () {
            assert.equal(check(1), 0);
            //expect(check(1)).to.equal(0)
        });

        // test if there is no argument passed
        it('should return 0', function () {
            assert.equal(check(), 0);
            //expect(check()).to.equal(0)
        })
    })

    //tests to check if the data equals to valid checksum data 
    context('with valid arguments', function () {
        it('should return the checksum for 1122 which is 3', function () {
            assert.equal(check('1122'), 3);
            //expect(check('1122')).to.equal(3)
        })
        it('should return the checksum for 9898909 which is 9', function () {
            assert.equal(check('9898909'), 9);
            //expect(check('9898909')).to.equal(9)
        })
    })
})
