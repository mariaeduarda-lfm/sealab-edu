// ============================================
// Prompts Library - 29 atalhos de prompt para Claude
// ============================================

export const prompts = [
    { id: 1, command: '/ACT AS', description: 'faz o Claude responder a partir de um papel específico.', example: '/ACT AS product manager sênior. Responda com base nesse papel.' },
    { id: 2, command: '/TLDR', description: 'resume um texto longo em poucas linhas.', example: '/TLDR este relatório: [colar texto]' },
    { id: 3, command: '/CHAIN OF THOUGHT', description: 'organiza o raciocínio em etapas intermediárias.', example: '/CHAIN OF THOUGHT Resolva: quanto é 15% de 320?' },
    { id: 4, command: '/ELI5', description: 'explica o tema de forma simples, como para uma criança.', example: '/ELI5 o que é blockchain.' },
    { id: 5, command: '/FORMAT AS', description: 'força um formato específico, como tabela, XML ou JSON.', example: '/FORMAT AS tabela com colunas: nome, idade, cidade.' },
    { id: 6, command: '/BRIEFLY', description: 'pede uma resposta curta e direta.', example: '/BRIEFLY quais os riscos deste projeto?' },
    { id: 7, command: '/STEP-BY-STEP', description: 'conduz a explicação passo a passo.', example: '/STEP-BY-STEP como configurar um e-mail profissional.' },
    { id: 8, command: '/AUDIENCE', description: 'adapta a resposta ao público escolhido.', example: '/AUDIENCE executivos. Resuma os resultados do trimestre.' },
    { id: 9, command: '/CHECKLIST', description: 'transforma a resposta em checklist.', example: '/CHECKLIST para lançar um produto.' },
    { id: 10, command: '/TONE', description: 'muda o tom da resposta, como formal, leve ou empático.', example: '/TONE empático. Responda este cliente insatisfeito.' },
    { id: 11, command: '/FIRST PRINCIPLES', description: 'reconstrói a análise a partir dos fundamentos.', example: '/FIRST PRINCIPLES por que minha startup está crescendo devagar?' },
    { id: 12, command: '/SWOT', description: 'gera uma análise de forças, fraquezas, oportunidades e ameaças.', example: '/SWOT de lançar um SaaS no Brasil em 2026.' },
    { id: 13, command: '/COMPARE', description: 'coloca duas ou mais opções lado a lado.', example: '/COMPARE PostgreSQL vs MongoDB para um e-commerce.' },
    { id: 14, command: '/EXEC SUMMARY', description: 'cria um resumo executivo rápido.', example: '/EXEC SUMMARY desta reunião: [colar ata]' },
    { id: 15, command: '/JARGON', description: 'usa vocabulário mais técnico e específico.', example: '/JARGON explique arquitetura de microsserviços.' },
    { id: 16, command: '/REWRITE AS', description: 'reescreve no estilo solicitado.', example: '/REWRITE AS se eu fosse o Steve Jobs apresentando este produto.' },
    { id: 17, command: '/DEV MODE', description: 'simula um estilo mais técnico, direto e voltado ao desenvolvimento.', example: '/DEV MODE corrija este código e explique o bug.' },
    { id: 18, command: '/MULTI-PERSPECTIVE', description: 'apresenta diferentes pontos de vista.', example: '/MULTI-PERSPECTIVE devo contratar mais pessoas ou investir em automação?' },
    { id: 19, command: '/NO AUTOPILOT', description: 'evita respostas superficiais e genéricas.', example: '/NO AUTOPILOT me dê uma análise honesta deste plano.' },
    { id: 20, command: '/PM MODE', description: 'responde com a ótica de gestão de projetos.', example: '/PM MODE organize estas tarefas em sprints.' },
    { id: 21, command: '/SCHEMA', description: 'gera uma estrutura organizada e um modelo de dados.', example: '/SCHEMA para um sistema de reservas de imóveis.' },
    { id: 22, command: '/CONTEXT STACK', description: 'mantém várias camadas de contexto na conversa.', example: '/CONTEXT STACK considere: orçamento 50k, prazo 3 meses, time de 4.' },
    { id: 23, command: '/REFLECTIVE MODE', description: 'revisita a própria resposta para refletir e melhorar.', example: '/REFLECTIVE MODE revise sua última resposta e me dê uma versão melhor.' },
    { id: 24, command: '/BEGIN WITH / END WITH', description: 'força a resposta a começar ou terminar com um jeito específico.', example: '/END WITH um CTA claro para o cliente agendar a reunião.' },
    { id: 25, command: '/DELIBERATE THINKING', description: 'estimula um raciocínio mais cuidadoso e aprofundado.', example: '/DELIBERATE THINKING vale a pena migrar de servidor próprio para cloud?' },
    { id: 26, command: '/EVAL-SELF', description: 'pede uma autoavaliação crítica da resposta.', example: '/EVAL-SELF o que você poderia ter feito melhor nesta resposta?' },
    { id: 27, command: '/ROLE: TASK: FORMAT:', description: 'define com clareza papel, tarefa e formato esperado.', example: '/ROLE: copywriter /TASK: criar headline /FORMAT: até 8 palavras.' },
    { id: 28, command: '/PARALLEL LENSES', description: 'analisa o tema por vários ângulos ao mesmo tempo.', example: '/PARALLEL LENSES este problema sob olhar técnico, financeiro e jurídico.' },
    { id: 29, command: '/SYSTEMATIC BIAS CHECK', description: 'ajuda a identificar possíveis vieses.', example: '/SYSTEMATIC BIAS CHECK revise este texto em busca de viés de confirmação.' }
];

export function getPromptById(id) {
    return prompts.find(p => p.id === id);
}