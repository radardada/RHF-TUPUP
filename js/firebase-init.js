// js/firebase-init.js
// Firebase Configuration untuk project RHF resmi
// Versi terbaru Firebase SDK v10+ (modular style)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Konfigurasi Firebase kamu (sudah sesuai dengan project rhf-resmi)
const firebaseConfig = {
  apiKey: "AIzaSyALIhKFz4bpOPmES6t2fAdx8VMPP0ye1wc",
  authDomain: "rhf-resmi.firebaseapp.com",
  databaseURL: "https://rhf-resmi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rhf-resmi",
  storageBucket: "rhf-resmi.firebasestorage.app",
  messagingSenderId: "313439235544",
  appId: "1:313439235544:web:b19a2ad538e34c1fe516ad",
  measurementId: "G-LNCVH73P3X"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Analytics (opsional, tapi bagus untuk tracking visitor)
const analytics = getAnalytics(app);

// Inisialisasi Realtime Database (yang kita pakai untuk produk & order)
export const database = getDatabase(app);

// Export app & analytics kalau nanti butuh (misal untuk auth atau storage)
export { app, analytics };
