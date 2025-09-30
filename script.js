function desabilitarOpitions(nomeQuestao){
    let options = document.getElementsByName(nomeQuestao);
    options.forEach(option => {
        if (!option.checked){
            option.disabled = true;
        }
    })
}

function playSound(){
    let clickSound = document.getElementById('selecioneSom');
    clickSound.play();
}

function submitQuiz(){
    let respostasCorretas = {
        q1: 'b',
        q2: 'a',
        q3: 'c',
        q4: 'c',
        q5: 'c',
        q6: 'c',
        q7: 'e',
        q8: 'b',
        q9: 'd',
        q10: 'd'
    };

    const form = document.getElementById('quiz-form');
    let score = 0;

    for (key in respostasCorretas){
        let respostasUsuario = form.elements[key].value;
        if (respostasUsuario === respostasCorretas[key]){
            score ++;
        }
    }

    if (score > 3 && score <= 5){
        const bomResultadoSom = document.getElementById('bomResultadoSom');
        bomResultadoSom.play()
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `Você acertou ${score} de 10 perguntas, muito bem!`;
    }
    else if (score <= 3){
        const perdeuSom = document.getElementById('perdeuSom');
        perdeuSom.play()
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `Você acertou ${score} de 10 perguntas, precisa assistir denovo!`;
    }
    else{
        const venceuSom = document.getElementById('venceuSom');
        venceuSom.play()
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `Você acertou ${score} de 10 perguntas, você é fã de carteirinha!`;
    }

    document.getElementById('resetButton').disabled = false;
    document.getElementById('submitQuizId').disabled = true;
}

function resetQuiz() {
    const form = document.getElementById('quiz-form');
    form.reset();

    let options = document.querySelectorAll('input[type = radio]');
    options.forEach(option => {
        option.disabled = false;
    })

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    document.getElementById('submitQuizId').disabled = false;
    document.getElementById('resetButton').disabled = true;
}
