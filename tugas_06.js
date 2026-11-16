<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /*let angka = 15;

if (angka > 0) {
  console.log(angka + " adalah bilangan positif");
} else if (angka < 0) {
  console.log(angka + " adalah bilangan negatif");
} else {
  console.log(angka + " adalah nol");
}*/

// percabangan

/*let angka1 = 10;
let angka2 = 25;
let angka3 = 5;

let terbesar = Math.max(angka1, angka2, angka3);
console.log("Bilangan terbesar adalah: " + terbesar); 
// Output: Bilangan terbesar adalah: 25*/

// percabangan
/*function tentukanPredikat(nilai) {
  // Mengecek apakah nilai berada di luar rentang 0-100
  if (nilai > 100 || nilai < 0) {
    return "Nilai tidak valid! Masukkan angka 0 - 100.";
  } 
  // Rentang nilai untuk predikat A (85 - 100)
  else if (nilai >= 85 && nilai <= 100) {
    return "Predikat A";
  } 
  // Rentang nilai untuk predikat B (70 - 84)
  else if (nilai >= 70 && nilai < 85) {
    return "Predikat B";
  } 
  // Rentang nilai untuk predikat C (55 - 69)
  else if (nilai >= 55 && nilai < 70) {
    return "Predikat C";
  } 
  // Rentang nilai untuk predikat D (0 - 54)
  else {
    return "Predikat D";
  }
}*/

// Cara penggunaan:
/*console.log(tentukanPredikat(92)); // Output: Predikat A
console.log(tentukanPredikat(75)); // Output: Predikat B
console.log(tentukanPredikat(60)); // Output: Predikat C
console.log(tentukanPredikat(45)); // Output: Predikat D
console.log(tentukanPredikat(105)); // Output: Nilai tidak valid! Masukkan angka 0 - 100.*/

// percabangan

let angkaHari = 3; // Ganti angka ini dengan 1-7 untuk mencoba
let namaHari;

switch (angkaHari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  case 7:
    namaHari = "Minggu";
    break;
  default:
    namaHari = "Angka tidak valid! Masukkan angka antara 1 sampai 7.";
}

console.log(namaHari);
    </script>
</body>
</html>
