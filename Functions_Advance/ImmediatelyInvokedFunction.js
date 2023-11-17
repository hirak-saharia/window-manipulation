/*
Immediateky invoked functions expressions- Sometimes in JavaScript, we need a function that is only executed once. And then never again. So basically a function that disappears right after it's called once.

-- For example, with something called async/await.
*/

const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

//Way-1 Immediately invoked function expression
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

console.log(isPrivate);

//Way-2 Arrow function for Immediately Invoked
(() => console.log('This will ALSO never run again'))
();


{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);