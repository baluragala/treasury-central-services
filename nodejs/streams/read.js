const { createReadStream, createWriteStream } = require("fs");

const rs = createReadStream("../modules/events.js");
const ws = createWriteStream("events_copy.js");

// rs.on("data", data => {
//   console.log(data.toString());
//   ws.write(data);
// });

rs.pipe(ws);
