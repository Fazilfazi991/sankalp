export function CommercialFaq({ title, items }: { title: string; items: Array<{ question: string; answer: string }> }) {
  return <section className="commercial-faq"><div className="container"><header><h2>{title}</h2><p>Clear answers before you send the requirement.</p></header><div className="commercial-faq__list">{items.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
