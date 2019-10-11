async function run() {
  for (var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(i);
  }
}

async function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

run();