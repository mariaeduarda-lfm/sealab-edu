# Seazone AI Learning

Plataforma gamificada estilo Duolingo para treinar a equipe Seazone em IA.

## Stack
- HTML/CSS/JS puro
- Vite para desenvolvimento
- Server.js (Node.js)

## Estrutura
```
seazone-ai-learning/
├── index.html
├── css/style.css
├── js/app.js
├── js/modules/ (state, lessons, gamification, leaderboard, progress)
└── server.js
```

## Funcionalidades MVP
- Lições interativas (múltipla escolha, completar prompts)
- Sistema de XP com níveis 1-50
- Streaks com freeze
- 14 badges de conquistas
- Leaderboard por times
- 3 módulos de conteúdo (12 lições)

## Módulos de Conteúdo
1. Fundamentos de IA (4 lições)
2. Prompts Eficazes (4 lições)
3. IA na Seazone (4 lições)

## Como rodar
```bash
npx vite
# ou
node server.js
```
