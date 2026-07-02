// ============================================
// State Management Module (versão pública - sem login)
// ============================================

export const state = {
    currentTrack: 'claude-code',
    currentLesson: null,
    currentExercise: 0,
    viewingContent: true
};

export function saveState() {
    // Nada salvo - versão pública
}

export function loadState() {
    // Nada carregado - versão pública
}
