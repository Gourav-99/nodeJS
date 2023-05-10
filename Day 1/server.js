// console.log("hello world");
// // console.log(document);
// console.log(module);
// const fs = require("fs");
// console.log(fs);

// const math = require("./math");
// console.log(math.add(1, 3, 5, 6, 7, 8));
// console.log(math);
const fs = require("fs");
fs.writeFile("./temp.txt", "this is string", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file created");
});
