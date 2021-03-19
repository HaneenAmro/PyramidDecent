//A Pyramid Descent Puzzle consists of a pyramid of positive integers. 
//To solve the puzzle, you must find a path that traverses the pyramid from top to bottom visiting numbers whose product is a 
//given target value. Each step in the path must go down one row, and go either one step to the left or one step 
//to the right. 


//inputs: array of arrays(pyramid) , integer(target)

//output: string 


const pyramidDecent = (pyramid, target) => {
    result = [];
    const checkProduct = (product, x, y) => {

        product = product / pyramid[x][y];
        // if the product equal to target and x equal to the pyrmid length 
        if (product === 1 && x === pyramid.length - 1) {
            return true;
        } else if (x === pyramid.length - 1) {
            return false;
        }
        x++;
        //check the left child 
        //recursive case
        if (product % pyramid[x][y] === 0) {
            result.push('L');
            if (!checkProduct(product, x, y)) {
                result.pop();
            } else {
                return true;
            }
        }
        //check the right child
        //recursive case 
        if (product % pyramid[x][y + 1] === 0) {
            result.push('R');
            if (!checkProduct(product, x, y + 1)) {
                result.pop();
            } else {
                return true;
            }
        }
    };

    checkProduct(target, 0, 0);
    console.log(result);
    return result.join('');
    
};

module.exports = pyramidDecent;