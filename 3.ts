/*
Buatlah Bilangan Prima dari NIM. Ambil 2 digit terakhir NIM dan tambahkan 10, jadikan batas akhir pencarian bilangan prima.
Buat program TypeScript untuk menampilkan semua bilangan prima dari 1 sampai batas tersebut.
Contoh: NIM 230411013, 2 digit terakhir  yaitu 13 ditambah 10, sehingga menjadi 23 (batas akhir)
Output: 2, 3, 5, 7, 11, 13, 17, 19, 23
*/
// Bilangan Prima adalah bilangan yang hanya memiliki 2 faktor yaitu 1 dan bilangan itu sendiri. Bilangan prima dimulai dari angka 2, karena angka 1 bukanlah bilangan prima.
// 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97

/* Algoritma:
 * 1. Ambil 2 digit terakhir NIM
 * 2. Tambahkan 10 ke digit tersebut untuk mendapatkan batas akhir
 * 3. Cari semua bilangan prima dari 1 sampai batas akhir
 */

//? Solution 1 
const nim: string = "044731271";

// 1. Taking 2 last digits and adding 10 as the upper limit
const findLastTwoDigits: number = parseInt(nim.slice(-2));
const limit: number = findLastTwoDigits + 10;

// Function to check if a number is prime
function checkPrimeNumber(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Finding all prime numbers from 1 to the upper limit
const primeNumbers: number[] = [];
for (let i = 1; i <= limit; i++) {
    if (checkPrimeNumber(i)) {
        primeNumbers.push(i);
    }
}

// Displaying the results in the console
console.log(`NIM                : ${nim}`);
console.log(`2 Digit Terakhir   : ${findLastTwoDigits}`);
console.log(`Batas Akhir (+ 10) : ${limit}`);
console.log(`Bilangan Prima     : ${primeNumbers.join(", ")}`);

// ? Solution 2

// const nim : string = "044731271";
// const limit : number = Number(nim.slice(-2)) + 10;

// const isPrime : (n: number) => boolean = (n: number): boolean => {
//   for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
//   return n > 1;
// };

// const primes : number[] = Array.from({ length: limit }, (_, i) => i + 1).filter(isPrime);

// console.log(`NIM                : ${nim}`);
// console.log(`2 Digit Terakhir   : ${limit - 10}`);
// console.log(`Batas Akhir (+ 10) : ${limit}`);
// console.log(`Bilangan Prima     : ${primes.join(", ")}`);
