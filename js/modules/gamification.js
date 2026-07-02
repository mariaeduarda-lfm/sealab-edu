// ============================================
// Gamification Module (versão pública - sem login)
// ============================================

// Funções placeholder para compatibilidade
export function addXp(amount) { return amount; }
export function checkLevelUp() { return { leveledUp: false, newLevel: 1 }; }
export function checkBadges() { return []; }
export function getLeague() { return { name: 'Explorador', tier: 1, color: '#a8dadc' }; }
export function getLevelProgress() { return { current: 0, required: 100, percentage: 0 }; }
