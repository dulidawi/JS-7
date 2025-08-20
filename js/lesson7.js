let array = [1, 2, 3];
array[1] = 10;
console.log(array);

let string = ["м", "і", "к"];
string[3] = "b";
console.log(string);

let numbers = [1, 3, 5, 4, 3];
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

let sum = 0;
let list = [3, 5, 6, 45, 67, 89];
for (const q of list) {
  sum += q;
}
console.log(sum);


let phrases = ["Код", "Програмування", "Сонце", "Інтерфейс", "День"];
for (const w of phrases) {
  if (w.length > 5) {
      console.log(w);
  }

}

let numb = [1, 4, 5, 3, 89, 45, 6, 345, 23,];
let maximumNumber = numb[0]
for (let m = 0; m <= numb.length; m += 1) {
    if (maximumNumber < numb[m]) {
        maximumNumber = numb[m]
    }
}
console.log(maximumNumber);

let numberList = [4, 6, 7, 3, 2, 34, 56, 89, 6, 4, 1,];
for (const p of numberList) {
    if (p % 2 === 1) {
        continue
    }
    console.log(p);    
}

