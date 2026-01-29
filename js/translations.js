// ===== Translation System =====
const translations = {
    en: {
        // Navigation
        "nav.about": "About Us",
        "nav.contact": "Contacts",

        // Hero
        "hero.title": "Sulimet - Industrial Solutions in Metalworking & Electrical Systems",
        "hero.btn.metalworking": "Metalworking",
        "hero.btn.electrical": "Electrical Systems",

        // About Section
        "about.title": "About Us",
        "about.description": "The Sulimet Group is composed of <strong>four companies</strong> operating in <strong>two countries</strong>, <strong>Portugal</strong> and <strong>Morocco</strong>.<br><br>We specialize in <strong>wiring harnesses</strong> and <strong>metal parts</strong>, serving markets including automotive, food and the construction industry.",
        "about.mission.title": "Mission",
        "about.mission.text": "To provide innovative and high-quality industrial solutions, contributing to the success of our partners and clients.",
        "about.vision.title": "Vision",
        "about.vision.text": "To be a reference in the industrial solutions market, recognized for excellence, innovation and commitment to sustainability.",
        "about.values.title": "Values",
        "about.values.text": "Quality, integrity, innovation, customer commitment and social and environmental responsibility.",

        // Services Section
        "services.title": "Our History",
        "services.subtitle": "Complete solutions for the industry",
        "services.parts.title": "Parts Manufacturing",
        "services.parts.text": "Production of high-precision metal components for various industrial sectors.",
        "services.cnc.title": "CNC Machining",
        "services.cnc.text": "Precision machining services with state-of-the-art equipment.",
        "services.materials.title": "Metal Materials",
        "services.materials.text": "Supply of bars, profiles and metal materials for the industry.",
        "services.assembly.title": "Industrial Assembly",
        "services.assembly.text": "Assembly and integration services for industrial components.",

        // Stats Section
        "stats.parts": "Parts Manufactured<br>in 2025",
        "stats.area": "Production area",
        "stats.projects": "Number of projects",

        // History Section
        "history.title": "Our History",
        "history.subtitle": "A journey of success and innovation",
        "history.1989": "The company was founded as Suleve, later renamed Sulimet, beginning production of wiring systems for the automotive industry in Santa Maria da Feira, Canedo, Portugal.",
        "history.2008": "Sulimet was founded, establishing a unit for the production of metal and plastic parts still in Portugal.",
        "history.2009": "Achieved ISO 9001 certification in Portugal and started operations of the metalworking unit in Tangier, Morocco.",
        "history.2010": "Wiring systems production for the automotive industry began in Tangier, Morocco.",
        "history.2011": "Achieved IATF 16949 certification in Tangier, Morocco.",
        "history.2015": "Achieved IATF 16949 certification in Portugal.",
        "history.2017": "Achieved H&S, ISO 14001 and OHSAS 18001 certifications in Morocco.",
        "history.2018": "Achieved ISO 9001 certification in Tangier, Morocco.",
        "history.2019": "Implemented a new ERP system and created the sales department.",
        "history.2021": "Division of Sulimet, Lda and creation of Sulimet Wiring, Lda.",

        // Global Section
        "global.title": "Global Presence",
        "global.subtitle": "We serve clients worldwide",
        "global.continents": "Continents",
        "global.countries": "Countries",
        "global.partners": "Partners",
        "global.map.portugal1.title": "Sulimet, Lda",
        "global.map.portugal1.location": "Canedo, Santa Maria da Feira, Portugal",
        "global.map.portugal2.title": "Sulimet Wiring, Lda",
        "global.map.portugal2.location": "Canedo, Santa Maria da Feira, Portugal",
        "global.map.morocco1.title": "Sulimet Maroc, Sarl",
        "global.map.morocco1.location": "Tangier, Morocco",
        "global.map.morocco2.title": "Sulimet Wiring Maroc, Sarl",
        "global.map.morocco2.location": "Tangier, Morocco",

        // Contact Section
        "contact.title": "Get in Touch",
        "contact.description": "We are ready to meet your industrial needs. Contact us today.",
        "contact.address.title": "Address",
        "contact.address.text": "Industrial Street, 1000<br>Lisbon, Portugal",
        "contact.phone.title": "Phone",
        "contact.email.title": "Email",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",

        // Footer
        "footer.description": "High-quality industrial solutions since 1989.",
        "footer.quicklinks": "Quick Links",
        "footer.quicklinks.home": "Home",
        "footer.quicklinks.about": "About",
        "footer.quicklinks.services": "Services",
        "footer.quicklinks.contact": "Contact",
        "footer.services": "Services",
        "footer.services.parts": "Parts Manufacturing",
        "footer.services.cnc": "CNC Machining",
        "footer.services.materials": "Metal Materials",
        "footer.services.assembly": "Industrial Assembly",
        "footer.social": "Social Media",
        "footer.copyright": "© 2024 Sulimet - Industry Solutions. All rights reserved.",

        // Notifications
        "notification.required": "Please fill in all required fields.",
        "notification.email": "Please enter a valid email address.",
        "notification.success": "Message sent successfully! We will contact you soon.",

        // Metalworking Page
        "metalworking.hero.title": "Metalworking",
        "metalworking.hero.description": "Precision metalworking solutions for demanding industries. From CNC machining to Swiss turning, we deliver quality-certified components with tolerances as tight as \u00b10.01mm.",
        "metalworking.categories.automotive": "Automotive",
        "metalworking.categories.food": "Food",
        "metalworking.categories.industrial": "Industrial",

        // Capabilities
        "metalworking.capabilities.title": "Capabilities",
        "metalworking.capabilities.swiss.title": "Swiss Turning",
        "metalworking.capabilities.swiss.spec1": "8 CNC turning centers",
        "metalworking.capabilities.swiss.spec2": "Machines up to 7 axis",
        "metalworking.capabilities.swiss.spec3": "Capacity to work pieces from Ø3 to Ø55 (mm)",
        "metalworking.capabilities.turning.title": "Turning",
        "metalworking.capabilities.turning.spec1": "8 CNC turning centers",
        "metalworking.capabilities.turning.spec2": "Machines up to 7 axis",
        "metalworking.capabilities.turning.spec3": "Capacity to work pieces from Ø3 to Ø55 (mm)",
        "metalworking.capabilities.milling.title": "Milling",
        "metalworking.capabilities.milling.spec1": "8 CNC turning centers",
        "metalworking.capabilities.milling.spec2": "Machines up to 7 axis",
        "metalworking.capabilities.milling.spec3": "Capacity to work pieces from Ø3 to Ø55 (mm)",
        "metalworking.capabilities.more": "More technologies",

        // Services
        "metalworking.cadcam.title": "CAD-CAM",
        "metalworking.cadcam.description": "Our advanced CAD-CAM systems integrate design and manufacturing for seamless production workflows. Using industry-leading software, we transform 3D models into precision-machined components, providing complete DFM analysis to optimize part designs for cost-effective production.",
        "metalworking.quality.title": "QUALITY CONTROL",
        "metalworking.quality.description": "Every component undergoes rigorous inspection using advanced metrology equipment. Our quality management system, certified to ISO 9001 and IATF 16949, ensures full traceability and consistent precision across every production run.",
        "metalworking.certification.title": "CERTIFICATION",
        "metalworking.certification.subtitle": "Our facilities in Portugal and Morocco hold internationally recognized quality, environmental and safety certifications.",
        "metalworking.welding.title": "WELDING",
        "metalworking.welding.description": "We offer MIG, TIG and spot welding capabilities for steel, stainless steel and aluminium assemblies. Our certified welders deliver strong, clean joints that meet the structural and aesthetic requirements of the automotive, food and construction industries.",
        "metalworking.printing3d.title": "3D PRINTING",
        "metalworking.printing3d.description": "Our additive manufacturing capabilities enable rapid prototyping and short-run production of complex geometries. We use metal and polymer 3D printing to accelerate development cycles and reduce tooling costs for our clients.",

        // Materials
        "metalworking.materials.title": "MATERIALS",
        "metalworking.materials.stainless.title": "Stainless Steel",
        "metalworking.materials.carbon.title": "Carbon Steel",
        "metalworking.materials.aluminium.title": "Aluminium",
        "metalworking.materials.brass.title": "Brass Alloys",
        "metalworking.materials.others.title": "Others",

        // Contacts
        "metalworking.contacts.title": "CONTACTS",
        "metalworking.contacts.portugal.company": "Sulimet, Lda",
        "metalworking.contacts.portugal.address": "R. Zona Industrial, 773, Canedo, Aveiro, Portugal, 4525-062",
        "metalworking.contacts.morocco.company": "Sulimet Maroc, Sarl",
        "metalworking.contacts.morocco.address": "Ilot 13 Lot n.°3, Tanger Med Free Zone, Tanger, Tanger-Tétouan-Al Hoceima, Morocco, 90000",

        // Footer
        "metalworking.footer.about.title": "About",
        "metalworking.footer.about.who": "Who we are",
        "metalworking.footer.about.history": "History",
        "metalworking.footer.about.contact": "Contact us",
        "metalworking.footer.about.downloads": "Downloads",
        "metalworking.footer.capabilities.title": "Capabilities",
        "metalworking.footer.capabilities.cadcam": "CAD/CAM",
        "metalworking.footer.capabilities.quality": "Quality Control",
        "metalworking.footer.capabilities.contact": "Contact us",
        "metalworking.footer.capabilities.downloads": "Downloads",
        "metalworking.footer.info.title": "Info",
        "metalworking.footer.info.privacy": "Privacy policy",
        "metalworking.footer.info.compete": "Compete 2030",
        "metalworking.footer.info.contact": "Contact us",
        "metalworking.footer.info.downloads": "Downloads"
    },
    pt: {
        // Navigation
        "nav.about": "Sobre Nós",
        "nav.contact": "Contactos",

        // Hero
        "hero.title": "Sulimet - Soluções Industriais em Metalomecânica e Sistemas Elétricos",
        "hero.btn.metalworking": "Metalomecânica",
        "hero.btn.electrical": "Sistemas Elétricos",

        // About Section
        "about.title": "Sobre Nós",
        "about.description": "O Grupo Sulimet é composto por <strong>quatro empresas</strong> a operar em <strong>dois países</strong>, <strong>Portugal</strong> e <strong>Marrocos</strong>.<br><br>Especializamo-nos em <strong>cablagens</strong> e <strong>peças metálicas</strong>, servindo mercados como automóvel, alimentar e construção civil.",
        "about.mission.title": "Missão",
        "about.mission.text": "Fornecer soluções industriais inovadoras e de alta qualidade, contribuindo para o sucesso dos nossos parceiros e clientes.",
        "about.vision.title": "Visão",
        "about.vision.text": "Ser referência no mercado de soluções industriais, reconhecida pela excelência, inovação e compromisso com a sustentabilidade.",
        "about.values.title": "Valores",
        "about.values.text": "Qualidade, integridade, inovação, compromisso com o cliente e responsabilidade social e ambiental.",

        // Services Section
        "services.title": "A Nossa História",
        "services.subtitle": "Soluções completas para a indústria",
        "services.parts.title": "Fabricação de Peças",
        "services.parts.text": "Produção de componentes metálicos de alta precisão para diversos setores industriais.",
        "services.cnc.title": "Maquinação CNC",
        "services.cnc.text": "Serviços de maquinação de precisão com equipamentos de última geração.",
        "services.materials.title": "Materiais Metálicos",
        "services.materials.text": "Fornecimento de barras, perfis e materiais metálicos para a indústria.",
        "services.assembly.title": "Montagem Industrial",
        "services.assembly.text": "Serviços de montagem e integração de componentes industriais.",

        // Stats Section
        "stats.parts": "Peças Fabricadas<br>em 2025",
        "stats.area": "Área de produção",
        "stats.projects": "Número de projetos",

        // History Section
        "history.title": "A Nossa História",
        "history.subtitle": "Uma trajetória de sucesso e inovação",
        "history.1989": "A empresa foi fundada como Suleve, mais tarde renomeada Sulimet, iniciando a produção de sistemas de cablagem para a indústria automóvel em Santa Maria da Feira, Canedo, Portugal.",
        "history.2008": "Sulimet foi fundada, estabelecendo uma unidade para a produção de peças metálicas e plásticas ainda em Portugal.",
        "history.2009": "Obtida certificação ISO 9001 em Portugal e iniciadas operações da unidade de metalomecânica em Tanger, Marrocos.",
        "history.2010": "Início da produção de sistemas de cablagem para a indústria automóvel em Tanger, Marrocos.",
        "history.2011": "Obtida certificação IATF 16949 em Tanger, Marrocos.",
        "history.2015": "Obtida certificação IATF 16949 em Portugal.",
        "history.2017": "Obtidas certificações H&S, ISO 14001 e OHSAS 18001 em Marrocos.",
        "history.2018": "Obtida certificação ISO 9001 em Tanger, Marrocos.",
        "history.2019": "Implementado novo sistema ERP e criado departamento de vendas.",
        "history.2021": "Divisão de Sulimet, Lda e criação de Sulimet Wiring, Lda.",

        // Global Section
        "global.title": "Presença Global",
        "global.subtitle": "Servimos clientes em todo o mundo",
        "global.continents": "Continentes",
        "global.countries": "Países",
        "global.partners": "Parceiros",
        "global.map.portugal1.title": "Sulimet, Lda",
        "global.map.portugal1.location": "Canedo, Santa Maria da Feira, Portugal",
        "global.map.portugal2.title": "Sulimet Wiring, Lda",
        "global.map.portugal2.location": "Canedo, Santa Maria da Feira, Portugal",
        "global.map.morocco1.title": "Sulimet Maroc, Sarl",
        "global.map.morocco1.location": "Tânger, Marrocos",
        "global.map.morocco2.title": "Sulimet Wiring Maroc, Sarl",
        "global.map.morocco2.location": "Tânger, Marrocos",

        // Contact Section
        "contact.title": "Entre em Contacto",
        "contact.description": "Estamos prontos para atender às suas necessidades industriais. Contacte-nos hoje.",
        "contact.address.title": "Morada",
        "contact.address.text": "Rua Industrial, 1000<br>Lisboa, Portugal",
        "contact.phone.title": "Telefone",
        "contact.email.title": "Email",
        "contact.form.name": "O Seu Nome",
        "contact.form.email": "O Seu Email",
        "contact.form.subject": "Assunto",
        "contact.form.message": "A Sua Mensagem",
        "contact.form.submit": "Enviar Mensagem",

        // Footer
        "footer.description": "Soluções industriais de alta qualidade desde 1989.",
        "footer.quicklinks": "Links Rápidos",
        "footer.quicklinks.home": "Início",
        "footer.quicklinks.about": "Sobre",
        "footer.quicklinks.services": "Serviços",
        "footer.quicklinks.contact": "Contacto",
        "footer.services": "Serviços",
        "footer.services.parts": "Fabricação de Peças",
        "footer.services.cnc": "Maquinação CNC",
        "footer.services.materials": "Materiais Metálicos",
        "footer.services.assembly": "Montagem Industrial",
        "footer.social": "Redes Sociais",
        "footer.copyright": "© 2024 Sulimet - Industry Solutions. Todos os direitos reservados.",

        // Notifications
        "notification.required": "Por favor, preencha todos os campos obrigatórios.",
        "notification.email": "Por favor, insira um email válido.",
        "notification.success": "Mensagem enviada com sucesso! Entraremos em contacto em breve.",

        // Metalworking Page
        "metalworking.hero.title": "Metalomecânica",
        "metalworking.hero.description": "Soluções de metalomecânica de precisão para indústrias exigentes. Da maquinação CNC ao torneamento suíço, entregamos componentes certificados com tolerâncias até \u00b10,01mm.",
        "metalworking.categories.automotive": "Automóvel",
        "metalworking.categories.food": "Alimentar",
        "metalworking.categories.industrial": "Industrial",

        // Capabilities
        "metalworking.capabilities.title": "Capacidades",
        "metalworking.capabilities.swiss.title": "Torneamento Suíço",
        "metalworking.capabilities.swiss.spec1": "8 centros de torneamento CNC",
        "metalworking.capabilities.swiss.spec2": "Máquinas até 7 eixos",
        "metalworking.capabilities.swiss.spec3": "Capacidade para peças de Ø3 a Ø55 (mm)",
        "metalworking.capabilities.turning.title": "Torneamento",
        "metalworking.capabilities.turning.spec1": "8 centros de torneamento CNC",
        "metalworking.capabilities.turning.spec2": "Máquinas até 7 eixos",
        "metalworking.capabilities.turning.spec3": "Capacidade para peças de Ø3 a Ø55 (mm)",
        "metalworking.capabilities.milling.title": "Fresagem",
        "metalworking.capabilities.milling.spec1": "8 centros de torneamento CNC",
        "metalworking.capabilities.milling.spec2": "Máquinas até 7 eixos",
        "metalworking.capabilities.milling.spec3": "Capacidade para peças de Ø3 a Ø55 (mm)",
        "metalworking.capabilities.more": "Mais tecnologias",

        // Services
        "metalworking.cadcam.title": "CAD-CAM",
        "metalworking.cadcam.description": "Os nossos sistemas CAD-CAM avançados integram design e fabrico para fluxos de produção contínuos. Utilizando software de referência, transformamos modelos 3D em componentes maquinados com precisão, fornecendo análise DFM completa para otimizar os designs das peças.",
        "metalworking.quality.title": "CONTROLO QUALIDADE",
        "metalworking.quality.description": "Cada componente é submetido a inspeção rigorosa com equipamento avançado de metrologia. O nosso sistema de gestão de qualidade, certificado ISO 9001 e IATF 16949, garante rastreabilidade total e precisão consistente em cada lote de produção.",
        "metalworking.certification.title": "CERTIFICAÇÃO",
        "metalworking.certification.subtitle": "As nossas instalações em Portugal e Marrocos possuem certificações internacionais de qualidade, ambiente e segurança.",
        "metalworking.welding.title": "SOLDADURA",
        "metalworking.welding.description": "Oferecemos capacidades de soldadura MIG, TIG e por pontos para conjuntos em aço, aço inoxidável e alumínio. Os nossos soldadores certificados produzem juntas resistentes e limpas que cumprem os requisitos das indústrias automóvel, alimentar e construção.",
        "metalworking.printing3d.title": "IMPRESSÃO 3D",
        "metalworking.printing3d.description": "As nossas capacidades de fabrico aditivo permitem prototipagem rápida e produção de curtas séries com geometrias complexas. Utilizamos impressão 3D em metal e polímero para acelerar ciclos de desenvolvimento e reduzir custos de ferramentas.",

        // Materials
        "metalworking.materials.title": "MATERIAIS",
        "metalworking.materials.stainless.title": "Aço Inoxidável",
        "metalworking.materials.carbon.title": "Aço Carbono",
        "metalworking.materials.aluminium.title": "Alumínio",
        "metalworking.materials.brass.title": "Ligas de Latão",
        "metalworking.materials.others.title": "Outros",

        // Contacts
        "metalworking.contacts.title": "CONTACTOS",
        "metalworking.contacts.portugal.company": "Sulimet, Lda",
        "metalworking.contacts.portugal.address": "R. Zona Industrial, 773, Canedo, Aveiro, Portugal, 4525-062",
        "metalworking.contacts.morocco.company": "Sulimet Maroc, Sarl",
        "metalworking.contacts.morocco.address": "Ilot 13 Lot n.°3, Tanger Med Free Zone, Tanger, Tanger-Tétouan-Al Hoceima, Morocco, 90000",

        // Footer
        "metalworking.footer.about.title": "Sobre",
        "metalworking.footer.about.who": "Quem somos",
        "metalworking.footer.about.history": "História",
        "metalworking.footer.about.contact": "Contacte-nos",
        "metalworking.footer.about.downloads": "Downloads",
        "metalworking.footer.capabilities.title": "Capacidades",
        "metalworking.footer.capabilities.cadcam": "CAD/CAM",
        "metalworking.footer.capabilities.quality": "Controlo de Qualidade",
        "metalworking.footer.capabilities.contact": "Contacte-nos",
        "metalworking.footer.capabilities.downloads": "Downloads",
        "metalworking.footer.info.title": "Info",
        "metalworking.footer.info.privacy": "Política de privacidade",
        "metalworking.footer.info.compete": "Compete 2030",
        "metalworking.footer.info.contact": "Contacte-nos",
        "metalworking.footer.info.downloads": "Downloads"
    }
};

// Current language
let currentLang = localStorage.getItem('sulimet-lang') || 'en';

// Get translation
function t(key) {
    return translations[currentLang][key] || key;
}

// Update all translatable elements
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translation;
        } else {
            el.innerHTML = translation;
        }
    });

    // Update html lang attribute
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt';

    // Update active state on language toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
}

// Switch language
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('sulimet-lang', lang);
    updateTranslations();
}

// Initialize translations on DOM load
document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
});
