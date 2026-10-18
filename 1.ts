/*Buatlah Pola Segitiga dari NIM, Ambil digit terakhir NIM Anda sebagai height segitiga.
Contoh: NIM 230411013  (digit terakhir = 3,  height segitiga = 3). Buat program TypeScript
untuk mencetak segitiga angka dengan pola berikut:
1
1 2
1 2 3
Jika height segitiga = 5, maka baris terakhir menampilkan angka 1 sampai 5, dan seterusnya.
*/

/*
 * Algoritma:
 * 1. Ambil digit terakhir NIM
 * 2. Gunakan digit tersebut sebagai tinggi segitiga
 * 3. Cetak pola segitiga angka
 */

// ? Define nim 
const nim: string = "044731275";

// ? Find last digit of NIM & change it to number type
const findLastDigit: number = parseInt(nim.charAt(nim.length - 1));
const heightTriangle: number = findLastDigit;

console.log(`NIM                : ${nim}`);
console.log(`Digit Terakhir     : ${findLastDigit}`);
console.log(`Tinggi Segitiga    : ${heightTriangle}\n`);

// ? Function to print the pattern based on the height of the triangle
function triangleResult(height: number): void {
  // ? Validation to check the height <= 0
    if (height <= 0) {
        console.log("Tinggi segitiga minimal 1.");
        return;
    }
    // ? height = 5
    for (let i = 1; i <= height; i++) {
        let row: string = "";
        for (let j = 1; j <= i; j++) {
            // ? Add number & space between the numbers
            row += j + (j < i ? " " : "");
        }
        console.log(row);
    }
}

// ? Call the function to print the triangle pattern
(heightTriangle);
(triangleResult(heightTriangle));