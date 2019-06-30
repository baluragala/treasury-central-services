var x = 20;
function test() {
  if (false) {
    let x = 10;
    console.log(x);
  }
  console.log(x);
}

test();

function sum(a, b, ...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count += args[i];
  }
  console.log(count);
}
