const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------

const { EventEmitter } = require("events");
const { LOG_EVENTS, LogEvents } = require("./lib");
const counterEvents = new EventEmitter();

const INIT = "INIT";
const INC = "INC";
const DEC = "DEC";

let counter = 0;

counterEvents.on(INIT, function(args) {
  console.log("1", args);
  const newArgs = { ...args };
  newArgs.first = true;
  console.log({ newArgs });
});

counterEvents.on(INIT, function(args) {
  console.log("2", args);
});

counterEvents.on(INIT, function(args) {
  console.log("3", args);
});
counterEvents.on(INIT, function(args) {
  console.log("4", args);
});

counterEvents.on(INC, n => {
  LogEvents.emit(LOG_EVENTS.INFO, `Received INC event with args ${n}`);
  counter += n;
});

counterEvents.on(DEC, n => {
  counter -= n;
});

counterEvents.emit(INIT, { message: "start init" });
counterEvents.emit(INC, 1);
counterEvents.emit(INC, 2);
counterEvents.emit(INC, 3);
counterEvents.emit(INC, 4);
console.log({ counter });

///------------- END ------------
