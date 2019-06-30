function first(arr) {
  return arr[0];
}

function last(arr) {
  return arr[arr.length - 1];
}

const { EventEmitter } = require("events");

const LogEvents = new EventEmitter();

const LOG_EVENTS = {
  INFO: "INFO",
  WARN: "WARN"
};

LogEvents.on(LOG_EVENTS.INFO, message =>
  console.log(`INFO: ${JSON.stringify(message)}`)
);
LogEvents.on(LOG_EVENTS.WARN, message =>
  console.log(`WARN: ${JSON.stringify(message)}`)
);

module.exports = { first, last, LOG_EVENTS, LogEvents };
