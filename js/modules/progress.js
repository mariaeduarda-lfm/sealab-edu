// ============================================
// Progress Module (versão pública - sem login)
// ============================================

export function getTodayXp() { return 0; }
export function checkStreak() { return 0; }
export function updateProgressUI() { }
export function recordLessonCompletion() { }
export function getProgressStats() {
    return { lessons: { total: 0, completed: 0 }, xp: { total: 0 }, streak: 0, badges: { total: 0 } };
}
