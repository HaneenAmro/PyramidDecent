const pyramidDescent = require('./pyramid.js');

describe('Pyramid', () => {


    test('should work with big pyramid sample', () => {
        const pyramid = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];
        expect(pyramidDescent(pyramid, 720)).toBe('LRLL');
    })

    test('should work with smaller pyramid sample', () => {
        const pyramid = [[1], [2, 3], [4, 1, 1]];
        expect(pyramidDescent(pyramid, 2)).toBe('LR');
    })

});