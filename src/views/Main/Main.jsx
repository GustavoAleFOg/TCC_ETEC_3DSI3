import './Main.css';

function Main() {
  return (
    <main className="conteudo-principal">
      
      {/* Seção Hero/Principal*/}
      <section className="secao-hero secao-container">
        <h2>Espaço reservado para a Seção HERO</h2>
        <p>Aqui teremos uma imagem ou vídeo de destaque e informações principais.</p>
      </section>

      {/* Seção Carrossel de Destaques*/}
      <section className="secao-carrossel-destaques secao-container">
        <h2>Espaço reservado para o CARROSSEL DE DESTAQUES</h2>
        <p>Aqui ficarão os banners dos principais eventos.</p>
      </section>
      
      {/* Seção de Cards de Eventos */}
      <section className="secao-cards-eventos secao-container">
        <h2>Espaço reservado para os CARDS DE EVENTOS + CARROSSEL</h2>
        <p>Aqui teremos uma lista de eventos em formato de cards.</p>
      </section>

    </main>
  );
}

export default Main;