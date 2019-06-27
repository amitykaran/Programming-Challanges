function firstFunction() {
    console.log('You are in first function');
    setImmediate(function(){
        console.log('You are in first function setimmediate');
        secondFunction();
    });
    setTimeout(function(){
        console.log('You are in first function call-back');
        secondFunction();
    }, 0);
    secondFunction();
}

function secondFunction() {
    console.log('You are in second function');
    setTimeout(function(){
        console.log('You are in second function call-back');
        thirdFunction();
    }, 0);
    thirdFunction();
}

function thirdFunction() {
    console.log('You are in third function');
    setTimeout(function(){
        console.log('You are in third function call-back');
        fourthFunction();
    }, 0);
    fourthFunction();
}

function fourthFunction() {
    console.log('You are in fourth function');
    setTimeout(function(){
        console.log('You are in fourth function call-back');
        fifthFunction();
    }, 0);
    fifthFunction();
}

function fifthFunction() {
    console.log('You are in fifth function');
    setTimeout(function(){
        console.log('You are in fifth function call-back');
    }, 10);
}

firstFunction();

function setTimeoutAndSetImmediateComparision() {
    console.log('You are in setTimeoutAndSetImmediateComparision function');
    fifthFunction();
    setImmediate(function () {
        console.log('You are in setImmediate-callback');
    });
    setTimeout(function () {
        console.log('You are in seTimeout-callback');
    }, 9);
}
setTimeoutAndSetImmediateComparision();