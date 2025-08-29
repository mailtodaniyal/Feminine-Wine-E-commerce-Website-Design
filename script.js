        // Language toggle functionality
        const langToggle = document.getElementById('langToggle');
        const elementsToTranslate = {
            'logo': { 'fr': 'Vineora', 'en': 'Vineora' },
            'tagline': { 'fr': 'Découvrez des vins français sélectionnés pour vous', 'en': 'Discover French wines selected for you' },
            'cta-button': { 'fr': 'Explorer la collection', 'en': 'Explore the collection' },
            'mood-title': { 'fr': 'Comment vous sentez-vous aujourd\'hui ?', 'en': 'How are you feeling today?' },
            'mood1-name': { 'fr': 'Épanouie', 'en': 'Empowered' },
            'mood1-desc': { 'fr': 'Des vins audacieux pour célébrer vos succès', 'en': 'Bold wines to celebrate your achievements' },
            'mood2-name': { 'fr': 'Détendue', 'en': 'Relaxed' },
            'mood2-desc': { 'fr': 'Des vins doux pour vos moments de calme', 'en': 'Smooth wines for your quiet moments' },
            'mood3-name': { 'fr': 'Romantique', 'en': 'Romantic' },
            'mood3-desc': { 'fr': 'Des vins élégants pour vos soirées à deux', 'en': 'Elegant wines for your romantic evenings' },
            'mood4-name': { 'fr': 'Aventureuse', 'en': 'Adventurous' },
            'mood4-desc': { 'fr': 'Des découvertes surprenantes pour les curieuses', 'en': 'Surprising discoveries for the curious' },
            'featured-title': { 'fr': 'Nos Sélections Spéciales', 'en': 'Our Featured Wines' },
            'add-to-cart': { 'fr': 'Ajouter au panier', 'en': 'Add to cart' },
            'women-title': { 'fr': 'Elles font le vin', 'en': 'Women in Wine' },
            'women-subtitle': { 'fr': 'Notre engagement envers les femmes du vin', 'en': 'Our commitment to women in wine' },
            'women-text1': { 'fr': 'Chez Vineora, nous mettons en lumière les femmes talentueuses qui façonnent l\'industrie viticole française. Plus de 30% de nos vins sont produits par des vigneronnes passionnées.', 'en': 'At Vineora, we highlight the talented women shaping the French wine industry. Over 30% of our wines are produced by passionate female winemakers.' },
            'women-text2': { 'fr': 'Découvrez leurs histoires, leurs défis et leurs triomphes à travers nos sélections spéciales et nos événements exclusifs.', 'en': 'Discover their stories, challenges and triumphs through our special selections and exclusive events.' },
            'women-cta': { 'fr': 'Découvrir leur histoire', 'en': 'Discover their story' },
            'newsletter-title': { 'fr': 'Restez informée', 'en': 'Stay informed' },
            'newsletter-text': { 'fr': 'Abonnez-vous à notre newsletter pour recevoir nos dernières sélections et conseils de dégustation', 'en': 'Subscribe to our newsletter to receive our latest selections and tasting tips' },
            'newsletter-placeholder': { 'fr': 'Votre email', 'en': 'Your email' },
            'newsletter-button': { 'fr': 'S\'abonner', 'en': 'Subscribe' },
            'footer1': { 'fr': 'Notre histoire', 'en': 'Our story' },
            'footer2': { 'fr': 'Nos vignerons', 'en': 'Our winemakers' },
            'footer3': { 'fr': 'Guide des vins', 'en': 'Wine guide' },
            'footer4': { 'fr': 'Contact', 'en': 'Contact' },
            'footer5': { 'fr': 'FAQ', 'en': 'FAQ' },
            'copyright': { 'fr': '© 2023 Vineora. Tous droits réservés.', 'en': '© 2023 Vineora. All rights reserved.' }
        };

        let currentLang = 'fr';

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            langToggle.textContent = currentLang === 'fr' ? 'EN' : 'FR';
            
            document.querySelector('.logo').textContent = elementsToTranslate['logo'][currentLang];
            document.querySelector('.tagline').textContent = elementsToTranslate['tagline'][currentLang];
            document.querySelector('.cta-button').textContent = elementsToTranslate['cta-button'][currentLang];
            document.querySelector('.mood-selector .section-title').textContent = elementsToTranslate['mood-title'][currentLang];
            document.querySelectorAll('.mood-name')[0].textContent = elementsToTranslate['mood1-name'][currentLang];
            document.querySelectorAll('.mood-desc')[0].textContent = elementsToTranslate['mood1-desc'][currentLang];
            document.querySelectorAll('.mood-name')[1].textContent = elementsToTranslate['mood2-name'][currentLang];
            document.querySelectorAll('.mood-desc')[1].textContent = elementsToTranslate['mood2-desc'][currentLang];
            document.querySelectorAll('.mood-name')[2].textContent = elementsToTranslate['mood3-name'][currentLang];
            document.querySelectorAll('.mood-desc')[2].textContent = elementsToTranslate['mood3-desc'][currentLang];
            document.querySelectorAll('.mood-name')[3].textContent = elementsToTranslate['mood4-name'][currentLang];
            document.querySelectorAll('.mood-desc')[3].textContent = elementsToTranslate['mood4-desc'][currentLang];
            document.querySelector('.featured-wines .section-title').textContent = elementsToTranslate['featured-title'][currentLang];
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.textContent = elementsToTranslate['add-to-cart'][currentLang];
            });
            document.querySelector('.women-story .section-title').textContent = elementsToTranslate['women-title'][currentLang];
            document.querySelector('.story-text h3').textContent = elementsToTranslate['women-subtitle'][currentLang];
            document.querySelectorAll('.story-text p')[0].textContent = elementsToTranslate['women-text1'][currentLang];
            document.querySelectorAll('.story-text p')[1].textContent = elementsToTranslate['women-text2'][currentLang];
            document.querySelector('.learn-more').textContent = elementsToTranslate['women-cta'][currentLang];
            document.querySelector('.newsletter .section-title').textContent = elementsToTranslate['newsletter-title'][currentLang];
            document.querySelector('.newsletter p').textContent = elementsToTranslate['newsletter-text'][currentLang];
            document.querySelector('.newsletter-input').placeholder = elementsToTranslate['newsletter-placeholder'][currentLang];
            document.querySelector('.newsletter-button').textContent = elementsToTranslate['newsletter-button'][currentLang];
            document.querySelectorAll('.footer-links a')[0].textContent = elementsToTranslate['footer1'][currentLang];
            document.querySelectorAll('.footer-links a')[1].textContent = elementsToTranslate['footer2'][currentLang];
            document.querySelectorAll('.footer-links a')[2].textContent = elementsToTranslate['footer3'][currentLang];
            document.querySelectorAll('.footer-links a')[3].textContent = elementsToTranslate['footer4'][currentLang];
            document.querySelectorAll('.footer-links a')[4].textContent = elementsToTranslate['footer5'][currentLang];
            document.querySelector('.copyright').textContent = elementsToTranslate['copyright'][currentLang];
        });

        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');

        const appearOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });

        // Carousel auto-scroll
        const carousel = document.querySelector('.wine-carousel');
        let scrollAmount = 0;
        const scrollStep = 320;
        const scrollInterval = 3000;

        function autoScroll() {
            scrollAmount += scrollStep;
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
            }
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        let scrollIntervalId = setInterval(autoScroll, scrollInterval);

        carousel.addEventListener('mouseenter', () => {
            clearInterval(scrollIntervalId);
        });

        carousel.addEventListener('mouseleave', () => {
            scrollIntervalId = setInterval(autoScroll, scrollInterval);
        });
