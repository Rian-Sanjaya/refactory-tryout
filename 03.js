var daftarProduk = [
    {
        kode_produk: 1,
        nama_produk: 'produk 1',
        harga: 1500,
        quantity: 3
    },
    {
        kode_produk: 2,
        nama_produk: 'produk 2',
        harga: 1000,
        quantity: 2
    },
    {
        kode_produk: 3,
        nama_produk: 'produk 3',
        harga: 500,
        quantity: 1
    }
];

var cart = [];

function tambahItemKeCart(produk) {
    if (produk) {
        cart.push(produk);
        totalBelanja();
    }
}

function totalBelanja() {
    var total = 0;
    var listBelanjaLabel = document.querySelector("#listBelanja");
    var listBelanjaUl = document.querySelector("#listBelanjaUl");

    listBelanjaLabel.textContent = "Daftar Belanja:";
    listBelanjaUl.innerHTML = '';
    cart.forEach(function(produk) {
        //console.log(produk.nama_produk + ' Rp. ' + produk.harga);
        var listProdukLi = document.createElement("li");
        listProdukLi.textContent = produk.nama_produk + ' Rp. ' + produk.harga;
        listBelanjaUl.appendChild(listProdukLi);
        total += produk.harga;
    });

    //console.log('Total: ' + total);
    var totalBelanja = document.querySelector("#totalBelanja");
    totalBelanja.textContent = "Total: " + total;
}

var daftarProdukUl = document.getElementById("daftarProdukUl");
var produkIndexInput = document.getElementById('produkIndexInput');
var buttonAdd = document.getElementById('buttonAdd');

daftarProduk.forEach(function(produk, idx) {
    var daftarProdukLi = document.createElement("li");
    daftarProdukLi.textContent = idx + ": " + produk.nama_produk + " Rp. " + produk.harga;
    daftarProdukUl.appendChild(daftarProdukLi);
});

buttonAdd.addEventListener("click", function() {
    var produkIndex = produkIndexInput.value;

    if (produkIndex) {
        tambahItemKeCart(daftarProduk[produkIndex]);
    }
});