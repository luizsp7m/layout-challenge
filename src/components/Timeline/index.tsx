import styles from "./styles.module.scss";

const ITEMS = [{
  id: 0,
  title: "Estratégia",
  description: "Uma boa estratégia é o principal fator responsável pelo SEO que gera vendas. Através da escolha certa de palavras-chave, análise de concorrência, auditoria técnica e monitoramento dos resultados é que vamos alcançar os resultados e metas. Um dos nossos diferenciais é a estratégia de Cauda Longa, uma técnica focada em priorizar palavras-chave com menor volume de buscas mas altas taxas de conversão, além de serem conquistadas mais rapidamente.",
  image: "/assets/strategy.svg",
  icon: "/assets/strategy-icon.svg",
}, {
  id: 1,
  title: "Conteúdo",
  description: "Criamos conteúdos de posts, páginas e produtos que os clientes e os buscadores amam. Contamos com redatores e analistas de conteúdo criativos, com grande conhecimento das boas práticas de redação e geração de vendas. O processo funciona com a pesquisa de referências por nossa equipe ou com alguém da sua equipe nutrindo com direcionamentos especializados. Também garantimos que todos os nossos conteúdos são originais através de ferramentas anti-plágio.",
  image: "/assets/content.svg",
  icon: "/assets/strategy-icon.svg"
}, {
  id: 3,
  title: "Autoridade",
  description: "Conhecida como Link Building, nossa solução de aumento de autoridade é crucial para mostrar aos buscadores que sua empresa domina determinados assuntos. Fazemos isso através de uma técnica conhecida como Guest Post, onde enviamos artigos ricos e contextuais para editores de portais, blogs e empresas brasileiras que já possuem uma boa autoridade. Nesses artigos, inserimos um link para seu site de forma natural e bem vista pelo Google.",
  image: "/assets/authority.svg",
  icon: "/assets/strategy-icon.svg"
}, {
  id: 4,
  title: "Tecnologia",
  description: "Além do SEO que gera vendas, somos especialistas na criação e manutenção de sites em WordPress e UX e UI Design. Essa habilidade nos permite ajudar empresas que não contam com um time interno ou fornecedor de confiança nessas áreas. Essas soluções são muito importantes para a correção dos erros técnicos encontrados na auditoria técnica. Caso você já tenha um fornecedor ou equipe interna, trabalhamos super bem em conjunto, sem nenhum problema.",
  image: "/assets/technology.svg",
  icon: "/assets/strategy-icon.svg"
}];

interface TimelineItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
  }
}

export function Timeline() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1><b>Como</b> vamos te ajudar</h1>
        </div>

        <div className={styles.timelineItems}>
          {ITEMS.map(item => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>

        <div className={styles.footer}>
          <button>Vamos conversar</button>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineImage}>
        <img src={item.image} alt={item.title} />
      </div>

      <div className={styles.timelineDescription}>
        <img src={item.icon} alt={item.title} />
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
}