// ----------------------
//  MAPPING MOT-CLES → PDF
// ----------------------

const pdfMapping = {
    "virus": "Nettoyage Virus",
    "infection": "Nettoyage Virus",
    "pc lent": "Nettoyage Virus",
    "écran figé": "Nettoyage Virus",

    "lenteur": "Maintenance classique",
    "bugs": "Maintenance classique",
    "maintenance": "Maintenance classique",

    "stockage plein": "Libérer de l’espace",
    "espace saturé": "Libérer de l’espace",
    "plus de place": "Libérer de l’espace",

    "imprimante": "Imprimante : connexion et bugs",

    "wi-fi": "Connexion Wi-Fi et Réseaux",
    "connexion réseau": "Connexion Wi-Fi et Réseaux",

    "périphériques": "Réparer ses périphériques Windows",
    "clavier": "Réparer ses périphériques Windows",
    "souris": "Réparer ses périphériques Windows",
    "clé usb": "Réparer ses périphériques Windows",

    "gaming": "Optimisations gaming e-sport",
    "fps": "Optimisations gaming e-sport",
    "performances": "Optimisations gaming e-sport",

    "récupérer mes fichiers": "Récupération de données",
    "perte de fichier": "Récupération de données",
    "perte de données": "Récupération de données",

    "réinstaller windows": "Réinstallation Windows",
    "windows11": "Réinstallation Windows",
    "windows10": "Réinstallation Windows"
};

// ----------------------
// LIENS PAYPAL
// ----------------------

const pdfLinks = {
    "Nettoyage Virus": "https://www.paypal.com/ncp/payment/AMRWNJ4UPRCL6",
    "Réinstallation Windows": "https://www.paypal.com/ncp/payment/94P5TXWRHP9EW",
    "Imprimante : connexion et bugs": "https://www.paypal.com/ncp/payment/U8DKYM7WET7GG",
    "Libérer de l’espace": "https://www.paypal.com/ncp/payment/Q8Y8VBR3AP38L",
    "Connexion Wi-Fi et Réseaux": "https://www.paypal.com/ncp/payment/LRJJKZDZ39TCU",
    "Réparer ses périphériques Windows": "https://www.paypal.com/ncp/payment/WKH7TG4JEYWZA",
    "Maintenance classique": "https://www.paypal.com/ncp/payment/SMRYNACXSES8N",
    "Récupération de données": "https://www.paypal.com/ncp/payment/CUSCHMAD2UFBQ",
    "Optimisations gaming e-sport": "https://www.paypal.com/ncp/payment/CXQRC8TJXBNK2"
};

// ----------------------
//   LOGIQUE DE SELECTION
// ----------------------

document.addEventListener("DOMContentLoaded", () => {
    const keywords = document.querySelectorAll(".keyword");
    const validateBtn = document.getElementById("validate");
    const resultArea = document.getElementById("results");

    let selected = [];

    keywords.forEach(key => {
        key.addEventListener("click", () => {
            const val = key.getAttribute("data-key");

            if (!selected.includes(val)) {
                selected.push(val);
                key.classList.add("selected");
            } else {
                selected = selected.filter(v => v !== val);
                key.classList.remove("selected");
            }
        });
    });

    validateBtn.addEventListener("click", () => {
        resultArea.innerHTML = "";
        let results = [];

        selected.forEach(k => {
            const matched = pdfMapping[k];
            if (matched && !results.includes(matched)) {
                results.push(matched);
            }
        });

        if (results.length === 0) {
            resultArea.innerHTML = "<p>Aucun résultat trouvé. Merci de sélectionner un mot-clé.</p>";
            return;
        }

        results.forEach(pdf => {
            const div = document.createElement("div");
            div.classList.add("result-item");
            div.innerHTML = `
                <h3>${pdf}</h3>
                <a href="${pdfLinks[pdf]}" target="_blank">Acheter ce guide</a>
            `;
            resultArea.appendChild(div);
        });
    });
});
