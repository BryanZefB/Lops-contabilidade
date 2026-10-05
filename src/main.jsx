import React,{useState}from'react'
import{createRoot}from'react-dom/client'
import{ArrowRight,BadgeCheck,BriefcaseBusiness,Building2,Calculator,ChevronDown,CircleDollarSign,ClipboardCheck,FileCheck2,FileText,Landmark,MapPin,Menu,MessageCircle,ReceiptText,ShieldCheck,Smartphone,Users,X}from'lucide-react'
import'./styles.css'

const WA='https://wa.me/5551986001195'
const LOGO='https://lh3.googleusercontent.com/aida-public/AB6AXuBn82gr0HHnk2HmoUDS7cFZ_erQhDCasxxCyJICy9fzFPh49d_fp16Yk359L30c4t-nWqnwSq7oRrVxCSRnHfYwGfkKm3oQ0Pym9cH0fkqKiTiNajyh_KwhRTb_Wp4cmKpxf4gRdt_WA8nrcDQtB42t5dP8oyaRFjTnCRHOAlpeybFuhYV9gaxtZhOBua69hRMiERblPxw4Y0AL6o-t2eTmXdqNfVGgqKlwW0YWygMzOvXbTgH6uFSZ'
const link=m=>WA+'?text='+encodeURIComponent(m)

const services=[
[Building2,'Abertura & Migração','Apoio na abertura do CNPJ, enquadramento da atividade e transição da contabilidade de forma organizada.'],
[BriefcaseBusiness,'Contabilidade para Empresas','Rotina contábil e fiscal para empresas que precisam acompanhar obrigações, documentos e números com clareza.'],
[CircleDollarSign,'Planejamento Tributário','Análise do regime tributário e da operação para buscar eficiência fiscal dentro da legislação.'],
[ReceiptText,'MEI & Regularização','Orientação para emissão de nota fiscal, obrigações do MEI, regularização e mudança de enquadramento.'],
[FileText,'IRPF & ITR','Atendimento para declaração de Imposto de Renda Pessoa Física e Imposto sobre a Propriedade Territorial Rural.'],
[Users,'Departamento Pessoal','Suporte em folha, admissões, rescisões, férias, pró-labore e rotinas relacionadas ao eSocial.']
]
const faqs=[
['Como funciona a troca de contador?','A transição começa com uma análise do cenário atual e a organização dos documentos necessários. A equipe orienta os próximos passos e acompanha a mudança.'],
['A Lopes atende somente em Torres?','Não. O perfil informa atendimento presencial em Torres - RS e também atendimento digital.'],
['Vocês atendem MEI?','Sim. A comunicação da empresa aborda emissão de nota fiscal, obrigações do MEI e regularização.'],
['Também fazem Imposto de Renda e ITR?','Sim. Esses serviços aparecem no material-base e nos conteúdos publicados pela Lopes.']
]

function Header(){
 const[open,setOpen]=useState(false)
 return <header className="header"><a className="skip" href="#conteudo">Pular para o conteúdo</a><div className="shell nav">
  <a href="#inicio" className="brand" aria-label="Lopes Contabilidade - início"><img src={LOGO} alt="Lopes Contabilidade" width="150" height="48"/></a>
  <nav className="navlinks" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#diferenciais">Diferenciais</a><a href="#faq">Dúvidas</a></nav>
  <a className="navcta" href={link('Olá! Gostaria de falar com a Lopes Contabilidade.')} target="_blank" rel="noreferrer"><MessageCircle size={18}/>Falar no WhatsApp</a>
  <button className="menubtn" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav className="mobile" aria-label="Navegação móvel"><a onClick={()=>setOpen(false)} href="#sobre">Sobre</a><a onClick={()=>setOpen(false)} href="#servicos">Serviços</a><a onClick={()=>setOpen(false)} href="#diferenciais">Diferenciais</a><a onClick={()=>setOpen(false)} href="#faq">Dúvidas</a></nav>}</header>
}

function Hero(){return <section className="hero" id="inicio"><div className="shell heroGrid">
 <div className="heroCopy"><div className="eyebrow"><MapPin size={15}/>Torres - RS<span/>Presencial & Digital</div><h1>Contabilidade para quem quer <em>decidir melhor</em> e crescer com organização.</h1><p>Desde 2015 cuidando do CNPJ de empresas e empreendedores com orientação contábil, fiscal e trabalhista em uma linguagem clara para quem está à frente do negócio.</p>
 <div className="actions"><a className="btn primary" href={link('Olá! Quero conversar com a Lopes Contabilidade sobre minha empresa.')} target="_blank" rel="noreferrer">Conversar com a equipe<ArrowRight size={18}/></a><a className="btn ghost" href="#servicos">Conhecer os serviços</a></div>
 <div className="proof"><div><BadgeCheck size={19}/><span><strong>Desde 2015</strong> cuidando do seu CNPJ</span></div><div><Smartphone size={19}/><span><strong>Atendimento direto</strong> pelo WhatsApp</span></div></div></div>
 <aside className="heroPanel"><span className="kicker">Visão do negócio</span><h2>O contador não precisa aparecer só na hora da guia.</h2><p>Uma contabilidade próxima ajuda a organizar informações, acompanhar obrigações e trazer mais segurança para decisões do dia a dia.</p><div className="panelList"><div><ClipboardCheck size={18}/>Rotina fiscal organizada</div><div><Calculator size={18}/>Análise tributária</div><div><ShieldCheck size={18}/>Orientação para evitar riscos</div></div><a href={link('Olá! Gostaria de entender como a Lopes pode ajudar minha empresa.')} target="_blank" rel="noreferrer">Quero entender meu cenário<ArrowRight size={16}/></a></aside>
 </div></section>}

function Intro(){return <section className="intro" id="sobre"><div className="shell introGrid"><span className="label">CONTABILIDADE COM CONTEXTO</span><div><h2>Seu negócio muda. A contabilidade precisa acompanhar o ritmo.</h2><p>Mais do que cumprir obrigações, a proposta é dar suporte para que o empresário compreenda melhor impostos, caixa, notas fiscais, pessoas e próximos passos.</p></div><div className="location"><Landmark size={22}/><p><strong>Torres - RS</strong><br/>Atendimento presencial e digital.</p></div></div></section>}

function Comparison(){return <section className="comparison" id="diferenciais"><div className="shell compareGrid"><div><span className="label">DE REATIVO PARA ESTRATÉGICO</span><h2>O problema nem sempre é pagar imposto. É pagar sem entender o porquê.</h2><p>Uma rotina contábil bem acompanhada ajuda a reduzir ruídos, antecipar pendências e tomar decisões com mais contexto.</p></div><div className="compareBox"><div className="row muted"><b>Quando falta acompanhamento</b><span>Informação chega tarde</span></div><div className="row"><b>Com orientação próxima</b><span>Decisão ganha contexto</span></div><div className="row"><b>Com rotina organizada</b><span>Obrigações ficam visíveis</span></div><div className="row"><b>Com análise tributária</b><span>Escolhas ficam mais conscientes</span></div></div></div></section>}

function Services(){return <section className="services" id="servicos"><div className="shell"><div className="sectionHead"><span className="label">SERVIÇOS</span><h2>Do primeiro CNPJ à rotina de uma empresa em operação.</h2><p>Serviços destacados no material-base e nos conteúdos publicados pela Lopes.</p></div><div className="serviceGrid">{services.map(([Icon,title,text],i)=><article className="service" key={title}><span className="index">0{i+1}</span><span className="icon"><Icon size={21}/></span><h3>{title}</h3><p>{text}</p><a href={link('Olá! Quero saber mais sobre '+title+'.')} target="_blank" rel="noreferrer">Falar sobre este serviço<ArrowRight size={15}/></a></article>)}</div></div></section>}

function Human(){return <section className="human"><div className="shell humanGrid"><article className="humanCard dark"><MessageCircle size={28}/><div><span>PROXIMIDADE</span><h3>WhatsApp como canal de conversa, não como fila de protocolo.</h3><p>A comunicação da empresa reforça atendimento humano e contato direto com a equipe.</p></div></article><article className="humanCard light"><FileCheck2 size={28}/><div><span>ORGANIZAÇÃO</span><h3>Conteúdo técnico traduzido para decisões práticas.</h3><p>IR, MEI, notas fiscais, obrigações e tributação aparecem com linguagem acessível e direta.</p></div></article></div></section>}

function About(){return <section className="about"><div className="shell aboutGrid"><div className="mark" aria-hidden="true"><b>L</b><i/><i/><i/></div><div><span className="label lightLabel">LOPES CONTABILIDADE</span><h2>Uma marca local, com atendimento presencial e operação digital.</h2><p>A Lopes se apresenta como contabilidade em Torres - RS e informa atuação desde 2015. O posicionamento aproxima a empresa do empreendedor com orientação para a rotina do negócio.</p><div className="facts"><div><strong>2015</strong><span>início informado pela empresa</span></div><div><strong>Torres - RS</strong><span>atendimento presencial</span></div><div><strong>Digital</strong><span>atendimento remoto</span></div></div></div></div></section>}

function FAQ(){const[a,setA]=useState(0);return <section className="faq" id="faq"><div className="shell faqGrid"><div><span className="label">DÚVIDAS FREQUENTES</span><h2>Antes de falar com um contador, tire as dúvidas mais comuns.</h2><a href={link('Olá! Tenho uma dúvida sobre minha empresa.')} target="_blank" rel="noreferrer">Fazer uma pergunta<ArrowRight size={16}/></a></div><div className="faqList">{faqs.map(([q,ans],i)=>{const on=a===i;return <div className="faqItem" key={q}><button aria-expanded={on} onClick={()=>setA(on?-1:i)}><span>{q}</span><ChevronDown className={on?'rotated':''} size={20}/></button>{on&&<p>{ans}</p>}</div>})}</div></div></section>}

function Footer(){return <><section className="final"><div className="shell finalInner"><div><span className="label lightLabel">PRÓXIMO PASSO</span><h2>Contabilidade boa começa com uma conversa clara.</h2><p>Conte o momento da sua empresa e fale diretamente com a Lopes Contabilidade pelo WhatsApp.</p></div><a className="btn white" href={link('Olá! Vim pelo site e quero conversar sobre minha empresa.')} target="_blank" rel="noreferrer">Iniciar conversa<ArrowRight size={18}/></a></div></section><footer><div className="shell footerGrid"><div><img src={LOGO} alt="Lopes Contabilidade" width="138" height="45"/><p>Contabilidade em Torres - RS. Atendimento presencial e digital.</p></div><div><b>Contato</b><a href="tel:+5551986001195">(51) 98600-1195</a><a href={WA} target="_blank" rel="noreferrer">WhatsApp</a></div><div><b>Navegação</b><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#faq">Dúvidas</a></div></div><div className="shell bottom"><span>Lopes Contabilidade</span><span>Torres - Rio Grande do Sul</span></div></footer></>}

function App(){return <><Header/><main id="conteudo"><Hero/><Intro/><Comparison/><Services/><Human/><About/><FAQ/></main><Footer/><a className="floating" href={link('Olá! Vim pelo site e gostaria de falar com a Lopes Contabilidade.')} target="_blank" rel="noreferrer" aria-label="Abrir conversa no WhatsApp"><MessageCircle size={23}/></a></>}
createRoot(document.getElementById('root')).render(<App/>)
