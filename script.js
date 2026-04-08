'use strict';

        /* ===== I18N TRANSLATIONS ===== */
        const translations = {
            en: {
                nav_about: 'About',
                nav_exhibitions: 'Exhibitions',
                nav_technologies: 'Technologies',
                nav_works: 'Works',
                nav_contact: 'Contact',
                hero_eyebrow: 'Contemporary Stained Glass Artist — Est. 2016',
                hero_subtitle: 'Abstract stained glass through light, color, and form',
                hero_desc: 'Exploring the intersection of abstract art and contemporary stained glass. Each piece creates an immersive experience where light transforms color and geometry into a deeply personal visual language.',
                hero_cta_works: 'View Works',
                hero_cta_contact: 'Get in Touch',
                hero_caption: '"Prism" — 2024',
                marquee_1: 'Stained Glass',
                marquee_2: 'Abstract Art',
                marquee_3: 'Light & Color',
                marquee_4: 'Kinetic Objects',
                marquee_5: 'Visual Poetry',
                about_label: 'About',
                about_title: 'Redefining stained glass through contemporary abstraction',
                about_p1: 'The abstract and contemporary approach to the use of glass and color departs from the traditional Christian symbolism of stained glass, which usually features concrete depictions of saints, biblical scenes, or symbols. However, even in this abstract form, the exploration of potential symbolism and meanings through an innovative approach to symbolism remains relevant.',
                about_p2: 'Contemporary studies of stained glass art allow us to analyze the impact of abstraction on perception and interpretation. Changing styles and techniques can have an impact on aesthetic and spiritual perception, offering new forms to be integrated into contemporary art and architecture.',
                about_quote: 'Of particular importance in abstract stained glass is the viewer\'s personal immersion in the work. Due to the open-ended nature of abstraction, each viewer can find their own symbols, archetypes or interpretations within it, making each viewing a unique experience.',
                about_p3: 'These personal revelations and interactions enrich the emotional and intellectual sides of perception, making the stained glass not just an object of observation, but an active participant in a dialog with the viewer.',
                stat_1: 'Artworks Created',
                stat_2: 'Years of Practice',
                stat_3: 'Exhibitions',
                stat_4: 'Personal Interpretations',
                about_image_caption: 'Portrait of the artist — 2025',
                video_label: 'Video',
                video_title: 'Moving images and stories',
                video_desc: 'Video works that explore the abstract world of light and movement — from kinetic art objects to immersive visual explorations.',
                video_1_desc: 'Abstract visual exploration — 2024',
                video_2_title: 'Kinetic Art Objects',
                video_2_desc: 'Movement and form in harmony — 2024',
                works_label: 'Selected Works',
                works_title: 'Portfolio of light and color',
                works_desc: 'A selection of significant works spanning stained glass, digital art, photography, and design.',
                work_1_cat: 'Digital Art', work_1_title: 'Visual Narratives', work_1_desc: 'Digital concepts and narrative structures',
                work_2_cat: 'Photography', work_2_title: 'Vertical Horizons', work_2_desc: 'Portrait orientation study',
                work_3_cat: 'Enhanced', work_3_title: 'Refined Reality', work_3_desc: 'Post-processed imagery',
                work_4_cat: 'Digital', work_4_title: 'Screen Captures', work_4_desc: 'Digital documentation of creative process',
                work_5_cat: 'Archive', work_5_title: 'Process Documentation', work_5_desc: 'Records of the creative journey',
                work_6_cat: 'Study', work_6_title: 'Evening Sessions', work_6_desc: 'Late night creativity',
                quote_text: 'Due to the open-ended nature of abstraction, each viewer can find their own symbols, archetypes or interpretations within it, making each viewing a unique experience.',
                philosophy_label: 'Philosophy',
                philosophy_title: 'The art of immersion',
                philosophy_desc: 'Three pillars of artistic practice that guide every work and define the relationship between artwork and viewer.',
                phil_1_title: 'Personal Immersion', phil_1_text: 'Each viewer finds their own symbols, archetypes, and interpretations within the abstract work. Every encounter is unique and deeply personal. The artwork becomes a mirror of the viewer\'s inner world — a space of self-reflection and contemplative absorption.',
                phil_2_title: 'Abstract Innovation', phil_2_text: 'Departing from traditional concrete depictions opens new paths of exploration through innovative approaches to color, light, and geometric abstraction. Stained glass becomes an experimental platform where new visual languages are explored and developed.',
                phil_3_title: 'Spiritual Perception', phil_3_text: 'Changing styles and techniques influence aesthetic and spiritual perception, offering new forms for integration into contemporary art and architecture. Glass becomes a medium between light consciousness and spatial experience.',
                gallery_label: 'Gallery',
                gallery_title: 'Extended collection',
                contact_label: 'Contact',
                contact_title: 'Let\'s create together',
                contact_desc: 'Whether you\'re interested in collaboration, discussing a project, or simply sharing your thoughts — I\'d love to hear from you.',
                form_name: 'Name',
                form_email: 'Email',
                form_subject: 'Subject',
                form_message: 'Message',
                form_submit: 'Send Message',
                form_success: 'Thank you! I will get back to you soon.'
            },
            es: {
                nav_about: 'Acerca de',
                nav_exhibitions: 'Exposiciones',
                nav_technologies: 'Tecnologías',
                nav_works: 'Obras',
                nav_contact: 'Contacto',
                hero_eyebrow: 'Artista Contemporáneo de Vidrieras — Est. 2016',
                hero_subtitle: 'Vidrieras abstractas a través de la luz, el color y la forma',
                hero_desc: 'Explorando la intersección del arte abstracto y las vidrieras contemporáneas. Cada pieza crea una experiencia inmersiva donde la luz transforma el color y la geometría en un lenguaje visual profundamente personal.',
                hero_cta_works: 'Ver Obras',
                hero_cta_contact: 'Contacto',
                hero_caption: '"Prisma" — 2024',
                marquee_1: 'Vidrieras',
                marquee_2: 'Arte Abstracto',
                marquee_3: 'Luz y Color',
                marquee_4: 'Objetos Cinéticos',
                marquee_5: 'Poesía Visual',
                about_label: 'Acerca de',
                about_title: 'Redefiniendo las vidrieras a través de la abstracción contemporánea',
                about_p1: 'El enfoque abstracto y contemporáneo del uso del vidrio y el color se aparta del simbolismo cristiano tradicional de las vidrieras, que generalmente presenta representaciones concretas de santos, escenas bíblicas o símbolos. Sin embargo, incluso en esta forma abstracta, la exploración del simbolismo y los significados potenciales sigue siendo relevante.',
                about_p2: 'Los estudios contemporáneos del arte de las vidrieras nos permiten analizar el impacto de la abstracción en la percepción y la interpretación. Los estilos y técnicas cambiantes pueden tener un impacto en la percepción estética y espiritual, ofreciendo nuevas formas para integrar en el arte y la arquitectura contemporáneos.',
                about_quote: 'De particular importancia en las vidrieras abstractas es la inmersión personal del espectador en la obra. Debido a la naturaleza abierta de la abstracción, cada espectador puede encontrar sus propios símbolos, arquetipos o interpretaciones dentro de ella, haciendo que cada visión sea una experiencia única.',
                about_p3: 'Estas revelaciones e interacciones personales enriquecen los lados emocional e intelectual de la percepción, haciendo que la vidriera no sea solo un objeto de observación, sino un participante activo en un diálogo con el espectador.',
                stat_1: 'Obras Creadas',
                stat_2: 'Años de Práctica',
                stat_3: 'Exposiciones',
                stat_4: 'Interpretaciones Personales',
                about_image_caption: 'Retrato del artista — 2025',
                video_label: 'Video',
                video_title: 'Imágenes en movimiento e historias',
                video_desc: 'Trabajos de video que exploran el mundo abstracto de la luz y el movimiento, desde objetos de arte cinético hasta exploraciones visuales inmersivas.',
                video_1_desc: 'Exploración visual abstracta — 2024',
                video_2_title: 'Objetos de Arte Cinético',
                video_2_desc: 'Movimiento y forma en armonía — 2024',
                works_label: 'Obras Seleccionadas',
                works_title: 'Portafolio de luz y color',
                works_desc: 'Una selección de obras significativas que abarcan vidrieras, arte digital, fotografía y diseño.',
                work_1_cat: 'Arte Digital', work_1_title: 'Narrativas Visuales', work_1_desc: 'Conceptos digitales y estructuras narrativas',
                work_2_cat: 'Fotografía', work_2_title: 'Horizontes Verticales', work_2_desc: 'Estudio en orientación vertical',
                work_3_cat: 'Mejorado', work_3_title: 'Realidad Refinada', work_3_desc: 'Imaginería posprocesada',
                work_4_cat: 'Digital', work_4_title: 'Capturas de Pantalla', work_4_desc: 'Documentación digital del proceso creativo',
                work_5_cat: 'Archivo', work_5_title: 'Documentación del Proceso', work_5_desc: 'Registros del viaje creativo',
                work_6_cat: 'Estudio', work_6_title: 'Sesiones Nocturnas', work_6_desc: 'Creatividad nocturna',
                quote_text: 'Debido a la naturaleza abierta de la abstracción, cada espectador puede encontrar sus propios símbolos, arquetipos o interpretaciones dentro de ella, haciendo que cada visión sea una experiencia única.',
                philosophy_label: 'Filosofía',
                philosophy_title: 'El arte de la inmersión',
                philosophy_desc: 'Tres pilares de la práctica artística que guían cada obra y definen la relación entre la obra y el espectador.',
                phil_1_title: 'Inmersión Personal', phil_1_text: 'Cada espectador encuentra sus propios símbolos, arquetipos e interpretaciones dentro de la obra abstracta. Cada encuentro es único y profundamente personal.',
                phil_2_title: 'Innovación Abstracta', phil_2_text: 'Alejarse de las representaciones concretas tradicionales abre nuevos caminos de exploración a través de enfoques innovadores del color, la luz y la abstracción geométrica.',
                phil_3_title: 'Percepción Espiritual', phil_3_text: 'Los estilos y técnicas cambiantes influyen en la percepción estética y espiritual, ofreciendo nuevas formas de integración en el arte y la arquitectura contemporáneos.',
                gallery_label: 'Galería',
                gallery_title: 'Colección extendida',
                contact_label: 'Contacto',
                contact_title: 'Creemos juntos',
                contact_desc: 'Ya sea que esté interesado en colaborar, discutir un proyecto o simplemente compartir sus pensamientos, me encantaría saber de usted.',
                form_name: 'Nombre',
                form_email: 'Correo',
                form_subject: 'Asunto',
                form_message: 'Mensaje',
                form_submit: 'Enviar Mensaje',
                form_success: '¡Gracias! Me pondré en contacto pronto.'
            }
        };

        let currentLang = 'en';

        /* ===== LANGUAGE TOGGLE ===== */
        function setLanguage(lang) {
            currentLang = lang;
            document.documentElement.lang = lang;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });

            document.querySelectorAll(`[data-lang]`).forEach(btn => {
                btn.classList.toggle('is-active', btn.dataset.lang === lang);
            });

            try { localStorage.setItem('lang', lang); } catch (e) {}
        }

        document.querySelectorAll('[data-lang]').forEach(btn => {
            btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
        });

        // Restore saved language
        try {
            const saved = localStorage.getItem('lang');
            if (saved && translations[saved]) setLanguage(saved);
        } catch (e) {}

        /* ===== LOADER ===== */
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('is-hidden');

        /* ===== HEADER SCROLL STATE ===== */
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            if (header) {
                header.classList.toggle('is-scrolled', window.pageYOffset > 50);
            }
        }, { passive: true });

        /* ===== MOBILE NAV ===== */
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavClose = document.getElementById('mobileNavClose');

        if (menuBtn && mobileNav) {
            menuBtn.addEventListener('click', () => mobileNav.classList.add('is-open'));
        }

        if (mobileNavClose && mobileNav) {
            mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('is-open'));
        }

        if (mobileNav) {
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => mobileNav.classList.remove('is-open'));
            });
        }

        /* ===== SMOOTH SCROLL ===== */
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            });
        });

        /* ===== SCROLL REVEAL (IntersectionObserver) ===== */
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.reveal, .video-card, .work-card, .philosophy-card, .exhibition-block, .tech-block').forEach(el => {
            revealObserver.observe(el);
        });

        /* ===== CONTACT FORM ===== */
        const contactForm = document.getElementById('contactForm');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const name = this.querySelector('#name').value.trim();
                const email = this.querySelector('#email').value.trim();
                const message = this.querySelector('#message').value.trim();

                if (!name || !email || !message) {
                    return;
                }

                const submitBtn = this.querySelector('.contact-form__submit');
                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.textContent = '...';

                setTimeout(() => {
                    alert(translations[currentLang].form_success);
                    this.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 1200);
            });
        }

        /* ===== ACTIVE NAV HIGHLIGHT ===== */
        const sections = document.querySelectorAll('section[id]');

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.header__link, .footer__link').forEach(link => {
                        const href = link.getAttribute('href');
                        link.style.color = href === `#${id}` ? 'var(--text)' : '';
                    });
                }
            });
        }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

        sections.forEach(section => sectionObserver.observe(section));

        /* ===== YOUTUBE LAZY LOAD ===== */
        document.querySelectorAll('.yt-placeholder').forEach(el => {
            el.addEventListener('click', function() {
                const id = this.dataset.yt;
                const iframe = document.createElement('iframe');
                iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&mute=1&loop=1&playlist=' + id + '&controls=1&modestbranding=1&rel=0';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                iframe.style.cssText = 'width:100%;height:100%;border:none';
                this.replaceWith(iframe);
            });
        });

        /* ===== VIDEO HOVER PLAY ===== */
        document.querySelectorAll('.video-card').forEach(card => {
            const video = card.querySelector('video');
            if (!video) return;
            card.addEventListener('mouseenter', () => video.play().catch(() => {}));
            card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
        });

        // Auto-play videos when scrolled into view on mobile
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target.querySelector('video');
                if (!video) return;
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        if ('ontouchstart' in window) {
            document.querySelectorAll('.video-card').forEach(card => videoObserver.observe(card));
        }

        /* ===== PREFERS REDUCED MOTION ===== */
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.marquee__inner').forEach(el => {
                el.style.animation = 'none';
            });
            document.querySelectorAll('.reveal, .video-card, .work-card, .philosophy-card, .exhibition-block, .tech-block').forEach(el => {
                el.classList.add('is-visible');
                el.style.transition = 'none';
            });
        }