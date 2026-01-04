// form-handler.js - RHF STORE ORDER SYSTEM
import { db } from "./firebase-init.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.querySelector('.btn-buy');
    
    if (orderButton) {
        orderButton.addEventListener('click', async (e) => {
            e.preventDefault();

            // 1. Ambil Data dari Form
            const userId = document.querySelector('input[placeholder="Masukkan ID"]').value;
            const zoneId = document.querySelector('input[placeholder="(Server)"]')?.value || "";
            const whatsapp = document.querySelector('input[type="number"]')?.value || ""; // Asumsi ada field WA
            
            // Ambil Nominal yang dipilih
            const selectedNominal = document.querySelector('input[name="diamond_pack"]:checked');
            // Ambil Metode Pembayaran yang dipilih
            const selectedPayment = document.querySelector('input[name="payment_method"]:checked');

            // 2. Validasi Input (Sama seperti Tokogames)
            if (!userId || !selectedNominal || !selectedPayment) {
                alert("❌ Mohon lengkapi ID, Nominal, dan Metode Pembayaran!");
                return;
            }

            // 3. Susun Data Pesanan
            const orderData = {
                orderId: "RHF-" + Math.floor(Math.random() * 1000000),
                targetId: userId + (zoneId ? ` (${zoneId})` : ""),
                item: selectedNominal.value,
                payment: selectedPayment.value,
                whatsapp: whatsapp,
                status: "Pending",
                timestamp: new Date().toISOString()
            };

            try {
                // 4. Kirim ke Firebase Realtime Database
                const ordersRef = ref(db, 'orders');
                const newOrderRef = push(ordersRef);
                await set(newOrderRef, orderData);

                // 5. Notifikasi Berhasil & Arahkan ke WhatsApp (Otomatisasi)
                alert("✅ Pesanan Berhasil Dibuat!");
                
                const waMessage = `Halo RHF STORE, saya ingin konfirmasi pesanan:%0A%0A` +
                                 `ID Pesanan: ${orderData.orderId}%0A` +
                                 `Target: ${orderData.targetId}%0A` +
                                 `Item: ${orderData.item}%0A` +
                                 `Metode: ${orderData.payment}%0A%0A` +
                                 `Mohon segera diproses ya!`;
                
                window.location.href = `https://wa.me/6281234567890?text=${waMessage}`; // Ganti dengan nomor WA kamu

            } catch (error) {
                console.error("Error sending order:", error);
                alert("❌ Terjadi kesalahan, coba lagi nanti.");
            }
        });
    }
});
