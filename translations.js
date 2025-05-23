// translations.js
 const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');

        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Fechar a sidebar ao clicar em um link (opcional)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        });
// Objeto de traduções
// translations.js

// Objeto de traduções (sem as chaves "roles", já que são gerenciadas pelo roleTextTranslations.js)
const translations = {
  'pt': {
      'see-skills': 'Veja minhas capacidades',
      'about-me': 'Sobre Mim',
      'programming': 'Programação',
      'admin-assistant': 'Assistente Administrativo',
      'digital-marketing': 'Marketing Digital',
      'data-analyst': 'Analista de Dados Júnior',
      'experience': 'Experiências',
      'skills': 'Capacidades',
      'contact': 'Contato',
      'choose-language': 'Escolha seu idioma',
      'about-me-text': 'Olá, me chamo Vitor Santos. Sou Assistente Administrativo, Assistente Virtual, Programador e Analista de Dados Júnior, com habilidades de programação em Python, Flask, HTML-CSS e JavaScript. Caso precise de um dos meus serviços, me mande um e-mail por contatos. Número: +5521977080240',
      'admin-tasks': 'Gerenciamento de tarefas administrativas...',
      'excel-level': 'Tenho Excel nível intermediário.',
      'matplotlib-level': 'Matplotlib Nível Avançado',
      'powerpoint-level': 'PowerPoint Nível Intermediário',
      'word-level': 'Word Nível Intermediário',
      'python-skills': 'Sou capaz de desenvolver aplicações web e de escritórios úteis usando Python.',
      'javascript-skills': 'Sou capaz de desenvolver scripts úteis para website voltados para front-end e Node para usar como servidor local.',
      'html-css-skills': 'Sou capaz de desenvolver sites úteis para web, sites estáticos e de exibição.',
      'bootstrap-skills': 'Faço sites responsivos e profissionais usando Bootstrap.',
      'netlify-skills': 'Uso Netlify para testar sites HTML-CSS, Bootstrap, sites com ou sem scripts do JavaScript, ou até mesmo para trabalho.',
      'heroku-skills': 'Uso Heroku para testar aplicações Python-Flask, ou até mesmo para trabalho usando aplicações úteis.',
      'digital-campaigns': 'Campanhas digitais e otimização SEO... Google Search Console, Site maps, Instagram, Facebook',
      'seo-skills': 'Search Engine Optimization (SEO) - Em PT: Otimização para motores de busca',
      'analytics-skills': 'Google Analytics - Google Search console - Google ADS - Google Adsense. Para monitorar, melhorar mecânismo de pesquisa de sites no google, fazer anuncios e campanhas nacionais ou internacionais, e fazer sites terem uma melhor monetização.',
      'mysql-workbench': 'Para manipular dados e usá-los em consultas complexas de dados.',
      "mysql-skills": "Para armazenar dados de maneira simples e organizada.Também sou apto a criar banco de dados para sites, JAVASCRIPT e Python  e para  Aplicativos desktop PYTHON .",
      'js-data': 'Biblioteca Chart e Leaflet, para demonstração gráfica de dados.',
      'outlier-exp': 'Outlier - geração de áudio para I.A Português para Inglês',
      'travel-agent': 'Agente de viagens - Auxiliando pessoas a conseguir passaporte com planos de cursos',
      'virtual-assistant': 'Assistente virtual - Writer translator freelancer pessoal de um amigo americano',
      'general-services': 'Auxiliar de serviços gerais - descarregando produtos de caminhão',
      'mason-helper': 'Ajudante de pedreiro - Ajudando a encher carrinho de areia, pegar cimentos, baldes de cimentos',
      'python-projects': 'PROJETOS PYTHON',
      'python-projects-list': 'Agendas comuns com banco de dados. Formulários com banco de dados, com hora e despertador. Leitor PDF com áudio. Script para enviar mensagens de Email com body responsivo para mais de 20.000 pessoas. Tradutor de áudio para txt, rtf ou srt. Transformador de textos em áudios com voz humana ou robótica. Árvore de decisão e regressão linear. Machine Learning. Machine Learning com estatística e probabilidade. Regressão linear. SRT para áudio em qualquer idioma. Cortar bordas de vídeos. Transformar texto em PDF. Transformar texto UTF-8 em texto cp1235. Planilhas de Despesas. Dashboard gráficos. Dashboard semidinâmico. Relógios. Calculadora. App semelhante ao Wordpad. App de edição de vídeos.',
      'flask-projects': 'PROJETOS FLASK',
      'flask-projects-list': 'Formulários com banco de dados. Aplicação de Chat com banco de dados, possível enviar fotos e vídeos. Aplicação escreva a sua história, foto história, salva com banco de dados. Dashboard leitor de planilhas Excel. Dashboard informador de dados de planilhas Excel e CSV. Login com banco de dados. Formulário Dashboard online com Dash. Informação de Dados.',
      'html-css-projects': 'PROJETOS | HTML-CSS, BOOTSTRAP, JAVASCRIPT',
      'html-css-projects-list': 'Site de curso para 25 idiomas diferentes. Lojas de roupa. Loja de artigos religiosos. Formulário Pessoal. Site de conteúdo adulto. Site de jogos. Portfólio pessoal com login e senha. Site para Clínica. Site para Oficina. Planilha de cálculo de despesas. Relatório de dados exemplo.',
      'data-analysis': 'ANÁLISE DE DADOS "REGRESSÃO LINEAR E TESTES"',
      'data-analysis-list': 'Experiência com Modelagem Estatística. statsmodels e scikit-learn. Gestão e Manipulação de Bancos de Dados MySQL. Realização de análise estatística básica Excel. Criação de dashboards interativos e relatórios dinâmicos Matplotlib, Chart e Leaflet',
      'contact-text': 'Entre em contato comigo por email.',
      'name': 'Nome:',
      'email': 'Email:',
      'message': 'Mensagem:',
      'send-message': 'Enviar mensagem',
      'whatsapp-text': 'Ou converse comigo através do WhatsApp.',
      "name-placeholder": "Digite seu nome",
      "email-placeholder": "Digite seu email",
      "message-placeholder": "Digite sua mensagem",
      "streamlity-data": "Exibição de dados e contagem de dados usando Streamlity, Dash,Plotly ou Matplotlib",
      "sqlite-skills": "Criação de bancos de dados , Criação de aplicações simples com banco de dados, Aplicações Python e Flask. ",
      "python-data": "PYTHON, FLASK e bibliotecas poderosas como pandas,numpy,sklearn, plotly ,statsmodels , scipy e matplotlib,plotly , streamlit para analisar dados de maneira eficiente e com perfeição, também coletar e limpar dados com precisão, usando bibliotecas que facilitam o processo em 100% . ",
      "hero-role": "Eu sou",
   "R-data":"Para análise estatística, manipulação de dados , machine learning e visualização de dados através de gráficos."
  },
  'en': {
      'see-skills': 'See my skills',
      'about-me': 'About Me',
      'programming': 'Programming',
      'admin-assistant': 'Administrative Assistant',
      'digital-marketing': 'Digital Marketing',
      'data-analyst': 'Junior Data Analyst',
      'experience': 'Experience',
      'skills': 'Skills',
      'contact': 'Contact',
      'choose-language': 'Choose your language',
      'about-me-text': 'Hello, my name is Vitor Santos. I am an Administrative Assistant, Virtual Assistant, Programmer, and Junior Data Analyst with programming skills in Python, Flask, HTML-CSS, and JavaScript. If you need any of my services, send me an email via contacts. Number: +5521977080240',
      'admin-tasks': 'Management of administrative tasks...',
      'excel-level': 'I have intermediate Excel skills.',
      'matplotlib-level': 'Advanced Matplotlib',
      'powerpoint-level': 'Intermediate PowerPoint',
      'word-level': 'Intermediate Word',
      'python-skills': 'I can develop useful web and office applications using Python.',
      'javascript-skills': 'I can develop useful scripts for websites focused on front-end and Node for local server use.',
      'html-css-skills': 'I can develop useful websites, static sites, and display pages.',
      'bootstrap-skills': 'I create responsive and professional websites using Bootstrap.',
      'netlify-skills': 'I use Netlify to test HTML-CSS, Bootstrap websites, with or without JavaScript scripts, or even for work.',
      'heroku-skills': 'I use Heroku to test Python-Flask applications, or even for work using useful applications.',
      'digital-campaigns': 'Digital campaigns and SEO optimization... Google Search Console, Sitemaps, Instagram, Facebook',
      'seo-skills': 'Search Engine Optimization (SEO)',
      'analytics-skills': 'Google Analytics - Google Search Console - Google ADS - Google Adsense. To monitor, improve website search engine performance on Google, create ads and national or international campaigns, and enhance website monetization.',
      'mysql-workbench': 'To manipulate data and use it in complex data queries.',
      "mysql-skills": "To store data in a simple and organized way.I am also capable of creating databases for websites, JAVASCRIPT and Python  and for  Desktop applications PYTHON .",
      'js-data': 'Chart and Leaflet libraries for graphical data demonstration.',
      'outlier-exp': 'Outlier - audio generation for AI from Portuguese to English',
      'travel-agent': 'Travel agent - Helping people obtain passports with course plans',
      'virtual-assistant': 'Virtual assistant - Personal freelance writer and translator for an American friend',
      'general-services': 'General services assistant - Unloading products from trucks',
      'mason-helper': 'Mason’s helper - Helping fill sand carts, fetch cement, cement buckets',
      'python-projects': 'PROJECTS PYTHON',
      'python-projects-list': 'Common schedules with database. Forms with database, time, and alarm. PDF reader with audio. Script to send responsive email messages to over 20,000 people. Audio translator to txt, rtf, or srt. Text-to-audio converter with human or robotic voice. Decision tree and linear regression. Machine Learning. Machine Learning with statistics and probability. Linear regression. SRT to audio in any language. Video border cropping. Text to PDF conversion. UTF-8 to cp1235 text conversion. Expense spreadsheets. Graphic dashboards. Semi-dynamic dashboards. Clocks. Calculator. Wordpad-like app. Video editing app.',
      'flask-projects': 'PROJECTS FLASK',
      'flask-projects-list': 'Forms with database. Chat application with database, capable of sending photos and videos. Write-your-story app, photo story, saved with database. Excel spreadsheet reader dashboard. Data informer dashboard for Excel and CSV spreadsheets. Login with database. Online dashboard form with Dash. Data information.',
      'html-css-projects': 'PROJECTS | HTML-CSS, BOOTSTRAP, JAVASCRIPT',
      'html-css-projects-list': 'Course website for 25 different languages. Clothing stores. Religious items store. Personal form. Adult content website. Gaming website. Personal portfolio with login and password. Clinic website. Workshop website. Expense calculation spreadsheet. Data report example.',
      'data-analysis': 'DATA ANALYSIS "LINEAR REGRESSION AND TESTS"',
      'data-analysis-list': 'Experience with Statistical Modeling. statsmodels and scikit-learn. MySQL Database Management and Manipulation. Basic statistical analysis in Excel. Creation of interactive dashboards and dynamic reports with Matplotlib, Chart, and Leaflet',
      'contact-text': 'Get in touch with me via email.',
      'name': 'Name:',
      'email': 'Email:',
      'message': 'Message:',
      'send-message': 'Send message',
      'whatsapp-text': 'Or chat with me via WhatsApp.',
      "name-placeholder": "Enter your name",
      "email-placeholder": "Enter your email",
      "message-placeholder": "Enter your message",
      "streamlity-data": "Data display and data counting using Streamlit, Dash, Plotly or Matplotlib",
      "sqlite-skills": "Creation of databases , Creation of simple applications with databases, Python and Flask applications. ",
      "python-data": "PYTHON, FLASK and powerful libraries like pandas,numpy,sklearn, plotly ,statsmodels , scipy and matplotlib,plotly , streamlit to analyze data efficiently and perfectly, also collect and clean data with precision, using libraries that facilitate the process by 100% . ",
      "hero-role": "I am",
   "R-data":"For statistical analysis, data manipulation, machine learning, and data visualization through graphs."
  },
  'es': {
      'see-skills': 'Ver mis capacidades',
      'about-me': 'Sobre Mí',
      'programming': 'Programación',
      'admin-assistant': 'Asistente Administrativo',
      'digital-marketing': 'Marketing Digital',
      'data-analyst': 'Analista de Datos Júnior',
      'experience': 'Experiencias',
      'skills': 'Habilidades',
      'contact': 'Contacto',
      'choose-language': 'Elige tu idioma',
      'about-me-text': 'Hola, me llamo Vitor Santos. Soy Asistente Administrativo, Asistente Virtual, Programador y Analista de Datos Júnior, con habilidades de programación en Python, Flask, HTML-CSS y JavaScript. Si necesitas alguno de mis servicios, envíame un email por contactos. Número: +5521977080240',
      'admin-tasks': 'Gestión de tareas administrativas...',
      'excel-level': 'Tengo nivel intermedio en Excel.',
      'matplotlib-level': 'Matplotlib Nivel Avanzado',
      'powerpoint-level': 'PowerPoint Nivel Intermediario',
      'word-level': 'Word Nivel Intermediario',
      'python-skills': 'Puedo desarrollar aplicaciones web y de oficina útiles usando Python.',
      'javascript-skills': 'Puedo desarrollar scripts útiles para sitios web enfocados en front-end y Node para usar como servidor local.',
      'html-css-skills': 'Puedo desarrollar sitios web útiles, sitios estáticos y de exhibición.',
      'bootstrap-skills': 'Hago sitios web responsivos y profesionales usando Bootstrap.',
      'netlify-skills': 'Uso Netlify para probar sitios HTML-CSS, Bootstrap, con o sin scripts de JavaScript, o incluso para trabajo.',
      'heroku-skills': 'Uso Heroku para probar aplicaciones Python-Flask, o incluso para trabajo usando aplicaciones útiles.',
      'digital-campaigns': 'Campañas digitales y optimización SEO... Google Search Console, Mapas del sitio, Instagram, Facebook',
      'seo-skills': 'Optimización para Motores de Búsqueda (SEO)',
      'analytics-skills': 'Google Analytics - Google Search Console - Google ADS - Google Adsense. Para monitorear, mejorar el rendimiento de los motores de búsqueda de sitios web en Google, crear anuncios y campañas nacionales o internacionales, y mejorar la monetización de sitios web.',
      'mysql-workbench': 'Para manipular datos y usarlos en consultas complejas de datos.',
      "mysql-skills": "Para almacenar datos de manera simple y organizada.Também sou apto a criar banco de dados para sites, JAVASCRIPT e Python  e para  Aplicativos desktop PYTHON .",
      'js-data': 'Bibliotecas Chart y Leaflet, para demostración gráfica de datos.',
      'outlier-exp': 'Outlier - generación de audio para I.A. de portugués a inglés',
      'travel-agent': 'Agente de viajes - Ayudando a personas a obtener pasaportes con planes de cursos',
      'virtual-assistant': 'Asistente virtual - Escritor y traductor freelance personal de un amigo americano',
      'general-services': 'Auxiliar de servicios generales - Descargando productos de camiones',
      'mason-helper': 'Ayudante de albañil - Ayudando a llenar carretillas de arena, buscar cemento, baldes de cemento',
      'python-projects': 'PROYECTOS PYTHON',
      'python-projects-list': 'Agendas comunes con base de datos. Formularios con base de datos, hora y alarma. Lector de PDF con audio. Script para enviar mensajes de email responsivos a más de 20,000 personas. Traductor de audio a txt, rtf o srt. Convertidor de texto a audio con voz humana o robótica. Árbol de decisión y regresión lineal. Machine Learning. Machine Learning con estadísticas y probabilidad. Regresión lineal. SRT a audio en cualquier idioma. Recorte de bordes de videos. Conversión de texto a PDF. Conversión de texto UTF-8 a cp1235. Hojas de cálculo de gastos. Dashboards gráficos. Dashboards semidinámicos. Relojes. Calculadora. App similar a Wordpad. App de edición de videos.',
      'flask-projects': 'PROYECTOS FLASK',
      'flask-projects-list': 'Formularios con base de datos. Aplicación de chat con base de datos, capaz de enviar fotos y videos. Aplicación escribe tu historia, historia con fotos, guardada con base de datos. Dashboard lector de hojas de cálculo Excel. Dashboard informador de datos de hojas Excel y CSV. Login con base de datos. Formulario de dashboard online con Dash. Información de datos.',
      'html-css-projects': 'PROYECTOS | HTML-CSS, BOOTSTRAP, JAVASCRIPT',
      'html-css-projects-list': 'Sitio de cursos para 25 idiomas diferentes. Tiendas de ropa. Tienda de artículos religiosos. Formulario personal. Sitio de contenido adulto. Sitio de juegos. Portafolio personal con login y contraseña. Sitio para clínica. Sitio para taller. Hoja de cálculo de gastos. Ejemplo de informe de datos.',
      'data-analysis': 'ANÁLISIS DE DATOS "REGRESIÓN LINEAL Y PRUEBAS"',
      'data-analysis-list': 'Experiencia con Modelado Estadístico. statsmodels y scikit-learn. Gestión y Manipulación de Bases de Datos MySQL. Realización de análisis estadístico básico en Excel. Creación de dashboards interactivos y reportes dinámicos con Matplotlib, Chart y Leaflet',
      'contact-text': 'Ponte en contacto conmigo por email.',
      'name': 'Nombre:',
      'email': 'Email:',
      'message': 'Mensaje:',
      'send-message': 'Enviar mensaje',
      'whatsapp-text': 'O chatea conmigo por WhatsApp.',
      "name-placeholder": "Ingresa tu nombre",
      "email-placeholder": "Ingresa tu correo electrónico",
      "message-placeholder": "Ingresa tu mensaje",
      "streamlity-data": "Visualización de datos y conteo de datos usando Streamlit, Dash, Plotly o Matplotlib",
      "sqlite-skills": "Creación de bases de datos , Creación de aplicaciones simples con bases de datos, Aplicaciones en Python y Flask. ",
      "python-data": "PYTHON, FLASK y bibliotecas poderosas como pandas,numpy,sklearn, plotly ,statsmodels , scipy y matplotlib,plotly , streamlit para analizar datos de manera eficiente y con perfección, también recolectar y limpiar datos con precisión, usando bibliotecas que facilitan el proceso en un 100% . ",
      "hero-role": "Soy",
   "R-data":"Para análisis estadístico, manipulación de datos, machine learning y visualización de datos a través de gráficos."
  },
  'fr': {
      'see-skills': 'Voir mes compétences',
      'about-me': 'À propos de moi',
      'programming': 'Programmation',
      'admin-assistant': 'Assistant administratif',
      'digital-marketing': 'Marketing digital',
      'data-analyst': 'Analyste de données junior',
      'experience': 'Expériences',
      'skills': 'Compétences',
      'contact': 'Contact',
      'choose-language': 'Choisissez votre langue',
      'about-me-text': 'Bonjour, je m’appelle Vitor Santos. Je suis assistant administratif, assistant virtuel, programmeur et analyste de données junior, avec des compétences en programmation en Python, Flask, HTML-CSS et JavaScript. Si vous avez besoin de l’un de mes services, envoyez-moi un email via les contacts. Numéro : +5521977080240',
      'admin-tasks': 'Gestion des tâches administratives...',
      'excel-level': 'J’ai un niveau intermédiaire en Excel.',
      'matplotlib-level': 'Matplotlib niveau avancé',
      'powerpoint-level': 'PowerPoint niveau intermédiaire',
      'word-level': 'Word niveau intermédiaire',
      'python-skills': 'Je peux développer des applications web et bureautiques utiles avec Python.',
      'javascript-skills': 'Je peux développer des scripts utiles pour des sites web orientés front-end et Node pour un serveur local.',
      'html-css-skills': 'Je peux développer des sites web utiles, des sites statiques et d’affichage.',
      'bootstrap-skills': 'Je crée des sites web réactifs et professionnels avec Bootstrap.',
      'netlify-skills': 'J’utilise Netlify pour tester des sites HTML-CSS, Bootstrap, avec ou sans scripts JavaScript, ou même pour le travail.',
      'heroku-skills': 'J’utilise Heroku pour tester des applications Python-Flask, ou même pour le travail avec des applications utiles.',
      'digital-campaigns': 'Campagnes digitales et optimisation SEO... Google Search Console, Sitemaps, Instagram, Facebook',
      'seo-skills': 'Optimisation pour les moteurs de recherche (SEO)',
      'analytics-skills': 'Google Analytics - Google Search Console - Google ADS - Google Adsense. Pour surveiller, améliorer les performances des moteurs de recherche des sites web sur Google, créer des annonces et des campagnes nationales ou internationales, et optimiser la monétisation des sites web.',
      'mysql-workbench': 'Pour manipuler les données et les utiliser dans des requêtes complexes.',
      "mysql-skills": "Pour stocker des données de manière simple et organisée.Je suis également capable de créer des bases de données pour des sites web, JAVASCRIPT et Python et pour Applications de bureau PYTHON .",
      'js-data': 'Bibliothèques Chart et Leaflet, pour la démonstration graphique des données.',
      'outlier-exp': 'Outlier - génération audio pour l’IA du portugais vers l’anglais',
      'travel-agent': 'Agent de voyage - Aider les gens à obtenir des passeports avec des plans de cours',
      'virtual-assistant': 'Assistant virtuel - Écrivain et traducteur freelance personnel pour un ami américain',
      'general-services': 'Assistant de services généraux - Décharger des produits de camions',
      'mason-helper': 'Aide-maçon - Aider à remplir des chariots de sable, chercher du ciment, des seaux de ciment',
      'python-projects': 'PROJETS PYTHON',
      'python-projects-list': 'Agendas communs avec base de données. Formulaires avec base de données, heure et alarme. Lecteur PDF avec audio. Script pour envoyer des emails responsifs à plus de 20 000 personnes. Traducteur audio en txt, rtf ou srt. Convertisseur de texte en audio avec voix humaine ou robotique. Arbre de décision et régression linéaire. Machine Learning. Machine Learning avec statistiques et probabilité. Régression linéaire. SRT en audio dans n’importe quelle langue. Découpage des bordures de vidéos. Conversion de texte en PDF. Conversion de texte UTF-8 en cp1235. Tableaux de dépenses. Tableaux de bord graphiques. Tableaux de bord semi-dynamiques. Horloges. Calculatrice. Application semblable à Wordpad. Application de montage vidéo.',
      'flask-projects': 'PROJETS FLASK',
      'flask-projects-list': 'Formulaires avec base de données. Application de chat avec base de données, permettant l’envoi de photos et vidéos. Application "écris ton histoire", histoire photo, sauvegardée avec base de données. Tableau de bord lecteur de feuilles Excel. Tableau de bord informateur de données pour feuilles Excel et CSV. Connexion avec base de données. Formulaire de tableau de bord en ligne avec Dash. Information sur les données.',
      'html-css-projects': 'PROJETS | HTML-CSS, BOOTSTRAP, JAVASCRIPT',
      'html-css-projects-list': 'Site de cours pour 25 langues différentes. Boutiques de vêtements. Boutique d’articles religieux. Formulaire personnel. Site de contenu adulte. Site de jeux. Portfolio personnel avec connexion et mot de passe. Site pour clinique. Site pour atelier. Feuille de calcul des dépenses. Exemple de rapport de données.',
      'data-analysis': 'ANALYSE DE DONNÉES "RÉGRESSION LINÉAIRE ET TESTS"',
      'data-analysis-list': 'Expérience avec la modélisation statistique. statsmodels et scikit-learn. Gestion et manipulation de bases de données MySQL. Réalisation d’analyses statistiques de base avec Excel. Création de tableaux de bord interactifs et rapports dynamiques avec Matplotlib, Chart et Leaflet',
      'contact-text': 'Contactez-moi par email.',
      'name': 'Nom :',
      'email': 'Email :',
      'message': 'Message :',
      'send-message': 'Envoyer le message',
      'whatsapp-text': 'Ou discutez avec moi via WhatsApp.',
      "name-placeholder": "Entrez votre nom",
      "email-placeholder": "Entrez votre email",
      "message-placeholder": "Entrez votre message",
      "streamlity-data": "Affichage des données et comptage des données utilisant Streamlit, Dash, Plotly ou Matplotlib",
      "sqlite-skills": "Création de bases de données , Création d'applications simples avec bases de données, Applications Python et Flask. ",
      "python-data": "PYTHON, FLASK et bibliothèques puissantes comme pandas,numpy,sklearn, plotly ,statsmodels , scipy et matplotlib,plotly , streamlit pour analyser les données de manière efficace et parfaite, aussi collecter et nettoyer les données avec précision, en utilisant des bibliothèques qui facilitent le processus à 100% . ",
      "hero-role": "Je suis",
    "R-data":"Pour l'analyse statistique, la manipulation des données, le machine learning et la visualisation des données à travers des graphiques."
  },
  'ru': {
      'see-skills': 'Посмотреть мои навыки',
      'about-me': 'Обо мне',
      'programming': 'Программирование',
      'admin-assistant': 'Административный ассистент',
      'digital-marketing': 'Цифровой маркетинг',
      'data-analyst': 'Младший аналитик данных',
      'experience': 'Опыт',
      'skills': 'Навыки',
      'contact': 'Контакты',
      'choose-language': 'Выберите язык',
      'about-me-text': 'Здравствуйте, меня зовут Витор Сантос. Я административный ассистент, виртуальный ассистент, программист и младший аналитик данных с навыками программирования на Python, Flask, HTML-CSS и JavaScript. Если вам нужны мои услуги, отправьте мне письмо через контакты. Номер: +5521977080240',
      'admin-tasks': 'Управление административными задачами...',
      'excel-level': 'У меня средний уровень владения Excel.',
      'matplotlib-level': 'Matplotlib продвинутый уровень',
      'powerpoint-level': 'PowerPoint средний уровень',
      'word-level': 'Word средний уровень',
      'python-skills': 'Я могу разрабатывать полезные веб- и офисные приложения с использованием Python.',
      'javascript-skills': 'Я могу разрабатывать полезные скрипты для веб-сайтов, ориентированных на фронтенд, и Node для использования в качестве локального сервера.',
      'html-css-skills': 'Я могу разрабатывать полезные веб-сайты, статические сайты и страницы для отображения.',
      'bootstrap-skills': 'Я создаю адаптивные и профессиональные веб-сайты с использованием Bootstrap.',
      'netlify-skills': 'Я использую Netlify для тестирования сайтов HTML-CSS, Bootstrap, с использованием скриптов JavaScript или без них, а также для работы.',
      'heroku-skills': 'Я использую Heroku для тестирования приложений Python-Flask или даже для работы с полезными приложениями.',
      'digital-campaigns': 'Цифровые кампании и оптимизация SEO... Google Search Console, карты сайта, Instagram, Facebook',
      'seo-skills': 'Оптимизация для поисковых систем (SEO)',
      'analytics-skills': 'Google Analytics - Google Search Console - Google ADS - Google Adsense. Для мониторинга, улучшения работы поисковых систем сайтов в Google, создания рекламы и национальных или международных кампаний, а также для улучшения монетизации сайтов.',
      'mysql-workbench': 'Для манипуляции данными и их использования в сложных запросах.',
      "mysql-skills": "Для хранения данных простым и организованным способом.Я также способен создавать базы данных для веб-сайтов, JAVASCRIPT и Python и для Настольных приложений PYTHON .",
      'js-data': 'Библиотеки Chart и Leaflet для графической демонстрации данных.',
      'outlier-exp': 'Outlier - генерация аудио для ИИ с португальского на английский',
      'travel-agent': 'Туристический агент - Помощь людям в получении паспортов с планами курсов',
      'virtual-assistant': 'Виртуальный ассистент - Личный фрилансер-писатель и переводчик для американского друга',
      'general-services': 'Помощник по общим услугам - Разгрузка товаров с грузовиков',
      'mason-helper': 'Помощник каменщика - Помощь в наполнении тележек песком, доставка цемента, ведра с цементом',
      'python-projects': 'ПРОЕКТЫ PYTHON',
      'python-projects-list': 'Обычные расписания с базой данных. Формы с базой данных, временем и будильником. Читалка PDF с аудио. Скрипт для отправки адаптивных email-сообщений более чем 20 000 людям. Переводчик аудио в txt, rtf или srt. Преобразователь текста в аудио с человеческим или роботизированным голосом. Дерево решений и линейная регрессия. Машинное обучение. Машинное обучение со статистикой и вероятностью. Линейная регрессия. SRT в аудио на любом языке. Обрезка краев видео. Преобразование текста в PDF. Преобразование текста UTF-8 в cp1235. Таблицы расходов. Графические дашборды. Полудинамические дашборды. Часы. Калькулятор. Приложение, похожее на Wordpad. Приложение для редактирования видео.',
      'flask-projects': 'ПРОЕКТЫ FLASK',
      'flask-projects-list': 'Формы с базой данных. Приложение чата с базой данных, с возможностью отправки фото и видео. Приложение "напиши свою историю", фотоистория, сохраняется с базой данных. Дашборд для чтения таблиц Excel. Дашборд с информацией о данных из таблиц Excel и CSV. Логин с базой данных. Онлайн-форма дашборда с Dash. Информация о данных.',
      'html-css-projects': 'ПРОЕКТЫ | HTML-CSS, BOOTSTRAP, JAVASCRIPT',
      'html-css-projects-list': 'Сайт курсов для 25 разных языков. Магазины одежды. Магазин религиозных товаров. Личная форма. Сайт с взрослым контентом. Игровой сайт. Личный портфель с логином и паролем. Сайт для клиники. Сайт для мастерской. Таблица расчета расходов. Пример отчета по данным.',
      'data-analysis': 'АНАЛИЗ ДАННЫХ "ЛИНЕЙНАЯ РЕГРЕССИЯ И ТЕСТЫ"',
      'data-analysis-list': 'Опыт работы со статистическим моделированием. statsmodels и scikit-learn. Управление и манипуляция базами данных MySQL. Базовый статистический анализ в Excel. Создание интерактивных дашбордов и динамических отчетов с Matplotlib, Chart и Leaflet',
      'contact-text': 'Свяжитесь со мной по email.',
      'name': 'Имя:',
      'email': 'Email:',
      'message': 'Сообщение:',
      'send-message': 'Отправить сообщение',
      'whatsapp-text': 'Или свяжитесь со мной через WhatsApp.',
      "name-placeholder": "Введите ваше имя",
      "email-placeholder": "Введите ваш email",
      "message-placeholder": "Введите ваше сообщение",
      "streamlity-data": "Отображение данных и подсчёт данных с использованием Streamlit, Dash, Plotly или Matplotlib",
      "sqlite-skills": "Создание баз данных , Создание простых приложений с базами данных, Приложения на Python и Flask. ",
      "python-data": "PYTHON, FLASK и мощные библиотеки, такие как pandas,numpy,sklearn, plotly ,statsmodels , scipy и matplotlib,plotly , streamlit для эффективного и совершенного анализа данных, а также сбора и очистки данных с точностью, используя библиотеки, которые облегчают процесс на 100% . ",
      "hero-role": "Я",
   "R-data":"Для статистического анализа, обработки данных, машинного обучения и визуализации данных с помощью графиков."
  },
  'ja': {
      'see-skills': '私のスキルを見る',
      'about-me': '私について',
      'programming': 'プログラミング',
      'admin-assistant': '事務アシスタント',
      'digital-marketing': 'デジタルマーケティング',
      'data-analyst': 'ジュニアデータアナリスト',
      'experience': '経験',
      'skills': 'スキル',
      'contact': '連絡先',
      'choose-language': '言語を選んでください',
      'about-me-text': 'こんにちは、私の名前はヴィトール・サントスです。私は事務アシスタント、バーチャルアシスタント、プログラマー、そしてジュニアデータアナリストで、Python、Flask、HTML-CSS、JavaScriptのプログラミングスキルを持っています。私のサービスが必要な場合は、連絡先からメールをください。電話番号: +5521977080240',
      'admin-tasks': '事務業務の管理...',
      'excel-level': 'Excelの中級スキルがあります。',
      'matplotlib-level': 'Matplotlib 上級',
      'powerpoint-level': 'PowerPoint 中級',
      'word-level': 'Word 中級',
      'python-skills': 'Pythonを使って有用なウェブおよびオフィスアプリケーションを開発できます。',
      'javascript-skills': 'フロントエンド向けのウェブサイトやNodeを使ったローカルサーバー向けに有用なスクリプトを開発できます。',
      'html-css-skills': 'ウェブ用の有用なサイト、静的サイト、表示用ページを開発できます。',
      'bootstrap-skills': 'Bootstrapを使用してレスポンシブでプロフェッショナルなウェブサイトを作成します。',
      'netlify-skills': 'Netlifyを使用してHTML-CSSやBootstrapサイト、JavaScriptスクリプトの有無にかかわらずテストします。また、仕事にも利用します。',
      'heroku-skills': 'Herokuを使用してPython-Flaskアプリケーションをテストします。また、有用なアプリケーションを仕事に使うこともあります。',
      'digital-campaigns': 'デジタルキャンペーンとSEO最適化... Google Search Console、サイトマップ、Instagram、Facebook',
      'seo-skills': '検索エンジン最適化 (SEO)',
      'analytics-skills': 'Google Analytics - Google Search Console - Google ADS - Google Adsense。Googleでのウェブサイトの検索エンジンのパフォーマンスを監視し、改善し、広告や国内・国際キャンペーンを作成し、ウェブサイトの収益化を向上させるために。',
      'mysql-workbench': 'データを操作し、複雑なデータクエリに使用します。',
      "mysql-skills": "データをシンプルかつ整理された方法で保存するため。私はまた、ウェブサイト用のデータベースを作成することができ、 JAVASCRIPT と Python そして デスクトップアプリケーション PYTHON のために .",
      'js-data': 'ChartとLeafletライブラリを使用してデータのグラフィック表示を行います。',
      'outlier-exp': 'Outlier - ポルトガル語から英語へのAI向けオーディオ生成',
      'travel-agent': '旅行代理店 - コースプラン付きでパスポート取得を支援',
      'virtual-assistant': 'バーチャルアシスタント - アメリカ人の友人の個人的なフリーランスライター兼翻訳者',
      'general-services': '一般サービスアシスタント - トラックからの荷降ろし',
      'mason-helper': '石工助手 - 砂カートの補充、セメント運び、セメントバケツのサポート',
      'python-projects': 'プロジェクト PYTHON',
      'python-projects-list': 'データベース付きの普通日程表。データベース、時間、アラーム付きのフォーム。オーディオ付きPDFリーダー。20,000人以上にレスポンシブなメールを送信するスクリプト。オーディオからtxt、rtf、srtへの翻訳。人間またはロボットの声を使ったテキストからオーディオへの変換。決定木と線形回帰。機械学習。統計と確率を使った機械学習。線形回帰。あらゆる言語でのSRTからオーディオへの変換。ビデオの縁切り。テキストからPDFへの変換。UTF-8からcp1235へのテキスト変換。経費スプレッドシート。グラフィックダッシュボード。半動的ダッシュボード。時計。電卓。Wordpadに似たアプリ。ビデオ編集アプリ。',
      'flask-projects': 'プロジェクト FLASK',
      'flask-projects-list': 'データベース付きフォーム。データベース付きチャットアプリで、写真やビデオの送信が可能。「あなたのストーリーを書く」アプリ、フォトストーリー、データベースに保存。Excelスプレッドシートリーダーダッシュボード。ExcelおよびCSVスプレッドシートのデータ情報ダッシュボード。データベース付きログイン。オンラインのダッシュボードフォーム（Dash使用）。データ情報。',
      'html-css-projects': 'プロジェクト | HTML-CSS, BOOTSTRAP, JAVASCRIPT',
      'html-css-projects-list': '25言語対応のコースサイト。衣料品店。宗教用品店。個人フォーム。アダルトコンテンツサイト。ゲームサイト。ログインとパスワード付き個人ポートフォリオ。クリニック用サイト。ワークショップ用サイト。経費計算スプレッドシート。データレポート例。',
      'data-analysis': 'データ分析 "線形回帰とテスト"',
      'data-analysis-list': '統計モデリングの経験。statsmodelsとscikit-learn。MySQLデータベースの管理と操作。Excelでの基本統計分析。Matplotlib、Chart、Leafletを使用したインタラクティブダッシュボードと動的レポートの作成',
      'contact-text': 'メールでご連絡ください。',
      'name': '名前:',
      'email': 'メール:',
      'message': 'メッセージ:',
      'send-message': 'メッセージを送信',
      'whatsapp-text': 'またはWhatsAppで私とチャットしてください。',
      "name-placeholder": "名前を入力してください",
      "email-placeholder": "メールを入力してください",
      "message-placeholder": "メッセージを入力してください",
      "streamlity-data": "Streamlit、Dash、Plotly、またはMatplotlibを使用したデータ表示とデータカウント",
      "sqlite-skills": "データベースの作成 , データベースを使用したシンプルなアプリケーションの作成, PythonとFlaskのアプリケーション. ",
      "python-data": "PYTHON, FLASK と pandas,numpy,sklearn, plotly ,statsmodels , scipy や matplotlib,plotly , streamlit のような強力なライブラリを使用して、データを効率的かつ完璧に分析し、またデータを正確に収集およびクリーニングし、プロセスを100％容易にするライブラリを使用する . ",
      "hero-role": "私は",
   "R-data":"統計分析、データ操作、機械学習、およびグラフによるデータ可視化のために。"
  },
  'zh': {
      'see-skills': '查看我的技能',
      'about-me': '关于我',
      'programming': '编程',
      'admin-assistant': '行政助理',
      'digital-marketing': '数字营销',
      'data-analyst': '初级数据分析师',
      'experience': '经验',
      'skills': '技能',
      'contact': '联系方式',
      'choose-language': '选择你的语言',
      'about-me-text': '你好，我的名字是维托·桑托斯。我是行政助理、虚拟助理、程序员和初级数据分析师，拥有Python、Flask、HTML-CSS和JavaScript的编程技能。如果您需要我的任何服务，请通过联系方式给我发送电子邮件。电话号码: +5521977080240',
      'admin-tasks': '管理行政任务...',
      'excel-level': '我有中级Excel技能。',
      'matplotlib-level': 'Matplotlib 高级',
      'powerpoint-level': 'PowerPoint 中级',
      'word-level': 'Word 中级',
      'python-skills': '我可以使用Python开发有用的网页和办公应用程序。',
      'javascript-skills': '我可以为面向前端的网站和本地服务器使用的Node开发有用的脚本。',
      'html-css-skills': '我可以开发有用的网站、静态网站和展示页面。',
      'bootstrap-skills': '我使用Bootstrap创建响应式和专业的网站。',
      'netlify-skills': '我使用Netlify测试HTML-CSS、Bootstrap网站，无论是否有JavaScript脚本，甚至用于工作。',
      'heroku-skills': '我使用Heroku测试Python-Flask应用程序，甚至用于使用有用的应用程序进行工作。',
      'digital-campaigns': '数字营销活动和SEO优化... Google Search Console、网站地图、Instagram、Facebook',
      'seo-skills': '搜索引擎优化 (SEO)',
      'analytics-skills': 'Google Analytics - Google Search Console - Google ADS - Google Adsense。为了监控、改善网站在Google搜索引擎上的表现，创建广告及国内或国际活动，并提升网站的货币化。',
      'mysql-workbench': '用于操作数据并在复杂数据查询中使用。',
      "mysql-skills": "以简单且有组织的方式存储数据。我还能为网站创建数据库， JAVASCRIPT 和 Python 以及 桌面应用程序 PYTHON .",
      'js-data': '使用Chart和Leaflet库进行数据的图形展示。',
      'outlier-exp': 'Outlier - 为AI生成从葡萄牙语到英语的音频',
      'travel-agent': '旅行社 - 帮助人们通过课程计划获得护照',
      'virtual-assistant': '虚拟助理 - 为美国朋友担任个人自由作家和翻译',
      'general-services': '通用服务助理 - 从卡车上卸货',
      'mason-helper': '泥瓦匠助手 - 帮助装满沙车、取水泥、水泥桶',
      'python-projects': '项目 PYTHON',
      'python-projects-list': '带数据库的普通日程表。带数据库、时间和闹钟的表单。带音频的PDF阅读器。向超过20,000人发送响应式电子邮件的脚本。音频翻译为txt、rtf或srt。文本转音频，使用人类或机器人声音。决策树和线性回归。机器学习。使用统计和概率的机器学习。线性回归。SRT转任何语言的音频。视频边缘裁剪。文本转PDF。UTF-8转cp1235文本。费用电子表格。图形仪表板。半动态仪表板。时钟。计算器。类似Wordpad的应用程序。视频编辑应用程序。',
      'flask-projects': '项目 FLASK',
      'flask-projects-list': '带数据库的表单。带数据库的聊天应用程序，可发送照片和视频。写你的故事应用程序，照片故事，保存到数据库。Excel电子表格阅读器仪表板。Excel和CSV电子表格的数据信息仪表板。带数据库的登录。在线仪表板表单（使用Dash）。数据信息。',
      'html-css-projects': '项目 | HTML-CSS, BOOTSTRAP, JAVASCRIPT',
      'html-css-projects-list': '支持25种不同语言的课程网站。服装店。宗教用品店。个人表单。成人内容网站。游戏网站。带登录和密码的个人作品集。诊所网站。车间网站。费用计算电子表格。数据报告示例。',
      'data-analysis': '数据分析 "线性回归和测试"',
      'data-analysis-list': '具有统计建模经验。statsmodels和scikit-learn。MySQL数据库管理和操作。Excel中的基本统计分析。使用Matplotlib、Chart和Leaflet创建交互式仪表板和动态报告',
      'contact-text': '通过电子邮件与我联系。',
      'name': '姓名:',
      'email': '电子邮件:',
      'message': '消息:',
      'send-message': '发送消息',
      'whatsapp-text': '或通过WhatsApp与我聊天。',
      "name-placeholder": "输入你的姓名",
      "email-placeholder": "输入你的电子邮件",
      "message-placeholder": "输入你的消息",
      "streamlity-data": "使用Streamlit、Dash、Plotly或Matplotlib进行数据展示和数据计数",
      "sqlite-skills": "创建数据库，创建带数据库的简单应用程序，Python和Flask应用程序。",
      "python-data": "PYTHON, FLASK 和强大的库如 pandas,numpy,sklearn, plotly ,statsmodels , scipy 和 matplotlib,plotly , streamlit 以高效且完美地分析数据，同时以精确的方式收集和清理数据，使用简化100%过程的库。",
      "hero-role": "我是",
   "R-data":"用于统计分析、数据处理、机器学习以及通过图表进行数据可视化。"
  }
};

// Função para aplicar traduções, preservando elementos filhos
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');

      // Verifica se o elemento tem um placeholder (input ou textarea)
      if (element.hasAttribute('placeholder')) {
          element.placeholder = translations[lang][key] || translations['pt'][key]; // Atualiza o placeholder
      } else {
          // Preserva os elementos filhos (como o <span class="role-text">)
          const children = Array.from(element.childNodes); // Obtém todos os nós filhos
          const textNodes = children.filter(node => node.nodeType === Node.TEXT_NODE); // Filtra apenas os nós de texto
          const childElements = children.filter(node => node.nodeType === Node.ELEMENT_NODE); // Filtra os elementos filhos (como <span>)

          // Obtém o texto fixo do elemento (ignorando os filhos)
          const textContent = textNodes.map(node => node.textContent).join('').trim();
          const translatedText = translations[lang][key] || translations['pt'][key];

          // Remove todos os nós filhos (texto e elementos) temporariamente
          while (element.firstChild) {
              element.removeChild(element.firstChild);
          }

          // Adiciona o texto traduzido como um novo nó de texto
          element.appendChild(document.createTextNode(translatedText));

          // Reinsere os elementos filhos (como o <span class="role-text">) na mesma ordem
          childElements.forEach(child => element.appendChild(child));
      }
  });

  // Chama a função updateRoleTranslations para atualizar os papéis do role-text
  if (typeof window.updateRoleTranslations === 'function') {
      window.updateRoleTranslations(lang);
  } else {
      console.error('Função updateRoleTranslations não encontrada. Certifique-se de que roleTextTranslations.js foi carregado.');
  }
}

// Função para carregar o idioma salvo ou o idioma padrão
function loadLanguage() {
  const savedLang = localStorage.getItem('language') || 'pt'; // Carrega o idioma salvo ou usa 'pt' como padrão
  document.getElementById('language-select').value = savedLang; // Define o valor do select
  applyTranslations(savedLang); // Aplica as traduções
}

// Evento para quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM completamente carregado - translations.js');

  // Carrega o idioma inicial
  loadLanguage();

  // Adiciona o evento de mudança de idioma
  document.getElementById('language-select').addEventListener('change', (event) => {
      const selectedLang = event.target.value;
      localStorage.setItem('language', selectedLang); // Salva o idioma selecionado
      applyTranslations(selectedLang); // Aplica as traduções
  });
});
