// ============================================================
// TechPath Data Store — All domain, quiz, and chatbot data
// ============================================================

const appData = {

    // ─── BRANCHES ───────────────────────────────────────────
    branches: [
        {
            id: 'cse',
            name: 'Computer Engineering',
            icon: '💻',
            description: 'Software, AI, Web, and Cyber fields',
            relevantDomains: ['webdev', 'aiml', 'datascience', 'cybersec', 'appdev']
        },
        {
            id: 'it',
            name: 'Information Technology',
            icon: '🌐',
            description: 'Networking, Data, Cloud, and Web',
            relevantDomains: ['webdev', 'datascience', 'cybersec', 'cloud', 'appdev']
        },
        {
            id: 'ece',
            name: 'Electronics & Comm.',
            icon: '📡',
            description: 'Embedded systems, VLSI, IoT',
            relevantDomains: ['embedded', 'vlsi', 'iot', 'aiml', 'cybersec']
        },
        {
            id: 'ee',
            name: 'Electrical Engineering',
            icon: '⚡',
            description: 'Power, Control systems, VLSI',
            relevantDomains: ['power', 'control', 'embedded', 'vlsi', 'iot']
        },
        {
            id: 'mech',
            name: 'Mechanical Engineering',
            icon: '⚙️',
            description: 'CAD, Robotics, Manufacturing',
            relevantDomains: ['cad', 'robotics', 'manufacturing', 'iot', 'aiml']
        }
    ],

    // ─── DOMAINS ────────────────────────────────────────────
    domains: {
        // === CS / IT Domains ===
        webdev: {
            id: 'webdev',
            name: 'Web Development',
            icon: '🌐',
            shortDesc: 'Build visually stunning websites and dynamic web applications from scratch.',
            difficulty: 'Beginner',
            overview: 'Web Development is the art of creating websites and applications that run in a browser. It covers both client-side (HTML, CSS, JS) and server-side (databases, APIs) development.',
            skills: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React / Vue', 'Node.js', 'REST APIs', 'Git & GitHub', 'Responsive Design'],
            tools: ['VS Code', 'Chrome DevTools', 'Git', 'Figma', 'Postman', 'Webpack'],
            scope: 'One of the most in-demand skills globally. Every business needs a web presence. Excellent for freelancing, startups, and large-scale enterprise roles.',
            projects: ['Personal Portfolio Website', 'To-Do App with Local Storage', 'E-commerce UI Clone', 'Weather App using API', 'Blog with CRUD Operations'],
            comparison: { math: 2, coding: 9, creativity: 9, learningCurve: 4, demand: 9 },
            resources: [
                { name: 'freeCodeCamp Full Web Dev Course', link: 'https://www.youtube.com/watch?v=mU6anWqZJcc', type: 'youtube' },
                { name: 'The Odin Project (Free Curriculum)', link: 'https://www.theodinproject.com', type: 'docs' },
                { name: 'MDN Web Docs', link: 'https://developer.mozilla.org', type: 'docs' },
                { name: 'Frontend Mentor (Practice)', link: 'https://www.frontendmentor.io', type: 'practice' },
                { name: 'JavaScript.info (Free Notes)', link: 'https://javascript.info', type: 'notes' }
            ],
            roadmap: [
                { phase: 'Phase 1: HTML & CSS', description: 'Master HTML structure, CSS box model, Flexbox, Grid, and responsive design fundamentals.' },
                { phase: 'Phase 2: JavaScript', description: 'Learn DOM manipulation, events, ES6+ features, async/await, and Fetch API.' },
                { phase: 'Phase 3: Frontend Framework', description: 'Pick React or Vue. Understand components, state management, routing, and hooks.' },
                { phase: 'Phase 4: Backend Basics', description: 'Learn Node.js and Express. Build REST APIs, work with databases like MongoDB or PostgreSQL.' },
                { phase: 'Phase 5: Deployment', description: 'Deploy apps using Vercel, Netlify, or AWS. Set up CI/CD pipelines and version control workflows.' }
            ]
        },
        aiml: {
            id: 'aiml',
            name: 'AI / Machine Learning',
            icon: '🤖',
            shortDesc: 'Build systems that learn from data, recognize patterns, and make intelligent predictions.',
            difficulty: 'Advanced',
            overview: 'Artificial Intelligence and Machine Learning enable computers to learn from data without being explicitly programmed. It powers everything from voice assistants to self-driving cars.',
            skills: ['Python', 'Mathematics (Linear Algebra, Calculus)', 'Statistics & Probability', 'Scikit-learn', 'TensorFlow / PyTorch', 'Data Preprocessing', 'Model Evaluation'],
            tools: ['Jupyter Notebook', 'Google Colab', 'Anaconda', 'TensorFlow', 'VS Code', 'Kaggle'],
            scope: 'Rapid growth sector with exceptional salaries. Used in healthcare, finance, autonomous vehicles, NLP, and robotics worldwide.',
            projects: ['House Price Predictor', 'Handwritten Digit Classifier', 'Sentiment Analysis Tool', 'Chatbot using NLP', 'Recommendation System'],
            comparison: { math: 9, coding: 7, creativity: 5, learningCurve: 9, demand: 10 },
            resources: [
                { name: 'Andrew Ng ML Course (Coursera Free Audit)', link: 'https://www.coursera.org/learn/machine-learning', type: 'docs' },
                { name: 'StatQuest with Josh Starmer (YouTube)', link: 'https://www.youtube.com/@statquest', type: 'youtube' },
                { name: 'fast.ai Free Deep Learning Course', link: 'https://www.fast.ai', type: 'notes' },
                { name: 'Kaggle Learn (Free Practice)', link: 'https://www.kaggle.com/learn', type: 'practice' },
                { name: 'PyTorch Official Docs', link: 'https://pytorch.org/docs/stable/index.html', type: 'docs' }
            ],
            roadmap: [
                { phase: 'Phase 1: Python & Math', description: 'Learn Python deeply. Revise linear algebra, calculus, and probability theory needed for ML models.' },
                { phase: 'Phase 2: Data Handling', description: 'Master NumPy, Pandas, and Matplotlib for data manipulation and visualization.' },
                { phase: 'Phase 3: ML Algorithms', description: 'Understand core algorithms: regression, KNN, decision trees, SVM, and clustering with Scikit-learn.' },
                { phase: 'Phase 4: Deep Learning', description: 'Learn neural networks with TensorFlow/PyTorch. Build CNNs and RNNs for image and text processing.' },
                { phase: 'Phase 5: Deployment & MLOps', description: 'Serve models with Flask APIs, containerize with Docker, and manage models using MLflow.' }
            ]
        },
        datascience: {
            id: 'datascience',
            name: 'Data Science',
            icon: '📊',
            shortDesc: 'Extract meaningful insights from large datasets using statistics, visualization, and analytics.',
            difficulty: 'Moderate',
            overview: 'Data Science blends statistics, programming, and domain knowledge to analyze data and generate actionable insights. It is the backbone of modern business intelligence.',
            skills: ['Python / R', 'SQL & Databases', 'Pandas & NumPy', 'Data Visualization', 'Statistics', 'Business Intelligence', 'ETL Pipelines'],
            tools: ['Tableau', 'Power BI', 'Jupyter', 'Excel', 'SQL Server', 'Google Data Studio'],
            scope: 'Consistently the most hired field in the corporate world. Finance, healthcare, retail, and tech companies all need data scientists urgently.',
            projects: ['Sales Dashboard in Tableau', 'Customer Segmentation using K-Means', 'COVID-19 Data Analysis', 'Stock Price Forecasting', 'HR Attrition Predictor'],
            comparison: { math: 8, coding: 6, creativity: 7, learningCurve: 7, demand: 8 },
            resources: [
                { name: 'Alex the Analyst (YouTube)', link: 'https://www.youtube.com/@AlexTheAnalyst', type: 'youtube' },
                { name: 'Mode SQL Tutorial (Free)', link: 'https://mode.com/sql-tutorial', type: 'notes' },
                { name: 'Kaggle Datasets (Practice)', link: 'https://www.kaggle.com/datasets', type: 'practice' },
                { name: 'Google Data Analytics Certificate', link: 'https://grow.google/certificates/data-analytics', type: 'docs' },
                { name: 'W3Schools SQL Reference', link: 'https://www.w3schools.com/sql', type: 'docs' }
            ],
            roadmap: [
                { phase: 'Phase 1: Statistics & Excel', description: 'Build a strong foundation in descriptive and inferential statistics. Practice data manipulation in Excel.' },
                { phase: 'Phase 2: SQL & Databases', description: 'Learn SQL deeply for data querying. Understand relational database design and joins.' },
                { phase: 'Phase 3: Python for Data', description: 'Use Pandas for cleaning, NumPy for computation, and Matplotlib/Seaborn for visualization.' },
                { phase: 'Phase 4: BI Tools', description: 'Build interactive dashboards with Tableau or Power BI. Connect to live data sources.' },
                { phase: 'Phase 5: Predictive Analytics', description: 'Apply ML models for forecasting and prediction. Communicate insights clearly to stakeholders.' }
            ]
        },
        cybersec: {
            id: 'cybersec',
            name: 'Cybersecurity',
            icon: '🔒',
            shortDesc: 'Defend and secure digital systems, networks, and data from unauthorized access and attacks.',
            difficulty: 'Advanced',
            overview: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It is a critical field as cyber threats grow in complexity and frequency globally.',
            skills: ['Networking Fundamentals', 'Linux Administration', 'Cryptography', 'Ethical Hacking', 'Vulnerability Assessment', 'Incident Response', 'OWASP Top 10'],
            tools: ['Kali Linux', 'Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'OWASP ZAP'],
            scope: 'Severe shortage of qualified professionals. Every organization requires security experts. Government agencies, banks, and tech companies offer top pay.',
            projects: ['Network Packet Analyzer', 'Port Scanner Tool', 'Password Strength Analyzer', 'Simple Firewall with Python', 'Web App Vulnerability Scanner'],
            comparison: { math: 4, coding: 6, creativity: 7, learningCurve: 8, demand: 9 },
            resources: [
                { name: 'NetworkChuck (YouTube)', link: 'https://www.youtube.com/@NetworkChuck', type: 'youtube' },
                { name: 'TryHackMe Free Learning Paths', link: 'https://tryhackme.com', type: 'practice' },
                { name: 'OWASP Top 10 Docs', link: 'https://owasp.org/www-project-top-ten', type: 'docs' },
                { name: 'PortSwigger Web Security Academy', link: 'https://portswigger.net/web-security', type: 'notes' },
                { name: 'Cybrary Free Courses', link: 'https://www.cybrary.it', type: 'docs' }
            ],
            roadmap: [
                { phase: 'Phase 1: Networking', description: 'Master TCP/IP, OSI model, DNS, HTTP, and firewalls. Use Cisco Packet Tracer to simulate networks.' },
                { phase: 'Phase 2: Linux & OS Security', description: 'Become proficient in Linux command line. Understand file permissions, users, and processes.' },
                { phase: 'Phase 3: Ethical Hacking', description: 'Learn penetration testing methodology. Practice on legal platforms like HackTheBox and TryHackMe.' },
                { phase: 'Phase 4: Cryptography', description: 'Understand symmetric/asymmetric encryption, hashing, SSL/TLS certificates, and PKI.' },
                { phase: 'Phase 5: Certifications', description: 'Pursue CompTIA Security+, CEH, or OSCP. Build a CTF portfolio to demonstrate skills to employers.' }
            ]
        },
        appdev: {
            id: 'appdev',
            name: 'App Development',
            icon: '📱',
            shortDesc: 'Design and build powerful mobile applications for Android and iOS platforms.',
            difficulty: 'Moderate',
            overview: 'App development involves building software specifically for mobile devices. With billions of smartphone users, mobile apps represent a massive market spanning every industry.',
            skills: ['Java / Kotlin (Android)', 'Swift / Objective-C (iOS)', 'Flutter / Dart', 'React Native', 'UI/UX Principles', 'Firebase', 'REST APIs'],
            tools: ['Android Studio', 'Xcode', 'Flutter SDK', 'Firebase Console', 'Postman', 'Figma'],
            scope: 'Massive market with billions of users. Strong entrepreneurial path via app stores. Freelancing and in-house developer roles are abundant.',
            projects: ['Weather App with Geolocation', 'Habit Tracker with Notifications', 'Expense Manager App', 'Movie Browser using API', 'Chat App using Firebase'],
            comparison: { math: 3, coding: 8, creativity: 8, learningCurve: 6, demand: 8 },
            resources: [
                { name: 'Android Developer Docs', link: 'https://developer.android.com/docs', type: 'docs' },
                { name: 'Flutter Official Docs', link: 'https://docs.flutter.dev', type: 'docs' },
                { name: 'Traversy Media Android (YouTube)', link: 'https://www.youtube.com/@TraversyMedia', type: 'youtube' },
                { name: 'Google Codelabs (Practice)', link: 'https://codelabs.developers.google.com', type: 'practice' },
                { name: 'Kotlin Koans (Free Notes)', link: 'https://play.kotlinlang.org/koans', type: 'notes' }
            ],
            roadmap: [
                { phase: 'Phase 1: Programming Basics', description: 'Learn Java or Kotlin for Android, or Swift for iOS. Understand OOP, data structures, and algorithms.' },
                { phase: 'Phase 2: UI Design', description: 'Build layouts using XML (Android) or SwiftUI. Follow Material Design or Human Interface Guidelines.' },
                { phase: 'Phase 3: State & Navigation', description: 'Handle user input, screen transitions, and app state. Use ViewModel and LiveData patterns (Android).' },
                { phase: 'Phase 4: Backend Integration', description: 'Connect apps to APIs, use Firebase for auth/database, and handle async tasks safely.' },
                { phase: 'Phase 5: Cross-Platform', description: 'Explore Flutter or React Native to build once and deploy on both Android and iOS.' }
            ]
        },
        cloud: {
            id: 'cloud',
            name: 'Cloud Computing',
            icon: '☁️',
            shortDesc: 'Architect, deploy, and manage scalable infrastructure and services in the cloud.',
            difficulty: 'Moderate',
            overview: 'Cloud computing delivers computing services over the internet including servers, storage, databases, networking, software, and analytics. It is the backbone of modern digital infrastructure.',
            skills: ['Linux Fundamentals', 'Networking', 'AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code (Terraform)', 'DevOps Practices'],
            tools: ['AWS Console', 'Azure Portal', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins'],
            scope: 'Explosive demand as businesses migrate to cloud. DevOps and cloud architect roles are among the highest-paid in the industry.',
            projects: ['Static Website on AWS S3', 'Containerized App with Docker', 'CI/CD Pipeline with GitHub Actions', 'Infrastructure with Terraform', 'Serverless Function with Lambda'],
            comparison: { math: 3, coding: 7, creativity: 5, learningCurve: 7, demand: 9 },
            resources: [
                { name: 'AWS Free Tier (Practice)', link: 'https://aws.amazon.com/free', type: 'practice' },
                { name: 'TechWorld with Nana (YouTube)', link: 'https://www.youtube.com/@TechWorldwithNana', type: 'youtube' },
                { name: 'AWS Official Documentation', link: 'https://docs.aws.amazon.com', type: 'docs' },
                { name: 'Terraform Learn (Free)', link: 'https://developer.hashicorp.com/terraform/tutorials', type: 'notes' },
                { name: 'KodeKloud Free Labs', link: 'https://kodekloud.com', type: 'practice' }
            ],
            roadmap: [
                { phase: 'Phase 1: Linux & Networking', description: 'Get comfortable with the Linux terminal and understand core networking concepts like TCP/IP, DNS.' },
                { phase: 'Phase 2: Core Cloud Services', description: 'Learn AWS (or Azure/GCP) services: EC2, S3, VPC, IAM, RDS. Earn a cloud fundamentals certificate.' },
                { phase: 'Phase 3: Containers', description: 'Dockerize applications and orchestrate them with Kubernetes for scalable, resilient deployments.' },
                { phase: 'Phase 4: DevOps & IaC', description: 'Automate infrastructure using Terraform. Set up CI/CD pipelines to enable rapid software deployment.' },
                { phase: 'Phase 5: Advanced Architecture', description: 'Design highly available, fault-tolerant architectures. Practice with AWS Solutions Architect certification.' }
            ]
        },

        // === ECE / EE Domains ===
        embedded: {
            id: 'embedded',
            name: 'Embedded Systems',
            icon: '🔧',
            shortDesc: 'Program microcontrollers and design hardware-software integrated systems for real-world devices.',
            difficulty: 'Advanced',
            overview: 'Embedded systems are specialized computing systems that perform dedicated functions within larger systems — from washing machines to medical devices and spacecraft.',
            skills: ['C / C++ Programming', 'Microcontrollers (AVR, ARM)', 'RTOS Concepts', 'Circuit Design', 'PCB Layout', 'Communication Protocols (I2C, SPI, UART)', 'Debugging with Oscilloscope'],
            tools: ['Arduino IDE', 'Keil MDK', 'STM32CubeIDE', 'Oscilloscope', 'Logic Analyzer', 'Proteus'],
            scope: 'Critical in automotive, medical, industrial automation, consumer electronics, and defense sectors. Niche skill with premium salaries.',
            projects: ['Home Automation with Arduino', 'Digital Temperature Monitor', 'UART-based Remote Control', 'RTOS Task Scheduler Demo', 'Smart Water Level Controller'],
            comparison: { math: 6, coding: 8, creativity: 6, learningCurve: 8, demand: 7 },
            resources: [
                { name: 'Neso Academy Embedded (YouTube)', link: 'https://www.youtube.com/@nesoacademy', type: 'youtube' },
                { name: 'Arduino Official Docs', link: 'https://docs.arduino.cc', type: 'docs' },
                { name: 'freeRTOS Reference', link: 'https://www.freertos.org/Documentation/RTOS_book.html', type: 'notes' },
                { name: 'Embedded Artistry (Notes)', link: 'https://embeddedartistry.com', type: 'notes' },
                { name: 'ST Microelectronics Learning Hub (Practice)', link: 'https://www.st.com/content/st_com/en/support/learning/stm32-education.html', type: 'practice' }
            ],
            roadmap: [
                { phase: 'Phase 1: Electronics Basics', description: 'Understand resistors, capacitors, transistors, and basic circuit analysis using Ohm\'s Law and Kirchhoff.' },
                { phase: 'Phase 2: C Programming', description: 'Master C language with focus on pointers, memory management, and bit manipulation — crucial for hardware.' },
                { phase: 'Phase 3: Microcontrollers', description: 'Start with Arduino to learn GPIO, ADC, PWM, and serial communication. Move to STM32 for ARM Cortex-M.' },
                { phase: 'Phase 4: RTOS & Protocols', description: 'Learn FreeRTOS for multi-tasking. Implement I2C, SPI, and UART protocols for sensor interfacing.' },
                { phase: 'Phase 5: PCB & Product Design', description: 'Design custom PCBs using KiCad or Altium. Understand signal integrity, power planes, and EMC principles.' }
            ]
        },
        vlsi: {
            id: 'vlsi',
            name: 'VLSI Design',
            icon: '⚙️',
            shortDesc: 'Design and verify complex semiconductor chips and integrated circuits at transistor level.',
            difficulty: 'Advanced',
            overview: 'Very Large Scale Integration (VLSI) is the process of creating integrated circuits by combining millions of transistors into a single chip. It drives modern computing hardware.',
            skills: ['Verilog / VHDL', 'Digital Logic Design', 'CMOS Technology', 'Synthesis & Place & Route', 'SPICE Simulation', 'Timing Analysis', 'DFT Concepts'],
            tools: ['Cadence Virtuoso', 'Synopsys Design Compiler', 'ModelSim', 'Quartus', 'LTSpice'],
            scope: 'Core to semiconductor industry (TSMC, Intel, AMD, Qualcomm). Niche but extremely well-paid. Growing due to chip shortage and Make-in-India initiatives.',
            projects: ['4-bit ALU in Verilog', 'Digital Clock Circuit', 'SRAM Cell Design', '8-bit CPU on FPGA', 'PWM Controller Implementation'],
            comparison: { math: 8, coding: 7, creativity: 5, learningCurve: 9, demand: 7 },
            resources: [
                { name: 'Neso Academy Digital Circuits (YouTube)', link: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm', type: 'youtube' },
                { name: 'HDLBits Verilog Practice', link: 'https://hdlbits.01xz.net', type: 'practice' },
                { name: 'Cadence Learning & Support', link: 'https://support.cadence.com', type: 'docs' },
                { name: 'ChipVerify Verilog Notes', link: 'https://www.chipverify.com/verilog/verilog-tutorial', type: 'notes' },
                { name: 'NPTEL VLSI Course (Free)', link: 'https://nptel.ac.in/courses/117105124', type: 'docs' }
            ],
            roadmap: [
                { phase: 'Phase 1: Digital Logic', description: 'Master Boolean algebra, logic gates, combinational and sequential circuits, flip-flops, and counters.' },
                { phase: 'Phase 2: HDL Programming', description: 'Learn Verilog or VHDL to describe hardware behavior. Simulate designs using ModelSim.' },
                { phase: 'Phase 3: CMOS & Analog', description: 'Understand MOSFET operation, CMOS inverter design, and analog building blocks using SPICE.' },
                { phase: 'Phase 4: FPGA Prototyping', description: 'Implement real designs on FPGA boards (Xilinx/Intel). Learn synthesis, place & route, and timing constraints.' },
                { phase: 'Phase 5: Physical Design', description: 'Learn floor planning, power planning, and GDSII tape-out flow using industry EDA tools like Cadence.' }
            ]
        },
        iot: {
            id: 'iot',
            name: 'Internet of Things',
            icon: '🌍',
            shortDesc: 'Connect physical devices to the internet and build smart, automated systems.',
            difficulty: 'Moderate',
            overview: 'IoT connects everyday physical objects to the internet, enabling them to send, receive, and act on data. It powers smart homes, industrial sensors, and wearable technology.',
            skills: ['Arduino / Raspberry Pi', 'MQTT Protocol', 'REST APIs', 'Sensor Integration', 'Cloud Platforms (AWS IoT)', 'Python / C++', 'Low-Power Design'],
            tools: ['Arduino IDE', 'Raspberry Pi', 'Node-RED', 'AWS IoT Core', 'Firebase', 'Thingspeak'],
            scope: 'Rapidly growing across smart city, agriculture, healthcare, and industrial sectors. Strong overlap with AI/ML edge computing.',
            projects: ['Smart Weather Station', 'Home Automation with Alexa', 'GPS Vehicle Tracker', 'Industrial Equipment Monitor', 'Smart Irrigation System'],
            comparison: { math: 5, coding: 7, creativity: 8, learningCurve: 6, demand: 8 },
            resources: [
                { name: 'Paul McWhorter Arduino/IoT (YouTube)', link: 'https://www.youtube.com/@paulmcwhorter', type: 'youtube' },
                { name: 'Arduino IoT Cloud Docs', link: 'https://docs.arduino.cc/arduino-cloud', type: 'docs' },
                { name: 'Node-RED Documentation', link: 'https://nodered.org/docs', type: 'docs' },
                { name: 'Wokwi Online Simulator (Practice)', link: 'https://wokwi.com', type: 'practice' },
                { name: 'MQTT Essentials by HiveMQ (Notes)', link: 'https://www.hivemq.com/mqtt-essentials', type: 'notes' }
            ],
            roadmap: [
                { phase: 'Phase 1: Electronics & Sensors', description: 'Understand sensors (temperature, humidity, PIR, ultrasonic) and how to interface them with microcontrollers.' },
                { phase: 'Phase 2: Connectivity', description: 'Learn Wi-Fi, Bluetooth, ZigBee, and MQTT protocol for device-to-device and device-to-cloud communication.' },
                { phase: 'Phase 3: Edge Processing', description: 'Program Raspberry Pi for local data processing. Learn Python scripting for IoT event handling.' },
                { phase: 'Phase 4: Cloud Integration', description: 'Send sensor data to AWS IoT Core or Firebase. Visualize trends in real-time dashboards.' },
                { phase: 'Phase 5: Security & Scale', description: 'Implement TLS encryption on MQTT. Design low-power, long-range systems using LoRaWAN for large deployments.' }
            ]
        },

        // === Electrical Domains ===
        power: {
            id: 'power',
            name: 'Power Systems',
            icon: '🔌',
            shortDesc: 'Generate, transmit, distribute, and manage electrical power efficiently and reliably.',
            difficulty: 'Moderate',
            overview: 'Power systems engineering deals with the generation, transmission, distribution, and utilization of electric power. It includes smart grid technologies and renewable energy integration.',
            skills: ['Circuit Theory', 'Power Electronics', 'Transformers & Machines', 'MATLAB / Simulink', 'Renewable Energy', 'Load Flow Analysis', 'Protection Systems'],
            tools: ['MATLAB Simulink', 'ETAP', 'DIgSILENT PowerFactory', 'AutoCAD Electrical', 'PSCAD'],
            scope: 'Core to national infrastructure. Utility companies, renewable energy firms, and smart grid companies hire power engineers extensively.',
            projects: ['Solar Panel Efficiency Calculator', 'Transformer Design Simulation', 'Grid Load Flow Study', 'Wind Turbine Speed Controller', 'Smart Meter Prototype'],
            comparison: { math: 8, coding: 4, creativity: 5, learningCurve: 7, demand: 7 },
            resources: [
                { name: 'The Engineering Mindset (YouTube)', link: 'https://www.youtube.com/@TheEngineeringMindset', type: 'youtube' },
                { name: 'NPTEL Power Systems (Free)', link: 'https://nptel.ac.in/courses/108108077', type: 'docs' },
                { name: 'ETAP User Guide', link: 'https://etap.com/support', type: 'docs' },
                { name: 'MATLAB Simulink Onramp (Free)', link: 'https://matlabacademy.mathworks.com/details/simulink-onramp/simulink', type: 'practice' },
                { name: 'All About Circuits Notes', link: 'https://www.allaboutcircuits.com/textbook', type: 'notes' }
            ],
            roadmap: [
                { phase: 'Phase 1: Circuit Analysis', description: 'Master AC/DC circuit analysis, Thevenin\'s theorem, power factor, and phasor representation.' },
                { phase: 'Phase 2: Machines & Transformers', description: 'Study DC machines, induction motors, synchronous generators, and transformer equivalent circuits.' },
                { phase: 'Phase 3: Power Electronics', description: 'Learn rectifiers, inverters, choppers, and VFDs. Build motor drive circuits on simulation.' },
                { phase: 'Phase 4: Smart Grid & Renewables', description: 'Study grid integration of solar/wind. Model load flow, fault analysis, and protection coordination in ETAP.' },
                { phase: 'Phase 5: Control & Automation', description: 'Use SCADA and PLC systems for plant automation. Learn industrial communication protocols (Modbus, DNP3).' }
            ]
        },
        control: {
            id: 'control',
            name: 'Control Systems',
            icon: '🎛️',
            shortDesc: 'Design feedback systems that regulate and automate complex physical processes and machinery.',
            difficulty: 'Advanced',
            overview: 'Control systems engineering applies mathematical models to design systems that regulate themselves using feedback — from cruise control in cars to industrial robot arms.',
            skills: ['Laplace Transform', 'PID Controller Design', 'MATLAB / Simulink', 'State Space Analysis', 'Digital Control', 'Stability Analysis', 'System Modeling'],
            tools: ['MATLAB Control Toolbox', 'Simulink', 'LabVIEW', 'Python (control library)', 'Proteus'],
            scope: 'Fundamental to robotics, aerospace, automotive, and industrial automation. Highly mathematical and specialized — premium career path.',
            projects: ['PID Temperature Controller', 'Ball Balancing System', 'DC Motor Speed Control', 'Inverted Pendulum Simulation', 'Drone Attitude Controller'],
            comparison: { math: 10, coding: 5, creativity: 5, learningCurve: 9, demand: 7 },
            resources: [
                { name: 'Brian Douglas Control Systems (YouTube)', link: 'https://www.youtube.com/@BrianBDouglas', type: 'youtube' },
                { name: 'MATLAB Control Toolbox Docs', link: 'https://www.mathworks.com/products/control.html', type: 'docs' },
                { name: 'NPTEL Control Engineering (Free)', link: 'https://nptel.ac.in/courses/108105108', type: 'docs' },
                { name: 'Control Tutorials for MATLAB', link: 'https://ctms.engin.umich.edu', type: 'notes' },
                { name: 'python-control Library (Practice)', link: 'https://python-control.readthedocs.io', type: 'practice' }
            ],
            roadmap: [
                { phase: 'Phase 1: Math Fundamentals', description: 'Master differential equations, Laplace transforms, Z-transforms, and complex number arithmetic.' },
                { phase: 'Phase 2: Open-Loop Systems', description: 'Model physical systems (mechanical, electrical). Derive transfer functions and plot Bode/Nyquist diagrams.' },
                { phase: 'Phase 3: Feedback Control', description: 'Design P, PI, PID controllers. Analyze steady-state error, transient response, and stability margins.' },
                { phase: 'Phase 4: State Space', description: 'Represent systems in state-space form. Apply pole placement, observer design, and LQR optimal control.' },
                { phase: 'Phase 5: Digital & Nonlinear', description: 'Discretize controllers for digital implementation. Explore fuzzy logic, sliding mode, and adaptive control.' }
            ]
        },

        // === Mechanical Domains ===
        cad: {
            id: 'cad',
            name: 'CAD / Product Design',
            icon: '✏️',
            shortDesc: 'Design and prototype real-world products using computer-aided design and simulation tools.',
            difficulty: 'Beginner',
            overview: 'Computer-Aided Design (CAD) allows engineers to create precise 2D drawings and 3D models of parts and assemblies. It is the foundation of all mechanical product development.',
            skills: ['AutoCAD 2D Drafting', 'SolidWorks / CATIA 3D Modeling', 'GD&T Tolerancing', 'FEA Simulation', 'Rendering', 'Engineering Drawing Standards', 'Sheet Metal Design'],
            tools: ['SolidWorks', 'AutoCAD', 'CATIA', 'Fusion 360', 'ANSYS', 'KeyShot'],
            scope: 'Required in every manufacturing company, automotive firm, and product startup. Certification in SolidWorks or AutoCAD gives an immediate employment edge.',
            projects: ['3D Printed Car Body Design', 'Gear Assembly Model', 'Bridge Structural Analysis', 'Product Packaging Design', 'Prosthetic Limb Prototype'],
            comparison: { math: 5, coding: 2, creativity: 9, learningCurve: 4, demand: 7 },
            resources: [
                { name: 'Solid Solutions SolidWorks (YouTube)', link: 'https://www.youtube.com/@SolidSolutions', type: 'youtube' },
                { name: 'Autodesk AutoCAD Tutorials', link: 'https://www.autodesk.com/learning', type: 'docs' },
                { name: 'ANSYS Innovation Courses (Free)', link: 'https://courses.ansys.com', type: 'practice' },
                { name: 'GrabCAD Community Models', link: 'https://grabcad.com/library', type: 'practice' },
                { name: 'Engineering Drawing Notes (NPTEL)', link: 'https://nptel.ac.in/courses/112103019', type: 'notes' }
            ],
            roadmap: [
                { phase: 'Phase 1: Engineering Drawing', description: 'Learn 2D technical drafting standards, orthographic projections, and GD&T tolerancing rules.' },
                { phase: 'Phase 2: 2D CAD with AutoCAD', description: 'Master AutoCAD for floor plans, part drawings, and dimensioning. Practice with CSWP sample problems.' },
                { phase: 'Phase 3: 3D Modeling (SolidWorks)', description: 'Create parts using extrude, revolve, sweep, and loft features. Build assemblies with proper mates and constraints.' },
                { phase: 'Phase 4: FEA & Simulation', description: 'Run static, thermal, and fatigue analyses using ANSYS or SolidWorks Simulation. Interpret stress results.' },
                { phase: 'Phase 5: Rendering & DFM', description: 'Create photorealistic renders for presentations. Learn Design for Manufacturing (DFM) and DFA principles.' }
            ]
        },
        robotics: {
            id: 'robotics',
            name: 'Robotics',
            icon: '🦾',
            shortDesc: 'Design and program intelligent robots that can sense, think, and act in the real world.',
            difficulty: 'Advanced',
            overview: 'Robotics integrates mechanical design, electronics, and computer programming to build machines that can perform tasks autonomously or semi-autonomously.',
            skills: ['C++ / Python', 'ROS (Robot Operating System)', 'Kinematics & Dynamics', 'Computer Vision', 'Sensor Fusion', 'Motion Planning', 'Actuators & Servos'],
            tools: ['ROS / ROS2', 'Gazebo Simulator', 'Arduino / Raspberry Pi', 'OpenCV', 'MATLAB Robotics Toolbox', 'SolidWorks'],
            scope: 'Explosive growth in manufacturing automation, logistics (Amazon robots), medical surgery, defense, and exploration. Highly interdisciplinary premium field.',
            projects: ['Line Following Robot', '3-DOF Robotic Arm', 'Autonomous Navigation Bot', 'Object Sorting with Vision', 'Humanoid Walking Simulation'],
            comparison: { math: 8, coding: 8, creativity: 7, learningCurve: 9, demand: 8 },
            resources: [
                { name: 'ros2 Tutorials (Official Docs)', link: 'https://docs.ros.org/en/humble/Tutorials.html', type: 'docs' },
                { name: 'Articulated Robotics (YouTube)', link: 'https://www.youtube.com/@ArticulatedRobotics', type: 'youtube' },
                { name: 'The Construct ROS Courses', link: 'https://www.theconstructsim.com', type: 'practice' },
                { name: 'OpenCV Python Tutorials (Notes)', link: 'https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html', type: 'notes' },
                { name: 'Gazebo Sim Documentation', link: 'https://gazebosim.org/docs', type: 'docs' }
            ],
            roadmap: [
                { phase: 'Phase 1: Fundamentals', description: 'Study kinematics, dynamics, DC motors, servos, and basic electronics. Build simple robots using Arduino.' },
                { phase: 'Phase 2: Programming', description: 'Learn C++ and Python for robotics. Understand object-oriented programming and real-time systems.' },
                { phase: 'Phase 3: ROS Framework', description: 'Master ROS2 — nodes, topics, services, and actions. Simulate robots in Gazebo before physical deployment.' },
                { phase: 'Phase 4: Sensing & Vision', description: 'Integrate LIDAR, IMU, and cameras. Use OpenCV for object detection and sensor fusion for localization.' },
                { phase: 'Phase 5: Autonomy', description: 'Implement SLAM, path planning (A*, RRT), and machine learning for autonomous decision-making.' }
            ]
        },
        manufacturing: {
            id: 'manufacturing',
            name: 'Manufacturing Tech',
            icon: '🏭',
            shortDesc: 'Optimize production processes, quality systems, and supply chains using engineering principles.',
            difficulty: 'Moderate',
            overview: 'Manufacturing technology focuses on transforming raw materials into finished products efficiently. It covers lean manufacturing, quality control, CNC machining, and Industry 4.0.',
            skills: ['CNC Programming (G-code)', 'Lean Six Sigma', 'Quality Control (SPC)', 'Production Planning', 'CAM Software', 'Industry 4.0 / IIoT', 'Material Science'],
            tools: ['Mastercam', 'CATIA CAM', 'Arena Simulation', 'SAP ERP', 'SolidWorks CAM', 'Minitab'],
            scope: 'Foundation of the real economy. Strong in automotive, aerospace, FMCG, and pharmaceutical sectors. Automation and smart factory skills add massive value.',
            projects: ['CNC G-code for a Bracket', 'Lean VSM for a Process', 'SPC Chart for a Production Line', 'Process FMEA Document', 'Factory Layout Redesign'],
            comparison: { math: 6, coding: 3, creativity: 6, learningCurve: 6, demand: 7 },
            resources: [
                { name: 'Lean Manufacturing TV (YouTube)', link: 'https://www.youtube.com/@leanmfgtv', type: 'youtube' },
                { name: 'ASQ Quality Resources (Notes)', link: 'https://asq.org/quality-resources', type: 'notes' },
                { name: 'MIT OpenCourseWare Manufacturing', link: 'https://ocw.mit.edu/courses/2-008-design-and-manufacturing-ii-spring-2004', type: 'docs' },
                { name: 'SAP Learning Hub (Practice)', link: 'https://learning.sap.com', type: 'practice' },
                { name: 'iSixSigma (Free Lean Six Sigma)', link: 'https://www.isixsigma.com', type: 'notes' }
            ],
            roadmap: [
                { phase: 'Phase 1: Manufacturing Processes', description: 'Learn forming, casting, machining, welding, and joining processes. Understand material properties.' },
                { phase: 'Phase 2: CNC & CAM', description: 'Write G-code programs for milling and turning. Use CAM software to generate toolpaths from 3D models.' },
                { phase: 'Phase 3: Quality Engineering', description: 'Apply SPC, Gauge R&R, FMEA, and Control Plans. Earn a Lean Six Sigma Green Belt.' },
                { phase: 'Phase 4: ERP & Production Planning', description: 'Use SAP or Oracle ERP for production scheduling, material requirements planning (MRP), and inventory.' },
                { phase: 'Phase 5: Industry 4.0', description: 'Integrate IoT sensors, digital twins, and AI for smart factory transformation and predictive maintenance.' }
            ]
        }
    },

    // ─── QUIZZES ─────────────────────────────────────────────
    quizzes: {
        webdev: [
            { question: "Do you enjoy designing visually appealing user interfaces?", options: ["Yes, I love it", "It's okay", "Not really"], weights: [20, 10, 0] },
            { question: "Are you comfortable bringing designs to life using code?", options: ["Yes, absolutely", "I can try", "Not my thing"], weights: [20, 10, 0] },
            { question: "How do you feel about learning multiple tools and frameworks?", options: ["Excited!", "Can manage", "Feels overwhelming"], weights: [20, 10, 0] },
            { question: "Do you prefer seeing immediate visual results from your code?", options: ["That's motivating!", "Somewhat", "I prefer logic only"], weights: [20, 10, 0] },
            { question: "Would you enjoy ensuring your app works on all devices and screens?", options: ["Yes, very much", "If needed", "No preference"], weights: [20, 10, 0] }
        ],
        aiml: [
            { question: "How comfortable are you with advanced mathematics (Calculus, Probability)?", options: ["Very comfortable", "Can manage", "I dislike it"], weights: [20, 10, 0] },
            { question: "Do you find patterns in large datasets fascinating?", options: ["Yes, absolutely!", "Sometimes", "Not really"], weights: [20, 10, 0] },
            { question: "Are you interested in building systems that improve automatically over time?", options: ["That's the dream!", "It sounds cool", "Not particularly"], weights: [20, 10, 0] },
            { question: "Are you patient enough to train and re-train models for hours?", options: ["Yes, 100%", "If there's a payoff", "Unlikely"], weights: [20, 10, 0] },
            { question: "Would you enjoy reading research papers and implementing new algorithms?", options: ["Love it!", "Occasionally", "Not at all"], weights: [20, 10, 0] }
        ],
        datascience: [
            { question: "Do you enjoy finding stories and insights hidden in numbers?", options: ["Yes, it's fascinating", "Sometimes", "Not really"], weights: [20, 10, 0] },
            { question: "Are you comfortable working with spreadsheets and databases?", options: ["Very comfortable", "I know the basics", "Not at all"], weights: [20, 10, 0] },
            { question: "Do you like creating charts and dashboards to communicate findings?", options: ["Love it!", "It's okay", "Prefer coding"], weights: [20, 10, 0] },
            { question: "Are you interested in business strategy and decision-making?", options: ["Yes, very much", "Somewhat", "Not really"], weights: [20, 10, 0] },
            { question: "How do you feel about statistics and probability?", options: ["I enjoy it", "It's manageable", "I avoid it"], weights: [20, 10, 0] }
        ],
        cybersec: [
            { question: "Are you curious about how systems can be hacked or broken?", options: ["Extremely curious", "Somewhat", "Not really"], weights: [20, 10, 0] },
            { question: "Do you enjoy solving puzzles and CTF (Capture-the-Flag) challenges?", options: ["Love it!", "Would try", "Not my thing"], weights: [20, 10, 0] },
            { question: "Are you patient when analyzing complex system logs or network traffic?", options: ["Yes, methodically", "If necessary", "Too tedious"], weights: [20, 10, 0] },
            { question: "Do you feel strongly about privacy and digital rights?", options: ["Very strongly", "Yes, generally", "Neutral"], weights: [20, 10, 0] },
            { question: "How comfortable are you with the Linux command line?", options: ["Very comfortable", "Learning it", "Barely used it"], weights: [20, 10, 0] }
        ],
        appdev: [
            { question: "Do you use smartphone apps extensively and think about improving them?", options: ["Always!", "Sometimes", "Not really"], weights: [20, 10, 0] },
            { question: "Are you interested in UI/UX design for mobile experiences?", options: ["Very interested", "Somewhat", "Not my focus"], weights: [20, 10, 0] },
            { question: "Would you enjoy publishing your own app on the play store?", options: ["It's a dream!", "It would be nice", "Not particularly"], weights: [20, 10, 0] },
            { question: "Are you comfortable with object-oriented programming?", options: ["Yes, fluent", "Learning", "Barely"], weights: [20, 10, 0] },
            { question: "Do you like optimizing apps for performance and battery life?", options: ["Yes, I care about it", "If it matters", "Not interested"], weights: [20, 10, 0] }
        ],
        embedded: [
            { question: "Do you enjoy tinkering with hardware devices and circuits?", options: ["Absolutely!", "Sometimes", "No"], weights: [20, 10, 0] },
            { question: "Are you comfortable with low-level C/C++ programming?", options: ["Yes", "Learning", "Not at all"], weights: [20, 10, 0] },
            { question: "Do you find microcontrollers and sensors exciting?", options: ["Very exciting", "Somewhat", "Not really"], weights: [20, 10, 0] },
            { question: "Are you patient with hardware debugging (oscilloscope, multimeter)?", options: ["Yes, love it", "It's okay", "Too tedious"], weights: [20, 10, 0] },
            { question: "Would you enjoy designing systems for real-world devices like robots or appliances?", options: ["Yes!", "Maybe", "Not really"], weights: [20, 10, 0] }
        ],
        robotics: [
            { question: "Are you fascinated by robots and how they move and interact?", options: ["Always!", "Yes I am", "Not particularly"], weights: [20, 10, 0] },
            { question: "Do you enjoy combining hardware and software to solve problems?", options: ["Yes!", "Sometimes", "Prefer one or the other"], weights: [20, 10, 0] },
            { question: "Are you comfortable with mathematics involving matrices and vectors?", options: ["Yes, comfortable", "Can manage", "Need to improve"], weights: [20, 10, 0] },
            { question: "Would you enjoy simulating a robot's movements before building it?", options: ["Yes, practical approach", "I'd try", "Prefer direct building"], weights: [20, 10, 0] },
            { question: "Do you find autonomous systems (self-driving, drone navigation) inspiring?", options: ["Extremely!", "Yes", "Not really"], weights: [20, 10, 0] }
        ],
        cad: [
            { question: "Do you enjoy creating physical designs and thinking in 3D?", options: ["Yes, spatially minded", "Sometimes", "Prefer abstract work"], weights: [20, 10, 0] },
            { question: "Are you interested in how physical products are designed and manufactured?", options: ["Very interested", "Somewhat", "Not really"], weights: [20, 10, 0] },
            { question: "Do you have an eye for aesthetics and product ergonomics?", options: ["Definitely", "A bit", "Not particularly"], weights: [20, 10, 0] },
            { question: "Are you patient with precise, detail-oriented technical work?", options: ["Yes, detail oriented", "Usually", "Prefer big picture"], weights: [20, 10, 0] },
            { question: "Would you find satisfaction in seeing a design turned into a real product?", options: ["Absolutely!", "Yes it sounds good", "Doesn't excite me"], weights: [20, 10, 0] }
        ]
    },

    // ─── CHATBOT RESPONSES ────────────────────────────────────
    chatbotResponses: [
        {
            keywords: ['hi', 'hello', 'hey', 'namaste', 'howdy', 'greet'],
            response: "Hello! 👋 I'm TechPath Assistant. Ask me about domains, career options, salaries, quizzes, or how to choose your path!"
        },
        {
            keywords: ['bye', 'goodbye', 'exit', 'quit', 'later'],
            response: "Goodbye! Best of luck on your tech journey! 🚀 Come back anytime."
        },
        {
            keywords: ['web', 'website', 'html', 'css', 'react', 'frontend', 'backend', 'fullstack', 'web dev'],
            response: "Web Development is a great starting point! 🌐 It has a low math barrier, and you can see results immediately. Start with HTML/CSS, then JavaScript, then a framework like React. Try the Web Dev domain for a full roadmap!"
        },
        {
            keywords: ['ai', 'ml', 'machine learning', 'artificial', 'neural', 'deep learning', 'nlp', 'gpt', 'llm'],
            response: "AI/ML is the hottest field right now! 🤖 It requires strong Python and math (linear algebra, probability). Start with Scikit-learn, then move to TensorFlow or PyTorch. High effort, but exceptional career rewards!"
        },
        {
            keywords: ['data', 'data science', 'analytics', 'tableau', 'sql', 'excel', 'business intelligence', 'bi'],
            response: "Data Science is perfect if you like finding stories in numbers 📊. You'll need SQL, Python (Pandas), and visualization tools like Tableau. Great for corporate, finance, and tech careers!"
        },
        {
            keywords: ['cyber', 'security', 'hacking', 'hack', 'ethical', 'network security', 'ctf', 'pentesting'],
            response: "Cybersecurity is critical for every organization! 🔒 Learn networking, Linux, and ethical hacking. Practice on HackTheBox/TryHackMe. Certifications like CEH or OSCP boost your career significantly."
        },
        {
            keywords: ['app', 'mobile', 'android', 'ios', 'flutter', 'kotlin', 'swift', 'react native'],
            response: "Mobile App Dev is huge — billions of smartphone users! 📱 Choose Android (Kotlin) or iOS (Swift), or go cross-platform with Flutter. Firebase and REST APIs are key skills to add."
        },
        {
            keywords: ['cloud', 'aws', 'azure', 'devops', 'docker', 'kubernetes', 'terraform', 'ci/cd'],
            response: "Cloud Computing is powering the modern internet ☁️. Learn AWS, then Docker & Kubernetes. DevOps skills + cloud = one of the highest-paying career combos available today!"
        },
        {
            keywords: ['embedded', 'microcontroller', 'arduino', 'stm32', 'rtos', 'firmware', 'hardware'],
            response: "Embedded Systems is where hardware meets software! 🔧 Learn C/C++ deeply, then work with Arduino and STM32. It's niche but essential in automotive, medical, and IoT industries."
        },
        {
            keywords: ['vlsi', 'chip', 'semiconductor', 'verilog', 'vhdl', 'fpga', 'digital design'],
            response: "VLSI Design is the backbone of all computing chips! ⚙️ You'll use Verilog/VHDL to design circuits and tools like Cadence or Synopsys. It's highly specialized, but demand from chip companies is massive."
        },
        {
            keywords: ['iot', 'internet of things', 'smart home', 'sensor', 'mqtt', 'raspberry pi'],
            response: "IoT connects the physical world to the digital! 🌍 Start with Arduino and sensors, learn MQTT for communication, then connect to cloud platforms. Smart cities and agriculture are exploding with IoT demand."
        },
        {
            keywords: ['robot', 'robotics', 'ros', 'automation', 'drone', 'autonomous'],
            response: "Robotics is one of the most exciting fields — combining mechanical, electrical, and software skills! 🦾 Learn ROS2, OpenCV for vision, and path planning algorithms. Automation companies are hiring aggressively."
        },
        {
            keywords: ['cad', 'solidworks', 'autocad', 'design', 'catia', 'product design', '3d model', 'modeling'],
            response: "CAD & Product Design is perfect if you think in 3D! ✏️ Master SolidWorks or AutoCAD. Every manufacturing company needs CAD engineers. A CSWA certification can get you hired right out of college."
        },
        {
            keywords: ['power', 'electrical', 'power systems', 'grid', 'renewable', 'solar', 'wind', 'transformer'],
            response: "Power Systems is the backbone of our electrical infrastructure! 🔌 You'll work with power electronics, smart grids, and renewable energy. MATLAB Simulink is your best friend in this field."
        },
        {
            keywords: ['mech', 'mechanical', 'manufacturing', 'cnc', 'lean', 'six sigma', 'production'],
            response: "Manufacturing Technology drives the physical economy! 🏭 Learn CNC programming, Lean Six Sigma, and Industry 4.0 tools. Core skills for automotive, aerospace, and consumer goods companies."
        },
        {
            keywords: ['salary', 'pay', 'income', 'earn', 'money', 'package', 'lpa', 'ctc'],
            response: "Salaries vary by domain! 💰 Here's a rough estimate for freshers in India:\n• AI/ML: ₹8–20 LPA\n• Cloud/DevOps: ₹7–18 LPA\n• Web Dev: ₹4–12 LPA\n• Cybersecurity: ₹6–15 LPA\n• Data Science: ₹6–14 LPA\nExperience and certifications can 2-3x these figures!"
        },
        {
            keywords: ['beginner', 'start', 'new', 'easy', 'simple', 'first', 'learn', 'zero'],
            response: "If you're a beginner, start with Web Development or Data Science — they have the gentlest learning curves and show results quickly! 🌱 Then you can branch into AI/ML or Cybersecurity once you're comfortable with coding."
        },
        {
            keywords: ['which', 'choose', 'best', 'recommend', 'suggest', 'good for me', 'career', 'path'],
            response: "The best domain depends on your interests! Try these:\n• Love design & creativity → Web/App Dev\n• Love math & research → AI/ML or Data Science\n• Love puzzles & security → Cybersecurity\n• Love hardware → Embedded/VLSI/Robotics\nTake our domain Suitability Quiz for a personalized score! 🎯"
        },
        {
            keywords: ['quiz', 'test', 'score', 'suitability', 'match', 'percentage'],
            response: "Our Suitability Quiz scores your match for each domain from 0–100%! 🎯 Navigate to any domain and click 'Take Suitability Quiz'. Answer 5 questions and get your personalized match percentage!"
        },
        {
            keywords: ['compare', 'difference', 'vs', 'versus', 'better', 'between', 'comparison'],
            response: "Use the Compare button in the top navigation for a visual side-by-side chart of all domains! 📊 It shows Math, Coding, Creativity, and Job Demand for each domain at a glance."
        },
        {
            keywords: ['cse', 'computer science', 'ce', 'it', 'information technology'],
            response: "CSE/IT students have the widest choice! 💻 All 5 core domains — Web Dev, AI/ML, Data Science, Cybersecurity, and App Dev — are directly relevant. Start with whatever excites you most!"
        },
        {
            keywords: ['ece', 'electronics', 'communication'],
            response: "ECE students thrive in Embedded Systems, VLSI, and IoT! 📡 There's also a growing opportunity in AI/ML for edge computing. Cybersecurity for networks is another strong career path."
        },
        {
            keywords: ['electrical', 'ee', 'electrical engineering'],
            response: "EE students have strong opportunities in Power Systems, Control Systems, Embedded, and VLSI! ⚡ IoT is also very accessible if you know hardware. Automation and smart grid are booming sectors."
        },
        {
            keywords: ['mechanical', 'mech', 'me'],
            response: "Mechanical Engineering opens paths in Robotics, CAD Design, and Manufacturing Technology! ⚙️ IoT is also very relevant for smart factory work. ML for structural analysis is an emerging niche."
        },
        {
            keywords: ['certification', 'certificate', 'course', 'mooc', 'udemy', 'coursera', 'certify'],
            response: "Great learning platforms for tech:\n• Coursera (AI/Data Science specializations)\n• Udemy (Web Dev, Mobile apps)\n• TryHackMe/HackTheBox (Cybersecurity)\n• AWS Free Tier (Cloud practice)\n• NPTEL (Embedded, VLSI — free & government-recognized) 📚"
        },
        {
            keywords: ['project', 'portfolio', 'build', 'practice'],
            response: "Build projects to prove your skills! 🛠️ Each domain in TechPath has 'Beginner Projects' listed. GitHub is your portfolio — push every project there. Recruiters look at GitHub before resumes!"
        },
        {
            keywords: ['roadmap', 'plan', 'steps', 'phases', 'timeline'],
            response: "Every domain in TechPath has a detailed 5-phase learning roadmap! 🗺️ Click 'Explore Domain' on any card to see the full roadmap with phases, descriptions, and what to focus on at each stage."
        }
    ],

    defaultChatResponse: "Can you clarify what you're looking for? 🤔 Try asking about:\n• 📍 Roadmap — how to learn a specific domain\n• 💰 Salary — earnings in tech fields\n• 🎯 Quiz — check your suitability for a domain\n• 📚 Resources — free courses and notes\n• 🔀 Compare — compare domains side by side\nOr just type a domain name like 'AI', 'Web Dev', 'Cybersecurity'!"
};
