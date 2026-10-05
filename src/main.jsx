import React,{useId,useState}from'react'
import{createRoot}from'react-dom/client'
import{motion,useReducedMotion}from'motion/react'
import{ArrowRight,BadgeCheck,BriefcaseBusiness,Building2,Calculator,ChevronDown,CircleDollarSign,ClipboardCheck,FileCheck2,FileText,Landmark,MapPin,Menu,MessageCircle,ReceiptText,ShieldCheck,Smartphone,Users,X}from'lucide-react'
import'./styles.css'

const WA='https://wa.me/5551986001195'
const LOGO='https://lh3.googleusercontent.com/aida-public/AB6AXuBn82gr0HHnk2HmoUDS7cFZ_erQhDCasxxCyJICy9fzFPh49d_fp16Yk359L30c4t-nWqnwSq7oRrVxCSRnHfYwGfkKm3oQ0Pym9cH0fkqKiTiNajyh_KwhRTb_Wp4cmKpxf4gRdt_WA8nrcDQtB42t5dP8oyaRFjTnCRHOAlpeybFuhYV9gaxtZhOBua69hRMiERblPxw4Y0AL6o-t2eTmXdqNfVGgqKlwW0YWygMzOvXbTgH6uFSZ'
const link=m=>WA+'?text='+encodeURIComponent(m)

const services=[
[Building2,'Abertura & Migração','Estruture o CNPJ com a atividade correta e faça a transição da contabilidade sem perder o controle da operação.'],
[BriefcaseBusiness,'Contabilidade para Empresas','Mantenha obrigações, documentos e números organizados para acompanhar a empresa com mais clareza.'],
[CircleDollarSign,'Planejamento Tributário','Revise enquadramento e operação para buscar eficiência fiscal dentro da legislação, com decisões baseadas no seu cenário.'],
[ReceiptText,'MEI & Regularização','Resolva emissão de nota fiscal, obrigações do MEI, regularização e mudança de enquadramento com orientação.'],
[FileText,'IRPF & ITR','Prepare declarações de Imposto de Renda Pessoa Física e ITR com organização documental e acompanhamento.'],
[Users,'Departamento Pessoal','Cuide de folha, admissões, rescisões, férias, pró-labore e rotinas do eSocial com suporte contábil.']
]

const faqs=[
['Como funciona a troca de contador?','A transição começa com uma análise do cenário atual e a organização dos documentos necessários. A equipe orienta os próximos passos e acompanha a mudança.'],
['A Lopes atende somente em Torres?','Não. O perfil informa atendimento presencial em Torres - RS e também atendimento digital.'],
['Vocês atendem MEI?','Sim. A comunicação da empresa aborda emissão de nota fiscal, obrigações do MEI e regularização.'],
['Também fazem Imposto de Renda e ITR?','Sim. Esses serviços aparecem no material-base e nos conteúdos publicados pela Lopes.']
]

function Reveal({children,className='',delay=0}){
 const reduce=useReducedMotion()
 if(reduce)return <div className={className}>{children}</div>
 return <motion.div className={className} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.5,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}

function Header(){
 const[open,setOpen]=useState(false)
 const menuId='menu-mobile'
 return <header className="header"><a className="skip" href="#conteudo">Pular para o conteúdo</a><div className="shell nav">
  <a href="#inicio" className="brand" aria-label="Lopes Contabilidade - início"><img src={LOGO} alt="Lopes Contabilidade" width="150" height="48"/></a>
  <nav className="navlinks" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#diferenciais">Diferenciais</a><a href="#faq">Dúvidas</a></nav>
  <a className="navcta" href={link('Olá! Gostaria de falar com a Lopes Contabilidade.')} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true"/>Falar no WhatsApp</a>
  <button className="menubtn" type="button" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls={menuId} onClick={()=>setOpen(!open)}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button>
 </div><nav id={menuId} className={open?'mobile is-open':'mobile'} aria-label="Navegação móvel"><a onClick={()=>setOpen(false)} href="#sobre">Sobre</a><a onClick={()=>setOpen(false)} href="#servicos">Serviços</a><a onClick={()=>setOpen(false)} href="#diferenciais">Diferenciais</a><a onClick={()=>setOpen(false)} href="#faq">Dúvidas</a></nav></header>
}

function Hero(){
 const reduce=useReducedMotion()
 const anim=reduce?{}:{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.55,ease:[.22,1,.36,1]}}
 return <section className="hero" id="inicio"><div className="shell heroGrid">
 <motion.div className="heroCopy" {...anim}><div className="eyebrow"><MapPin size={15} aria-hidden="true"/>Torres - RS<span aria-hidden="true"/>Presencial & Digital</div><h1>Contabilidade para quem quer <em>decidir melhor</em> e crescer com organização.</h1><p>Desde 2015 cuidando do CNPJ de empresas e empreendedores com orientação contábil, fiscal e trabalhista em uma linguagem clara para quem está à frente do negócio.</p>
 <div className="actions"><a className="btn primary" href={link('Olá! Quero conversar com a Lopes Contabilidade sobre minha empresa.')} target="_blank" rel="noreferrer">Conversar com a equipe<ArrowRight size={18} aria-hidden="true"/></a><a className="btn ghost" href="#servicos">Conhecer os serviços</a></div>
 <div className="proof"><div><BadgeCheck size={19} aria-hidden="true"/><span><strong>Desde 2015</strong> cuidando do seu CNPJ</span></div><div><Smartphone size={19} aria-hidden="true"/><span><strong>Atendimento direto</strong> pelo WhatsApp</span></div></div></motion.div>
 <motion.aside className="heroPanel" aria-label="Como a Lopes trabalha" {...(reduce?{}:{initial:{opacity:0,y:26},animate:{opacity:1,y:0},transition:{duration:.65,delay:.08,ease:[.22,1,.36,1]}})}><span className="kicker">Visão do negócio</span><h2>O contador não precisa aparecer só na hora da guia.</h2><p>Uma contabilidade próxima ajuda a organizar informações, acompanhar obrigações e trazer mais segurança para decisões do dia a dia.</p><div className="panelList"><div><ClipboardCheck size={18} aria-hidden="true"/>Rotina fiscal organizada</div><div><Calculator size={18} aria-hidden="true"/>Análise tributária</div><div><ShieldCheck size={18} aria-hidden="true"/>Orientação para evitar riscos</div></div><a href={link('Olá! Gostaria de entender como a Lopes pode ajudar minha empresa.')} target="_blank" rel="noreferrer">Quero entender meu cenário<ArrowRight size={16} aria-hidden="true"/></a></motion.aside>
 </div></section>
}

function Intro(){return <section className="intro" id="sobre"><div className="shell introGrid"><span className="label">Contabilidade com contexto</span><div><h2>Seu negócio muda. A contabilidade precisa acompanhar o ritmo.</h2><p>Mais do que cumprir obrigações, a proposta é dar suporte para que o empresário compreenda melhor impostos, caixa, notas fiscais, pessoas e próximos passos.</p></div><div className="location"><Landmark size={22} aria-hidden="true"/><p><strong>Torres - RS</strong><br/>Atendimento presencial e digital.</p></div></div></section>}

function Comparison(){return <section className="comparison" id="diferenciais"><div className="shell compareGrid"><Reveal><span className="label">De reativo para estratégico</span><h2>O problema nem sempre é pagar imposto. É pagar sem entender o porquê.</h2><p>Uma rotina contábil bem acompanhada ajuda a reduzir ruídos, antecipar pendências e tomar decisões com mais contexto.</p></Reveal><Reveal delay={.08}><div className="compareBox"><div className="row muted"><b>Quando falta acompanhamento</b><span>Informação chega tarde</span></div><div className="row"><b>Com orientação próxima</b><span>Decisão ganha contexto</span></div><div className="row"><b>Com rotina organizada</b><span>Obrigações ficam visíveis</span></div><div className="row"><b>Com análise tributária</b><span>Escolhas ficam mais conscientes</span></div></div></Reveal></div></section>}

function Services(){return <section className="services" id="servicos"><div className="shell"><div className="sectionHead"><span className="label">Serviços</span><h2>Do primeiro CNPJ à rotina de uma empresa em operação.</h2><p>Serviços destacados no material-base e nos conteúdos publicados pela Lopes.</p></div><div className="serviceGrid">{services.map(([Icon,title,text],i)=><Reveal key={title} delay={Math.min(i*.04,.16)}><article className="service"><span className="index">0{i+1}</span><Icon className="serviceIcon" size={24} strokeWidth={1.8} aria-hidden="true"/><h3>{title}</h3><p>{text}</p><a href={link('Olá! Quero saber mais sobre '+title+'.')} target="_blank" rel="noreferrer">Falar sobre este serviço<ArrowRight size={15} aria-hidden="true"/></a></article></Reveal>)}</div></div></section>}

function Human(){return <section className="human" aria-labelledby="human-title"><div className="shell humanGrid"><Reveal className="humanCard dark"><MessageCircle size={28} aria-hidden="true"/><div><span>Proximidade</span><h2 id="human-title">WhatsApp como canal de conversa, não como fila de protocolo.</h2><p>A comunicação da empresa reforça atendimento humano e contato direto com a equipe.</p></div></Reveal><Reveal className="humanCard light" delay={.06}><FileCheck2 size={28} aria-hidden="true"/><div><span>Organização</span><h3>Conteúdo técnico traduzido para decisões práticas.</h3><p>IR, MEI, notas fiscais, obrigações e tributação aparecem com linguagem acessível e direta.</p></div></Reveal></div></section>}

function About(){return <section className="about" aria-labelledby="about-title"><div className="shell aboutGrid"><div className="mark" aria-hidden="true"><b>L</b><i/><i/><i/></div><Reveal><span className="label lightLabel">Lopes Contabilidade</span><h2 id="about-title">Uma marca local, com atendimento presencial e operação digital.</h2><p>A Lopes se apresenta como contabilidade em Torres - RS e informa atuação desde 2015. O posicionamento aproxima a empresa do empreendedor com orientação para a rotina do negócio.</p><div className="facts"><div><strong>2015</strong><span>início informado pela empresa</span></div><div><strong>Torres - RS</strong><span>atendimento presencial</span></div><div><strong>Digital</strong><span>atendimento remoto</span></div></div></Reveal></div></section>}

function FAQItem({q,ans,i,open,setOpen}){const uid=useId();const buttonId='faq-button-'+uid;const panelId='faq-panel-'+uid;const on=open===i;return <div className="faqItem"><h3><button id={buttonId} type="button" aria-expanded={on} aria-controls={panelId} onClick={()=>setOpen(on?-1:i)}><span>{q}</span><ChevronDown className={on?'rotated':''} size={20} aria-hidden="true"/></button></h3><div id={panelId} role="region" aria-labelledby={buttonId} hidden={!on}><p>{ans}</p></div></div>}

function FAQ(){const[a,setA]=useState(0);return <section className="faq" id="faq"><div className="shell faqGrid"><div><span className="label">Dúvidas frequentes</span><h2>Antes de falar com um contador, tire as dúvidas mais comuns.</h2><a href={link('Olá! Tenho uma dúvida sobre minha empresa.')} target="_blank" rel="noreferrer">Fazer uma pergunta<ArrowRight size={16} aria-hidden="true"/></a></div><div className="faqList">{faqs.map(([q,ans],i)=><FAQItem key={q} q={q} ans={ans} i={i} open={a} setOpen={setA}/>)}</div></div></section>}

function Footer(){return <><section className="final" aria-labelledby="final-title"><div className="shell finalInner"><div><span className="label lightLabel">Próximo passo</span><h2 id="final-title">Contabilidade boa começa com uma conversa clara.</h2><p>Conte o momento da sua empresa e fale diretamente com a Lopes Contabilidade pelo WhatsApp.</p></div><a className="btn white" href={link('Olá! Vim pelo site e quero conversar sobre minha empresa.')} target="_blank" rel="noreferrer">Iniciar conversa<ArrowRight size={18} aria-hidden="true"/></a></div></section><footer><div className="shell footerGrid"><div><img src={LOGO} alt="Lopes Contabilidade" width="138" height="45"/><p>Contabilidade em Torres - RS. Atendimento presencial e digital.</p></div><div><strong>Contato</strong><a href="tel:+5551986001195">(51) 98600-1195</a><a href={WA} target="_blank" rel="noreferrer">WhatsApp</a></div><div><strong>Navegação</strong><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#faq">Dúvidas</a></div></div><div className="shell bottom"><span>Lopes Contabilidade</span><span>Torres - Rio Grande do Sul</span></div></footer></>}

function App(){return <><Header/><main id="conteudo"><Hero/><Intro/><Comparison/><Services/><Human/><About/><FAQ/></main><Footer/><a className="floating" href={link('Olá! Vim pelo site e gostaria de falar com a Lopes Contabilidade.')} target="_blank" rel="noreferrer" aria-label="Abrir conversa no WhatsApp"><MessageCircle size={23} aria-hidden="true"/></a></>}
createRoot(document.getElementById('root')).render(<App/>)
