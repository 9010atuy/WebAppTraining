const MAX_COUNT = 99;
for (let i = 1; i <= MAX_COUNT; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz ${i}`);
  } else if (i % 3 == 0) {
    console.log(`Fizz ${i}`);
  } else if (i % 5 == 0) {
    console.log(`Buzz ${i}`);
  }
}
