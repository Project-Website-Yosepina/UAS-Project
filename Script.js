const products = [
    { id: 1, nama: "Produk 1 Anggrek", harga: "Rp 50.000", img: "Produk1.jpg", deskripsi: "Deskripsi lengkap produk 1." },
    { id: 2, nama: "Produk 2 Tulip" , harga: "Rp 75.000", img: "Produk2.jpg", deskripsi: "Deskripsi lengkap produk 2." },
    { id: 3, nama: "Produk 3 Mawar", harga: "Rp 120.000", img: "Produk3.jpg", deskripsi: "Deskripsi lengkap produk 3." }
];

// Halaman daftar produk
if (document.getElementById("productList")) {
    const list = document.getElementById("productList");
    products.forEach(p => {
        list.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <h3>${p.nama}</h3>
                <p>${p.harga}</p>
                <a href="detail.html?id=${p.id}" class="btn">Detail</a>
            </div>
        `;
    });
}

// Halaman detail produk
if (document.getElementById("detailProduk")) {
    const param = new URLSearchParams(window.location.search);
    const id = param.get("id");
    const p = products.find(x => x.id == id);

    document.getElementById("detailProduk").innerHTML = `
        <div class="card">
            <img src="${p.img}" style="width:300px">
            <h2>${p.nama}</h2>
            <p>${p.deskripsi}</p>
            <h3>${p.harga}</h3>
            <a href="produk.html" class="btn">Kembali</a>
        </div>
    `;
}