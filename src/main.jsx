import React, { useEffect, useId, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  X,
} from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { INSTAGRAM, POST, REEL, services, whatsappLink } from "./content";
import "./styles.css";

const navigation = [
  ["Serviços", "#servicos"],
  ["A Lopes", "#sobre"],
  ["Como funciona", "#atendimento"],
  ["Contato", "#contato"],
];

function BrandLogo({ footer = false }) {
  return (
    <svg
      className={`brandLogo${footer ? " brandLogoFooter" : ""}`}
      viewBox="110 185 1495 640"
      role="img"
      aria-label="Lopes Contabilidade"
    >
      <image href="/logo-lopes.webp" width="1672" height="941" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);
  return (
    <header className="header">
      <a className="skipLink" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="shell headerInner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Lopes Contabilidade — início"
          onClick={() => setOpen(false)}
        >
          <BrandLogo />
        </a>
        <nav className="desktopNav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="headerContact"
          href={whatsappLink(
            "Olá! Vim pelo site e gostaria de falar com a Lopes Contabilidade.",
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} aria-hidden="true" />
          <span>Fale com a Lopes</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          className="menuButton"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>
      <nav
        id={menuId}
        className="mobileNav"
        aria-label="Navegação móvel"
        hidden={!open}
      >
        <div className="shell">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a
            href={whatsappLink(
              "Olá! Gostaria de conversar com a Lopes Contabilidade.",
            )}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Conversar pelo WhatsApp
            <MessageCircle size={18} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="shell heroInner">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="locationDot" aria-hidden="true" />
            Torres, RS · Presencial e digital
          </p>
          <h1 id="hero-title">
            Contabilidade próxima.
            <br />
            <span>Mais clareza</span> para sua empresa.
          </h1>
          <p className="heroDescription">
            Cuidamos da rotina contábil, fiscal e trabalhista para você
            acompanhar seu negócio com mais segurança.
          </p>
          <div className="heroActions">
            <a
              className="button buttonPrimary"
              href={whatsappLink(
                "Olá! Quero conhecer os serviços da Lopes Contabilidade para minha empresa.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Falar com a Lopes
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="textLink" href="#servicos">
              Conhecer os serviços
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="heroNote">
            <Check size={16} aria-hidden="true" />
            Desde 2015, ao lado de quem empreende.
          </p>
        </div>
      </div>
      <span className="artworkCaption">Imagem ilustrativa</span>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="trustStrip">
      <div className="shell trustInner">
        <p>
          Seu negócio merece
          <br />
          <strong>acompanhamento de perto.</strong>
        </p>
        <div>
          <span>Desde</span>
          <strong>2015</strong>
        </div>
        <div>
          <span>Estamos em</span>
          <strong>Torres, RS</strong>
        </div>
        <div>
          <span>Atendimento</span>
          <strong>Presencial e digital</strong>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section
      className="section services"
      id="servicos"
      aria-labelledby="services-title"
    >
      <div className="shell">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2 id="services-title">
              O suporte certo para
              <br />
              cada etapa.
            </h2>
          </div>
          <p>
            Da abertura do CNPJ às decisões de uma empresa em operação. Encontre
            o serviço que faz sentido para o seu momento.
          </p>
        </div>
        <div className="serviceList">
          {services.map((service, index) => (
            <article className="serviceRow" key={service.name}>
              <span className="serviceNumber" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="serviceTitle">
                <h3>{service.title}</h3>
                <span>{service.name}</span>
              </div>
              <p>{service.description}</p>
              <a
                className="serviceAction"
                href={whatsappLink(
                  `Olá! Quero saber mais sobre ${service.name}.`,
                )}
                target="_blank"
                rel="noreferrer"
                aria-label={`Conversar sobre ${service.name}`}
              >
                <ArrowUpRight size={23} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="shell aboutGrid">
        <figure className="teamPhoto">
          <img
            src="/equipe-lopes.webp"
            alt="Equipe da Lopes Contabilidade reunida no escritório em Torres"
            width="1080"
            height="1350"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>A equipe por trás da sua contabilidade.</span>
            <a
              href={POST}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver publicação da equipe no Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </figcaption>
        </figure>
        <div className="aboutCopy">
          <p className="eyebrow">Prazer, somos a Lopes</p>
          <h2 id="about-title">Uma equipe para acompanhar sua empresa.</h2>
          <p>
            Desde 2015, atendemos empresas e empreendedores com suporte
            contábil, fiscal e trabalhista em Torres, no Rio Grande do Sul.
          </p>
          <p>
            Nosso trabalho começa por entender o momento do seu negócio. A
            partir daí, orientamos a organização dos documentos, as obrigações e
            os próximos passos.
          </p>
          <div className="aboutDetails">
            <div>
              <MapPin size={20} aria-hidden="true" />
              <span>
                <strong>Presença local</strong>Atendimento presencial em Torres.
              </span>
            </div>
            <div>
              <MessageCircle size={20} aria-hidden="true" />
              <span>
                <strong>Conversa direta</strong>Contato com a equipe pelo
                WhatsApp.
              </span>
            </div>
          </div>
          <a
            className="textLink"
            href={whatsappLink(
              "Olá! Gostaria de conhecer a equipe e o atendimento da Lopes Contabilidade.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Vamos conversar
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

const steps = [
  [
    "Conte seu momento",
    "Você está abrindo uma empresa, trocando de contador ou precisa organizar a rotina? Começamos por essa conversa.",
  ],
  [
    "Entenda os próximos passos",
    "A equipe orienta quais documentos são necessários e apresenta o suporte adequado para sua necessidade.",
  ],
  [
    "Siga com acompanhamento",
    "Com o atendimento definido, organizamos as rotinas e mantemos um canal direto para suas dúvidas.",
  ],
];

function Process() {
  return (
    <section
      className="section process"
      id="atendimento"
      aria-labelledby="process-title"
    >
      <div className="shell">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h2 id="process-title">
              O primeiro passo é<br />
              uma boa conversa.
            </h2>
          </div>
          <a
            className="textLink"
            href={whatsappLink(
              "Olá! Gostaria de entender como funciona o atendimento da Lopes.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Começar pelo WhatsApp
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <ol className="steps">
          {steps.map(([title, text], index) => (
            <li key={title}>
              <span className="stepNumber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="differentials" aria-labelledby="differentials-title">
      <div className="shell differentialsGrid">
        <div>
          <p className="eyebrow">O jeito Lopes de trabalhar</p>
          <h2 id="differentials-title">
            Clareza no que
            <br />
            importa para você.
          </h2>
          <p>
            Informação contábil precisa ajudar quem está à frente do negócio.
            Por isso, aproximamos a rotina técnica das suas decisões.
          </p>
        </div>
        <dl className="differentialList">
          <div>
            <dt>Rotina organizada</dt>
            <dd>
              Documentos, obrigações e prazos acompanhados com orientação.
            </dd>
          </div>
          <div>
            <dt>Decisões com contexto</dt>
            <dd>Análise do enquadramento e da operação da sua empresa.</dd>
          </div>
          <div>
            <dt>Atendimento próximo</dt>
            <dd>Uma equipe com quem conversar sobre o dia a dia do negócio.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section
      className="section instagramSection"
      id="conteudo-instagram"
      aria-labelledby="instagram-title"
    >
      <div className="shell instagramGrid">
        <div>
          <p className="eyebrow">Lopes no Instagram</p>
          <h2 id="instagram-title">
            Conheça nosso
            <br />
            dia a dia.
          </h2>
          <p>Equipe, bastidores e orientações para quem empreende.</p>
          <a
            className="textLink instagramProfile"
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} aria-hidden="true" />
            @lopes_contabilidade_ofc
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="instagramPosts">
          <a
            className="instagramPost"
            href={REEL}
            target="_blank"
            rel="noreferrer"
          >
            <div className="postImage">
              <img
                src="/rotina-lopes.webp"
                alt="Bastidores do trabalho da equipe Lopes"
                width="640"
                height="1136"
                loading="lazy"
                decoding="async"
              />
              <span className="playBadge">
                <Play size={18} fill="currentColor" aria-hidden="true" />
              </span>
            </div>
            <span className="postMeta">
              Bastidores · Reel
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
            <h3>Contabilidade feita por pessoas.</h3>
          </a>
          <a
            className="instagramPost"
            href={POST}
            target="_blank"
            rel="noreferrer"
          >
            <div className="postImage">
              <img
                src="/equipe-lopes.webp"
                alt="Conheça a equipe da Lopes Contabilidade no Instagram"
                width="1080"
                height="1350"
                loading="lazy"
                decoding="async"
              />
              <span className="instagramBadge">
                <Instagram size={18} aria-hidden="true" />
              </span>
            </div>
            <span className="postMeta">
              A Lopes · Equipe
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
            <h3>Quem está ao lado da sua empresa.</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "Como funciona a troca de contador?",
    "Começamos entendendo o cenário da empresa e os documentos necessários. A equipe orienta a transição e os próximos passos para a mudança.",
  ],
  [
    "Preciso ir até o escritório?",
    "Você pode conversar com a equipe presencialmente em Torres ou pelo atendimento digital. Entre em contato para combinar a melhor forma de atendimento.",
  ],
  [
    "A Lopes atende MEI?",
    "Sim. Orientamos sobre obrigações do MEI, emissão de notas fiscais, regularização e mudanças de enquadramento.",
  ],
  [
    "Vocês fazem Imposto de Renda e ITR?",
    "Sim. Atendemos declarações de Imposto de Renda Pessoa Física e ITR. Fale com a equipe para saber quais documentos são necessários.",
  ],
];

function FAQ() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="shell faqGrid">
        <div>
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 id="faq-title">Antes de começar.</h2>
          <p>Algumas respostas para facilitar sua conversa com a equipe.</p>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                <span>{question}</span>
                <ChevronDown size={19} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerTop">
        <div>
          <a href="#inicio" aria-label="Voltar ao início">
            <BrandLogo footer />
          </a>
          <p>
            Contabilidade próxima.
            <br />
            Em Torres e no atendimento digital.
          </p>
        </div>
        <div className="footerLinks">
          <span className="footerLabel">Explore</span>
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href="#faq">Dúvidas frequentes</a>
        </div>
        <div className="footerLinks">
          <span className="footerLabel">Vamos conversar</span>
          <a className="footerPhone" href="tel:+5551986001195">
            (51) 98600-1195
          </a>
          <a
            href={whatsappLink(
              "Olá! Vim pelo site e gostaria de falar com a Lopes Contabilidade.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            Instagram
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <span className="footerLocation">Torres · Rio Grande do Sul</span>
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© {new Date().getFullYear()} Lopes Contabilidade</span>
        <span>Desde 2015, ao lado de quem empreende.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Process />
        <Differentials />
        <InstagramSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <a
        className="floatingContact"
        href={whatsappLink(
          "Olá! Vim pelo site e gostaria de conversar com a Lopes Contabilidade.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir conversa com a Lopes no WhatsApp"
      >
        <MessageCircle size={25} aria-hidden="true" />
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
