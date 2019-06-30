function t1() {
  console.log(1);
  console.log(2);
}

function t2(cb, nextCb) {
  setTimeout(function() {
    console.log(3);
    console.log(4);
    cb(nextCb);
  }, 1000);
}

function t3(cb) {
  console.log(5);
  console.log(6);
  cb();
}

function t4() {
  setTimeout(function() {
    console.log(8);
    console.log(9);
  }, 500);
}

function doWork() {
  t1();
  t2(t3, t4);
}

doWork();
