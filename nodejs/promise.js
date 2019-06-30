let p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "1 Promise done!!" });
  }, 1000);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "2 Promise done!!" });
  }, 100);
});

let p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "3 Promise done!!" });
  }, 300);
});

// p.then(function(data) {
//   console.log(data);
// }).catch(function(err) {
//   console.log(err);
// });

Promise.race([p1, p2, p3]).then(results => {
  console.log(results);
});

Promise.all([p1, p2, p3]).then(results => {
  console.log(results);
});
