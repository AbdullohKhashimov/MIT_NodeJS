// const cluster = require("cluster");

// const instanceCPUs = require("os").cpus();

// if (cluster.isMaster) {
//     console.log(`Master thread via process id => ${process.pid}`);

//     instanceCPUs.map((ele) => {
//         cluster.fork();
//     });
// } else {
//     console.log(`Worker thread via process id => ${process.pid}`);
// }

const schedule = require("node-schedule");
const shell = require("shelljs");

schedule.scheduleJob("*/10 * * * * *", () => {
    console.log("10th second");
    shell.exec("node ztester.js", { async: true });
});
