// Mendapatkan referensi ke elemen tabel di HTML
const tbody = document.querySelector('.tbody');

// Mengambil data dari endpoint
fetch('https://lively-cape-toad.cyclic.app/transactions')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Mengisi tabel dengan data transaksi menggunakan perulangan for
    for (let i = 0; i < data.length; i++) {
      const transaction = data[i];
      const row = document.createElement('tr');

      // Menambahkan kolom untuk nomor transaksi
      const transactionCodeCell = document.createElement('td');
      transactionCodeCell.textContent = transaction.transaction_code;
      row.appendChild(transactionCodeCell);

      // Menambahkan kolom untuk nama paket trip
      const titleProductCell = document.createElement('td');
      titleProductCell.textContent = transaction.title_product;
      row.appendChild(titleProductCell);

      // Menambahkan kolom untuk tanggal transaksi
      const orderDateCell = document.createElement('td');
      orderDateCell.textContent = transaction.order_date;
      row.appendChild(orderDateCell);

      // Menambahkan kolom untuk harga
      const totalPriceCell = document.createElement('td');
      totalPriceCell.textContent = `Rp.${transaction.total_price.toLocaleString()}`;
      row.appendChild(totalPriceCell);

      // Menambahkan baris ke tabel
      tbody.appendChild(row);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });
