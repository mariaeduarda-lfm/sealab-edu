// ============================================
// SeaLab - Trilhas de Aprendizado
// Claude Code, Claude Cowork e Claude Design
// XP, ascensão e ranking são globais
// ============================================

export const TRACKS = [
    { id: 'claude-code', name: 'Claude Code', icon: 'terminal-square' },
    { id: 'claude-cowork', name: 'Claude Cowork', icon: 'users-round' },
    { id: 'claude-design', name: 'Claude Design', icon: 'palette' }
];

export const lessons = [

    // ═══════════════════════════════════════════════════════
    // TRILHA: CLAUDE CODE
    // ═══════════════════════════════════════════════════════

    {
        id: 'n1-1',
        track: 'claude-code',
        module: 'Nível 1: Sobrevivência',
        level: 1,
        title: 'O que é Claude Code?',
        xp: 10,
        content: {
            emoji: '🤖',
            subtitle: 'Seu copiloto de código',
            sections: [
                { title: 'Em uma frase', content: 'Claude Code é um assistente de IA que fica no seu terminal e ajuda a escrever, entender e consertar código.' },
                { title: 'O que ele faz de útil', content: '• Lê arquivos do seu projeto\n• Responde perguntas sobre código\n• Cria e edita arquivos\n• Ajuda a encontrar bugs\n• Explica erro de forma simples' },
                { title: 'O que ele NÃO faz', content: 'Ele não substitui você. Você manda, ele executa. Você revisa e decide se aceita.' }
            ]
        },
        exercises: [
            { question: 'Claude Code é principalmente:', options: ['Um jogo', 'Um assistente de código no terminal', 'Um navegador', 'Um editor de vídeo'], correct: 1, hint: 'Ele trabalha com código no terminal!' },
            { question: 'Quem decide se o código gerado é aceito?', options: ['O Claude sozinho', 'Você', 'O chefe', 'O computador'], correct: 1, hint: 'Você está no controle!' }
        ]
    },
    {
        id: 'n1-2',
        track: 'claude-code',
        module: 'Nível 1: Sobrevivência',
        level: 1,
        title: 'Instalando o Claude Code',
        xp: 15,
        content: {
            emoji: '📦',
            subtitle: 'Passo a passo',
            sections: [
                { title: 'Antes de começar', content: 'Você precisa de:\n• Node.js 18 ou superior\n• Uma conta Anthropic (gratuita)' },
                { title: 'Comando de instalação', content: 'Abra o terminal e cole:\n\n<code>npm install -g @anthropic-ai/claude-code</code>\n\nAguarde terminar.' },
                { title: 'Verifique se deu certo', content: 'Rode:\n\n<code>claude doctor</code>\n\nSe aparecer tudo verde, está funcionando.' }
            ]
        },
        exercises: [
            { question: 'Qual comando instala o Claude Code?', options: ['npm install claude', 'npm install -g @anthropic-ai/claude-code', 'claude install', 'npx claude'], correct: 1, hint: 'É o pacote oficial da Anthropic, instalado globalmente.' },
            { question: 'Como verificar se a instalação funcionou?', options: ['claude test', 'claude doctor', 'claude help', 'claude start'], correct: 1, hint: 'doctor = diagnóstico.' }
        ]
    },
    {
        id: 'n1-3',
        track: 'claude-code',
        module: 'Nível 1: Sobrevivência',
        level: 1,
        title: 'Abrindo sua primeira sessão',
        xp: 10,
        content: {
            emoji: '🚀',
            subtitle: 'Mãos na massa',
            sections: [
                { title: 'Entre na pasta do projeto', content: 'No terminal, navegue até uma pasta com código:\n\n<code>cd nome-da-pasta</code>' },
                { title: 'Inicie o Claude', content: 'Digite:\n\n<code>claude</code>\n\nNa primeira vez, ele pode pedir login. Siga as instruções.' },
                { title: 'Teste com algo simples', content: 'Experimente perguntar:\n\n<blockquote>Liste os arquivos principais deste projeto</blockquote>\n\nVocê verá o Claude respondendo no terminal.' }
            ]
        },
        exercises: [
            { question: 'Para iniciar o Claude Code, você digita:', options: ['claude open', 'claude --start', 'claude', 'start claude'], correct: 2, hint: 'Apenas "claude" no terminal.' },
            { question: 'Você precisa estar em qual lugar para iniciar?', options: ['Na área de trabalho', 'Dentro da pasta do projeto', 'No navegador', 'No email'], correct: 1, hint: 'Use cd para entrar na pasta do projeto.' }
        ]
    },
    {
        id: 'n1-4',
        track: 'claude-code',
        module: 'Nível 1: Sobrevivência',
        level: 1,
        title: 'Seu primeiro prompt efetivo',
        xp: 15,
        content: {
            emoji: '💬',
            subtitle: 'Como pedir para ter resultado',
            sections: [
                { title: 'Regra de ouro', content: 'Quanto mais específico, melhor.\n\n❌ Ruim: "me ajuda"\n✅ Bom: "explique o que a função calcularTotal faz em src/pedidos.js"' },
                { title: 'Estrutura básica', content: '1. Diga o arquivo ou parte do código\n2. Diga o que quer\n3. Diga o formato da resposta\n\n<blockquote>No arquivo src/utils.js, explique a função formatarData como se eu fosse iniciante.</blockquote>' },
                { title: 'Comece simples', content: 'Não precisa de comandos especiais. Escreva em português, como falaria com um colega.' }
            ]
        },
        exercises: [
            { question: 'Qual prompt é mais efetivo?', options: ['"me ajuda"', '"explique a função calcularTotal em src/pedidos.js"', '"código"', '"o que faz isso?"'], correct: 1, hint: 'Especificidade gera respostas úteis.' },
            { question: 'Para começar, você precisa usar linguagem técnica complexa?', options: ['Sim, sempre', 'Não, português simples funciona', 'Só inglês', 'Só código'], correct: 1, hint: 'Fale naturalmente, como com um colega.' }
        ]
    },
    {
        id: 'n1-5',
        track: 'claude-code',
        module: 'Nível 1: Sobrevivência',
        level: 1,
        title: 'Quando usar Claude Code no dia a dia',
        xp: 10,
        content: {
            emoji: '🎯',
            subtitle: 'Impacto imediato',
            sections: [
                { title: 'Cenários perfeitos para iniciantes', content: '• "O que esse código faz?"\n• "Por que esse erro aparece?"\n• "Como formatar essa data?"\n• "Crie uma função simples que..."' },
                { title: 'Cenários para evitar no começo', content: '• Mudanças gigantes em muitos arquivos\n• Decisões arquiteturais complexas\n• Automações avançadas\n\n<em>Comece pequeno. Domine o básico primeiro.</em>' },
                { title: 'Mentalidade certa', content: 'Use Claude para tarefas que você já faria, mas mais rápido. Não para coisas que você não entende.' }
            ]
        },
        exercises: [
            { question: 'Qual cenário é ideal para começar?', options: ['Refatorar 50 arquivos', 'Entender uma função', 'Criar uma nova arquitetura', 'Migrar banco de dados'], correct: 1, hint: 'Comece pequeno e ganhe confiança.' },
            { question: 'Você deve usar Claude para tarefas que:', options: ['Não entende nada', 'Já faria, mas mais rápido', 'São impossíveis', 'Outras pessoas fazem'], correct: 1, hint: 'Amplie sua produtividade, não substitua seu entendimento.' }
        ]
    },

    {
        id: 'n2-1',
        track: 'claude-code',
        module: 'Nível 2: Produtividade Básica',
        level: 2,
        title: 'Navegando no projeto',
        xp: 15,
        content: {
            emoji: '🔍',
            subtitle: 'Encontre o que precisa',
            sections: [
                { title: 'Liste os arquivos', content: 'Use o comando:\n\n<code>/ls</code>\n\nO Claude mostra a estrutura do projeto.' },
                { title: 'Busque no código', content: 'Para encontrar onde algo é usado:\n\n<code>/grep nomeDaFuncao</code>\n\nExemplo: /grep calcularFrete' },
                { title: 'Pergunte sobre estrutura', content: 'Você também pode perguntar:\n\n<blockquote>Quais são os arquivos mais importantes deste projeto?</blockquote>' }
            ]
        },
        exercises: [
            { question: 'Qual comando lista arquivos do projeto?', options: ['/files', '/ls', '/dir', '/list'], correct: 1, hint: 'ls vem de list.' },
            { question: 'Como buscar onde uma função é usada?', options: ['/find', '/grep', '/search', '/where'], correct: 1, hint: 'grep busca texto em arquivos.' }
        ]
    },
    {
        id: 'n2-2',
        track: 'claude-code',
        module: 'Nível 2: Produtividade Básica',
        level: 2,
        title: 'Dando contexto com @',
        xp: 15,
        content: {
            emoji: '📎',
            subtitle: 'A chave para boas respostas',
            sections: [
                { title: 'O que é contexto', content: 'Contexto é informação que você dá ao Claude para ele entender melhor o que você quer.' },
                { title: 'Como referenciar arquivos', content: 'Use @ antes do nome do arquivo:\n\n<blockquote>@src/app.js o que essa função faz?</blockquote>\n\nO Claude vai ler o arquivo.' },
                { title: 'Múltiplos arquivos', content: 'Você pode citar vários:\n\n<blockquote>@src/auth.js e @src/routes.js: crie um endpoint de login.</blockquote>' }
            ]
        },
        exercises: [
            { question: 'Como referenciar um arquivo?', options: ['#arquivo.js', '@arquivo.js', '$arquivo.js', 'arquivo.js'], correct: 1, hint: 'Use @ antes do nome.' },
            { question: 'Por que dar contexto ajuda?', options: ['Deixa mais bonito', 'Claude entende melhor o que você quer', 'Gasta menos tokens', 'É obrigatório'], correct: 1, hint: 'Mais informação = resposta mais precisa.' }
        ]
    },
    {
        id: 'n2-3',
        track: 'claude-code',
        module: 'Nível 2: Produtividade Básica',
        level: 2,
        title: 'Pedindo explicações claras',
        xp: 15,
        content: {
            emoji: '🧠',
            subtitle: 'Entenda qualquer código',
            sections: [
                { title: 'Explique em português simples', content: '<blockquote>@src/utils.js Explique a função calcularDesconto em português simples.</blockquote>' },
                { title: 'Peça exemplos', content: '<blockquote>Me dê um exemplo de entrada e saída dessa função.</blockquote>' },
                { title: 'Diga seu nível', content: '<blockquote>Explique como se eu fosse iniciante em JavaScript.</blockquote>\n\nIsso faz o Claude ajustar a profundidade.' }
            ]
        },
        exercises: [
            { question: 'Para entender um código, você pode pedir:', options: ['"adivinha"', '"explique essa função em português simples"', '"não entendo"', '"faz aí"'], correct: 1, hint: 'Seja claro sobre o que quer entender.' },
            { question: 'Por que pedir exemplos ajuda?', options: ['Deixa mais longo', 'Torna abstrato em concreto', 'Não ajuda', 'É obrigatório'], correct: 1, hint: 'Exemplos mostram o código funcionando.' }
        ]
    },
    {
        id: 'n2-4',
        track: 'claude-code',
        module: 'Nível 2: Produtividade Básica',
        level: 2,
        title: 'Criando arquivos novos',
        xp: 20,
        content: {
            emoji: '✨',
            subtitle: 'Do zero ao código',
            sections: [
                { title: 'Seja específico', content: 'Diga:\n• Qual arquivo criar\n• Qual linguagem\n• O que o código deve fazer' },
                { title: 'Exemplo prático', content: '<blockquote>Crie src/utils/formatarData.js com uma função que recebe uma data e retorna "DD/MM/AAAA".</blockquote>' },
                { title: 'Verifique antes de aceitar', content: 'O Claude vai mostrar o que vai criar. Leia e confirme se está de acordo.' }
            ]
        },
        exercises: [
            { question: 'O que informar ao pedir para criar código?', options: ['Só "cria código"', 'Arquivo, linguagem e objetivo', 'Sua idade', 'Cor preferida'], correct: 1, hint: 'Especificidade é essencial.' },
            { question: 'Antes de aceitar código gerado, você deve:', options: ['Aceitar sem ler', 'Ler e verificar se faz sentido', 'Deletar', 'Ignorar'], correct: 1, hint: 'Sempre revise antes de confirmar.' }
        ]
    },
    {
        id: 'n2-5',
        track: 'claude-code',
        module: 'Nível 2: Produtividade Básica',
        level: 2,
        title: 'Editando código existente',
        xp: 20,
        content: {
            emoji: '✏️',
            subtitle: 'Mudanças pequenas e precisas',
            sections: [
                { title: 'Diga onde e o que', content: 'Sempre mencione:\n• arquivo\n• função\n• mudança exata' },
                { title: 'Exemplo', content: '<blockquote>Em src/pedidos.js, na função calcularTotal, adicione validação: se itens estiver vazio, retorne 0.</blockquote>' },
                { title: 'Mantenha o foco', content: 'Peça uma mudança por vez. É mais fácil revisar e menos arriscado.' }
            ]
        },
        exercises: [
            { question: 'Para editar código, informe:', options: ['Só a mudança', 'Arquivo, função e mudança', 'Nada', 'Seu nome'], correct: 1, hint: 'Contexto preciso evita erros.' },
            { question: 'É melhor pedir:', options: ['Muitas mudanças de uma vez', 'Uma mudança por vez', 'Nenhuma mudança', 'Mudanças aleatórias'], correct: 1, hint: 'Foco = controle.' }
        ]
    },

    {
        id: 'n3-1',
        track: 'claude-code',
        module: 'Nível 3: Código com Qualidade',
        level: 3,
        title: 'Debugging básico',
        xp: 20,
        content: {
            emoji: '🐛',
            subtitle: 'Encontre e entenda erros',
            sections: [
                { title: 'Como descrever o problema', content: 'Inclua:\n• a mensagem de erro exata\n• o arquivo e linha\n• o que você estava fazendo' },
                { title: 'Exemplo', content: '<blockquote>Estou vendo "TypeError: Cannot read property of undefined" em src/usuarios.js linha 23. O erro aparece quando busco um usuário que não existe.</blockquote>' },
                { title: 'Peça explicação', content: 'Depois peça:\n\n<blockquote>Explique o que causou e como corrigir.</blockquote>' }
            ]
        },
        exercises: [
            { question: 'Ao reportar erro, o que incluir?', options: ['Só "deu erro"', 'Mensagem, arquivo e situação', 'Emoji triste', 'Hora do dia'], correct: 1, hint: 'Informação completa = solução rápida.' },
            { question: '"Cannot read property of undefined" geralmente significa:', options: ['Erro de sintaxe', 'Você acessou algo que não existe', 'Erro de rede', 'Código muito longo'], correct: 1, hint: 'undefined = não existe.' }
        ]
    },
    {
        id: 'n3-2',
        track: 'claude-code',
        module: 'Nível 3: Código com Qualidade',
        level: 3,
        title: 'Criando testes simples',
        xp: 20,
        content: {
            emoji: '🧪',
            subtitle: 'Proteja seu código',
            sections: [
                { title: 'Por que testar', content: 'Testes garantem que código funciona e continua funcionando quando você muda algo.' },
                { title: 'Como pedir', content: '<blockquote>Crie testes para src/calculadora.js usando Jest. Teste: soma de positivos, soma com zero, divisão por zero.</blockquote>' },
                { title: 'Sempre rode', content: 'Depois de criar, rode:\n\n<code>npm test</code>\n\nAssim você confirma que funciona.' }
            ]
        },
        exercises: [
            { question: 'Testes servem para:', options: ['Deixar código bonito', 'Garantir que funciona', 'Gastar tempo', 'Criar bugs'], correct: 1, hint: 'Confiança no código.' },
            { question: 'O que incluir ao pedir testes?', options: ['Só "testa aí"', 'Arquivo, framework e casos', 'Nada', 'Música'], correct: 1, hint: 'Framework + casos = testes úteis.' }
        ]
    },
    {
        id: 'n3-3',
        track: 'claude-code',
        module: 'Nível 3: Código com Qualidade',
        level: 3,
        title: 'Revisando antes de aceitar',
        xp: 20,
        content: {
            emoji: '👓',
            subtitle: 'Você é o gatekeeper',
            sections: [
                { title: 'Sempre revise', content: 'Claude pode errar. Verifique:\n• lógica\n• nomes de variáveis\n• se não quebrou outra parte\n• se segue padrões do projeto' },
                { title: 'Peça o diff', content: 'Para ver o que mudou:\n\n<blockquote>Mostre o que você alterou antes de aplicar.</blockquote>' },
                { title: 'Quando aceitar', content: 'Aceite quando você entender e concordar com a mudança. Se não entender, peça explicação.' }
            ]
        },
        exercises: [
            { question: 'Você deve aceitar código gerado:', options: ['Sempre', 'Só depois de revisar', 'Nunca', 'Apenas se for bonito'], correct: 1, hint: 'Revisão é responsabilidade sua.' },
            { question: 'O que pedir para ver mudanças propostas?', options: ['/diff', 'Mostre o que alterou', '/show', 'explique'], correct: 1, hint: 'Veja antes de confirmar.' }
        ]
    },
    {
        id: 'n3-4',
        track: 'claude-code',
        module: 'Nível 3: Código com Qualidade',
        level: 3,
        title: 'Refatoração simples',
        xp: 20,
        content: {
            emoji: '🧹',
            subtitle: 'Deixe o código melhor',
            sections: [
                { title: 'O que é refatorar', content: 'Mudar a estrutura do código sem mudar o que ele faz.\n\nExemplo: melhorar nomes, reduzir repetição, simplificar funções.' },
                { title: 'Exemplo prático', content: '<blockquote>Em src/utils.js, renomeie variáveis x e y para largura e altura, e extraia a validação para uma função separada.</blockquote>' },
                { title: 'Preserve comportamento', content: 'Após refatorar, rode testes para garantir que nada mudou de funcionamento.' }
            ]
        },
        exercises: [
            { question: 'Refatorar significa:', options: ['Criar código novo', 'Mudar estrutura sem mudar comportamento', 'Apagar código', 'Adicionar bugs'], correct: 1, hint: 'Reorganizar, não reinventar.' },
            { question: 'Após refatorar, o que fazer?', options: ['Deployar', 'Rodar testes', 'Nada', 'Comemorar'], correct: 1, hint: 'Valide que continuou funcionando.' }
        ]
    },

    {
        id: 'n4-1',
        track: 'claude-code',
        module: 'Nível 4: Escala',
        level: 4,
        title: 'Quando usar Plan Mode',
        xp: 20,
        content: {
            emoji: '📋',
            subtitle: 'Planeje antes de executar',
            sections: [
                { title: 'O que é', content: 'Plan Mode faz o Claude mostrar um plano ANTES de executar mudanças grandes.' },
                { title: 'Quando usar', content: '• Mudanças em vários arquivos\n• Decisões arquiteturais\n• Requisitos confusos\n\n<em>Não use para tarefas de 1 minuto.</em>' },
                { title: 'Como ativar', content: '<blockquote>/plan quero refatorar a autenticação para usar JWT</blockquote>\n\nO Claude mostra o plano. Você aprova ou ajusta.' }
            ]
        },
        exercises: [
            { question: 'Plan Mode é ideal para:', options: ['Mudar um console.log', 'Refatorar vários arquivos', 'Fechar o terminal', 'Enviar email'], correct: 1, hint: 'Use para mudanças complexas.' },
            { question: 'Como ativar Plan Mode?', options: ['/plan', '/go', '/execute', '/run'], correct: 0, hint: '/plan no início do prompt.' }
        ]
    },
    {
        id: 'n4-2',
        track: 'claude-code',
        module: 'Nível 4: Escala',
        level: 4,
        title: 'Criando seu CLAUDE.md',
        xp: 25,
        content: {
            emoji: '📝',
            subtitle: 'Memória do seu projeto',
            sections: [
                { title: 'Para que serve', content: 'CLAUDE.md é um arquivo na raiz do projeto que ensina o Claude sobre suas regras, padrões e estrutura.' },
                { title: 'Conteúdo essencial', content: '• Estrutura de pastas\n• Padrões de nomenclatura\n• Bibliotecas permitidas\n• Comandos comuns\n• Estilo de código' },
                { title: 'Exemplo mínimo', content: '# Projeto X\n\n## Convenções\n- camelCase para variáveis\n- Use async/await\n- Sempre trate erros\n\n## Estrutura\n- src/ código\n- tests/ testes' }
            ]
        },
        exercises: [
            { question: 'CLAUDE.md ensina Claude sobre:', options: ['História do mundo', 'Padrões do seu projeto', 'Músicas', 'Receitas'], correct: 1, hint: 'Regras e contexto do projeto.' },
            { question: 'Onde fica o CLAUDE.md?', options: ['Na pasta src', 'Na raiz do projeto', 'No desktop', 'No email'], correct: 1, hint: 'Raiz = pasta principal.' }
        ]
    },
    {
        id: 'n4-3',
        track: 'claude-code',
        module: 'Nível 4: Escala',
        level: 4,
        title: 'Automação com hooks',
        xp: 20,
        content: {
            emoji: '⚓',
            subtitle: 'Automatize o chato',
            sections: [
                { title: 'O que são hooks', content: 'Ações que rodam automaticamente em momentos do Git, como antes de um commit.' },
                { title: 'Cenário real', content: 'Pre-commit rodando testes:\n\n1. Você tenta commitar\n2. Hook roda npm test\n3. Se falhar, commit é bloqueado\n4. Se passar, commit vai em frente' },
                { title: 'Quando vale a pena', content: 'Quando sua equipe esquece de rodar testes ou formatar código. Hooks garantem consistência.' }
            ]
        },
        exercises: [
            { question: 'Hooks rodam:', options: ['Manualmente', 'Automaticamente em eventos', 'Nunca', 'Só no domingo'], correct: 1, hint: 'Automático = sem depender de lembrar.' },
            { question: 'Um pre-commit hook serve para:', options: ['Enviar email', 'Rodar ações antes do commit', 'Fazer deploy', 'Criar branch'], correct: 1, hint: 'Pre = antes.' }
        ]
    },
    {
        id: 'n4-4',
        track: 'claude-code',
        module: 'Nível 4: Escala',
        level: 4,
        title: 'Workflow produtivo',
        xp: 20,
        content: {
            emoji: '⚙️',
            subtitle: 'Do início ao fim',
            sections: [
                { title: 'Passos recomendados', content: '1. Explore: /ls, /grep, leia arquivos\n2. Planeje: use /plan para mudanças grandes\n3. Implemente: peça mudanças específicas\n4. Valide: rode testes\n5. Commit: salve em partes pequenas' },
                { title: 'Commits atômicos', content: 'Cada commit faz UMA coisa só.\n\nBom: "fix: corrige validação de email"\nRuim: "update stuff"' },
                { title: 'Não use bazuca', content: 'Mudanças pequenas = menos risco. Divida trabalho grande em partes.' }
            ]
        },
        exercises: [
            { question: 'Qual é a ordem ideal do workflow?', options: ['Implementar, explorar, testar', 'Explorar, planejar, implementar, validar, commitar', 'Commitar, testar, implementar', 'Planejar, ignorar, deployar'], correct: 1, hint: 'Ordem lógica reduz erros.' },
            { question: 'Commits atômicos significam:', options: ['Grandes', 'Uma coisa só', 'Sem mensagem', 'Muitos arquivos'], correct: 1, hint: 'Foco em uma mudança.' }
        ]
    },

    {
        id: 'n5-1',
        track: 'claude-code',
        module: 'Nível 5: Especialista',
        level: 5,
        title: 'Subagentes',
        xp: 25,
        content: {
            emoji: '🤝',
            subtitle: 'Trabalho paralelo',
            sections: [
                { title: 'Conceito', content: 'Subagentes são "Clau des menores" que fazem trabalho paralelo.' },
                { title: 'Quando usar', content: '• Revisar vários arquivos diferentes\n• Analisar múltiplos módulos\n• Testar vários cenários ao mesmo tempo' },
                { title: 'Exemplo', content: '<blockquote>/agent analise @src/auth.js e sugira melhorias de segurança. Depois faça o mesmo para @src/pagamentos.js.</blockquote>' }
            ]
        },
        exercises: [
            { question: 'Subagentes são úteis para:', options: ['Tarefas de 1 minuto', 'Trabalhos independentes em paralelo', 'Escrever email', 'Abrir o navegador'], correct: 1, hint: 'Paralelismo em tarefas independentes.' },
            { question: 'Você cria um subagente com:', options: ['/agent', '/sub', '/help', '/clone'], correct: 0, hint: '/agent cria subagente.' }
        ]
    },
    {
        id: 'n5-2',
        track: 'claude-code',
        module: 'Nível 5: Especialista',
        level: 5,
        title: 'Skills',
        xp: 25,
        content: {
            emoji: '🎯',
            subtitle: 'Contexto especializado',
            sections: [
                { title: 'O que são', content: 'Skills carregam contexto específico sob demanda. São úteis para domínios complexos e repetitivos.' },
                { title: 'Cenário real', content: 'Uma skill de Kubernetes que carrega comandos e padrões só quando você pergunta sobre deploy no K8s.' },
                { title: 'Quando criar', content: 'Quando você percebe que está repetindo muito contexto sobre um tema específico.' }
            ]
        },
        exercises: [
            { question: 'Skills carregam contexto:', options: ['Sempre', 'Sob demanda', 'Nunca', 'Aleatoriamente'], correct: 1, hint: 'Quando necessário.' },
            { question: 'Crie uma skill quando:', options: ['Sempre', 'Repetir contexto sobre um tema específico', 'Nunca', 'Para tarefas simples'], correct: 1, hint: 'Evite repetição de contexto.' }
        ]
    },
    {
        id: 'n5-3',
        track: 'claude-code',
        module: 'Nível 5: Especialista',
        level: 5,
        title: 'MCP - integrações externas',
        xp: 30,
        content: {
            emoji: '🔌',
            subtitle: 'Conecte ferramentas',
            sections: [
                { title: 'O que é', content: 'Model Context Protocol permite que Claude acesse ferramentas externas: bancos de dados, APIs, sistemas de arquivos.' },
                { title: 'Exemplo prático', content: 'Com MCP para PostgreSQL, você pode perguntar:\n\n<blockquote>Liste os 10 usuários mais ativos da semana.</blockquote>\n\nE o Claude consulta o banco.' },
                { title: 'Quando usar', content: 'Quando você precisa consultar dados reais ou interagir com ferramentas externas durante a conversa.' }
            ]
        },
        exercises: [
            { question: 'MCP permite Claude:', options: ['Dormir', 'Acessar ferramentas externas', 'Fazer café', 'Ler mentes'], correct: 1, hint: 'Integração com o mundo.' },
            { question: 'Use MCP quando precisar:', options: ['De um abraço', 'Consultar dados reais', 'Escrever poesia', 'Desenhar'], correct: 1, hint: 'Dados e ferramentas externas.' }
        ]
    },
    {
        id: 'n5-4',
        track: 'claude-code',
        module: 'Nível 5: Especialista',
        level: 5,
        title: 'Orquestrando agentes',
        xp: 30,
        content: {
            emoji: '🎼',
            subtitle: 'Muitos agentes, um objetivo',
            sections: [
                { title: 'Conceito', content: 'Você atua como orquestrador: divide trabalho, delega a subagentes e agrega os resultados.' },
                { title: 'Cenário', content: 'Revisão de código em grande escala:\n\n• Agente 1: revisa segurança\n• Agente 2: revisa performance\n• Agente 3: revisa testes\n\nVocê junta os achados.' },
                { title: 'Quando fazer isso', content: 'Só quando o volume justifica. Para projetos pequenos, isso é overkill.' }
            ]
        },
        exercises: [
            { question: 'Orquestração é sobre:', options: ['Tocar música', 'Coordenar múltiplos agentes', 'Apagar código', 'Escrever sozinho'], correct: 1, hint: 'Coordenar trabalho dividido.' },
            { question: 'Orquestração faz sentido quando:', options: ['Sempre', 'Volume de trabalho justifica', 'Nunca', 'Só para tarefas simples'], correct: 1, hint: 'Não use bazuca para barata.' }
        ]
    },
    {
        id: 'n5-5',
        track: 'claude-code',
        module: 'Nível 5: Especialista',
        level: 5,
        title: 'Seu workflow pessoal',
        xp: 20,
        content: {
            emoji: '🎨',
            subtitle: 'Ajuste à sua realidade',
            sections: [
                { title: 'Não existe fórmula única', content: 'Cada pessoa e projeto são diferentes. O importante é encontrar o que funciona para você.' },
                { title: 'Documente o que funciona', content: 'Crie um arquivo WORKFLOW.md ou anote:\n• como você inicia tarefas\n• quando usa /plan\n• quando pede testes\n• seus atalhos favoritos' },
                { title: 'Evolua naturalmente', content: 'Não tente usar tudo de uma vez. Adicione ferramentas conforme sentir necessidade real.' }
            ]
        },
        exercises: [
            { question: 'Seu workflow deve ser:', options: ['Cópia de outro', 'Adaptado à sua realidade', 'Fixo para sempre', 'O mais complexo possível'], correct: 1, hint: 'Pessoal = funcional.' },
            { question: 'Como evoluir com Claude Code?', options: ['Usar tudo de uma vez', 'Adicionar ferramentas conforme necessidade', 'Não usar nada', 'Só ler teoria'], correct: 1, hint: 'Progressão natural.' }
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TRILHA: CLAUDE COWORK
    // Operação de equipe, integrações, decisão e negociação
    // ═══════════════════════════════════════════════════════

    {
        id: 'cw1-1',
        track: 'claude-cowork',
        module: 'Nível 1: Operação do Dia a Dia',
        level: 1,
        title: 'O que é Claude Cowork?',
        xp: 10,
        content: {
            emoji: '🤝',
            subtitle: 'IA como colega de trabalho',
            sections: [
                { title: 'Em uma frase', content: 'Claude Cowork é usar Claude para acelerar o trabalho em equipe: reuniões, mensagens, decisões e follow-ups do dia a dia profissional.' },
                { title: 'Onde ele ajuda', content: '• Resumir reuniões e atas\n• Transformar anotações em tarefas\n• Redigir mensagens e alinhamentos\n• Apoiar decisões com perguntas certas\n• Ajudar a estruturar apresentações' },
                { title: 'O que ele não é', content: 'Não substitui a conversa humana. Você continua no comando — ele acelera o que você já faria, em par com o time.' }
            ]
        },
        exercises: [
            { question: 'Claude Cowork é focado em:', options: ['Programação', 'Trabalho em equipe e produtividade', 'Design visual', 'Banco de dados'], correct: 1, hint: 'Cowork = trabalhar junto.' },
            { question: 'Em Cowork, a decisão final deve ser:', options: ['Sempre da IA', 'Sempre humana', 'Do time de tech', 'Aleatória'], correct: 1, hint: 'IA apoia, humano decide.' }
        ]
    },
    {
        id: 'cw1-2',
        track: 'claude-cowork',
        module: 'Nível 1: Operação do Dia a Dia',
        level: 1,
        title: 'Resumindo uma reunião em 3 passos',
        xp: 15,
        content: {
            emoji: '📝',
            subtitle: 'Decisão, ação e dúvida em uma só leitura',
            sections: [
                { title: 'Por que resumir', content: 'Reuniões geram decisões, ações e dúvidas. Sem resumo, tudo se perde. Com resumo, o time segue alinhado sem precisar de mais uma reunião.' },
                { title: 'O prompt mínimo', content: '<blockquote>Resuma esta reunião em: 1) decisões, 2) ações com responsável e prazo, 3) dúvidas em aberto.</blockquote>\n\nCole transcrição, anotações ou ata. Quanto mais cru, melhor — Claude estrutura.' },
                { title: 'Boas práticas', content: 'Mantenha o resumo curto (1 página). Salve em local acessível (Notion, doc do time). Marque quem precisa ler.' }
            ]
        },
        exercises: [
            { question: 'Um bom resumo de reunião contém:', options: ['Tudo que foi dito', 'Decisões, ações e dúvidas', 'Apenas elogios', 'Só a duração'], correct: 1, hint: 'Foco no que muda o trabalho.' },
            { question: 'O que colar para resumir?', options: ['Nada', 'Transcrição ou anotações', 'Só o tema', 'A foto da sala'], correct: 1, hint: 'Texto cru funciona bem.' }
        ]
    },
    {
        id: 'cw1-3',
        track: 'claude-cowork',
        module: 'Nível 1: Operação do Dia a Dia',
        level: 1,
        title: 'Anotações em tarefas',
        xp: 15,
        content: {
            emoji: '✅',
            subtitle: 'Acabar com a lista solta',
            sections: [
                { title: 'O problema', content: 'Anotações de reunião viram um caderno esquecido. Para virar ação, precisam virar tarefas claras com responsável, prazo e prioridade.' },
                { title: 'Prompt útil', content: '<blockquote>Transforme estas anotações em tarefas. Para cada uma, sugira: responsável, prazo estimado e prioridade (alta, média, baixa).</blockquote>' },
                { title: 'Boas práticas', content: 'Uma tarefa por linha. Verbo no início (enviar, revisar, decidir). Sempre indique o "feito" (critério de aceitação).' }
            ]
        },
        exercises: [
            { question: 'Para cada tarefa gerada, o ideal é ter:', options: ['Só o título', 'Responsável, prazo e prioridade', 'Cor favorita', 'Nome do time'], correct: 1, hint: 'Clareza gera execução.' },
            { question: 'Verbo no início da tarefa ajuda porque:', options: ['Deixa mais bonito', 'Mostra a ação concreta', 'É moda', 'Substitui o responsável'], correct: 1, hint: 'Ação concreta > abstração.' }
        ]
    },
    {
        id: 'cw1-4',
        track: 'claude-cowork',
        module: 'Nível 1: Operação do Dia a Dia',
        level: 1,
        title: 'Redigindo mensagens claras',
        xp: 15,
        content: {
            emoji: '💬',
            subtitle: 'Fale com clareza, sem ruído',
            sections: [
                { title: 'O atrito da comunicação', content: 'Mensagens vagas geram idas e vindas. Um texto bem redigido resolve em uma troca só — e evita que a pessoa precise perguntar de volta.' },
                { title: 'Prompt de redação', content: '<blockquote>Reescreva esta mensagem para ser direta, simpática e objetiva. Mantenha o objetivo central.</blockquote>' },
                { title: 'Bons critérios', content: '• Objetivo claro no começo\n• Contexto necessário\n• Pedido explícito (o que espera de volta)\n• Tom adequado ao canal (Slack, email, doc)' }
            ]
        },
        exercises: [
            { question: 'Uma boa mensagem profissional começa com:', options: ['Desculpa', 'O objetivo da mensagem', 'Assunto longo', 'Saudação extensa'], correct: 1, hint: 'Direto ao ponto.' },
            { question: 'Pedir reescrita a Claude vale a pena quando:', options: ['Nunca', 'Mensagem ficou vaga ou agressiva', 'Sempre', 'Só em email'], correct: 1, hint: 'Use quando precisa destravar.' }
        ]
    },
    {
        id: 'cw1-5',
        track: 'claude-cowork',
        module: 'Nível 1: Operação do Dia a Dia',
        level: 1,
        title: 'Alinhamentos assíncronos',
        xp: 15,
        content: {
            emoji: '🧭',
            subtitle: 'Menos reunião, mais objetivo',
            sections: [
                { title: 'O custo de uma reunião', content: 'Reunião longa consome horas de várias pessoas. Às vezes, um texto bem escrito resolve mais rápido e sem sincronia de agenda.' },
                { title: 'Prompt útil', content: '<blockquote>Escreva um alinhamento curto explicando X para o time Y. Tom respeitoso, objetivo, com decisão pedida no final.</blockquote>' },
                { title: 'Cuidado', content: 'Cowork não substitui decisões sensíveis. Use para preparar alinhamento; decisão final é humana.' }
            ]
        },
        exercises: [
            { question: 'Alinhamento assíncrono é bom para:', options: ['Crises urgentes', 'Atualizações de status e direcionamentos', 'Conflitos graves', 'Nada'], correct: 1, hint: 'Status não precisa de reunião.' },
            { question: 'Decisões sensíveis devem:', options: ['Ser da IA', 'Ter conversa humana real', 'Ser adiadas', 'Ser em email'], correct: 1, hint: 'Humano resolve humano.' }
        ]
    },

    {
        id: 'cw2-1',
        track: 'claude-cowork',
        module: 'Nível 2: Skills, MCP e Integrações',
        level: 2,
        title: 'O que são Skills',
        xp: 15,
        content: {
            emoji: '🎯',
            subtitle: 'Contexto especializado sob demanda',
            sections: [
                { title: 'Definição', content: 'Skills são pacotes de instruções que o Claude carrega sob demanda quando você entra num domínio específico — como se ele "virasse especialista" naquele assunto para aquela tarefa.' },
                { title: 'Quando usar', content: '• Workflow repetitivo com muito contexto\n• Domínio com padrões e regras fixas (ex: ata, OKR, QBR)\n• Quando o prompt normal não está trazendo qualidade' },
                { title: 'Como ativar', content: 'Use <code>/skill nome-da-skill</code> ou cite a skill na sua mensagem. Exemplo: <blockquote>Use a skill de ata de reunião para resumir este conteúdo.</blockquote>' }
            ]
        },
        exercises: [
            { question: 'Skill serve para:', options: ['Substituir o time', 'Carregar contexto especializado sob demanda', 'Desligar o Claude', 'Nada'], correct: 1, hint: 'Especialização temporária.' },
            { question: 'Como ativar uma skill?', options: ['/skill nome-da-skill', 'Reinstalar o Claude', 'Apagar arquivos', 'Mudar de conta'], correct: 0, hint: 'Comando simples.' }
        ]
    },
    {
        id: 'cw2-2',
        track: 'claude-cowork',
        module: 'Nível 2: Skills, MCP e Integrações',
        level: 2,
        title: 'Criando uma Skill do zero',
        xp: 20,
        content: {
            emoji: '🛠️',
            subtitle: 'Skill sob medida para o seu time',
            sections: [
                { title: 'Por que criar', content: 'Quando o prompt básico repete contexto toda vez, a skill vira atalho: você carrega uma vez, aplica muitas.' },
                { title: 'Estrutura mínima', content: 'Uma skill tem:\n• Nome e descrição do gatilho\n• Instruções curtas e objetivas\n• Formato de saída esperado\n• Exemplos do que é bom/ruim' },
                { title: 'Onde salvar', content: 'Em arquivo dentro de <code>.claude/skills/</code> no projeto, ou em pasta global do time. Versionada no Git para evoluir com segurança.' }
            ]
        },
        exercises: [
            { question: 'Boa skill é:', options: ['Genérica e longa', 'Curta, com gatilho claro e exemplos', 'Oculta e sem docs', 'Sempre igual'], correct: 1, hint: 'Específica e testável.' },
            { question: 'Onde salvar uma skill?', options: ['No desktop', 'Em .claude/skills/ do projeto ou global', 'No email', 'No Slack'], correct: 1, hint: 'Versionada com o time.' }
        ]
    },
    {
        id: 'cw2-3',
        track: 'claude-cowork',
        module: 'Nível 2: Skills, MCP e Integrações',
        level: 2,
        title: 'MCP e integrações externas',
        xp: 20,
        content: {
            emoji: '🔌',
            subtitle: 'Claude conectado às suas ferramentas',
            sections: [
                { title: 'O que é MCP', content: 'Model Context Protocol é o padrão que permite ao Claude se conectar a ferramentas externas: Notion, Linear, Google Drive, calendário, banco de dados, etc.' },
                { title: 'Exemplo prático', content: 'Com MCP para Notion, você pode pedir: <blockquote>Liste as páginas de OKR deste trimestre e resuma o status de cada uma.</blockquote>\n\nClaude lê direto do Notion, sem você copiar e colar.' },
                { title: 'Quando vale a pena', content: 'Quando você precisa consultar ou atualizar dados de uma ferramenta externa várias vezes ao dia — e o copiar/colar virou gargalo.' }
            ]
        },
        exercises: [
            { question: 'MCP serve para:', options: ['Desligar o Claude', 'Conectar Claude a ferramentas externas', 'Trocar de navegador', 'Apagar tarefas'], correct: 1, hint: 'Integração padronizada.' },
            { question: 'MCP vale a pena quando:', options: ['Nunca', 'Você consulta ferramenta externa várias vezes ao dia', 'Só uma vez por mês', 'Sempre'], correct: 1, hint: 'Use quando virar gargalo.' }
        ]
    },
    {
        id: 'cw2-4',
        track: 'claude-cowork',
        module: 'Nível 2: Skills, MCP e Integrações',
        level: 2,
        title: 'Composio como camada de conexão',
        xp: 20,
        content: {
            emoji: '🔗',
            subtitle: 'Composio amplia o que Claude alcança',
            sections: [
                { title: 'O que é Composio', content: 'Composio é uma camada que conecta Claude a centenas de ferramentas externas com um único setup — sem precisar configurar cada uma do zero.' },
                { title: 'Exemplo real', content: 'Com Composio você pode: compactar PDF, enviar email, criar evento no calendário, gerar imagem, postar em rede social, consultar API, e muito mais — direto na conversa.' },
                { title: 'Quando usar', content: 'Quando a tarefa cruza várias ferramentas (ex: gerar resumo, salvar no Drive, notificar no Slack). Composio evita o "vai e volta" entre sistemas.' }
            ]
        },
        exercises: [
            { question: 'Composio serve para:', options: ['Desenhar', 'Conectar Claude a várias ferramentas externas', 'Programar', 'Apagar dados'], correct: 1, hint: 'Camada de integração.' },
            { question: 'Quando Composio brilha?', options: ['Tarefa simples', 'Tarefa que cruza várias ferramentas', 'Só pesquisa', 'Nada'], correct: 1, hint: 'Vai e volta entre sistemas.' }
        ]
    },
    {
        id: 'cw2-5',
        track: 'claude-cowork',
        module: 'Nível 2: Skills, MCP e Integrações',
        level: 2,
        title: 'Automatizando um fluxo do dia a dia',
        xp: 25,
        content: {
            emoji: '⚡',
            subtitle: 'Do gatilho ao resultado final',
            sections: [
                { title: 'Anatomia do fluxo', content: 'Um fluxo automatizado tem: gatilho (algo que acontece), ação (o que Claude faz) e destino (onde o resultado vai).' },
                { title: 'Exemplo', content: 'Gatilho: nova ata no Drive. Ação: resumir com skill de ata, extrair tarefas, criar cards no Linear. Destino: Notion do time + notificação no Slack.' },
                { title: 'Como começar', content: 'Comece simples: copie manualmente o passo a passo, valide, depois automatize. Automação cedo demais vira manutenção cedo demais.' }
            ]
        },
        exercises: [
            { question: 'Um bom fluxo automatizado tem:', options: ['Só ação', 'Gatilho, ação e destino', 'Só destino', 'Nada'], correct: 1, hint: 'Três peças mínimas.' },
            { question: 'Quando automatizar?', options: ['Dia 1', 'Depois de validar o passo a passo manual', 'Nunca', 'Sempre'], correct: 1, hint: 'Validar antes de automatizar.' }
        ]
    },

    {
        id: 'cw3-1',
        track: 'claude-cowork',
        module: 'Nível 3: Decisão e Negociação',
        level: 3,
        title: 'Estruturando uma decisão difícil',
        xp: 20,
        content: {
            emoji: '🧠',
            subtitle: 'Use Claude para pensar melhor',
            sections: [
                { title: 'Boa pergunta > resposta rápida', content: 'Cowork brilha quando você usa Claude para gerar boas perguntas antes de decidir.' },
                { title: 'Prompt de preparação', content: '<blockquote>Preciso decidir entre A e B. Liste prós, contras, riscos e o que precisaria ser verdade para cada um ser a melhor escolha.</blockquote>' },
                { title: 'Sempre revise', content: 'Ele não tem contexto emocional nem político. Use o material para decidir, não para decidir por você.' }
            ]
        },
        exercises: [
            { question: 'Cowork ajuda em decisões:', options: ['Tomando por você', 'Organizando argumentos', 'Escolhendo por você', 'Substituindo o líder'], correct: 1, hint: 'Ele apoia o pensar.' },
            { question: 'Ao usar Claude para decidir:', options: ['Aceitar cegamente', 'Cruzar com seu contexto', 'Nunca discordar', 'Apagar o humano'], correct: 1, hint: 'Contexto humano ainda manda.' }
        ]
    },
    {
        id: 'cw3-2',
        track: 'claude-cowork',
        module: 'Nível 3: Decisão e Negociação',
        level: 3,
        title: 'Prompts que destravam conflitos',
        xp: 20,
        content: {
            emoji: '🕊️',
            subtitle: 'Texto neutro em situação delicada',
            sections: [
                { title: 'Conflito começa na forma', content: 'Às vezes, a mesma ideia gera briga por estar mal escrita. Reescrever pode evitar desgaste.' },
                { title: 'Prompt', content: '<blockquote>Reescreva esta resposta em tom colaborativo, separando fatos, sentimentos e pedidos. Mantenha a essência.</blockquote>' },
                { title: 'Limite', content: 'Se o conflito for de fundo, reescrita não resolve. Traga para conversa humana.' }
            ]
        },
        exercises: [
            { question: 'Reescrever mensagem em conflito ajuda quando:', options: ['Sempre', 'A forma está ruim, mas a essência é boa', 'Nunca', 'Só por email'], correct: 1, hint: 'Forma ≠ fundo.' },
            { question: 'Cowork não substitui:', options: ['Texto', 'Conversa humana em conflito profundo', 'Resumo', 'Redação'], correct: 1, hint: 'Humano resolve humano.' }
        ]
    },
    {
        id: 'cw3-3',
        track: 'claude-cowork',
        module: 'Nível 3: Decisão e Negociação',
        level: 3,
        title: 'Preparando uma negociação',
        xp: 25,
        content: {
            emoji: '🤝',
            subtitle: 'Chegar pronto para o momento',
            sections: [
                { title: 'Negociar é chegar preparado', content: 'Antes da conversa, simule: liste interesses, posições, opções de troca, e o que você aceita ceder.' },
                { title: 'Prompt útil', content: '<blockquote>Preciso negociar X com Y. Liste os interesses reais de cada lado, opções de ganho mútuo e a zona de acordo possível.</blockquote>' },
                { title: 'Cuidados', content: 'Claude não conhece o histórico emocional nem as promessas passadas. Use como mapa — não como decisor.' }
            ]
        },
        exercises: [
            { question: 'Negociar bem começa em:', options: ['Reunião em si', 'Preparação antes da conversa', 'Email final', 'Reunião de follow-up'], correct: 1, hint: 'Antes da conversa.' },
            { question: 'Para Claude negociar por você, ele precisaria de:', options: ['Só o tema', 'Histórico completo e promessas passadas', 'Cor favorita', 'Nada'], correct: 1, hint: 'Contexto é tudo.' }
        ]
    },
    {
        id: 'cw3-4',
        track: 'claude-cowork',
        module: 'Nível 3: Decisão e Negociação',
        level: 3,
        title: 'Respondendo perguntas difíceis',
        xp: 20,
        content: {
            emoji: '🎯',
            subtitle: 'Resposta firme sem soar defensivo',
            sections: [
                { title: 'Por que é difícil', content: 'Pergunta difícil vem com carga emocional. Responder na defensiva piora tudo. Responder com clareza e sem rodeios, melhor.' },
                { title: 'Prompt útil', content: '<blockquote>Reescreva esta resposta para ser firme, clara e respeitosa. Sem rodeio, sem agressividade, sem pedir desculpa em excesso.</blockquote>' },
                { title: 'Quando usar', content: 'Em alinhamentos críticos, cobranças do cliente, feedbacks sensíveis e conversas 1:1 delicadas.' }
            ]
        },
        exercises: [
            { question: 'Resposta boa a pergunta difícil é:', options: ['Defensiva', 'Clara, firme e sem rodeio', 'Pedindo desculpa', 'Ignorando'], correct: 1, hint: 'Direta sem agressividade.' },
            { question: 'Quando pedir reescrita a Claude?', options: ['Nunca', 'Pergunta difícil, feedback sensível, cobrança', 'Só em chat', 'Sempre'], correct: 1, hint: 'Situações críticas.' }
        ]
    },

    // ═══════════════════════════════════════════════════════
    // ═══════════════════════════════════════════════════════
    // TRILHA: CLAUDE DESIGN
    // Baseado na documentação oficial: claude.ai/design
    // Design, protótipos e apresentações via conversa com Claude
    // ═══════════════════════════════════════════════════════

    {
        id: 'ds1-1',
        track: 'claude-design',
        module: 'Nível 1: Primeiros Passos',
        level: 1,
        title: 'O que é Claude Design',
        xp: 10,
        content: {
            emoji: '🎨',
            subtitle: 'Design conversacional com Claude',
            sections: [
                { title: 'Em uma frase', content: 'Claude Design permite criar designs, protótipos interativos e apresentações conversando com Claude — descrevendo o que você quer e vendo o resultado na tela ao lado.' },
                { title: 'Onde acessar', content: 'Disponível em beta para planos Pro, Max, Team e Enterprise (desativado por padrão em Enterprise). Acesse pela web em claude.ai/design ou pela barra lateral do Claude Desktop.' },
                { title: 'Sistema de design automático', content: 'Se sua organização configurou um design system, seus projetos herdam automaticamente cores, tipografia e componentes da marca. Você não precisa subir nada — a marca já está em vigor.' }
            ]
        },
        exercises: [
            { question: 'Claude Design é principalmente:', options: ['Um editor de imagens', 'Uma interface onde você descreve e Claude gera designs funcionais', 'Um app de slides tradicional', 'Um gerador de logos'], correct: 1, hint: 'Conversa + tela, lado a lado.' },
            { question: 'Onde posso usar o Claude Design?', options: ['Só no celular', 'Na web (claude.ai/design) e no Claude Desktop', 'Só em Mac', 'Só no Windows'], correct: 1, hint: 'Web e desktop.' }
        ]
    },
    {
        id: 'ds1-2',
        track: 'claude-design',
        module: 'Nível 1: Primeiros Passos',
        level: 1,
        title: 'Como funciona: chat + tela',
        xp: 15,
        content: {
            emoji: '🪟',
            subtitle: 'Duas áreas, um fluxo contínuo',
            sections: [
                { title: 'A interface', content: 'Claude Design tem duas áreas principais: chat à esquerda (você descreve o que quer) e tela à direita (Claude gera o design funcional).' },
                { title: 'O fluxo típico', content: '1) Crie um projeto.\n2) Anexe ou importe o sistema de design.\n3) Adicione contexto relevante (screenshots, base de código).\n4) Descreva o que quer construir.\n5) Revise o que Claude gerou.\n6) Refine por chat, comentários inline ou edição direta.' },
                { title: 'Mentalidade', content: 'A primeira geração é um ponto de partida. O valor real vem da iteração — você refina até ficar perfeito.' }
            ]
        },
        exercises: [
            { question: 'O que fica à esquerda no Claude Design?', options: ['A tela do design', 'O chat onde você descreve o que quer', 'A timeline', 'O histórico de versões'], correct: 1, hint: 'Onde você conversa.' },
            { question: 'Qual é o fluxo típico?', options: ['Desenhar tudo à mão', 'Criar projeto, descrever, revisar e refinar', 'Esperar Claude adivinhar', 'Só usar templates prontos'], correct: 1, hint: 'Iteração é o caminho.' }
        ]
    },

    {
        id: 'ds2-1',
        track: 'claude-design',
        module: 'Nível 2: Design + Code',
        level: 2,
        title: 'Alternando entre Claude Design e Claude Code',
        xp: 20,
        content: {
            emoji: '🔄',
            subtitle: 'Trabalho sincronizado entre as duas ferramentas',
            sections: [
                { title: 'Sincronização', content: 'Você pode alternar entre Claude Design e Claude Code mantendo seu trabalho em sincronia. Use /design-sync para importar seu sistema de design, e tudo que construir em Claude Design começa com seus componentes existentes.' },
                { title: 'Quando alternar', content: 'Quando um design está pronto para virar software, entregue ao Claude Code — que continua a partir do seu trabalho existente em vez de começar do zero a partir de uma screenshot.' },
                { title: 'Conectando pelo terminal', content: 'Se preferir trabalhar no Claude Code, conecte o servidor Claude Design MCP:\n\n<code>claude mcp add --scope user --transport http claude-design https://api.anthropic.com/v1/design/mcp</code>\n\nDepois rode /design-login para autenticar.' }
            ]
        },
        exercises: [
            { question: 'Para que serve /design-sync?', options: ['Apagar designs', 'Importar o sistema de design para Claude Design', 'Compartilhar no Slack', 'Exportar PDF'], correct: 1, hint: 'Sincroniza com seu design system.' },
            { question: 'Quando passar do Design para o Code?', options: ['Nunca', 'Quando o design está pronto para virar software', 'No início', 'Só no final do projeto'], correct: 1, hint: 'Continua o trabalho existente.' }
        ]
    },
    {
        id: 'ds2-2',
        track: 'claude-design',
        module: 'Nível 2: Design + Code',
        level: 2,
        title: 'Criando seu primeiro projeto',
        xp: 15,
        content: {
            emoji: '🚀',
            subtitle: 'Passo a passo',
            sections: [
                { title: 'Passo 1 — Crie o projeto', content: 'Ao criar, o projeto herda automaticamente o sistema de design da sua organização. Não precisa subir ativos de marca nem configurar nada — suas cores, fontes e componentes já estão em vigor.' },
                { title: 'Passo 2 — Anexe ou importe o sistema de design', content: 'Traga um ou mais design systems de: repositório GitHub, arquivos de design, uploads brutos, ou sua base de código local via /design-sync no Claude Code. Claude constrói com seus componentes reais e verifica a própria saída contra seu sistema de design antes de você ver.' },
                { title: 'Passo 3 — Adicione contexto', content: 'Quanto mais contexto, melhor a saída. Anexe screenshots, imagens, ativos existentes, ou vincule uma base de código para Claude entender seus componentes, arquitetura e padrões de estilo.' },
                { title: 'Passo 4 — Descreva o que quer', content: 'Você não precisa ser designer. Seja específico sobre o que está construindo, para quem é, e o que é mais importante. Claude fará perguntas esclarecedoras se precisar de mais informação.' }
            ]
        },
        exercises: [
            { question: 'Ao criar um projeto, o que já vem configurado?', options: ['Nada, você sobe tudo', 'Sistema de design da organização (cores, fontes, componentes)', 'Só fontes', 'Só cores'], correct: 1, hint: 'Herança automática.' },
            { question: 'Por que adicionar contexto (screenshots, bases de código)?', options: ['Para ocupar espaço', 'Para Claude entender padrões existentes e gerar saídas mais prontas', 'Por estética', 'Não muda nada'], correct: 1, hint: 'Mais contexto = saída mais alinhada.' }
        ]
    },

    {
        id: 'ds3-1',
        track: 'claude-design',
        module: 'Nível 3: Prompts Eficazes',
        level: 3,
        title: 'Escrevendo prompts que funcionam',
        xp: 20,
        content: {
            emoji: '✍️',
            subtitle: 'Objetivo + layout + conteúdo + público',
            sections: [
                { title: 'Anatomia de um bom prompt', content: 'Um bom prompt inclui: objetivo (o que está construindo), layout (como organizar as coisas), conteúdo (que informações exibir) e público (quem vai usar).' },
                { title: 'Exemplos que funcionam', content: '"Crie um painel mostrando receita mensal com filtros para região e linha de produtos."\n\n"Projete um fluxo de integração de aplicativo móvel com 4 telas que orienta os usuários através dos nossos recursos principais."\n\n"Crie uma página de destino para nosso novo produto de API com seção hero, exemplos de código e preços."' },
                { title: 'Mais exemplos', content: '"Crie um formulário para coletar feedback de clientes com perguntas condicionais com base na categoria."\n\n"Projete uma ferramenta interna para sua equipe de operações revisar e aprovar envios de conteúdo."' }
            ]
        },
        exercises: [
            { question: 'O que um bom prompt inclui?', options: ['Só o objetivo', 'Objetivo, layout, conteúdo e público', 'Só o público', 'Só o layout'], correct: 1, hint: 'Quatro dimensões.' },
            { question: 'Você precisa ser designer para usar Claude Design?', options: ['Sim, sempre', 'Não — seja específico sobre o que está construindo', 'Só se for design gráfico', 'Só se for UX'], correct: 1, hint: 'Claude faz perguntas se precisar.' }
        ]
    },
    {
        id: 'ds3-2',
        track: 'claude-design',
        module: 'Nível 3: Prompts Eficazes',
        level: 3,
        title: 'Refinando o design',
        xp: 20,
        content: {
            emoji: '🔁',
            subtitle: 'Chat, comentários inline e edição direta',
            sections: [
                { title: 'Chat para mudanças amplas', content: 'Use o chat para mudanças que afetam o design geral:\n\n"Torne o esquema de cores mais escuro e minimalista."\n\n"Reorganize o painel para que as métricas fiquem na linha superior e o gráfico abaixo."\n\n"Mostre-me 2–3 layouts alternativos para esta página."' },
                { title: 'Comentários inline para mudanças pontuais', content: 'Comentários inline permitem clicar em uma parte específica da tela e pedir uma mudança direcionada. É mais rápido do que descrever localização no chat.\n\n"Aumente o preenchimento deste botão."\n\n"Mude isso para um dropdown em vez de botões de opção."\n\n"Torne esta seção recolhível."\n\nNota: se seus comentários não forem capturados, cole o feedback diretamente no chat como solução alternativa.' },
                { title: 'Edição direta para ajustes visuais', content: 'Use controles de layout avançados para mudanças visuais e estéticas rápidas — arrastar, redimensionar e alinhar elementos diretamente na tela.' }
            ]
        },
        exercises: [
            { question: 'Quando usar chat em vez de comentários inline?', options: ['Sempre', 'Para mudanças amplas que afetam o design geral', 'Nunca', 'Só no início'], correct: 1, hint: 'Chat = mudanças amplas; comentários = mudanças pontuais.' },
            { question: 'Comentários inline servem para:', options: ['Mudanças estruturais', 'Mudanças direcionadas em componentes específicos', 'Apagar o projeto', 'Criar nova página'], correct: 1, hint: 'Apontar e pedir.' }
        ]
    },

    {
        id: 'ds4-1',
        track: 'claude-design',
        module: 'Nível 4: Exportar e Compartilhar',
        level: 4,
        title: 'Quando usar cada ferramenta',
        xp: 15,
        content: {
            emoji: '🎯',
            subtitle: 'Chat vs comentários vs edição direta',
            sections: [
                { title: 'Comentários inline', content: 'Use para mudanças direcionadas no nível de componente: "corrija este botão", "ajuste este espaçamento".' },
                { title: 'Chat', content: 'Use para mudanças estruturais, novas seções, ou qualquer coisa que exija explicação ou contexto. Pedir 2-3 alternativas funciona bem aqui.' },
                { title: 'Edição direta', content: 'Use para mudanças visuais e estéticas rápidas — arrastar, redimensionar, alinhar.' }
            ]
        },
        exercises: [
            { question: 'Para pedir 2-3 layouts alternativos, o que usar?', options: ['Edição direta', 'Chat', 'Comentário inline', 'Nada'], correct: 1, hint: 'Mudança estrutural.' },
            { question: 'Para arrastar um elemento na tela, o que usar?', options: ['Comentário inline', 'Edição direta', 'Chat', 'Exportar'], correct: 1, hint: 'Controle visual rápido.' }
        ]
    },
    {
        id: 'ds4-2',
        track: 'claude-design',
        module: 'Nível 4: Exportar e Compartilhar',
        level: 4,
        title: 'Exportando seu projeto',
        xp: 20,
        content: {
            emoji: '📤',
            subtitle: 'O formato certo depende do caso de uso',
            sections: [
                { title: 'Opções de exportação', content: 'Use o botão "Exportar" no canto superior direito ao visualizar seu projeto. Opções:\n\n• Baixar como .zip\n• Exportar como PDF\n• Exportar como PPTX\n• Enviar para Canva\n• Exportar como HTML independente' },
                { title: 'Integração com outras ferramentas', content: 'Envie para ferramentas que você já usa: Adobe, Base44, Canva, Gamma, Lovable, Miro, Replit, Vercel e Wix (mais destinos em breve).' },
                { title: 'Entrega para engenharia', content: 'Três opções para entrega:\n\n• Entrega para Claude Code\n• Enviar para agente de codificação local\n• Enviar para Claude Code Web' },
                { title: 'Compartilhamento interno', content: 'Você também pode compartilhar projetos dentro da sua organização usando um link compartilhável. Opções: somente visualização, comentário e edição.' }
            ]
        },
        exercises: [
            { question: 'Para apresentar para um grupo, qual formato?', options: ['HTML', 'PDF ou PPTX', 'Apenas zip', 'Compartilhar link'], correct: 1, hint: 'Apresentação = formato apresentável.' },
            { question: 'Para entregar para o time de engenharia, qual opção?', options: ['Apenas PDF', 'Entregar para Claude Code ou agente local', 'Não exportar', 'Só zip'], correct: 1, hint: 'Entrega direta para código.' }
        ]
    },
    {
        id: 'ds4-3',
        track: 'claude-design',
        module: 'Nível 4: Exportar e Compartilhar',
        level: 4,
        title: 'Versões e revisões',
        xp: 15,
        content: {
            emoji: '🗂️',
            subtitle: 'Explore direções sem perder o trabalho atual',
            sections: [
                { title: 'Como salvar versões alternativas', content: 'Se você quer explorar uma direção diferente sem perder seu trabalho atual, diga ao Claude: "Salve o que temos e tente uma abordagem completamente diferente." Claude salvará seu projeto atual e confirmará onde foi salvo.' },
                { title: 'Por que isso importa', content: 'Você pode referenciar iterações anteriores na conversa facilmente. Assim, testar uma hipótese nova não significa perder o que já estava bom.' }
            ]
        },
        exercises: [
            { question: 'O que dizer ao Claude para explorar uma direção nova sem perder o trabalho atual?', options: ['Apague tudo', '"Salve o que temos e tente uma abordagem completamente diferente"', 'Não diga nada', 'Feche o projeto'], correct: 1, hint: 'Comando explícito.' },
            { question: 'Por que salvar versões alternativas?', options: ['Para ocupar espaço', 'Para comparar direções sem perder trabalho anterior', 'Por estética', 'Não importa'], correct: 1, hint: 'Explorar sem perder.' }
        ]
    },

    {
        id: 'ds5-1',
        track: 'claude-design',
        module: 'Nível 5: Práticas Avançadas',
        level: 5,
        title: 'Dicas para melhores resultados',
        xp: 20,
        content: {
            emoji: '💡',
            subtitle: 'Oito dicas da documentação oficial',
            sections: [
                { title: '1. Importe um sistema de design completo', content: 'Inclua estilos, fontes e componentes. Quanto mais completo, melhor o resultado.' },
                { title: '2. Comece simples, depois adicione complexidade', content: 'Comece pelo layout e conteúdo principais. Depois adicione interações, casos extremos e polimento. Claude responde bem a solicitações incrementais.' },
                { title: '3. Seja específico no feedback', content: '"Isso não parece certo" é difícil de agir. "Aperte o espaçamento entre campos de formulário para 8px" dá ao Claude exatamente o que precisa.' },
                { title: '4. Faça referência ao seu sistema de design', content: 'Se sabe que existe um componente no seu design system, mencione pelo nome: "Use o componente Primary Button" ou "Aplique o padrão de layout Card."' },
                { title: '5. Pense em responsividade cedo', content: 'Mencione se seu design precisa funcionar em mobile, tablet e desktop, ou apenas em um deles.' },
                { title: '6. Peça variações', content: 'Se não tem certeza sobre uma direção, peça 2–3 opções. Comparar alternativas é mais rápido do que adivinhar.' },
                { title: '7. Peça feedback ao Claude', content: 'Claude pode revisar seu design para acessibilidade, taxas de contraste, hierarquia de informações e usabilidade geral. Trate-o como colaborador de design.' },
                { title: '8. Use Claude para explicar decisões', content: 'Você também pode pedir ao Claude para explicar suas decisões de design ou sugerir melhorias.' }
            ]
        },
        exercises: [
            { question: 'Qual é a melhor forma de dar feedback?', options: ['"Isso não parece certo"', '"Aperte o espaçamento entre campos de formulário para 8px"', '"Refaça"', '"Não gostei"'], correct: 1, hint: 'Específico > vago.' },
            { question: 'Como pedir variações de design?', options: ['Não dá', 'Pedir 2–3 opções ao Claude', 'Esperar ele adivinhar', 'Só aceitar a primeira versão'], correct: 1, hint: 'Comparar alternativas é mais rápido.' }
        ]
    },
    {
        id: 'ds5-2',
        track: 'claude-design',
        module: 'Nível 5: Práticas Avançadas',
        level: 5,
        title: 'Limitações conhecidas',
        xp: 15,
        content: {
            emoji: '⚠️',
            subtitle: 'O que ainda não funciona perfeitamente',
            sections: [
                { title: 'Persistência de comentários', content: 'Comentários inline ocasionalmente não aparecem na página, mas ainda podem ser vistos abrindo a visualização de comentários. Solução alternativa: cole o feedback diretamente no chat.' },
                { title: 'Bases de código grandes', content: 'Considere vincular repositórios muito grandes pelo Claude Code para evitar atraso ou problemas do navegador. Para sincronizar um design system, use /design-sync do Claude Code.' },
                { title: 'Erros de chat', content: 'Se você receber "chat upstream error", tente iniciar uma nova aba de chat dentro do mesmo projeto.' },
                { title: 'Disponibilidade', content: 'Claude Design está disponível apenas na web e desktop — não há versão mobile.' },
                { title: 'Edição multi-pessoa', content: 'Duas ou mais pessoas editando ao mesmo tempo ainda é básico e pode não funcionar de forma confiável.' },
                { title: 'Importação do sistema de design', content: 'A importação é tão boa quanto sua fonte. Uma base de código confusa ou arquivo incompleto aparecerá na saída.' }
            ]
        },
        exercises: [
            { question: 'Se um comentário inline não for capturado, o que fazer?', options: ['Esperar 5 minutos', 'Colar o feedback diretamente no chat', 'Apagar o projeto', 'Reinstalar'], correct: 1, hint: 'Solução alternativa documentada.' },
            { question: 'Claude Design tem versão mobile?', options: ['Sim, completa', 'Sim, mas limitada', 'Não — apenas web e desktop', 'Só iOS'], correct: 2, hint: 'Web e desktop.' }
        ]
    }
];

export function getLessonById(id) {
    return lessons.find((l) => l.id === id);
}

export function getModules(trackId) {
    const trackLessons = trackId ? lessons.filter((l) => (l.track || 'claude-code') === trackId) : lessons;
    const moduleOrder = [
        'Nível 1: Sobrevivência',
        'Nível 1: Operação do Dia a Dia',
        'Nível 1: Primeiros Passos',
        'Nível 1: Apresentações com Claude',
        'Nível 2: Produtividade Básica',
        'Nível 2: Comunicação',
        'Nível 2: Slides e Pitch',
        'Nível 2: Design + Code',
        'Nível 3: Código com Qualidade',
        'Nível 3: Decisões com IA',
        'Nível 3: Pesquisa e fluxo',
        'Nível 3: Revisão e Direção',
        'Nível 3: Direção e revisão',
        'Nível 3: Prompts Eficazes',
        'Nível 4: Escala',
        'Nível 2: Skills, MCP e Integrações',
        'Nível 3: Decisão e Negociação',
        'Nível 4: Exportar e Compartilhar',
        'Nível 5: Práticas Avançadas',
        'Nível 5: Especialista'
    ];
    const modules = [...new Set(trackLessons.map((l) => l.module))];
    return modules
        .sort((a, b) => {
            const idxA = moduleOrder.indexOf(a);
            const idxB = moduleOrder.indexOf(b);
            if (idxA === -1) return 1;
            if (idxB === -1) return -1;
            return idxA - idxB;
        })
        .map((name) => {
            const moduleLessons = trackLessons.filter((l) => l.module === name);
            return {
                name,
                lessons: moduleLessons,
                count: moduleLessons.length,
                totalXp: moduleLessons.reduce((sum, l) => sum + l.xp, 0)
            };
        });
}

export function addCustomLesson(lesson, state) {
    const newLesson = {
        id: 'custom-' + Date.now(),
        module: lesson.module,
        title: lesson.title,
        xp: 25,
        content: {
            emoji: '📝',
            subtitle: 'Sugestão',
            sections: [{ title: lesson.title, content: lesson.content }]
        },
        exercises: [
            {
                question: 'Você entendeu "' + lesson.title + '"?',
                options: ['Sim, entendi', 'Parcialmente', 'Preciso revisar', 'Não ficou claro'],
                correct: 0
            }
        ]
    };

    lessons.push(newLesson);
    if (state) {
        if (!Array.isArray(state.customLessons)) state.customLessons = [];
        state.customLessons.push(newLesson);
    }
    return newLesson;
}
