// ── Конфіг Firebase для входу через Google (хмарна синхронізація) ──
// ПОКИ ПОРОЖНЬО → синхронізації немає, застосунок працює як завжди (прогрес лише на пристрої).
//
// Щоб увімкнути: створи безкоштовний проєкт на console.firebase.google.com,
// додай Web-застосунок, увімкни Authentication → Google і Firestore Database,
// додай домен wizartclub-cyber.github.io в Authentication → Settings → Authorized domains,
// тоді ВСТАВ сюди блок «firebaseConfig» зі сторінки Project settings → Your apps → SDK setup:
//
// window.__FBCONFIG = {
//   apiKey: "…",
//   authDomain: "ТВІЙ-ПРОЄКТ.firebaseapp.com",
//   projectId: "ТВІЙ-ПРОЄКТ",
//   storageBucket: "ТВІЙ-ПРОЄКТ.appspot.com",
//   messagingSenderId: "…",
//   appId: "…"
// };
//
// Ці значення публічні — їх безпечно тримати у відкритому коді (доступ захищають правила Firestore).
window.__FBCONFIG = null;
