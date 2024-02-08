const x = Math.floor(101 * Math.random());
console.log("I executed!");

setInterval(() => {
    console.log(`runs on shell No: ${x}`);
}, 1000);

setTimeout(() => {
    process.exit();
}, 5000);

// betch server
// crowling
