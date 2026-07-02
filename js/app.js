// ============================================
// SeaLab - Versão Pública (sem login)
// ============================================

import { state } from './modules/state.js';
import { lessons, getLessonById, getModules } from './modules/lessons.js';
import { prompts } from './modules/prompts.js';

function init() {
    renderAll();
    setupNavigation();
    setupMascotPanel();
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', init);

function renderAll() {
    renderLessons();
    renderPrompts();
    lucide.createIcons();
}

function setupNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const view = tab.dataset.view;
            if (!view) return;
            switchView(view);
        });
    });

    document.querySelectorAll('.track-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const trackId = chip.dataset.track;
            if (!trackId) return;
            state.currentTrack = trackId;
            document.querySelectorAll('.track-chip').forEach(c =>
                c.classList.toggle('active', c.dataset.track === trackId)
            );
            renderLessons();
        });
    });

    const backBtn = document.getElementById('backToLessons');
    if (backBtn) backBtn.addEventListener('click', () => switchView('lessons'));
}

function switchView(viewName) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.view === viewName);
    });
    document.querySelectorAll('.view').forEach(view => {
        view.classList.toggle('active', view.id === 'view-' + viewName);
    });
    lucide.createIcons();
}

function renderLessons() {
    const container = document.getElementById('modulesContainer');
    if (!container) return;

    const trackId = state.currentTrack || 'claude-code';
    const modules = getModules(trackId);

    const moduleIcons = {
        'Nível 1: Sobrevivência': 'sprout',
        'Nível 1: Operação do Dia a Dia': 'users-round',
        'Nível 1: Primeiros Passos': 'rocket',
        'Nível 1: Apresentações com Claude': 'presentation',
        'Nível 2: Produtividade Básica': 'zap',
        'Nível 2: Comunicação': 'message-circle',
        'Nível 2: Slides e Pitch': 'presentation',
        'Nível 2: Skills, MCP e Integrações': 'plug',
        'Nível 2: Design + Code': 'refresh-cw',
        'Nível 3: Código com Qualidade': 'shield-check',
        'Nível 3: Decisão e Negociação': 'handshake',
        'Nível 3: Revisão e Direção': 'eye',
        'Nível 3: Prompts Eficazes': 'pen-tool',
        'Nível 4: Escala': 'rocket',
        'Nível 4: Exportar e Compartilhar': 'share-2',
        'Nível 5: Práticas Avançadas': 'lightbulb',
        'Nível 5: Especialista': 'crown'
    };

    container.innerHTML = modules.map(module => {
        const icon = moduleIcons[module.name] || 'book-open';
        const firstLesson = module.lessons[0];
        const level = firstLesson?.level || 1;

        return `
            <div class="module-card">
                <div class="module-header">
                    <div class="module-icon">
                        <i data-lucide="${icon}"></i>
                    </div>
                    <div class="module-info">
                        <span class="module-level-badge level-${level}">
                            <i data-lucide="bar-chart"></i>
                            Nível ${level}
                        </span>
                        <h3>${module.name}</h3>
                        <p>${module.count} lições</p>
                    </div>
                </div>
                <div class="lessons-list">
                    ${module.lessons.map(lesson => `
                        <button class="lesson-item" data-lesson-id="${lesson.id}">
                            <div class="lesson-check">
                                <i data-lucide="play"></i>
                            </div>
                            <span class="lesson-title">${lesson.title}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.lesson-item').forEach(btn => {
        btn.addEventListener('click', () => startLesson(btn.dataset.lessonId));
    });
}

function startLesson(lessonId) {
    const lesson = getLessonById(lessonId);
    if (!lesson) return;
    state.currentLesson = lesson;
    state.currentExercise = 0;
    state.viewingContent = true;
    switchView('practice');
    renderPractice();
}

function renderPractice() {
    const lesson = state.currentLesson;
    if (!lesson) return;

    const content = document.getElementById('practiceContent');
    if (!content) return;

    const idx = state.currentExercise;
    const total = lesson.exercises ? lesson.exercises.length : 0;

    setText('exerciseProgress', total > 0 ? (idx + 1) + '/' + total : '');
    setWidth('exerciseProgressBar', total > 0 ? ((idx + 1) / total) * 100 : 0);

    if (state.viewingContent && lesson.content) {
        renderLessonContent(lesson, content);
    } else {
        renderExercise(lesson, content);
    }
}

function renderLessonContent(lesson, container) {
    const { emoji, subtitle, sections } = lesson.content;

    container.innerHTML = `
        <div class="lesson-content-view">
            <div class="lesson-content-header">
                <span class="lesson-content-emoji">${emoji || '📚'}</span>
                <div class="lesson-content-title">
                    <h2>${lesson.title}</h2>
                    <p>${subtitle || ''}</p>
                </div>
            </div>
            <div class="lesson-content-sections">
                ${sections.map(s => `
                    <div class="lesson-content-section">
                        <h3>${s.title}</h3>
                        <div class="lesson-content-text">${formatText(s.content)}</div>
                    </div>
                `).join('')}
            </div>
            <div class="lesson-content-actions">
                <button class="btn btn-ghost" id="backToLessonsFromContent">
                    <i data-lucide="arrow-left"></i> Voltar
                </button>
                <button class="btn btn-primary" id="startPracticeBtn">
                    Praticar <i data-lucide="arrow-right"></i>
                </button>
            </div>
        </div>
    `;

    document.getElementById('startPracticeBtn').addEventListener('click', () => {
        state.viewingContent = false;
        renderPractice();
    });
    document.getElementById('backToLessonsFromContent').addEventListener('click', () => switchView('lessons'));
    lucide.createIcons();
}

function formatText(text) {
    return text
        .replace(/\n/g, '<br>')
        .replace(/<code>(.*?)<\/code>/g, '<code class="inline-code">$1</code>')
        .replace(/<blockquote>(.*?)<\/blockquote>/g, '<div class="content-blockquote">$1</div>');
}

function renderExercise(lesson, container) {
    const idx = state.currentExercise;
    const exercise = lesson.exercises[idx];
    const total = lesson.exercises.length;

    container.innerHTML = `
        <div class="exercise-question">
            <h2>${exercise.question}</h2>
        </div>
        <div class="exercise-options">
            ${exercise.options.map((opt, i) => `
                <button class="exercise-option" data-index="${i}">${opt}</button>
            `).join('')}
        </div>
        <div class="exercise-feedback" id="exerciseFeedback">
            <h4><i data-lucide="check-circle"></i> Resultado</h4>
            <p id="exerciseFeedbackText">${exercise.hint || ''}</p>
        </div>
        <div class="exercise-actions">
            <button class="btn btn-ghost" id="backToContentBtn">
                <i data-lucide="book-open"></i> Revisar conteúdo
            </button>
            <button class="btn btn-primary" id="nextExerciseBtn" style="display:none;">
                Próximo <i data-lucide="arrow-right"></i>
            </button>
        </div>
    `;

    container.querySelectorAll('.exercise-option').forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(parseInt(btn.dataset.index)));
    });

    document.getElementById('backToContentBtn').addEventListener('click', () => {
        state.viewingContent = true;
        renderPractice();
    });
    document.getElementById('nextExerciseBtn').addEventListener('click', nextExercise);
    lucide.createIcons();
}

function checkAnswer(selectedIdx) {
    const lesson = state.currentLesson;
    const exercise = lesson.exercises[state.currentExercise];
    const correct = selectedIdx === exercise.correct;
    const feedback = document.getElementById('exerciseFeedback');
    const feedbackText = document.getElementById('exerciseFeedbackText');

    feedback.classList.add('show', correct ? 'correct' : 'incorrect');
    feedback.querySelector('h4').innerHTML = correct
        ? '<i data-lucide="check-circle"></i> Correto!'
        : '<i data-lucide="x-circle"></i> Tente novamente';

    document.querySelectorAll('.exercise-option').forEach((btn, i) => {
        btn.disabled = true;
        if (i === exercise.correct) btn.classList.add('correct');
        else if (i === selectedIdx) btn.classList.add('incorrect');
    });

    if (!correct) {
        feedbackText.innerHTML = (exercise.hint || '') + '<br><br><strong>Dica:</strong> ' + exercise.options[exercise.correct];
        setTimeout(() => {
            document.querySelectorAll('.exercise-option').forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('incorrect', 'correct');
            });
            feedback.classList.remove('show', 'correct', 'incorrect');
            feedback.querySelector('h4').innerHTML = '<i data-lucide="check-circle"></i> Resultado';
            feedbackText.textContent = exercise.hint || '';
        }, 2000);
        return;
    }

    feedbackText.innerHTML = exercise.hint ? '<strong>' + exercise.hint + '</strong>' : 'Muito bem!';
    document.getElementById('nextExerciseBtn').style.display = 'inline-flex';

    if (state.currentExercise + 1 >= lesson.exercises.length) {
        setTimeout(() => completeLesson(), 800);
    }
    lucide.createIcons();
}

function nextExercise() {
    const lesson = state.currentLesson;
    state.currentExercise++;
    if (state.currentExercise >= lesson.exercises.length) {
        completeLesson();
    } else {
        renderPractice();
    }
}

function completeLesson() {
    showToast('Lição completa!', 'success');
    switchView('lessons');
}

function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const icons = { success: 'check-circle', error: 'x-circle', info: 'info' };
    toast.innerHTML = '<i data-lucide="' + (icons[type] || 'info') + '"></i><span>' + message + '</span>';
    container.appendChild(toast);
    lucide.createIcons();
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 2600);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value);
}

function setWidth(id, value) {
    const el = document.getElementById(id);
    if (el) el.style.width = value + '%';
}

// ============ MASCOT ============
const MASCOT_INTENTS = [
    { id: 'composio', keys: ['composio', 'integrar', 'pdf', 'compactar', 'api'], title: 'Como usar o Composio', steps: ['1. Abra o painel do Composio e conecte a ferramenta.', '2. Escreva a tarefa em linguagem natural.', '3. Revise os passos antes de confirmar.'] },
    { id: 'skill', keys: ['skill', 'habilidade', 'skills'], title: 'O que é uma Skill', steps: ['1. Skill é um pacote de instruções que o Claude carrega sob demanda.', '2. Ative com /skill nome-da-skill.', '3. Boa skill tem: gatilho claro e exemplos.'] },
    { id: 'mcp', keys: ['mcp', 'model context', 'integração'], title: 'O que é MCP', steps: ['1. MCP conecta Claude a ferramentas externas.', '2. Permite acessar Notion, Linear, Drive, etc.', '3. Configure via Settings > MCP.'] },
    { id: 'comecar', keys: ['começar', 'iniciar', 'começo', 'comecar', 'por onde', 'nunca usei', 'iniciante'], title: 'Por onde começar', steps: ['1. Escolha uma trilha: Code, Cowork ou Design.', '2. Comece pelo Nível 1.', '3. Cada lição tem conteúdo + exercícios.'] },
    { id: 'gemini', keys: ['gemini', 'google', 'workspace', 'gmail'], title: 'Quando usar o Gemini', steps: ['1. Gemini brilha no Google Workspace.', '2. Use para resumir emails, criar planilhas.', '3. Prompt útil: "Resuma estes emails e liste ações pendentes."'] },
    { id: 'chatgpt', keys: ['chatgpt', 'gpt', 'openai'], title: 'Quando usar o ChatGPT', steps: ['1. ChatGPT é bom para conversa geral e brainstorming.', '2. Use para ideias rápidas e multimodo.', '3. Combine com Claude para tarefas técnicas.'] }
];

function setupMascotPanel() {
    const img = document.getElementById('mascotImg');
    if (img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', openMascotPanel);
    }

    const closeBtn = document.getElementById('mascotPanelClose');
    if (closeBtn) closeBtn.addEventListener('click', closeMascotPanel);

    const form = document.getElementById('mascotPanelForm');
    if (form) form.addEventListener('submit', handleMascotSubmit);

    document.querySelectorAll('.mascot-suggestion').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById('mascotPanelInput');
            if (input) {
                input.value = btn.dataset.suggestion || btn.textContent;
                handleMascotSubmit({ preventDefault: function() {} });
            }
        });
    });

    // Dark mode toggle
    const darkBtn = document.getElementById('darkModeBtn');
    if (darkBtn) {
        darkBtn.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    const isDark = document.body.dataset.theme === 'dark';
    document.body.dataset.theme = isDark ? 'light' : 'dark';
    const icon = document.querySelector('#darkModeBtn i');
    if (icon) {
        icon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
        lucide.createIcons();
    }
}

function openMascotPanel() {
    document.getElementById('mascotPanel')?.classList.add('active');
    document.getElementById('mascotContainer')?.classList.add('mascot-static');
    setTimeout(() => document.getElementById('mascotPanelInput')?.focus(), 50);
}

function closeMascotPanel() {
    document.getElementById('mascotPanel')?.classList.remove('active');
    document.getElementById('mascotContainer')?.classList.remove('mascot-static');
}

function matchIntent(text) {
    const norm = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    let best = null, bestScore = 0;
    for (const intent of MASCOT_INTENTS) {
        let score = 0;
        for (const key of intent.keys) {
            if (norm.includes(key)) score += key.length;
        }
        if (score > bestScore) { best = intent; bestScore = score; }
    }
    return bestScore > 0 ? best : null;
}

function handleMascotSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById('mascotPanelInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    addMascotMessage(text, 'user');
    input.value = '';

    // Check greetings
    const greetings = ['oi', 'ola', 'olá', 'hi', 'hello', 'hey', 'bom dia', 'boa tarde', 'boa noite'];
    const isGreeting = greetings.some(g => text.toLowerCase().startsWith(g));

    if (isGreeting) {
        const replies = [
            'Oi! Tudo bem? Posso ajudar com Claude, Composio, Skills, MCP e mais. Sobre o que quer saber?',
            'Olá! Que bom te ver! Pergunte sobre qualquer ferramenta de IA ou escolha uma trilha.',
            'Oie! Estou aqui para ajudar. Tente perguntar sobre Composio, Skill, ou como começar.'
        ];
        addMascotMessage(replies[Math.floor(Math.random() * replies.length)], 'bot');
        return;
    }

    const intent = matchIntent(text);
    if (intent) {
        const body = intent.steps.join('\n');
        addMascotMessage(null, 'bot', { title: intent.title, body: body });
    } else {
        const fallbacks = [
            'Posso ajudar com Claude (Code, Cowork, Design), Composio, Skills, MCP, Gemini e ChatGPT.',
            'Tente perguntar sobre alguma ferramenta específica, ou escolha uma trilha para começar!',
            'Hmm, não tenho esse tema ainda. Pergunte sobre IAs como Claude, Gemini, Composio ou Skills.'
        ];
        addMascotMessage(fallbacks[Math.floor(Math.random() * fallbacks.length)], 'bot');
    }
}

function addMascotMessage(text, variant, opts) {
    variant = variant || 'bot';
    const box = document.getElementById('mascotPanelMessages');
    if (!box) return;
    const div = document.createElement('div');
    div.className = 'mascot-msg mascot-msg-' + variant;
    if (opts && opts.title) {
        const h = document.createElement('strong');
        h.textContent = opts.title;
        div.appendChild(h);
    }
    if (opts && opts.body) {
        const p = document.createElement('p');
        p.style.whiteSpace = 'pre-wrap';
        p.textContent = opts.body;
        div.appendChild(p);
    } else if (text) {
        const p = document.createElement('p');
        p.textContent = text;
        div.appendChild(p);
    }
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

// ============ PROMPTS LIBRARY ============
function renderPrompts() {
    const container = document.getElementById('promptsGrid');
    if (!container) return;

    container.innerHTML = prompts.map(p => `
        <div class="prompt-card" data-prompt-id="${p.id}">
            <div class="prompt-header">
                <span class="prompt-number">${p.id}</span>
                <span class="prompt-command">${p.command}</span>
            </div>
            <p class="prompt-description">${p.description}</p>
            <div class="prompt-example">
                <code>${p.example}</code>
            </div>
            <button class="btn btn-ghost btn-copy" data-copy="${p.command} ${p.example}">
                <i data-lucide="copy"></i> Copiar
            </button>
        </div>
    `).join('');

    container.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', function() { copyPrompt(this.dataset.copy, this); });
    });

    lucide.createIcons();
}

function copyPrompt(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopiedFeedback(btn);
        }).catch(() => fallbackCopy(text, btn));
    } else {
        fallbackCopy(text, btn);
    }
}

function fallbackCopy(text, btn) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showCopiedFeedback(btn);
    } catch (e) {
        showToast('Não foi possível copiar', 'error');
    }
    document.body.removeChild(ta);
}

function showCopiedFeedback(btn) {
    const original = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="check"></i> Copiado!';
    btn.classList.add('copied');
    lucide.createIcons();
    showToast('Prompt copiado!', 'success');
    setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('copied');
        lucide.createIcons();
    }, 1800);
}

export { init };
