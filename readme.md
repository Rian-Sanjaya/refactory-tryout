Refactory Tryout

1. Palindrome
Buatlah fungsi untuk Reverse / membalik kalimat ini kata-perkata maupun urutannya.

ibu ratna antar ubi

2. Combine several arrays
Buatlah fungsi untuk Combine mengkombinasikan semua array ini menjadi satu array. Dan kemudian dari satu array itu menghasilkan satu kalimat utuh dalam bentuk string.

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

3. Cart Engine
Simulasikan sebuah Cart Engine sederhana menggunakan Javascript. Cart Engine adalah program yang bisa menampung daftar item belanjaan yang dipilih oleh user. Fitur yang dibutuhkan:

Program akan berisi data tentang daftar produk yang bisa dipilih. Data tersebut adalah defined (sudah didefinisikan dalam program) dalam bentuk collection atau kumpulan beberapa item.
Setiap item produk dimodelkan dalam bentuk Object berisi informasi tentang kode_produk, nama_produk, harga dan quantity.
Program memiliki function untuk menyimpan item product yang dipilih, di simpan dalam variable semisal bernama Cart. function tersebut dapat dipanggil lewat console atau file html Contoh penggunaan: tambahItemKeCart(daftarProduk[index]) index menunjuk pada sebuah item di daftar produk.
Program mampu menampilkan informasi tentang jumlah total belanjaan juga dalam bentuk function yang bisa dipanggil lewat console mapun file html.
Task:

Buat programnya dalam bentuk Javascript
Buat tampilan programnya (front-end) dalam bentuk html yang mengandung file javascript tadi. Frontend harus memiliki:
input edit box untuk mengisi kode_produk atau index produk
tombol untuk untuk memanggil fungsi tambahItemKeCart dan menerima kode_produk atau index yang diisi.
tampilan table atau list yang menampilkan daftar item yang dipilih.
Label/text berisi informasi tentang total belanjaan.