const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("Running this every minute", Date.now());
});
