// js/form-handler.js
// Form Handler mirip persis dengan proses top up di TokoGame.com
// Flow: Input User ID (+ Zone jika perlu), Pilih Nominal (klik card), Update Total Harga Otomatis, Validasi, Lanjut ke Pembayaran (redirect ke halaman payment dengan data order)

let selectedNominal = null;
let selectedPrice = 0;
let selectedProductId = null; // kalau pakai ID produk dari database

// Fungsi saat klik nominal option (mirip card di TokoGame)
function selectNominal(element, productName, price, productId = null) {
  // Hapus class selected dari semua nominal
  document.querySelectorAll('.nominal-option').forEach(opt => {
    opt.classList.remove('selected');
  });

  // Tambah class selected ke yang diklik
  element.classList.add('selected');

  // Simpan data terpilih
  selectedNominal = productName;
  selectedPrice = price;
  selectedProductId = productId;

  // Update total harga
  document.getElementById('total-price').textContent = price;
}

// Fungsi validasi & proses order (mirip TokoGame: cek ID, nominal, lalu redirect ke payment)
function proceedToPayment() {
  const userIdInput = document.getElementById('user-id').value.trim();
  const zoneIdInput = document.getElementById('zone-id') ? document.getElementById('zone-id').value.trim() : '';

  // Validasi User ID (wajib)
  if (!userIdInput) {
    alert('Masukkan User ID dengan benar!');
    return;
  }

  // Validasi Zone ID untuk game tertentu (misal Free Fire)
  if (document.getElementById('zone-id') && !zoneIdInput) {
    alert('Masukkan Zone ID dengan benar!');
    return;
  }

  // Validasi nominal terpilih
  if (!selectedNominal || selectedPrice === 0) {
    alert('Pilih nominal top up terlebih dahulu!');
    return;
  }

  // Buat data order (mirip yang dikirim TokoGame ke server/payment)
  const orderData = {
    game: document.querySelector('.game-header h1').textContent.trim(),
    product: selectedNominal,
    price: selectedPrice,
    userId: userIdInput,
    zoneId: zoneIdInput || null,
    email: document.getElementById('email') ? document.getElementById('email').value.trim() : ''
  };

  // Encode data untuk URL (TokoGame biasa redirect dengan parameter)
  const params = new URLSearchParams(orderData);
  
  // Redirect ke halaman payment (ganti dengan URL payment gateway kamu nanti)
  // Contoh: window.location.href = `payment.html?${params.toString()}`;
  // Sementara: buka WhatsApp CS seperti banyak toko top up manual
  const waMessage = `Halo RHF,%0A%0ASaya ingin top up:%0A%0AGame: ${orderData.game}%0AProduk: ${orderData.product}%0AHarga: ${orderData.price}%0AUser ID: \( {orderData.userId} \){orderData.zoneId ? ' (Zone: ' + orderData.zoneId + ')' : ''}%0A%0ATerima kasih!`;
  window.open(`https://wa.me/081234567890?text=${waMessage}`, '_blank');

  // Kalau pakai Firebase, simpan order ke database
  // import { database } from './firebase-init.js';
  // import { push, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  // push(ref(database, 'orders'), orderData);
}

// Event listener saat halaman loaded
document.addEventListener('DOMContentLoaded', () => {
  // Reset total harga awal
  if (document.getElementById('total-price')) {
    document.getElementById('total-price').textContent = 'Rp 0';
  }

  // Optional: auto focus ke input User ID
  const userIdField = document.getElementById('user-id');
  if (userIdField) userIdField.focus();
});
