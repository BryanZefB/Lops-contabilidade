export const INSTAGRAM = "https://www.instagram.com/lopes_contabilidade_ofc/";
export const REEL = "https://www.instagram.com/reel/DaibvnrNRSs/";
export const POST = "https://www.instagram.com/p/DafxJcvFodA/";

export function whatsappLink(message) {
  return `https://wa.me/5551986001195?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    name: "Abertura e migração de empresa",
    title: "Comece uma nova etapa.",
    description:
      "Orientação para abrir seu CNPJ ou fazer a transição da contabilidade com documentos e próximos passos organizados.",
  },
  {
    name: "Contabilidade para empresas",
    title: "Acompanhe sua empresa.",
    description:
      "Suporte contábil e fiscal para manter obrigações, documentos e informações da empresa em ordem.",
  },
  {
    name: "Planejamento tributário",
    title: "Entenda seus impostos.",
    description:
      "Análise do enquadramento e da operação para avaliar as opções tributárias dentro da legislação.",
  },
  {
    name: "MEI e regularização",
    title: "Organize seu MEI.",
    description:
      "Ajuda com emissão de notas, obrigações, pendências e mudança de enquadramento.",
  },
  {
    name: "IRPF e ITR",
    title: "Prepare sua declaração.",
    description:
      "Orientação documental e preparação das declarações de Imposto de Renda Pessoa Física e ITR.",
  },
  {
    name: "Departamento pessoal",
    title: "Cuide da rotina da equipe.",
    description:
      "Suporte para folha de pagamento, admissões, férias, rescisões, pró-labore e eSocial.",
  },
];
