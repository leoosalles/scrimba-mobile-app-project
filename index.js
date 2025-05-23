import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-database.js";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, 'leads')

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('addInput-btn');
const deleteBtn = document.getElementById('deleteInput-btn');
const ulEl = document.getElementById('ul-el');

function render(leads) {
    let listItems = "";
    for (var i = 0; i < leads.length; i++) {
        listItems += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`
    };
    ulEl.innerHTML = listItems;
};

onValue(referenceInDB, function (snapshot) {
    const snapshotDoesExist = snapshot.exists();

    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val();
        const leads = Object.values(snapshotValues);
        render(leads);
    }
});

inputBtn.addEventListener('click', () => {
    if (inputEl.value.trim() !== "") {
        push(referenceInDB, inputEl.value);
        inputEl.value = "";
    }
});


deleteBtn.addEventListener('click', () => {
    if (confirm("Do you want to delete your URL list?")) {
        remove(referenceInDB)
            .then(() => {
                console.log("Dados deletados com sucesso!");
                ulEl.innerHTML = "";
            })
            .catch((error) => {
                console.error("Erro ao deletar os dados:", error);
            });
    }
});