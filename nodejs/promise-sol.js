function t1() {
  console.log(1);
  console.log(2);
}

function t2() {
  let p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(3);
      console.log(4);
      reject("failed");
    }, 1000);
  });
  return p;
}

function t3() {
  console.log(5);
  console.log(6);
}

function t4() {
  let p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(8);
      console.log(9);
      resolve();
    }, 500);
  });
  return p;
}

function doWork() {
  Promise.resolve()
    .then(function() {
      t1();
    })
    .then(function() {
      return t2();
    })
    .catch(function() {
      console.log("step 2 failed and caught");
    })
    .then(function() {
      t3();
    })
    .then(function() {
      return t4();
    })
    .then(function() {
      console.log("done");
    })
    .catch(function(err) {
      console.log(err);
    });
}

doWork();
