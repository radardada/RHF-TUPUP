// firebase-init.js - RHF STORE DATABASE CONNECTION

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Konfigurasi Firebase RHF STORE
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inisialisasi Database agar bisa dipanggil di file lain (admin.js / topup.js)
const db = getDatabase(app);     // Untuk Realtime Database (Orderan masuk cepat)
const dbStore = getFirestore(app); // Untuk Firestore (Data Game/User)

export { app, db, dbStore, analytics };
