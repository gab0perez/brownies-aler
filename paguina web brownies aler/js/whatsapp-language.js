const whatsappNumber = "528332805596";
    const languageToggle = document.querySelector("[data-language-toggle]");
    const translatedElements = document.querySelectorAll("[data-es][data-en]");
    const whatsappLinks = document.querySelectorAll("[data-whatsapp-es][data-whatsapp-en]");

    function setLanguage(language) {
      const selectedLanguage = language === "en" ? "en" : "es";
      const messageKey = selectedLanguage === "en" ? "whatsappEn" : "whatsappEs";

      document.documentElement.lang = selectedLanguage;

      translatedElements.forEach((element) => {
        element.textContent = element.dataset[selectedLanguage];
      });

      whatsappLinks.forEach((link) => {
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(link.dataset[messageKey])}`;
      });

      languageToggle.textContent = selectedLanguage === "es" ? "English" : "Español";
      languageToggle.setAttribute(
        "aria-label",
        selectedLanguage === "es" ? "Translate to English" : "Traducir a español"
      );

      localStorage.setItem("browniesAlerLanguage", selectedLanguage);
    }

    languageToggle.addEventListener("click", () => {
      const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
      setLanguage(nextLanguage);
    });

    setLanguage(localStorage.getItem("browniesAlerLanguage") || "es");
