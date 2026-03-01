// ============================================================
// TechPath Script — SPA Navigation, Rendering, Quiz, Chatbot
// Features: Scoring chatbot, Domain Pie Chart, Resources,
//           Voice (click-to-speak roadmap), Contact Mentor
// ============================================================

// ─── APP STATE ───────────────────────────────────────────────
let appState = {
    currentBranchId: null,
    quiz: { domainId: null, questions: [], currentIndex: 0, score: 0 }
};

// ─── VOICE ─────────────────────────────────────────────────
let voiceEnabled = false;

function toggleVoice() {
    voiceEnabled = !voiceEnabled;
    window.speechSynthesis && window.speechSynthesis.cancel();
    const btn = document.getElementById('voiceToggleBtn');
    if (btn) {
        btn.textContent = voiceEnabled ? '🔊 Voice ON' : '🔇 Voice OFF';
        btn.classList.toggle('voice-active', voiceEnabled);
    }
}

function speakText(text) {
    if (!voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text.replace(/<[^>]*>/g, ''));
    utter.lang = 'en-US';
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
}

// ─── ROADMAP CLICK-TO-SPEAK ──────────────────────────────────
function handleRoadmapClick(element) {
    if (!voiceEnabled) return;
    window.speechSynthesis.cancel();

    // Remove any previous speaking highlights
    document.querySelectorAll('.timeline-content.speaking').forEach(el => el.classList.remove('speaking'));

    const titleEl = element.querySelector('.timeline-phase');
    const contentEl = element.querySelector('.timeline-desc');
    if (!titleEl || !contentEl) return;

    const text = `${titleEl.innerText}. ${contentEl.innerText}`;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.rate = 0.92;

    element.classList.add('speaking');
    utter.onend = () => element.classList.remove('speaking');
    window.speechSynthesis.speak(utter);
}

// ─── INITIALISATION ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderLandingSection();
    initChatbot();
});

// ─── NAVBAR ─────────────────────────────────────────────────
function renderNavbar() {
    const navHTML = `
        <nav class="navbar" id="mainNavbar">
            <div class="nav-brand" onclick="renderLandingSection()">
                <span class="text-gradient">TechPath</span>
            </div>
            <div class="nav-links">
                <button class="btn btn-ghost" onclick="renderBranchSection()">Explore</button>
                <button class="btn btn-ghost" onclick="renderComparison()">Compare</button>
                <button class="btn voice-btn" id="voiceToggleBtn" onclick="toggleVoice()" title="Toggle Voice Assistant">🔇 Voice OFF</button>
                <button class="btn btn-primary nav-cta" onclick="renderBranchSection()">Get Started →</button>
            </div>
        </nav>`;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// ─── LANDING / HERO ─────────────────────────────────────────
function renderLandingSection() {
    const app = document.getElementById('app');
    app.className = '';
    window.scrollTo(0, 0);
    appState.currentBranchId = null;

    app.innerHTML = `
        <section class="hero-section" id="home">
            <div class="hero-bg-grid"></div>
            <div class="container hero-content">
                <div class="reveal-banner">
                    <span>✨ Discover your true engineering path</span>
                </div>
                <h1 class="hero-title">Navigate Your <span class="text-gradient">Tech Career</span></h1>
                <p class="hero-subtitle">Explore domains, take quizzes, and find the perfect engineering field tailored to your interests and skills. Designed exclusively for engineering students.</p>
                <div class="hero-actions">
                    <button class="btn btn-primary btn-lg" onclick="renderBranchSection()">Explore Branches →</button>
                    <button class="btn btn-outline btn-lg" onclick="renderComparison()">Compare Domains</button>
                </div>
                <div class="hero-stats">
                    <div class="stat"><span class="stat-num">11+</span><span>Domains</span></div>
                    <div class="stat"><span class="stat-num">5</span><span>Branches</span></div>
                    <div class="stat"><span class="stat-num">100%</span><span>Free</span></div>
                </div>
            </div>
        </section>`;
}

// ─── BRANCH SELECTION ────────────────────────────────────────
function renderBranchSection() {
    const app = document.getElementById('app');
    window.scrollTo(0, 0);
    appState.currentBranchId = null;

    const branchesHTML = appData.branches.map(branch => `
        <div class="branch-card" onclick="renderDomainsSection('${branch.id}')">
            <div class="branch-icon">${branch.icon}</div>
            <h3 class="branch-name">${branch.name}</h3>
            <p class="branch-desc">${branch.description}</p>
            <span class="branch-arrow">→</span>
        </div>`).join('');

    app.innerHTML = `
        <section class="section-padding" id="branches">
            <div class="container">
                <button class="back-btn" onclick="renderLandingSection()">🏠 Home</button>
                <div class="section-header">
                    <h2 class="section-title">Select Your <span class="text-gradient">Branch</span></h2>
                    <p class="section-subtitle">Choose your branch to see the most relevant domains curated for you.</p>
                </div>
                <div class="branch-grid">${branchesHTML}</div>
            </div>
        </section>`;
}

// ─── DOMAIN CARDS (BRANCH-FILTERED) ─────────────────────────
function renderDomainsSection(branchId) {
    appState.currentBranchId = branchId;
    const branch = appData.branches.find(b => b.id === branchId);
    if (!branch) return;
    const filteredDomains = branch.relevantDomains.map(id => appData.domains[id]).filter(Boolean);
    renderDomainCards(filteredDomains, `${branch.icon} ${branch.name} Domains`);
}

function renderAllDomains(title = 'All Domains') {
    renderDomainCards(Object.values(appData.domains), title);
}

function renderDomainCards(domains, title) {
    const app = document.getElementById('app');
    window.scrollTo(0, 0);

    const domainsHTML = domains.map((domain, i) => {
        const diffClass = getDiffClass(domain.difficulty);
        return `
        <div class="domain-card" style="animation-delay:${i * 0.08}s;">
            <div class="domain-card-top">
                <span class="domain-icon">${domain.icon || '💡'}</span>
                <span class="badge ${diffClass}">${domain.difficulty}</span>
            </div>
            <h3 class="domain-title">${domain.name}</h3>
            <p class="domain-desc">${domain.shortDesc}</p>
            <button class="btn btn-outline domain-btn" onclick="renderDomainDetail('${domain.id}')">Explore Domain →</button>
        </div>`;
    }).join('');

    const backBtn = appState.currentBranchId
        ? `<button class="back-btn" onclick="renderBranchSection()">← Back to Branches</button>`
        : `<button class="back-btn" onclick="renderLandingSection()">🏠 Home</button>`;

    app.innerHTML = `
        <section class="section-padding" id="domains">
            <div class="container">
                ${backBtn}
                <div class="section-header">
                    <h2 class="section-title"><span class="text-gradient">${title}</span></h2>
                    <p class="section-subtitle">Click a domain to explore its roadmap, tools, skills, and suitability quiz.</p>
                </div>
                <div class="domain-grid">${domainsHTML}</div>
            </div>
        </section>`;
}

// ─── BUILD DOMAIN PIE CHART ──────────────────────────────────
function buildDomainPie(domain) {
    const math = domain.comparison.math;
    const coding = domain.comparison.coding;
    const job = domain.comparison.demand;
    const total = math + coding + job;

    const mathPct = (math / total) * 100;
    const codingPct = (coding / total) * 100;
    const jobPct = (job / total) * 100;

    const c1 = mathPct.toFixed(2);
    const c2 = (mathPct + codingPct).toFixed(2);

    const gradient = `conic-gradient(
        #6366f1 0% ${c1}%,
        #8b5cf6 ${c1}% ${c2}%,
        #06b6d4 ${c2}% 100%
    )`;

    function describeLevel(val) {
        if (val <= 3) return 'minimal';
        if (val <= 5) return 'moderate';
        if (val <= 7) return 'strong';
        return 'very high';
    }
    function describeJobLevel(val) {
        if (val <= 4) return 'low';
        if (val <= 6) return 'moderate';
        if (val <= 8) return 'high';
        return 'exceptional';
    }

    const explanation = `${domain.name} requires ${describeLevel(math)} mathematics (${math}/10), ${describeLevel(coding)} coding intensity (${coding}/10), and has ${describeJobLevel(job)} job demand (${job}/10). It is rated as <strong>${domain.difficulty}</strong> difficulty and is ${domain.difficulty === 'Beginner' ? 'an excellent starting point for newcomers' : domain.difficulty === 'Moderate' ? 'accessible with consistent practice' : 'best suited for dedicated learners who enjoy deep problem-solving'}.`;

    return `
        <div class="domain-pie-section">
            <div class="domain-pie-wrap">
                <div class="domain-pie" id="domainPie" style="background: ${gradient};">
                    <div class="domain-pie-inner">
                        <div class="pie-center-label">${domain.icon || '💡'}</div>
                    </div>
                </div>
                <div class="pie-legend">
                    <div class="legend-item"><span class="legend-dot" style="background:#6366f1;"></span>Math <strong>${math}/10</strong></div>
                    <div class="legend-item"><span class="legend-dot" style="background:#8b5cf6;"></span>Coding <strong>${coding}/10</strong></div>
                    <div class="legend-item"><span class="legend-dot" style="background:#06b6d4;"></span>Job Demand <strong>${job}/10</strong></div>
                </div>
            </div>
            <p class="pie-explanation">${explanation}</p>
        </div>`;
}

// ─── DOMAIN DETAIL PAGE ──────────────────────────────────────
function renderDomainDetail(domainId) {
    const domain = appData.domains[domainId];
    if (!domain) return;
    const app = document.getElementById('app');
    window.scrollTo(0, 0);
    // Roadmap: each item is a clickable card for voice
    const roadmapHTML = domain.roadmap.map((item, i) => {
        const side = i % 2 === 0 ? 'timeline-left' : 'timeline-right';
        return `
            <div class="timeline-item ${side}">
                <div class="timeline-content" onclick="handleRoadmapClick(this)" title="Click to hear this phase (voice must be ON)">
                    <div class="timeline-phase">${item.phase}</div>
                    <p class="timeline-desc">${item.description}</p>
                    <span class="speak-hint">🔊 Click to speak</span>
                </div>
            </div>`;
    }).join('');

    // Resources
    const typeIcons = { youtube: '▶ YouTube', docs: '📖 Docs', notes: '📝 Notes', practice: '🏋 Practice' };
    const resourcesHTML = (domain.resources || []).map(r => `
        <a href="${r.link}" target="_blank" rel="noopener" class="resource-item resource-${r.type}">
            <span class="resource-icon">${typeIcons[r.type] || '🔗'}</span>
            <span class="resource-name">${r.name}</span>
            <span class="resource-arrow">→</span>
        </a>`).join('');

    const backTarget = appState.currentBranchId
        ? `renderDomainsSection('${appState.currentBranchId}')`
        : `renderBranchSection()`;

    app.innerHTML = `
        <section class="section-padding" id="domain-detail">
            <div class="container">
                <button class="back-btn" onclick="${backTarget}">← Back to Domains</button>

                <!-- HEADER -->
                <div class="detail-header">
                    <div class="detail-title-row">
                        <span class="domain-icon-lg">${domain.icon || '💡'}</span>
                        <div>
                            <h1 class="detail-main-title">${domain.name}</h1>
                        </div>
                    </div>
                    <p class="detail-intro">${domain.overview} ${domain.scope}</p>
                    <div class="detail-meta">
                        <button class="btn btn-primary" onclick="startQuiz('${domain.id}')">🎯 Take Suitability Quiz</button>
                        <button class="btn btn-outline" onclick="renderComparison()">📊 Compare Domains</button>
                        <button class="btn btn-contact" onclick="window.open('https://forms.gle/YourFormLinkHere','_blank')">📩 Contact Mentor</button>
                    </div>
                </div>

                <!-- SKILLS + TOOLS + OVERVIEW IN SIDEBAR LAYOUT -->
                <div class="detail-content">
                    <div class="detail-main">
                        <!-- ROADMAP -->
                        <div class="detail-section">
                            <h3>🚀 Learning Roadmap <span class="roadmap-hint">(Click phase to hear)</span></h3>
                            <div class="timeline">${roadmapHTML}</div>
                        </div>

                        <!-- RESOURCES -->
                        ${resourcesHTML ? `
                        <div class="detail-section resources-section">
                            <h3>📚 Free Learning Resources</h3>
                            <div class="resources-grid">${resourcesHTML}</div>
                        </div>` : ''}

                        <!-- PROJECTS -->
                        <div class="detail-section">
                            <h3>💡 Beginner Projects</h3>
                            <div class="projects-list">
                                ${domain.projects.map((p, i) => `
                                <div class="project-item">
                                    <span class="project-num">${String(i + 1).padStart(2, '0')}</span>
                                    <span>${p}</span>
                                </div>`).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="detail-sidebar">
                        <div class="detail-section">
                            <h3>🛠️ Required Skills</h3>
                            <div class="tag-list">
                                ${domain.skills.map(s => `<span class="tag">${s}</span>`).join('')}
                            </div>
                        </div>
                        <div class="detail-section">
                            <h3>🔧 Tools Used</h3>
                            <div class="tag-list">
                                ${domain.tools.map(t => `<span class="tag tag-tool">${t}</span>`).join('')}
                            </div>
                        </div>
                        <div class="detail-section">
                            <h3>📈 Career Scope</h3>
                            <p style="color:var(--text-muted);font-size:0.95rem;line-height:1.6">${domain.scope}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

}

// ─── COMPARISON — BAR CHARTS ─────────────────────────────────
function renderComparison() {
    const app = document.getElementById('app');
    window.scrollTo(0, 0);

    const metrics = [
        { key: 'math', label: 'Math Requirement', color: '#6366f1' },
        { key: 'coding', label: 'Coding Intensity', color: '#8b5cf6' },
        { key: 'creativity', label: 'Creativity', color: '#3b82f6' },
        { key: 'learningCurve', label: 'Learning Curve', color: '#f59e0b' },
        { key: 'demand', label: 'Job Demand', color: '#10b981' }
    ];

    const chartDomains = ['webdev', 'aiml', 'datascience', 'cybersec', 'appdev'];
    const domains = chartDomains.map(id => appData.domains[id]).filter(Boolean);

    const chartsHTML = metrics.map(metric => {
        const barsHTML = domains.map(d => {
            const val = d.comparison[metric.key];
            const pct = (val / 10) * 100;
            return `
                <div class="chart-bar-group">
                    <div class="chart-bar-wrap">
                        <div class="chart-bar-fill" style="height:${pct}%;background:${metric.color};" title="${d.name}: ${val}/10">
                            <span class="bar-value">${val}</span>
                        </div>
                    </div>
                    <div class="chart-bar-label">${d.icon || ''}<br>${d.name.split(' ')[0]}</div>
                </div>`;
        }).join('');

        return `
            <div class="chart-card">
                <div class="chart-title" style="border-left-color:${metric.color}">${metric.label}</div>
                <div class="chart-bars">${barsHTML}</div>
            </div>`;
    }).join('');

    const allDomains = Object.values(appData.domains);
    const tableRowsHTML = allDomains.map(d => {
        const diffClass = getDiffClass(d.difficulty);
        return `
            <tr onclick="renderDomainDetail('${d.id}')" style="cursor:pointer">
                <td style="font-weight:600">${d.icon || ''} ${d.name}</td>
                <td><span class="badge ${diffClass}">${d.difficulty}</span></td>
                <td>
                    <div class="progress-pill"><div class="progress-pill-fill" style="width:${d.comparison.math * 10}%;background:#6366f1;"></div></div>
                    <small>${d.comparison.math}/10</small>
                </td>
                <td>
                    <div class="progress-pill"><div class="progress-pill-fill" style="width:${d.comparison.coding * 10}%;background:#8b5cf6;"></div></div>
                    <small>${d.comparison.coding}/10</small>
                </td>
                <td>
                    <div class="progress-pill"><div class="progress-pill-fill" style="width:${d.comparison.demand * 10}%;background:#10b981;"></div></div>
                    <small>${d.comparison.demand}/10</small>
                </td>
            </tr>`;
    }).join('');

    app.innerHTML = `
        <section class="section-padding" id="compare">
            <div class="container">
                <button class="back-btn" onclick="renderLandingSection()">🏠 Home</button>
                <div class="section-header">
                    <h2 class="section-title">Domain <span class="text-gradient">Comparison</span></h2>
                    <p class="section-subtitle">Visual comparison of core skill parameters across domains.</p>
                </div>
                <div class="charts-grid">${chartsHTML}</div>
                <div class="section-header" style="margin-top:4rem;margin-bottom:2rem">
                    <h3 class="section-title" style="font-size:1.8rem">Detailed Table <span class="text-gradient">(All Domains)</span></h3>
                </div>
                <div class="table-container">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Domain</th><th>Difficulty</th>
                                <th>Math</th><th>Coding</th><th>Job Demand</th>
                            </tr>
                        </thead>
                        <tbody>${tableRowsHTML}</tbody>
                    </table>
                </div>
            </div>
        </section>`;
}

// ─── QUIZ SYSTEM ─────────────────────────────────────────────
function startQuiz(domainId) {
    const questions = appData.quizzes[domainId];
    if (!questions || !questions.length) {
        alert('Quiz for this domain is coming soon!');
        return;
    }
    appState.quiz = { domainId, questions, currentIndex: 0, score: 0 };
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const app = document.getElementById('app');
    window.scrollTo(0, 0);
    const { domainId, questions, currentIndex } = appState.quiz;
    const domain = appData.domains[domainId];
    const qData = questions[currentIndex];
    const progressPct = (currentIndex / questions.length) * 100;

    const optionsHTML = qData.options.map((opt, idx) => `
        <div class="quiz-option" onclick="handleQuizAnswer(${qData.weights[idx]})">
            <span class="quiz-opt-letter">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
        </div>`).join('');

    app.innerHTML = `
        <section class="section-padding" id="quiz">
            <div class="container quiz-container">
                <button class="back-btn" onclick="renderDomainDetail('${domain.id}')">← Exit Quiz</button>
                <div class="quiz-header">
                    <p class="quiz-counter">Question <strong>${currentIndex + 1}</strong> of <strong>${questions.length}</strong> — ${domain.icon || ''} ${domain.name}</p>
                    <div class="progress-pill quiz-progress">
                        <div class="progress-pill-fill" style="width:${progressPct}%;transition:width 0.4s ease;"></div>
                    </div>
                </div>
                <div class="quiz-card">
                    <h2 class="quiz-question">${qData.question}</h2>
                    <div class="quiz-options">${optionsHTML}</div>
                </div>
            </div>
        </section>`;
}

function handleQuizAnswer(weight) {
    appState.quiz.score += weight;
    appState.quiz.currentIndex++;
    if (appState.quiz.currentIndex >= appState.quiz.questions.length) renderQuizResult();
    else renderQuizQuestion();
}

function renderQuizResult() {
    const app = document.getElementById('app');
    window.scrollTo(0, 0);
    const { domainId, questions, score } = appState.quiz;
    const domain = appData.domains[domainId];
    const maxScore = questions.length * 20;
    const matchPct = Math.round((score / maxScore) * 100);

    let emoji, resultMsg, resultColor;
    if (matchPct >= 75) {
        emoji = '🎉'; resultColor = 'var(--diff-beginner)';
        resultMsg = 'Excellent Match! You have a natural affinity and strong interest in this field. Start your journey today!';
    } else if (matchPct >= 40) {
        emoji = '👍'; resultColor = 'var(--diff-moderate)';
        resultMsg = 'Good Potential! With focused learning, you can thrive here. It will take effort, but the rewards are worth it.';
    } else {
        emoji = '🔍'; resultColor = 'var(--diff-advanced)';
        resultMsg = 'Keep Exploring! This might not be your top match right now. Check other domains — your ideal field is out there!';
    }

    // Build result pie (3 segments)
    const math = domain.comparison.math;
    const coding = domain.comparison.coding;
    const job = domain.comparison.demand;
    const total = math + coding + job;
    const c1 = ((math / total) * 100).toFixed(2);
    const c2 = (((math + coding) / total) * 100).toFixed(2);
    const pieGrad = `conic-gradient(#6366f1 0% ${c1}%, #8b5cf6 ${c1}% ${c2}%, #06b6d4 ${c2}% 100%)`;

    app.innerHTML = `
        <section class="section-padding" id="quiz-result">
            <div class="container quiz-container">
                <button class="back-btn" onclick="renderLandingSection()">🏠 Home</button>
                <div class="result-card">
                    <div class="result-emoji">${emoji}</div>
                    <h2 class="result-domain">${domain.icon || ''} ${domain.name}</h2>
                    <p class="result-label">Suitability Score</p>
                    <div class="result-score" style="color:${resultColor}">${matchPct}%</div>

                    <div class="result-pie-wrap">
                        <div class="result-pie" style="background:${pieGrad};">
                            <div class="result-pie-inner" style="color:${resultColor}">${matchPct}%</div>
                        </div>
                        <div class="pie-legend" style="margin-top:0.75rem;justify-content:center;">
                            <div class="legend-item"><span class="legend-dot" style="background:#6366f1;"></span>Math ${math}/10</div>
                            <div class="legend-item"><span class="legend-dot" style="background:#8b5cf6;"></span>Coding ${coding}/10</div>
                            <div class="legend-item"><span class="legend-dot" style="background:#06b6d4;"></span>Demand ${job}/10</div>
                        </div>
                    </div>

                    <p class="result-message">${resultMsg}</p>
                    <div class="hero-actions" style="justify-content:center;margin-top:2rem;">
                        <button class="btn btn-primary" onclick="renderDomainDetail('${domain.id}')">View Roadmap</button>
                        <button class="btn btn-outline" onclick="renderBranchSection()">Explore More Domains</button>
                    </div>
                </div>
            </div>
        </section>`;

    speakText(`Your suitability score for ${domain.name} is ${matchPct} percent. ${resultMsg}`);
}

// ─── CHATBOT ──────────────────────────────────────────────────
function initChatbot() {
    const chatHTML = `
        <div class="chat-btn" id="chatBtn" onclick="toggleChat()" title="Ask TechPath Assistant">
            <span id="chatBtnIcon">💬</span>
        </div>
        <div class="chat-window" id="chatWindow">
            <div class="chat-header">
                <div>
                    <div style="font-weight:700;font-size:1rem;">TechPath Assistant</div>
                    <div style="font-size:0.75rem;color:var(--diff-beginner);">● Online</div>
                </div>
                <button onclick="toggleChat()" class="chat-close">&times;</button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="chat-bubble chat-bot">
                    Hi! 👋 I'm here to help you choose a domain. Ask me about any field, salary, roadmaps, or which domain suits your branch!
                </div>
            </div>
            <div class="chat-input-area">
                <input type="text" id="chatInput" class="chat-input"
                    placeholder="Ask me anything..."
                    onkeypress="handleChatEnter(event)">
                <button class="chat-submit" onclick="handleChatSubmit()">↑</button>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', chatHTML);
}

function toggleChat() {
    const win = document.getElementById('chatWindow');
    const icon = document.getElementById('chatBtnIcon');
    const isActive = win.classList.toggle('active');
    icon.textContent = isActive ? '✕' : '💬';
}

function handleChatEnter(e) { if (e.key === 'Enter') handleChatSubmit(); }

function handleChatSubmit() {
    const inputField = document.getElementById('chatInput');
    const msg = inputField.value.trim();
    if (!msg) return;
    addChatMessage(msg, 'user');
    inputField.value = '';

    // Typing indicator
    const typingId = 'typing-' + Date.now();
    const container = document.getElementById('chatMessages');
    container.insertAdjacentHTML('beforeend', `
        <div class="chat-bubble chat-bot chat-typing" id="${typingId}">
            <span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>
        </div>`);
    container.scrollTop = container.scrollHeight;

    setTimeout(() => {
        const el = document.getElementById(typingId);
        if (el) el.remove();
        const response = getSmartResponse(msg);
        addChatMessage(response, 'bot');
        speakText(response);
    }, 900 + Math.random() * 400);
}

// Scoring-based intent detection
function getSmartResponse(msg) {
    const lowerMsg = msg.toLowerCase();
    const words = lowerMsg.split(/\s+/);
    let bestMatch = null, bestScore = 0;

    for (const entry of appData.chatbotResponses) {
        let score = 0;
        for (const kw of entry.keywords) {
            if (lowerMsg.includes(kw)) score += kw.split(' ').length + 1;
            else for (const word of words) { if (kw.includes(word) && word.length > 2) score += 0.5; }
        }
        if (score > bestScore) { bestScore = score; bestMatch = entry.response; }
    }
    return bestScore > 0 ? bestMatch : appData.defaultChatResponse;
}

function addChatMessage(text, sender) {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    const cls = sender === 'user' ? 'chat-user' : 'chat-bot';
    container.insertAdjacentHTML('beforeend',
        `<div class="chat-bubble ${cls}">${text.replace(/\n/g, '<br>')}</div>`);
    container.scrollTop = container.scrollHeight;
}

// ─── HELPERS ─────────────────────────────────────────────────
function getDiffClass(difficulty) {
    const d = (difficulty || '').toLowerCase();
    if (d === 'beginner') return 'badge-beginner';
    if (d === 'moderate') return 'badge-moderate';
    return 'badge-advanced';
}
