import React from 'react';

const LandingPage = () => {
    const styles = {
        landingPage: {
            fontFamily: 'Arial, sans-serif',
            padding: '250px',
        },
        header: {
            width: '100%',
            border: '5px solid darkgray',
            overflow: 'hidden',
        },
        separator: {
            border: '1px solid gray',
            margin: '20px 0',
        },
        mainTitle: {
            textAlign: 'center',
            color: 'red',
            fontWeight: 'bold',
        },
        contentBlocks: {
            display: 'flex',
            justifyContent: 'center',
            margin: '20px',
        },
        textBlock: {
            backgroundColor: 'red',
            color: 'white',
            padding: '20px',
            flex: 1,
        },
        imageBlock: {
            flex: 1,
            marginLeft: '10px',
        },
        image: {
            maxWidth: '100%',
            borderRadius: '10px',
        },
        benefits: {
            textAlign: 'center',
        },
        benefitsTitle: {
            fontWeight: 'bold',
            color: 'black',
        },
        benefitBlocks: {
            display: 'flex',
            justifyContent: 'center',
            margin: '10px 0',
        },
        benefit: {
            backgroundColor: 'gray',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            margin: '0 5px',
        },
        heroButton: {
            border: '2px solid red',
            borderRadius: '10px',
            backgroundColor: 'white',
            color: 'red',
            padding: '10px 20px',
            cursor: 'pointer',
            marginTop: '10px',
        },
        faqTitle: {
            fontWeight: 'bold',
        },
        faqBillets: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        faqBillet: {
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            margin: '5px',
            border: '1px solid gray',
            borderRadius: '5px',
        },
        requirements: {
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            marginTop: '20px',
        },
        requirementsTitle: {
            color: 'red',
            fontWeight: 'bold',
        },
        requirementsContent: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px 0',
        },
        footer: {
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.landingPage}>
            <h1 style={{ textAlign: 'center', color: 'red' }}>Doe Sangue, Salve Vidas</h1>

            <header style={styles.header}>
                <img src="./img/img1.jpg" alt="Imagem de Cabeçalho" style={{ width: '100%', height: 'auto' }} />

            </header>
            <hr style={styles.separator} />

            <h1 style={styles.mainTitle}>Dia mundial da doação de sangue</h1>
            <section style={styles.mainContent}>
                <div style={styles.contentBlocks}>
                    <div style={styles.textBlock}>
                        <p>O dia mundial da doação de sangue, celebrado em 14 de junho, destaca a importância do ato que salva milhões de vidas. Cada doação pode salvar até 4 pessoas, sendo essencial em tratamentos e emergências. Se você tem entre 16 e 69 anos, pesa mais de 50kg e está saudável, faça parte dessa corrente de solidariedade e doe sangue.</p>
                    </div>
                    <div style={styles.imageBlock}>
                        <img src="./img/img2.jpg" alt="Imagem de Cabeçalho" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </section>
            <hr style={styles.separator} />

            <section style={styles.benefits}>
                <h2 style={styles.benefitsTitle}>Benefícios de doar sangue</h2>
                <div style={styles.benefitBlocks}>
                    <div style={styles.benefit}>
                        <p>Salva vidas: Cada doação pode salvar até quatro pessoas, ajudando em cirurgias, tratamentos de câncer e emergências médicas.

                            Melhora a saúde do doador: A doação regular pode ajudar a reduzir os níveis de ferro no sangue, diminuindo o risco de doenças cardíacas.

                            Exame de saúde gratuito: Ao doar sangue, o doador recebe um exame de saúde que inclui verificação de pressão arterial, hemoglobina e outros indicadores.

                            Senso de comunidade: Contribuir para a doação de sangue promove um sentimento de solidariedade e pertencimento à comunidade.

                            Estímulo à produção de novas células sanguíneas: A doação estimula o corpo a produzir novas células sanguíneas, ajudando a manter a saúde do sistema circulatório.</p>
                    </div>
                    <div style={styles.benefit}>
                        <img src="./img/img3.jpg" alt="Imagem de Cabeçalho" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <button style={styles.heroButton}>Quero ser um herói</button>
            </section>
            <hr style={styles.separator} />

            {/* Dúvidas frequentes */}
            <section style={styles.faq}>
                <h2 style={styles.faqTitle}>Dúvidas frequentes</h2>
                <div style={styles.faqBillets}>
                    {[
                        {
                            question: "Quem pode doar sangue?",
                            answer: "Geralmente, pessoas entre 16 e 69 anos, que pesem mais de 50 kg e estejam em boas condições de saúde podem doar."
                        },
                        {
                            question: "O que devo fazer antes da doação?",
                            answer: "É recomendável ter uma refeição leve antes de doar, evitar alimentos gordurosos e manter-se hidratado."
                        },
                        {
                            question: "Quanto tempo leva a doação?",
                            answer: "O processo de doação em si leva cerca de 10 a 15 minutos, mas é importante reservar um tempo para o atendimento e recuperação."
                        },
                        {
                            question: "A doação de sangue dói?",
                            answer: "A maioria das pessoas sente apenas uma leve picada ao inserir a agulha, e a dor é geralmente mínima."
                        },
                        {
                            question: "Com que frequência posso doar sangue?",
                            answer: "Homens podem doar a cada três meses, enquanto mulheres podem doar a cada quatro meses, dependendo da saúde e dos critérios da instituição."
                        },
                        {
                            question: "Posso doar sangue se estiver tomando medicamentos?",
                            answer: "Algumas medicações podem contraindicar a doação. É importante informar-se e consultar o serviço de sangue antes da doação."
                        },
                        {
                            question: "O que acontece após a doação?",
                            answer: "Após doar, recomenda-se descansar por alguns minutos e consumir um lanche para repor energias."
                        }
                    ].map((item, index) => (
                        <div key={index} style={styles.faqBillet}>
                            <p><strong>{item.question}</strong></p>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={styles.requirements}>
                <h2 style={{ ...styles.requirementsTitle, textAlign: 'center' }}>O que preciso para doar?</h2>
                <div style={styles.requirementsContent}>
                    <div style={{ flex: 1, marginRight: '10px', textAlign: 'center' }}>
                    <img src="./img/img4.jpg" alt="Imagem de Cabeçalho" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div style={{ flex: 1, textAlign: 'left', marginLeft: '10px' }}>
                        <p>O que preciso para doar sangue?
Para ser um doador de sangue e ajudar a salvar vidas, é fundamental atender a alguns requisitos:

Idade: Ter entre 16 e 69 anos. Menores de 18 anos precisam de autorização dos responsáveis.
Peso: Pesar mais de 50 kg.
Saúde: Estar em boas condições de saúde, sem doenças transmissíveis pelo sangue.
Intervalo de Doações: Homens podem doar a cada 3 meses; mulheres, a cada 4 meses.
Alimentação: Fazer uma refeição leve antes da doação, evitando alimentos gordurosos.
Hidratação: Estar bem hidratado antes de doar.
Medicamentos: Informar-se sobre medicamentos que possam contraindicar a doação.
Repouso: Após a doação, recomenda-se um período de descanso e hidratação.
Atendendo a esses requisitos, você se tornará um herói, contribuindo para a vida de muitos!</p>
                        
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button style={styles.heroButton}>Quero ser um herói</button>
                </div>
            </section>

            {/* Rodapé */}
            <footer style={styles.footer}>
                <p>Sobre | Contatos | Direitos Reservados</p>
            </footer>
        </div>
    );
};

export default LandingPage;