// The Promise object represents the eventual completion 
// (or failure) of an asynchronous operation, and its resulting value

// Essentially, a promise is a returned object to which you
// attach callbacks, instead of passing callbacks into a function.


function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
    console.log("error in generating audio file: " + error);
}

createAudioFileAsync(audioSetting, successCallback, failureCallback);

// If createAudioFileAsync() were rewritten to return a promise, using it could be as simple as this:

const promise = createAudioFileAsync(audioSetting);
promise.then(successCallback, failureCallback);


// chaining
// A common need is to execute two or more asynchronous operations back to back

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

// OR 
const promise2 = doSomething().then(successCallback, failureCallback);

// This second promise (promise2) represents the completion not just of doSomething(),
//  but also of the successCallback or failureCallback you passed in, which can be other
// asynchronous functions returning a promise. When that's the case, any callbacks added 
// to promise2 get queued behind the promise returned by either successCallback or failureCallback.


// In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
            console.log("Got the final result: " + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);



// With modern functions, we attach our callbacks to
//  the returned promises instead, forming a promise chain:

doSomething()
.then(function(result) {
 return doSomethingElse(result);
})
.then(function(newResult) {
 return doThirdThing(newResult);
})
.then(function(finalResult) {
    console.log("Got the final result: " + finalResult);
})
.catch(failureCallback);


// arrow function shorthand
doSomething()
.then( result => {
 return doSomethingElse(result);
})
.then(newResult => {
    return doThirdThing(newResult);
})
.then(finalResult => {
    console.log("Got the final result" + finalResult);
})
.catch(failureCallback);



// chaining after catch 
// It's possible to chain after a failure, i.e. a catch,
//  which is useful to accomplish new actions even after an action failed in the chain. 
new Promise((resolve, reject) => {
    console.log("Initial");

    resolve();
})
.then(() => {
    throw new Error("Something failed");

    console.log("Do this:");
})
.catch(() => {
    console.log("Do that:");
})

.then(() => {
    console.log("Do this no matter what happen before");
})







// after a catch It's possible to chain after a failure,
//  i.e. a catch, which is useful to accomplish new actions even after
//   an action failed in the chain. Read the following example

new Promise((reject, resolve) => {
    console.log("intial");
 
    resolve();
 
 })
 .then(() => {
     throw new error("Something went wrong!");
 
     console.log("Do this!");
 })
 
 .catch(() => {
     console.error("Do that!");
 })
 
 .then(() => {
 console.log("Do that, no matter what happened!");
 
 })
 
 

//  Promise rejection events
// Whenever a promise is rejected, one of two events is sent to the global scope (generally, this is either the window 
// or, if being used in a web worker, it's the Worker or other worker-based interface). The two events are:

// rejectionhandled
// Sent when a promise is rejected, after that rejection has been handled by the executor's reject function.
// unhandledrejection
// Sent when a promise is rejected but there is no rejection handler available.



// Creating a Promise around an old callback API
// A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.

setTimeout(() => saySomething("10 seconds passed"), 10*1000);

// Luckily we can wrap setTimeout in a promise.
//  Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10* 2000).then(() => saySomething("10 second"))
.catch(failureCallback);



// composition

// Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively.
//  This can be useful at times.
// Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.

