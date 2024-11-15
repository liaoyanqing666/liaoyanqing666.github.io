const firebaseConfig = {
    apiKey: "AIzaSyA-3ixTu3oWvwF4z0Jdn5M76zte5SwEDGI",
    authDomain: "personal-website-52b2e.firebaseapp.com",
    projectId: "personal-website-52b2e",
    storageBucket: "personal-website-52b2e.firebasestorage.app",
    messagingSenderId: "1007724884899",
    appId: "1:1007724884899:web:5957fdab33d460f8e9e016"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

fetch('https://ipinfo.io/json?token=a2532467fe1742')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        const city = data.city;
        const region = data.region;
        const country = data.country;

        const log = {
            ip: ip,
            city: city,
            region: region,
            country: country,
            timestamp: new Date().toISOString()
        };

        db.collection("visitor_logs").add(log)
            .then(() => {
                console.log("Visitor data saved successfully");
            })
            .catch(error => {
                console.error("Error saving visitor data: ", error);
            });
    })
    .catch(error => {
        console.error("Error fetching IP info: ", error);
    });
