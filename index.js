function mapToNegativize(arr) {
    let negArr = [];

    for(let x of arr) {
        negArr.push(x * -1);
    }
    return negArr;
}

function mapToNoChange(arr) {
    let newArr = [];

    for(let x of arr) {
        newArr.push(x);
    }
    return newArr;
}

function mapToDouble(arr) {
    let newArr = [];

    for(let x of arr) {
        newArr.push(x * 2);
    }
    return newArr;
}

function mapToSquare(arr) {
    let newArr = [];

    for (let x of arr) {
        newArr.push(x * x);
    }
    return newArr;
}

function reduceToTotal(arr, startingPoint = 0) {
    let sum = startingPoint;
    
    for(let x of arr) {
        sum += x;
    }
    return sum;
}

function reduceToAllTrue(arr) {
    for (let x of arr) {
        if (!x) {
            return false
        } 
    }
    return true;
}

function reduceToAnyTrue(arr) {
    for (let x of arr) {
        if (x) {
            return true;
        } 
    }
    return false;   
}
