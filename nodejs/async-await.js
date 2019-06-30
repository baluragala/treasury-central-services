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

async function doWork() {
  try {
    t1();
    await t2();
    t3();
    await t4();
    console.log("done");
  } catch (err) {
    console.log(err);
  }
}

doWork();
