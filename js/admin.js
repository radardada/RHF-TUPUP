const { db, ref, onValue, set, push, remove, update } = window.firebaseDB;

const ADMIN_PASSWORD = "admin123"; // Ganti password ini!

window.loginAdmin = function() {
    const input = document.getElementById('adminPass').value;
    if (input === ADMIN_PASSWORD) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        initRealTimeListeners();
    } else {
        alert('Password salah!');
    }
}

function initRealTimeListeners() {
    // Saldo
    onValue(ref(db, 'balance/value'), (snap) => {
        const val = snap.val() || 0;
        document.getElementById('current-balance').textContent = new Intl.NumberFormat('id-ID').format(val);
    });

    // Transaksi
    onValue(ref(db, 'transactions'), (snap) => {
        const data = snap.val() || {};
        const tbody = document.querySelector('#transactions-table tbody');
        tbody.innerHTML = '';
        Object.keys(data).reverse().forEach(key => {
            const t = data[key];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${key.slice(-8)}</td>
                <td>${t.game}</td>
                <td>${new Intl.NumberFormat('id-ID').format(t.amount)}</td>
                <td>${t.payment}</td>
                <td>${t.playerId}</td>
                <td><span style="color:green;">${t.status}</span></td>
                <td><button onclick="deleteTrans('${key}')">Hapus</button></td>
            `;
            tbody.appendChild(row);
        });
    });

    // Pembeli
    onValue(ref(db, 'buyers'), (snap) => {
        const data = snap.val() || {};
        const tbody = document.querySelector('#buyers-table tbody');
        tbody.innerHTML = '';
        Object.keys(data).forEach(key => {
            const b = data[key];
            const row = document.createElement('tr');
            row.innerHTML = `<td>\( {key.slice(-8)}</td><td> \){b.name || b}</td><td><button onclick="deleteBuyer('${key}')">Hapus</button></td>`;
            tbody.appendChild(row);
        });
    });

    // Promo
    onValue(ref(db, 'promos'), (snap) => {
        const data = snap.val() || {};
        const ul = document.getElementById('promo-list');
        ul.innerHTML = '';
        Object.keys(data).forEach(key => {
            const p = data[key];
            const li = document.createElement('li');
            li.textContent = p.text || p;
            const btn = document.createElement('button');
            btn.textContent = 'Hapus';
            btn.onclick = () => deletePromo(key);
            li.appendChild(btn);
            ul.appendChild(li);
        });
    });

    // Logs
    onValue(ref(db, 'logs'), (snap) => {
        const data = snap.val() || {};
        const ul = document.getElementById('logs-list');
        ul.innerHTML = '';
        Object.entries(data).sort((a,b) => b[1].timestamp - a[1].timestamp).forEach(([key, log]) => {
            const li = document.createElement('li');
            li.textContent = `${new Date(log.timestamp).toLocaleString('id-ID')}: ${log.message}`;
            ul.appendChild(li);
        });
    });
}

// Fungsi admin
window.addBalance = async function() {
    const amt = parseInt(document.getElementById('add-balance').value);
    if (amt > 0) {
        const snap = await onValue(ref(db, 'balance/value'), s => s.val(), {onlyOnce: true});
        const current = snap || 0;
        await update(ref(db, 'balance'), { value: current + amt });
        addLog(`Admin tambah saldo: +${amt} IDR`);
    }
}

window.resetBalance = async () => {
    if (confirm('Yakin reset saldo ke 0?')) {
        await set(ref(db, 'balance'), { value: 0 });
        addLog('Admin reset saldo');
    }
}

window.addBuyer = async () => {
    const name = document.getElementById('new-buyer').value.trim();
    if (name) {
        const newRef = push(ref(db, 'buyers'));
        await set(newRef, { name });
        addLog(`Admin tambah pembeli: ${name}`);
        document.getElementById('new-buyer').value = '';
    }
}

window.deleteBuyer = async (key) => {
    await remove(ref(db, 'buyers/' + key));
    addLog('Admin hapus pembeli');
}

window.deleteTrans = async (key) => {
    await remove(ref(db, 'transactions/' + key));
    addLog('Admin hapus transaksi');
}

window.clearAllTransactions = async () => {
    if (confirm('Hapus SEMUA transaksi?')) {
        await set(ref(db, 'transactions'), {});
        addLog('Admin hapus semua transaksi');
    }
}

window.addPromo = async () => {
    const text = document.getElementById('new-promo').value.trim();
    if (text) {
        const newRef = push(ref(db, 'promos'));
        await set(newRef, { text });
        addLog(`Admin tambah promo: ${text}`);
        document.getElementById('new-promo').value = '';
    }
}

window.deletePromo = async (key) => {
    await remove(ref(db, 'promos/' + key));
    addLog('Admin hapus promo');
}

window.clearLogs = async () => {
    if (confirm('Hapus semua log?')) {
        await set(ref(db, 'logs'), {});
    }
}

async function addLog(message) {
    const newRef = push(ref(db, 'logs'));
    await set(newRef, { message, timestamp: Date.now() });
}