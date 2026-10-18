/*
Buatlah Deret Aritmatika dengan NIM. Ambil 2 digit terakhir NIM, jadikan angka awal deret. 
Ambil digit ke-3 dari belakang, jadikan beda (step). Buat program TypeScript untuk mencetak 10 angka pertama dari deret aritmatika tersebut.
Contoh: NIM 230411013, 2 digit terakhir = 13,  berarti start dari 13.  digit ke-3 dari belakang + 1 (0 + 1), sehingg beda nya = 1 step.
Output:13, 14, 15, 16, 17, 18, 19, 20, 21, 22
*/

/*
 * Algoritma:
 * 1. Ambil 2 digit terakhir NIM
 * 2. Jadikan digit tersebut sebagai angka awal deret
 * 3. Ambil digit ke-3 dari belakang
 * 4. Jadikan digit tersebut sebagai beda (step)
 * 5. Cetak 10 angka pertama dari deret aritmatika
 */

// ? Define nim
const nim : string = "044731271";

// ? 1. Taking 2 last digits as the initial number (start)
const start : number = parseInt(nim.slice(-2));

// ? 2. Taking the third digit from the back as the common difference (step)
// * Length of string = 9, index of third digit from the back is at index 6 (character '2')
const lastThreeDigits : number = parseInt(nim.charAt(nim.length - 3));
const step : number = lastThreeDigits; 

// ? Determining the number of terms to print
const subNumbers : number = 10;
const arithmeticSeq : number[] = [];

// ? Calculating the arithmetic sequence using the formula: Un = a + (n - 1) * b
// ! U10 = a + (9)*b
for (let i = 0; i < subNumbers; i++) {
    const number = start + (i * step);     
    arithmeticSeq.push(number);
}

// ? Displaying the results in the console
console.log(`NIM              : ${nim}`);
console.log(`Angka Awal (Start): ${start}`);
console.log(`Beda (Step)      : ${step}`);
console.log(`10 Angka Pertama : ${arithmeticSeq.join(", ")}`);
