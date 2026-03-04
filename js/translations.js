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
        "about.mission.text": "Design, develop and produce high-quality products using advanced technological expertise, ensuring the continuous satisfaction of our customers worldwide.",
        "about.vision.title": "Vision",
        "about.vision.text": "Create added value through advanced, high-quality industrial solutions that exceed customer expectations and adapt to evolving technologies and global markets.",
        "about.values.title": "Values",
        "about.values.text": "We are guided by ethics, respect, humility, honesty, professionalism, innovation, quality and responsibility, ensuring sustainable and trustworthy practices.",

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
        "stats.area": "Workers",
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
        "metalworking.categories.automotive.desc": "High-precision components, focusing on reliability, durability and safety to meet the sector's most demanding standards.",
        "metalworking.categories.food": "Food",
        "metalworking.categories.food.desc": "Designed for hygiene, precision and durability, meeting the strict safety and quality standards of the food sector.",
        "metalworking.categories.industrial": "Industrial",
        "metalworking.categories.industrial.desc": "Robust and precise components designed to withstand heavy use and demanding operational conditions.",

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
        "metalworking.certification.subtitle": "Our facilities are IATF 16949 and ISO 9001:2015 certified (approval no. 44 100 170400). Audited and approved by SGS.",
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
        "metalworking.contacts.sales.title": "Sales Contact",
        "metalworking.contacts.sales.name": "David Carvalho",

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
        "metalworking.footer.info.downloads": "Downloads",

        // Electrical Systems Page — Hero
        "electrical.hero.title": "Electrical Systems",
        "electrical.hero.product.title": "Wire Harness",
        "electrical.hero.product.description": "The companies Sulimet Wiring Harness and Sulimet C\u00e2blage focus on the production of wiring harnesses for both the automotive sector and various industrial applications.",

        // Capabilities
        "electrical.capabilities.title": "Capabilities",
        "electrical.capabilities.prototyping.title": "PROTOTYPING",
        "electrical.capabilities.prototyping.description": "Our engineering teams rely on advanced electrical design and simulation tools to develop accurate and reliable wiring solutions. Through a fast and flexible prototyping process, we validate connectivity, fit and functionality, ensuring seamless integration into our clients' production lines.",
        "electrical.capabilities.quality.title": "QUALITY CONTROL",
        "electrical.capabilities.quality.description": "To ensure maximum reliability, every wiring harness undergoes rigorous inspection and project-specific testing. Our quality laboratories validate new designs by assessing electrical performance, durability and material compliance, ensuring results that meet and often surpass industry standards.",
        "electrical.capabilities.maintenance.title": "MAINTENANCE",
        "electrical.capabilities.maintenance.description": "Our maintenance teams ensure the reliability of all production equipment through preventive routines and continuous monitoring. By combining technical expertise with real-time diagnostics, we minimize downtime, optimize performance and maintain stable conditions for high-quality wiring harness manufacturing.",
        "electrical.capabilities.production.title": "PRODUCTION",
        "electrical.capabilities.production.description": "Our production lines operate with advanced equipment and integrated traceability systems that ensure consistency and reliability in every wiring harness we manufacture. This technological environment supports continuous improvement, enabling adjustments in real time and driving efficiency through lean-based processes.",

        // Certifications
        "electrical.certification.title": "CERTIFICATIONS",
        "electrical.certification.subtitle": "Our facilities comply with international quality standards, ensuring consistent and reliable production across all our units in Portugal and Morocco.",

        // Manufacturing Technologies
        "electrical.manufacturing.title": "Manufacturing Technologies",
        "electrical.manufacturing.tech1.caption": "Swiss Turning",
        "electrical.manufacturing.tech2.caption": "Turning",
        "electrical.manufacturing.tech3.caption": "Milling",
        "electrical.manufacturing.more": "More manufacturing technologies",
        "electrical.manufacturing.list1.1": "Terminal ultrasonic welding",
        "electrical.manufacturing.list1.2": "Selection dispenser",
        "electrical.manufacturing.list1.3": "Wire twisting",
        "electrical.manufacturing.list1.4": "PCB welding",
        "electrical.manufacturing.list1.5": "Assembly lines",
        "electrical.manufacturing.list1.6": "Electrical checking",
        "electrical.manufacturing.list2.1": "Sealing verification",
        "electrical.manufacturing.list2.2": "Subsets already assembled of electrical wiring with plastic parts",
        "electrical.manufacturing.list2.3": "Assembly lines",
        "electrical.manufacturing.list2.4": "Automatic coaxial cable cutting and stripping",
        "electrical.manufacturing.list2.5": "Automatic unitary seals positioning",
        "electrical.manufacturing.list3.1": "Ultrasonic conforming of cable ends",
        "electrical.manufacturing.list3.2": "Thermo-shrinkable sealing sleeve application",
        "electrical.manufacturing.list3.3": "Cable ends tinning",
        "electrical.manufacturing.list3.4": "Components with highly innovative plastic compounds",

        // Contacts
        "electrical.contacts.title": "CONTACTS",
        "electrical.contacts.portugal.company": "Sulimet Wiring Harness",
        "electrical.contacts.portugal.address": "R. Zona Industrial, 773, Canedo, Aveiro, Portugal, 4525-062",
        "electrical.contacts.morocco.company": "Sulimet C\u00e2blage",
        "electrical.contacts.morocco.address": "Ilot 13 Lot n.\u00b03, Tanger Med Free Zone, Tanger, Tanger-T\u00e9touan-Al Hoce\u00efma, Morocco, 90000",
        "electrical.contacts.sales.title": "Sales Contact",
        "electrical.contacts.sales.name": "\u00c2ntonio Guedes",

        // Footer
        "electrical.footer.about.title": "About",
        "electrical.footer.about.who": "Who we are",
        "electrical.footer.about.history": "History",
        "electrical.footer.about.contact": "Contact us",
        "electrical.footer.about.downloads": "Downloads",
        "electrical.footer.capabilities.title": "Capabilities",
        "electrical.footer.capabilities.prototyping": "Prototyping",
        "electrical.footer.capabilities.quality": "Quality Control",
        "electrical.footer.capabilities.contact": "Contact us",
        "electrical.footer.capabilities.downloads": "Downloads",
        "electrical.footer.info.title": "Info",
        "electrical.footer.info.privacy": "Privacy policy",
        "electrical.footer.info.compete": "Compete 2030",
        "electrical.footer.info.contact": "Contact us",
        "electrical.footer.info.downloads": "Downloads"
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
        "about.mission.text": "Conceber, desenvolver e produzir produtos de alta qualidade utilizando conhecimentos tecnológicos avançados, garantindo a satisfação contínua dos nossos clientes em todo o mundo.",
        "about.vision.title": "Visão",
        "about.vision.text": "Criar valor acrescentado através de soluções industriais avançadas e de alta qualidade que superam as expectativas dos clientes e se adaptam às tecnologias em evolução e aos mercados globais.",
        "about.values.title": "Valores",
        "about.values.text": "Somos guiados pela ética, respeito, humildade, honestidade, profissionalismo, inovação, qualidade e responsabilidade, garantindo práticas sustentáveis e de confiança.",

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
        "stats.area": "Trabalhadores",
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
        "metalworking.categories.automotive.desc": "Componentes de alta precisão, com foco em fiabilidade, durabilidade e segurança para cumprir os padrões mais exigentes do setor.",
        "metalworking.categories.food": "Alimentar",
        "metalworking.categories.food.desc": "Concebidos para higiene, precisão e durabilidade, cumprindo os rigorosos padrões de segurança e qualidade do setor alimentar.",
        "metalworking.categories.industrial": "Industrial",
        "metalworking.categories.industrial.desc": "Componentes robustos e precisos, concebidos para suportar uso intensivo e condições operacionais exigentes.",

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
        "metalworking.certification.subtitle": "As nossas instalações possuem certificação IATF 16949 e ISO 9001:2015 (n.º de aprovação 44 100 170400). Auditadas e aprovadas pela SGS.",
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
        "metalworking.contacts.sales.title": "Contacto Comercial",
        "metalworking.contacts.sales.name": "David Carvalho",

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
        "metalworking.footer.info.downloads": "Downloads",

        // Electrical Systems Page — Hero
        "electrical.hero.title": "Sistemas El\u00e9tricos",
        "electrical.hero.product.title": "Cablagem",
        "electrical.hero.product.description": "As empresas Sulimet Wiring Harness e Sulimet C\u00e2blage focam-se na produ\u00e7\u00e3o de cablagens para o setor autom\u00f3vel e para diversas aplica\u00e7\u00f5es industriais.",

        // Capabilities
        "electrical.capabilities.title": "Capacidades",
        "electrical.capabilities.prototyping.title": "PROTOTIPAGEM",
        "electrical.capabilities.prototyping.description": "As nossas equipas de engenharia recorrem a ferramentas avan\u00e7adas de design e simula\u00e7\u00e3o el\u00e9trica para desenvolver solu\u00e7\u00f5es de cablagem precisas e fi\u00e1veis. Atrav\u00e9s de um processo de prototipagem r\u00e1pido e flex\u00edvel, validamos a conectividade, a montagem e a funcionalidade, garantindo uma integra\u00e7\u00e3o perfeita nas linhas de produ\u00e7\u00e3o dos nossos clientes.",
        "electrical.capabilities.quality.title": "CONTROLO DE QUALIDADE",
        "electrical.capabilities.quality.description": "Para garantir a m\u00e1xima fiabilidade, cada cablagem \u00e9 submetida a inspe\u00e7\u00e3o rigorosa e a testes espec\u00edficos de projeto. Os nossos laborat\u00f3rios de qualidade validam novos designs avaliando o desempenho el\u00e9trico, a durabilidade e a conformidade dos materiais, assegurando resultados que cumprem e frequentemente superam os padr\u00f5es da ind\u00fastria.",
        "electrical.capabilities.maintenance.title": "MANUTEN\u00c7\u00c3O",
        "electrical.capabilities.maintenance.description": "As nossas equipas de manuten\u00e7\u00e3o garantem a fiabilidade de todos os equipamentos de produ\u00e7\u00e3o atrav\u00e9s de rotinas preventivas e monitoriza\u00e7\u00e3o cont\u00ednua. Combinando conhecimento t\u00e9cnico com diagn\u00f3sticos em tempo real, minimizamos paragens, otimizamos o desempenho e mantemos condi\u00e7\u00f5es est\u00e1veis para a produ\u00e7\u00e3o de cablagens de alta qualidade.",
        "electrical.capabilities.production.title": "PRODU\u00c7\u00c3O",
        "electrical.capabilities.production.description": "As nossas linhas de produ\u00e7\u00e3o operam com equipamentos avan\u00e7ados e sistemas de rastreabilidade integrados que garantem consist\u00eancia e fiabilidade em cada cablagem que fabricamos. Este ambiente tecnol\u00f3gico suporta a melhoria cont\u00ednua, permitindo ajustes em tempo real e impulsionando a efici\u00eancia atrav\u00e9s de processos lean.",

        // Certifications
        "electrical.certification.title": "CERTIFICA\u00c7\u00d5ES",
        "electrical.certification.subtitle": "As nossas instala\u00e7\u00f5es cumprem os padr\u00f5es internacionais de qualidade, garantindo uma produ\u00e7\u00e3o consistente e fi\u00e1vel em todas as nossas unidades em Portugal e Marrocos.",

        // Manufacturing Technologies
        "electrical.manufacturing.title": "Tecnologias de Fabrico",
        "electrical.manufacturing.tech1.caption": "Torneamento Suiço",
        "electrical.manufacturing.tech2.caption": "Torneamento",
        "electrical.manufacturing.tech3.caption": "Milling",
        "electrical.manufacturing.more": "Mais tecnologias de fabrico",
        "electrical.manufacturing.list1.1": "Soldadura ultrass\u00f3nica de terminais",
        "electrical.manufacturing.list1.2": "Dispensador de sele\u00e7\u00e3o",
        "electrical.manufacturing.list1.3": "Tor\u00e7\u00e3o de fios",
        "electrical.manufacturing.list1.4": "Soldadura de PCB",
        "electrical.manufacturing.list1.5": "Linhas de montagem",
        "electrical.manufacturing.list1.6": "Verifica\u00e7\u00e3o el\u00e9trica",
        "electrical.manufacturing.list2.1": "Verifica\u00e7\u00e3o de selagem",
        "electrical.manufacturing.list2.2": "Subconjuntos de cablagem el\u00e9trica j\u00e1 montados com pe\u00e7as pl\u00e1sticas",
        "electrical.manufacturing.list2.3": "Linhas de montagem",
        "electrical.manufacturing.list2.4": "Corte e decapagem autom\u00e1tica de cabo coaxial",
        "electrical.manufacturing.list2.5": "Posicionamento autom\u00e1tico de vedantes unit\u00e1rios",
        "electrical.manufacturing.list3.1": "Conforma\u00e7\u00e3o ultrass\u00f3nica de extremidades de cabo",
        "electrical.manufacturing.list3.2": "Aplica\u00e7\u00e3o de manga termorretract\u00edl de selagem",
        "electrical.manufacturing.list3.3": "Estanhagem de extremidades de cabo",
        "electrical.manufacturing.list3.4": "Componentes com compostos pl\u00e1sticos altamente inovadores",

        // Contacts
        "electrical.contacts.title": "CONTACTOS",
        "electrical.contacts.portugal.company": "Sulimet Wiring Harness",
        "electrical.contacts.portugal.address": "R. Zona Industrial, 773, Canedo, Aveiro, Portugal, 4525-062",
        "electrical.contacts.morocco.company": "Sulimet C\u00e2blage",
        "electrical.contacts.morocco.address": "Ilot 13 Lot n.\u00b03, Tanger Med Free Zone, Tanger, Tanger-T\u00e9touan-Al Hoce\u00efma, Marrocos, 90000",
        "electrical.contacts.sales.title": "Contacto Comercial",
        "electrical.contacts.sales.name": "\u00c2ntonio Guedes",

        // Footer
        "electrical.footer.about.title": "Sobre",
        "electrical.footer.about.who": "Quem somos",
        "electrical.footer.about.history": "Hist\u00f3ria",
        "electrical.footer.about.contact": "Contacte-nos",
        "electrical.footer.about.downloads": "Downloads",
        "electrical.footer.capabilities.title": "Capacidades",
        "electrical.footer.capabilities.prototyping": "Prototipagem",
        "electrical.footer.capabilities.quality": "Controlo de Qualidade",
        "electrical.footer.capabilities.contact": "Contacte-nos",
        "electrical.footer.capabilities.downloads": "Downloads",
        "electrical.footer.info.title": "Info",
        "electrical.footer.info.privacy": "Pol\u00edtica de privacidade",
        "electrical.footer.info.compete": "Compete 2030",
        "electrical.footer.info.contact": "Contacte-nos",
        "electrical.footer.info.downloads": "Downloads"
    }
};

// Current language
let currentLang = 'en';
try {
    currentLang = localStorage.getItem('sulimet-lang') || 'en';
} catch (e) {
    // localStorage may be unavailable in iOS private browsing (older Safari)
}

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
    try {
        localStorage.setItem('sulimet-lang', lang);
    } catch (e) {
        // localStorage may be unavailable in iOS private browsing (older Safari)
    }
    updateTranslations();
}

// Initialize translations on DOM load
document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
});
