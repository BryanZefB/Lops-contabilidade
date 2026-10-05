import React, { useState } from "react";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { services, whatsappLink } from "../content";

function cleanText(value, maximumLength) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maximumLength);
}

export function ContactForm() {
  const [preparedLink, setPreparedLink] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("website")) return;
    const name = cleanText(data.get("name"), 80);
    const subject = cleanText(data.get("subject"), 100);
    const message = cleanText(data.get("message"), 600);
    if (name.length < 2 || !subject || message.length < 10) {
      setError(
        "Informe seu nome, selecione um assunto e escreva uma mensagem com pelo menos 10 caracteres.",
      );
      setPreparedLink("");
      return;
    }
    const text = [
      "Olá! Vim pelo site da Lopes e gostaria de conversar.",
      "",
      `Nome: ${name}`,
      `Assunto: ${subject}`,
      `Mensagem: ${message}`,
    ].join("\n");
    const url = whatsappLink(text);
    setError("");
    setPreparedLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function clearStatus() {
    setPreparedLink("");
    setError("");
  }

  return (
    <section
      className="section contact"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="shell contactGrid">
        <div className="contactCopy">
          <p className="eyebrow">Fale com a Lopes</p>
          <h2 id="contact-title">
            Vamos cuidar do
            <br />
            próximo passo?
          </h2>
          <p>
            Conte o que sua empresa precisa. Nossa equipe continua a conversa
            com você pelo WhatsApp.
          </p>
          <a className="contactPhone" href="tel:+5551986001195">
            <Phone size={20} aria-hidden="true" />
            <span>
              <small>Nosso contato</small>(51) 98600-1195
            </span>
          </a>
          <a
            className="textLink"
            href={whatsappLink(
              "Olá! Vim pelo site e gostaria de falar com a Lopes Contabilidade.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Prefiro conversar diretamente
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <form
          className="contactForm"
          onSubmit={handleSubmit}
          onChange={clearStatus}
        >
          <div className="formPair">
            <label htmlFor="contact-name">
              Seu nome
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                type="text"
                minLength={2}
                maxLength={80}
                required
                placeholder="Como podemos chamar você?"
              />
            </label>
            <label htmlFor="contact-subject">
              O que você precisa?
              <select
                id="contact-subject"
                name="subject"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione um assunto
                </option>
                {services.map((service) => (
                  <option key={service.name}>{service.name}</option>
                ))}
                <option>Outro assunto</option>
              </select>
            </label>
          </div>
          <label htmlFor="contact-message">
            Conte um pouco sobre seu momento
            <textarea
              id="contact-message"
              name="message"
              minLength={10}
              maxLength={600}
              rows={4}
              required
              placeholder="Estou abrindo uma empresa, preciso trocar de contador..."
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="contact-website">
              Website
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>
          <button className="button buttonPrimary submitButton" type="submit">
            Continuar no WhatsApp
            <ArrowUpRight size={19} aria-hidden="true" />
          </button>
          <p className="formNote">
            O WhatsApp será aberto com sua mensagem pronta. Você confirma o
            envio por lá. Os dados não ficam armazenados neste site.
          </p>
          <div className="formFeedback" aria-live="polite">
            {error && <p className="formError">{error}</p>}
            {preparedLink && (
              <p className="formSuccess">
                Mensagem preparada.{" "}
                <a href={preparedLink} target="_blank" rel="noreferrer">
                  Abrir WhatsApp novamente
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
