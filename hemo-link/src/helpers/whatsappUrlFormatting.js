export default function whatsUrlFormatting(phoneNumber, donorName, nomeClinica, nomeDaCampanha) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const message = `
Olá, ${donorName}. Somos da clinica de doação de sangue "${nomeClinica}".
Vimos que você se inscreveu na campanha "${nomeDaCampanha}" 
e ficamos muito felizes com sua vontade de ajudar. Estamos
te enviado esse primeiro contato para confirmarmos o seu
interesse, caso positivo, agendamos o dia e hora da coleta.
Vem ser o nosso herói ou heroina! 🦸🦸‍♀️🩸 
`;
    if(isMobile){
        return `whatsapp://send?phone=55${phoneNumber}&text=${encodeURIComponent(message)}`;
    }
    
    return `https://web.whatsapp.com/send?phone=55${phoneNumber}&text=${encodeURIComponent(message)}`;
}