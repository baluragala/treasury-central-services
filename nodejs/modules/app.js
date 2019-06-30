// const { first } = require("./lib");
// const { writeFile } = require("fs");
// const arr = [1, 3, 5];
// console.log(first(arr));
// writeFile("./test.txt", "This is sample code", function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Done");
//   }
// });

const rp = require("request-promise");
const { writeFile } = require("fs").promises;
async function makeJson() {
  let result = await rp("https://randomuser.me/api/?results=5");
  await writeFile("users.json", result);
}

makeJson();
