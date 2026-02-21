        const defaultConfig = {
            // Colors (5 colors by visual prominence)
            background_color: '#FAF7F2',    // Page background
            surface_color: '#FFFFFF',        // Cards & containers
            text_color: '#2D5046',           // Primary text & headings
            primary_action_color: '#C8785A', // CTA buttons & accents
            secondary_text_color: '#5A7A6F', // Body text & secondary info

            // Font
            font_family: 'DM Serif Display',
            font_size: 16,

            // Text content
            practice_name: 'Bright Smile Dental',
            tagline: 'Welcome to Bright Smile Dental',
            hero_heading: 'Your Smile Deserves the Best Care',
            hero_subtext: 'Compassionate, modern dentistry for the whole family. We create beautiful, healthy smiles in a warm and welcoming environment.',
            cta_button_text: 'Book an Appointment',
            services_heading: 'Our Services',
            about_heading: 'Caring for Your Smile, One Visit at a Time',
            about_text: 'With over 15 years of experience, our practice combines the latest dental technology with a gentle, patient-first approach. We believe everyone deserves a smile they can be proud of, and we\'re here to make that happen in a comfortable, stress-free setting.',
            doctor_name: 'Dr. Sarah Mitchell',
            phone_number: '(555) 123-4567',
            address: '123 Smile Avenue, Suite 200',
            hours_text: 'Mon–Fri: 8am – 6pm'
        };

        function applyConfig(config) {
            const bg = config.background_color || defaultConfig.background_color;
            const surface = config.surface_color || defaultConfig.surface_color;
            const text = config.text_color || defaultConfig.text_color;
            const primary = config.primary_action_color || defaultConfig.primary_action_color;
            const secondary = config.secondary_text_color || defaultConfig.secondary_text_color;
            const headingFont = config.font_family || defaultConfig.font_family;
            const baseSize = config.font_size || defaultConfig.font_size;

            // Background
            const wrapper = document.getElementById('app-wrapper');
            wrapper.style.backgroundColor = bg;

            // Navigation
            const nav = document.querySelector('header');
            nav.style.backgroundColor = bg + 'EB'; // with transparency

            document.getElementById('nav-practice-name').textContent = config.practice_name || defaultConfig.practice_name;
            document.getElementById('nav-practice-name').style.color = text;
            document.getElementById('nav-practice-name').style.fontFamily = `${headingFont}, serif`;

            document.getElementById('logo-tooth').setAttribute('fill', text);
            document.getElementById('logo-tooth').setAttribute('stroke', text);

            document.querySelectorAll('nav a').forEach(a => { a.style.color = secondary; });
            document.getElementById('nav-cta').style.backgroundColor = primary;
            document.getElementById('nav-cta').textContent = config.cta_button_text ? 'Book Now' : 'Book Now';

            // Mobile menu button
            document.getElementById('mobile-menu-btn').style.color = text;

            // Hero section
            const heroSection = document.querySelector('.hero-pattern');
            heroSection.style.backgroundColor = text;

            document.getElementById('hero-tagline').textContent = config.tagline || defaultConfig.tagline;
            document.getElementById('hero-tagline').style.color = primary;
            document.getElementById('hero-tagline').style.fontSize = `${baseSize * 0.875}px`;

            const heroHeading = document.getElementById('hero-heading');
            heroHeading.textContent = config.hero_heading || defaultConfig.hero_heading;
            heroHeading.style.color = bg;
            heroHeading.style.fontFamily = `${headingFont}, serif`;
            heroHeading.style.fontSize = `${baseSize * 3}px`;

            const heroSub = document.getElementById('hero-subtext');
            heroSub.textContent = config.hero_subtext || defaultConfig.hero_subtext;
            heroSub.style.color = bg + 'BF';
            heroSub.style.fontSize = `${baseSize * 1.125}px`;

            document.getElementById('hero-cta').textContent = config.cta_button_text || defaultConfig.cta_button_text;
            document.getElementById('hero-cta').style.backgroundColor = primary;

            // Stats bar
            const statsSection = document.querySelectorAll('.stat-item');
            statsSection.forEach(item => {
                const heading = item.querySelector('.font-heading');
                const sub = item.querySelector('.text-sm');
                if (heading) { heading.style.color = text; heading.style.fontFamily = `${headingFont}, serif`; }
                if (sub) sub.style.color = secondary;
            });
            const statsParent = statsSection[0]?.closest('section');
            if (statsParent) statsParent.style.backgroundColor = surface;

            // Services section
            document.getElementById('services-heading').textContent = config.services_heading || defaultConfig.services_heading;
            document.getElementById('services-heading').style.color = text;
            document.getElementById('services-heading').style.fontFamily = `${headingFont}, serif`;
            document.getElementById('services-heading').style.fontSize = `${baseSize * 2.25}px`;

            document.querySelectorAll('.service-card').forEach(card => {
                card.style.backgroundColor = surface;
                const h3 = card.querySelector('h3');
                if (h3) { h3.style.color = text; h3.style.fontFamily = `${headingFont}, serif`; }
                const p = card.querySelector('p:last-child');
                if (p) p.style.color = secondary;
                const iconBg = card.querySelector('.w-14');
                if (iconBg) iconBg.style.backgroundColor = primary + '1A';
                card.querySelectorAll('svg path, svg circle').forEach(el => {
                    if (el.getAttribute('stroke')) el.setAttribute('stroke', primary);
                    if (el.getAttribute('fill') && el.getAttribute('fill') !== 'none') el.setAttribute('fill', primary);
                });
            });

            // Accent color labels
            document.querySelectorAll('[tracking-widest],.tracking-widest').forEach(el => {
                // handled individually
            });
            const accentLabels = document.querySelectorAll('p.tracking-widest, [class*="tracking-widest"]');
            accentLabels.forEach(el => { el.style.color = primary; });

            // About section
            const aboutSection = document.getElementById('about');
            aboutSection.style.backgroundColor = surface;
            document.getElementById('about-heading').textContent = config.about_heading || defaultConfig.about_heading;
            document.getElementById('about-heading').style.color = text;
            document.getElementById('about-heading').style.fontFamily = `${headingFont}, serif`;
            document.getElementById('about-heading').style.fontSize = `${baseSize * 2.25}px`;

            document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
            document.getElementById('about-text').style.color = secondary;
            document.getElementById('about-text').style.fontSize = `${baseSize}px`;

            document.getElementById('doctor-name-badge').textContent = config.doctor_name || defaultConfig.doctor_name;
            document.getElementById('doctor-name-badge').style.color = bg;
            document.getElementById('doctor-name-badge').style.fontFamily = `${headingFont}, serif`;

            // Doctor portrait background
            const portrait = document.getElementById('doctor-name-badge').closest('.rounded-3xl');
            if (portrait) portrait.style.background = `linear-gradient(145deg, ${text}, ${secondary})`;

            // About tags
            aboutSection.querySelectorAll('.rounded-full.text-sm').forEach(tag => {
                tag.style.backgroundColor = text + '0F';
                tag.style.color = text;
            });

            // Testimonials
            const testimonialsSection = aboutSection.nextElementSibling;
            if (testimonialsSection) {
                const tHeading = testimonialsSection.querySelector('.font-heading');
                if (tHeading) { tHeading.style.color = text; tHeading.style.fontFamily = `${headingFont}, serif`; }
                testimonialsSection.querySelectorAll('.rounded-2xl').forEach(card => {
                    card.style.backgroundColor = surface;
                    const body = card.querySelector('.leading-relaxed');
                    if (body) body.style.color = secondary;
                    const author = card.querySelector('.font-semibold');
                    if (author) author.style.color = text;
                });
            }

            // Contact section
            const contactSection = document.getElementById('contact');
            contactSection.style.backgroundColor = text;
            contactSection.querySelector('h2').style.color = bg;
            contactSection.querySelector('h2').style.fontFamily = `${headingFont}, serif`;

            document.getElementById('contact-phone').textContent = config.phone_number || defaultConfig.phone_number;
            document.getElementById('contact-address').textContent = config.address || defaultConfig.address;
            document.getElementById('contact-hours').textContent = config.hours_text || defaultConfig.hours_text;

            contactSection.querySelectorAll('.rounded-2xl').forEach(card => {
                card.style.background = bg + '0F';
                const label = card.querySelector('.font-semibold');
                if (label) label.style.color = bg;
                const detail = card.querySelector('.text-sm:last-child');
                if (detail) detail.style.color = bg + 'A6';
            });

            document.getElementById('contact-cta').style.backgroundColor = primary;

            // Footer
            const footer = document.querySelector('footer');
            footer.style.backgroundColor = bg;
            document.getElementById('footer-practice-name').textContent = config.practice_name || defaultConfig.practice_name;
            document.getElementById('footer-practice-name').style.color = text;
            document.getElementById('footer-practice-name').style.fontFamily = `${headingFont}, serif`;
            footer.querySelector('.text-xs').style.color = secondary;
            footer.querySelector('svg path').setAttribute('fill', text);

            // Global font sizing for body text
            document.querySelectorAll('.font-body').forEach(el => {
                el.style.fontSize = `${baseSize}px`;
            });
        }

        // Initialize Element SDK
        window.elementSdk.init({
            defaultConfig,
            onConfigChange: async (config) => {
                applyConfig(config);
            },
            mapToCapabilities: (config) => ({
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
                    },
                    {
                        get: () => config.primary_action_color || defaultConfig.primary_action_color,
                        set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); }
                    },
                    {
                        get: () => config.secondary_text_color || defaultConfig.secondary_text_color,
                        set: (v) => { config.secondary_text_color = v; window.elementSdk.setConfig({ secondary_text_color: v }); }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
                }
            }),
            mapToEditPanelValues: (config) => new Map([
                ['practice_name', config.practice_name || defaultConfig.practice_name],
                ['tagline', config.tagline || defaultConfig.tagline],
                ['hero_heading', config.hero_heading || defaultConfig.hero_heading],
                ['hero_subtext', config.hero_subtext || defaultConfig.hero_subtext],
                ['cta_button_text', config.cta_button_text || defaultConfig.cta_button_text],
                ['services_heading', config.services_heading || defaultConfig.services_heading],
                ['about_heading', config.about_heading || defaultConfig.about_heading],
                ['about_text', config.about_text || defaultConfig.about_text],
                ['doctor_name', config.doctor_name || defaultConfig.doctor_name],
                ['phone_number', config.phone_number || defaultConfig.phone_number],
                ['address', config.address || defaultConfig.address],
                ['hours_text', config.hours_text || defaultConfig.hours_text]
            ])
        });
   (function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9cc72938f39ab30c',t:'MTc3MDg0NzY2Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();