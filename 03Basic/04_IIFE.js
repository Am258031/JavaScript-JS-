// Immediately Invoked function Expression IIFE

(function study() {
    //named IIFE
    console.log(`DB CONNECTED`);

})();

((name) => {
    // non-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);

})('Amjad')