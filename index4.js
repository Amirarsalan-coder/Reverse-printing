let p;
let array = [];
let i = 0;

do {
  p = Number(prompt());
  if (p === 0) {
    console.log(p);
    break;
  }
  array[i] = p;
  console.log(p);
  i++;
} while (p > 0 && p < 1000);

for (i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
