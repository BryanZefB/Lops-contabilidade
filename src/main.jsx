import React,{useId,useState}from'react'
import{createRoot}from'react-dom/client'
import{motion,useReducedMotion}from'motion/react'
import{ArrowRight,BadgeCheck,BriefcaseBusiness,Building2,Calculator,ChevronDown,CircleDollarSign,ClipboardCheck,FileCheck2,FileText,Instagram,Landmark,MapPin,Menu,MessageCircle,ReceiptText,Send,ShieldCheck,Smartphone,Users,X}from'lucide-react'
import'./styles.css'

const WA='https://wa.me/5551986001195'
const INSTAGRAM='https://www.instagram.com/lopes_contabilidade_ofc?stkn=MWYweW45ZHliNWFtOA=='
const REEL='https://www.instagram.com/reel/DaibvnrNRSs/?stkn=OXV3OXhmMG1lMmsw'
const POST='https://www.instagram.com/p/DafxJcvFodA/?stkn=MWNzdmpvZDUwaXJyNg=='
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

function BrandLogo({footer=false}){
 return <img className={footer?'siteLogo footerLogo':'siteLogo'} src="/logo-lopes.webp" alt="Lopes Contabilidade" width="520" height="315"/>
}

function Header(){
 const[open,setOpen]=useState(false)
 const menuId='menu-mobile'
 return <header className="header"><a className="skip" href="#conteudo">Pular para o conteúdo</a><div className="shell nav">
  <a href="#inicio" className="brand" aria-label="Lopes Contabilidade - início"><BrandLogo/></a>
  <nav className="navlinks" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#conteudo-instagram">Instagram</a><a href="#contato">Contato</a><a href="#faq">Dúvidas</a></nav>
  <a className="socialTop" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Lopes Contabilidade"><Instagram size={19} aria-hidden="true"/></a>
  <a className="navcta" href={link('Olá! Gostaria de falar com a Lopes Contabilidade.')} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true"/>Falar no WhatsApp</a>
  <button className="menubtn" type="button" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls={menuId} onClick={()=>setOpen(!open)}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button>
 </div><nav id={menuId} className={open?'mobile is-open':'mobile'} aria-label="Navegação móvel"><a onClick={()=>setOpen(false)} href="#sobre">Sobre</a><a onClick={()=>setOpen(false)} href="#servicos">Serviços</a><a onClick={()=>setOpen(false)} href="#conteudo-instagram">Instagram</a><a onClick={()=>setOpen(false)} href="#contato">Contato</a><a onClick={()=>setOpen(false)} href="#faq">Dúvidas</a><a className="mobileInstagram" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18} aria-hidden="true"/>Instagram</a></nav></header>
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


function InstagramEmbed({url,label}){
 const clean=url.split('?')[0].replace(/\/$/,'')
 const embedUrl=clean+'/embed/'
 return <article className="instagramCard"><div className="instagramFrame"><iframe src={embedUrl} title={label} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"/></div><a href={url} target="_blank" rel="noreferrer">{label}<ArrowRight size={15} aria-hidden="true"/></a></article>
}

function InstagramSection(){return <section className="instagramSection" id="conteudo-instagram"><div className="shell instagramGrid">
 <Reveal className="instagramCopy"><span className="label">Conteúdo da Lopes</span><h2>Acompanhe orientações contábeis também pelo Instagram.</h2><p>A empresa publica conteúdos sobre rotina fiscal, MEI, Imposto de Renda, notas fiscais e outros assuntos que fazem parte do dia a dia de quem empreende.</p><a className="instagramLink" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={19} aria-hidden="true"/>@lopes_contabilidade_ofc<ArrowRight size={16} aria-hidden="true"/></a></Reveal>
 <div className="instagramPosts"><Reveal><InstagramEmbed url={REEL} label="Ver Reel no Instagram"/></Reveal><Reveal delay={.06}><InstagramEmbed url={POST} label="Ver publicação no Instagram"/></Reveal></div>
 </div></section>}

function About(){return <section className="about" aria-labelledby="about-title"><div className="shell aboutGrid"><div className="mark" aria-hidden="true"><b>L</b><i/><i/><i/></div><Reveal><span className="label lightLabel">Lopes Contabilidade</span><h2 id="about-title">Uma marca local, com atendimento presencial e operação digital.</h2><p>A Lopes se apresenta como contabilidade em Torres - RS e informa atuação desde 2015. O posicionamento aproxima a empresa do empreendedor com orientação para a rotina do negócio.</p><div className="facts"><div><strong>2015</strong><span>início informado pela empresa</span></div><div><strong>Torres - RS</strong><span>atendimento presencial</span></div><div><strong>Digital</strong><span>atendimento remoto</span></div></div></Reveal></div></section>}

function sanitize(value,max){return value.replace(/[<>]/g,'').replace(/\s+/g,' ').trim().slice(0,max)}
function ContactForm(){
 const[error,setError]=useState('')
 const[status,setStatus]=useState('')
 function submit(e){
  e.preventDefault();setError('');setStatus('')
  const form=new FormData(e.currentTarget)
  if(form.get('website'))return
  const name=sanitize(String(form.get('name')||''),80)
  const email=sanitize(String(form.get('email')||''),120)
  const phone=sanitize(String(form.get('phone')||''),30)
  const subject=sanitize(String(form.get('subject')||''),80)
  const message=sanitize(String(form.get('message')||''),600)
  const emailOk=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  const phoneDigits=phone.replace(/\D/g,'')
  if(name.length<2){setError('Informe seu nome.');return}
  if(!emailOk){setError('Informe um e-mail válido.');return}
  if(phoneDigits.length<10||phoneDigits.length>13){setError('Informe um WhatsApp válido com DDD.');return}
  if(subject.length<3){setError('Selecione ou informe o assunto.');return}
  if(message.length<10){setError('Conte brevemente como a Lopes pode ajudar.');return}
  const last=Number(sessionStorage.getItem('lopesContactLast')||0)
  if(Date.now()-last<30000){setError('Aguarde alguns segundos antes de enviar outra solicitação.');return}
  sessionStorage.setItem('lopesContactLast',String(Date.now()))
  const body=['Olá! Vim pelo site e gostaria de solicitar contato.','','Nome: '+name,'E-mail: '+email,'WhatsApp: '+phone,'Assunto: '+subject,'Mensagem: '+message].join('\n')
  setStatus('Solicitação preparada. O WhatsApp será aberto para você confirmar o envio.')
  window.open(link(body),'_blank','noopener,noreferrer')
 }
 return <section className="contactSection" id="contato"><div className="shell contactGrid"><Reveal className="contactIntro"><span className="label">Fale com a Lopes</span><h2>Conte o que você precisa. A equipe continua a conversa com você.</h2><p>Preencha seus dados e descreva brevemente a solicitação. Ao enviar, o WhatsApp da Lopes será aberto com a mensagem pronta para confirmação.</p><div className="contactNote"><ShieldCheck size={20} aria-hidden="true"/><span>Os dados não são armazenados neste site. O envio é concluído diretamente pelo WhatsApp.</span></div></Reveal>
 <Reveal delay={.06}><form className="contactForm" onSubmit={submit} noValidate>
  <div className="formGrid">
   <label>Nome<input name="name" type="text" autoComplete="name" minLength="2" maxLength="80" required placeholder="Seu nome"/></label>
   <label>E-mail<input name="email" type="email" autoComplete="email" maxLength="120" required placeholder="voce@empresa.com.br"/></label>
   <label>WhatsApp<input name="phone" type="tel" inputMode="tel" autoComplete="tel" minLength="10" maxLength="30" required placeholder="(51) 99999-9999"/></label>
   <label>Assunto<select name="subject" required defaultValue=""><option value="" disabled>Selecione</option><option>Abertura ou migração de empresa</option><option>Contabilidade para empresa</option><option>Planejamento tributário</option><option>MEI e regularização</option><option>IRPF ou ITR</option><option>Departamento pessoal</option><option>Outro assunto</option></select></label>
  </div>
  <label>Como podemos ajudar?<textarea name="message" minLength="10" maxLength="600" required rows="5" placeholder="Conte brevemente sua necessidade."/></label>
  <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex="-1" autoComplete="off"/></label>
  <div className="formFooter"><div aria-live="polite">{error&&<p className="formError">{error}</p>}{status&&<p className="formStatus">{status}</p>}</div><button className="btn primary submitBtn" type="submit">Enviar solicitação<Send size={17} aria-hidden="true"/></button></div>
 </form></Reveal></div></section>
}

function FAQItem({q,ans,i,open,setOpen}){const uid=useId();const buttonId='faq-button-'+uid;const panelId='faq-panel-'+uid;const on=open===i;return <div className="faqItem"><h3><button id={buttonId} type="button" aria-expanded={on} aria-controls={panelId} onClick={()=>setOpen(on?-1:i)}><span>{q}</span><ChevronDown className={on?'rotated':''} size={20} aria-hidden="true"/></button></h3><div id={panelId} role="region" aria-labelledby={buttonId} hidden={!on}><p>{ans}</p></div></div>}
function FAQ(){const[a,setA]=useState(0);return <section className="faq" id="faq"><div className="shell faqGrid"><div><span className="label">Dúvidas frequentes</span><h2>Antes de falar com um contador, tire as dúvidas mais comuns.</h2><a href={link('Olá! Tenho uma dúvida sobre minha empresa.')} target="_blank" rel="noreferrer">Fazer uma pergunta<ArrowRight size={16} aria-hidden="true"/></a></div><div className="faqList">{faqs.map(([q,ans],i)=><FAQItem key={q} q={q} ans={ans} i={i} open={a} setOpen={setA}/>)}</div></div></section>}

function Footer(){return <><section className="final" aria-labelledby="final-title"><div className="shell finalInner"><div><span className="label lightLabel">Próximo passo</span><h2 id="final-title">Contabilidade boa começa com uma conversa clara.</h2><p>Conte o momento da sua empresa e fale diretamente com a Lopes Contabilidade pelo WhatsApp.</p></div><a className="btn white" href={link('Olá! Vim pelo site e quero conversar sobre minha empresa.')} target="_blank" rel="noreferrer">Iniciar conversa<ArrowRight size={18} aria-hidden="true"/></a></div></section><footer><div className="shell footerGrid"><div><BrandLogo footer/><p>Contabilidade em Torres - RS. Atendimento presencial e digital.</p></div><div><strong>Contato</strong><a href="tel:+5551986001195">(51) 98600-1195</a><a href={WA} target="_blank" rel="noreferrer">WhatsApp</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={16} aria-hidden="true"/>Instagram</a></div><div><strong>Navegação</strong><a href="#servicos">Serviços</a><a href="#conteudo-instagram">Instagram</a><a href="#contato">Contato</a><a href="#faq">Dúvidas</a></div></div><div className="shell bottom"><span>Lopes Contabilidade</span><span>Torres - Rio Grande do Sul</span></div></footer></>}

function App(){return <><Header/><main id="conteudo"><Hero/><Intro/><Comparison/><Services/><Human/><InstagramSection/><About/><ContactForm/><FAQ/></main><Footer/><a className="floating" href={link('Olá! Vim pelo site e gostaria de falar com a Lopes Contabilidade.')} target="_blank" rel="noreferrer" aria-label="Abrir conversa no WhatsApp"><MessageCircle size={23} aria-hidden="true"/></a></>}
createRoot(document.getElementById('root')).render(<App/>)
