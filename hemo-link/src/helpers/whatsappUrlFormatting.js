export default function whatsUrlFormatting(phoneNumber, nomeClinica, nomeDaCampanha) {
    const message = `
Olá, somos da clinica de doação de sangue ${nomeClinica}.
Vimos que você se inscreveu na campanha ${nomeDaCampanha} 
e ficamos muito felizes com sua vontade de ajudar. Estamos
te enviado esse primeiro contato para confirmarmos o seu
interesso, caso positivo, agendamos o dia e hora da coleta.
Vem ser o nosso herói ou heroina! 🦸🦸‍♀️🩸 
`;
    
    return `https://web.whatsapp.com/send?phone=55${phoneNumber}&text=${encodeURIComponent(message)}`;
}