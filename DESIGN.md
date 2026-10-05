# DESIGN.md — Lopes Contabilidade

## Status

Fonte única de verdade visual do projeto. Toda nova interface, componente, seção ou alteração de estilo deve seguir este arquivo.

## 1. Direção estética

**Editorial / Swiss financeiro, com calor local.**

A interface deve parecer um projeto editorial corporativo desenhado para um escritório contábil real de Torres - RS: tipografia forte, composição assimétrica, muito espaço negativo, linhas finas, blocos de informação com hierarquia clara e poucos elementos decorativos.

Evitar aparência de template SaaS, dashboards fictícios, hero genérico centralizado, bento grids previsíveis e excesso de cards.

## 2. Princípios da marca

- Clareza antes de ornamentação.
- Confiança sem parecer banco tradicional.
- Proximidade humana sem informalidade excessiva.
- Azul como assinatura institucional, não como efeito.
- Conteúdo real acima de métricas inventadas.
- Uma ideia focal por seção.
- Menos componentes, mais composição.

## 3. Paleta

Máximo de 3 matizes principais.

### Neutro dominante — 60%

- `--ink: #082B3C` — títulos, footer, áreas institucionais escuras; azul-petróleo presente na marca.
- `--muted: #5B6870` — texto secundário.
- `--paper: #FFFFFF` — fundo principal.
- `--paper: #FAFAF7` — alternância de seções.
- `--line: #DDE3E4` — divisores e bordas sutis.

### Azul institucional — 30%

- `--blue-dark: #003CAE`
- `--blue: #064ACB`
- `--brand-100: #EAF2FD`

### Accent funcional — 10%

- `--whatsapp: #14794D` — somente WhatsApp, estados de confirmação e ações claramente positivas.
- Não usar como cor decorativa.

### Regras

- **Sem gradientes.**
- Não usar roxo, violeta ou cyan como linguagem visual.
- Cor de destaque deve sempre ter função de hierarquia, estado ou ação.

## 4. Tipografia

### Display

**Sora**

- H1: 43–66px conforme largura do desktop / 35–50px mobile
- weight: 600–700
- line-height: 0.98–1.05
- tracking: -0.045em a -0.055em

### Body

**DM Sans**

- Body: 16–18px
- line-height: 1.6–1.75
- weight: 400–500

### UI / Labels

- 11–14px
- uppercase somente em labels curtos
- tracking: 0.08em–0.14em
- weight: 600–700

### Proibições

- Não usar Inter, Roboto, Open Sans, Arial, system-ui ou Geist.
- Não usar a mesma família para títulos e corpo.
- Não exagerar em bold; contraste deve vir de escala e espaço também.

## 5. Shape language

- Radius base: 4–8px.
- Fotografias com cantos discretos; não enquadrar o hero em um card.
- Evitar rounded-xl em todos os componentes.
- Sem glassmorphism.
- Sombras raras e discretas; preferir bordas e contraste tonal.
- Divisores de 1px com `--line`.
- Nenhuma textura artificial sem função.

## 6. Grid e hierarquia espacial

- Base de spacing: múltiplos de 4px.
- Seções: 72–104px vertical desktop; 56–72px mobile.
- Container máximo: 1180px.
- Composição preferida: 12 colunas no desktop, mas com proporções assimétricas.
- Evitar 3 colunas iguais quando não houver razão editorial.
- Uma âncora visual por seção.
- Conteúdo nunca deve parecer “centralizado por padrão”.

## 7. Botões e links

- Botão primário: fundo `--blue`, texto branco.
- Botão institucional escuro: `--ink`.
- WhatsApp: `--whatsapp` apenas onde a natureza do canal precisa ser reconhecida.
- Botões: 44px+ de altura.
- Focus visível obrigatório.
- Links de serviço podem ser textuais com seta; não transformar toda ação em botão cheio.

## 8. Ícones

- Sistema principal: **Lucide** ou **Phosphor**.
- Sem emojis.
- Não usar ícones em quadrados coloridos genéricos.
- Ícone deve reforçar função ou assunto.
- Stroke consistente por seção.
- Evitar Rocket, Sparkles, Zap e outros símbolos SaaS genéricos.

## 9. Imagens

- Priorizar fotos reais da equipe, escritório e atendimento.
- Não usar stock genérico.
- A ilustração já usada na abertura pode ter uma variante sem textos, identificada como imagem ilustrativa. Nunca apresentá-la como foto do escritório ou da equipe.
- Sempre definir width/height ou aspect-ratio.
- Usar `loading="lazy"` fora do hero quando aplicável.
- Em seções institucionais, usar fotos reais publicadas pela empresa; não inventar profissionais, nomes ou cargos.

## 10. Motion

- Somente quando houver propósito de hierarquia, feedback ou narrativa.
- Preferir transform + opacity.
- Respeitar `prefers-reduced-motion`.
- Sem animações decorativas automáticas.
- Para UI: Motion.
- Para storytelling de marketing, somente se realmente necessário: GSAP + ScrollTrigger.
- Nada de orbs flutuantes, cursor trails, partículas ou loops sem função.

## 11. Componentes

- Não usar componentes default do shadcn/ui.
- Se um primitive externo for necessário, preferir Radix/Headless/Ark com estilo próprio.
- Se shadcn for usado excepcionalmente, precisa ser profundamente reestilizado segundo este DESIGN.md.
- Evitar wrappers genéricos e abstrações prematuras.
- Componentes devem existir por função, não por estética de biblioteca.

## 12. Conteúdo e dados

- Nenhum número inventado.
- Nenhum depoimento inventado.
- Nenhuma taxa, percentual, prazo ou economia sem fonte confirmada.
- Dados hoje confirmados para uso:
  - Lopes Contabilidade
  - Torres - RS
  - Atendimento presencial e digital
  - Desde 2015
  - WhatsApp: (51) 98600-1195
- Antes de publicar CRC, endereço, quantidade de clientes, avaliações, nota Google ou tempo adicional de mercado, confirmar a fonte.

## 13. Padrões de landing page

### Hero

- Assimétrico.
- Headline específica e curta.
- 1 CTA principal + 1 secundário no máximo.
- Sem dashboard fictício.
- Sem métricas inventadas.
- Sem faixa de badges “AI template”.

### Serviços

- Hierarquia editorial.
- Não usar 6 cards idênticos se houver alternativa de composição.
- Descrever problema + solução, não apenas nome técnico.

### Prova social

- Só usar avaliações reais e identificáveis.
- Sem avatares fake.
- Sem estrelas ou notas sem fonte.

### CTA final

- Uma mensagem específica.
- Um único foco de ação.
- Sem urgência falsa.

## 14. Acessibilidade

- Contraste mínimo 4.5:1.
- HTML semântico.
- Navegação por teclado.
- Focus visível.
- `aria-label` em controles sem texto.
- Hierarquia de headings correta.
- Reduced motion obrigatório.
- Áreas de toque de no mínimo 44x44px.

## 15. Responsividade

Testar visualmente em:

- 320px
- 375px
- 414px
- 768px
- 1024px+
  Zero overflow horizontal.

## 16. Performance

- Zero JS para o que CSS resolve.
- Fontes com `display=swap`.
- Imagens otimizadas.
- Evitar dependências pesadas sem justificativa.
- Lazy load fora do conteúdo crítico.

## 17. Anti-slop checklist

Antes de finalizar qualquer seção, perguntar:

- Isso parece com dezenas de landing pages geradas por IA?
- Há cards demais?
- Há radius demais?
- Existe simetria por hábito em vez de intenção?
- O texto está genérico?
- Algum número foi inventado?
- Há animação sem função?
- O ícone é genérico ou decorativo?
- O layout poderia pertencer a qualquer SaaS?

Se a resposta for “sim” para qualquer item, refazer antes de considerar pronto.
