// Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    // Get all language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Get the current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Set the active button on page load
    updateActiveButton(currentLang);
    
    // Apply the language on page load
    applyLanguage(currentLang);
    
    // Add click event listeners to language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentLang = this.getAttribute('data-lang');
            localStorage.setItem('language', currentLang);
            
            // Update active button
            updateActiveButton(currentLang);
            
            // Apply the language
            applyLanguage(currentLang);
        });
    });
    
    // Update the active button state
    function updateActiveButton(lang) {
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Apply language translation to all elements
    function applyLanguage(lang) {
        // Get all elements with data attributes for translations
        const translatableElements = document.querySelectorAll('[data-en], [data-sw], [data-am]');
        
        translatableElements.forEach(element => {
            // Get the translation based on the selected language
            const translation = element.getAttribute(`data-${lang}`);
            
            if (translation) {
                // If it's a button or input, update the text or placeholder
                if (element.tagName === 'BUTTON' || element.tagName === 'INPUT') {
                    element.textContent = translation;
                } else if (element.tagName === 'A') {
                    // For links, update innerHTML to preserve arrow symbols
                    element.innerHTML = translation;
                } else {
                    // For other elements, update innerHTML to preserve formatting
                    element.innerHTML = translation;
                }
            }
        });
    }

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const faqToggle = this.querySelector('.faq-toggle');
            
            // Toggle active class
            faqItem.classList.toggle('active');
            
            // Toggle answer visibility
            if (faqItem.classList.contains('active')) {
                faqAnswer.style.display = 'block';
                faqToggle.textContent = '−';
            } else {
                faqAnswer.style.display = 'none';
                faqToggle.textContent = '+';
            }
        });
    });
});

