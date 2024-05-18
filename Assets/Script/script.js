const passwordInput = document.querySelector('#passwordInput') // valor principal

passwordInput.addEventListener('input', function() { // criando o evento
    const password = this.value; // pega o valor do input a cada digito

    const strengthIndicator = document.querySelector('#password-strength-indicador');
    const strengthText = document.querySelector('#password-strength-text');

    //balisador para dizer se a senha é fraca ou não
    const strengths = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Moderada", 
        3: "Forte", 
        4: "Muito forte",
    };

    // Calcular uma pontuação para ver o status
    let score = 0;

    // Avaliação no que está preenchido para ser somada ao score

    // primeiro requisitos
    if(password.length >= 8) score++;
    if(password.match(/[a-z]/)) score++; // verificando se há letra minúscula
    if(password.match(/[A-Z]/)) score++; // verificando se há letra maiúscula
    if(password.match(/[0-9]/)) score++; // verificando se há número
    if(password.match(/[^a-zA-Z0-9]/)) score++; // aceita caractere especial

    const width = (score / 4) * 100; // calculo da %, pois a largura vai ser em %

    strengthIndicator.style.width = `${width}%`; // largura do elemento dada em %

    // mundança de cores
    switch(score) {
        case 1:
            strengthIndicator.style.backgroundColor = '#e70b0b';
            break;
        case 2:
            strengthIndicator.style.backgroundColor = '#FFB4D';
            break;
        case 3:
            strengthIndicator.style.backgroundColor = '#FFF176';
            break;
        case 4:
            strengthIndicator.style.backgroundColor = '#81C784';
            break;
        default:
            strengthIndicator.style.backgroundColor = 'transparent';
            break;
    };

    // mudar o textobaseado na definição de forças
    if(password.length > 0) {
        strengthText.innerHTML = `Força ${strengths[score]}`;
    } else {
        strengthText.innerHTML = "";
    }
});