quizData = [
    {
        question: 'Question One',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_2'
    },
    {
        question: 'Question two',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_1'
    },
    {
        question: 'Question three',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_3'
    },
    {
        question: 'Question four',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_3'
    },
    {
        question: 'Question five',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_4'
    },
    {
        question: 'Question six',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_1'
    },
    {
        question: 'Question seven',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_4'
    },
    {
        question: 'Question 8',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_2'
    },
    {
        question: 'Question 9',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_3'
    },
    {
        question: 'Question ten',
        a_1: 'A',
        a_2: 'B',
        a_3: 'C',
        a_4: 'D',
        correct: 'a_2'
    },
    
];




       //'use strict';
       const answerEls = document.querySelectorAll('.answers');
       const card = document.getElementById('card');
        const questionEl = document.getElementById('question'),
              a_text = document.getElementById('a_text'),
              b_text = document.getElementById('b_text'),
              c_text = document.getElementById('c_text'),
              d_text = document.getElementById('d_text'),
              submitBtn = document.getElementById('submit');

        let currentQuiz = 0;
        let score = 0;
        let answer = undefined;
        loadQuiz();

        function loadQuiz(){
            deselectAnswers();
            const currentQuizData = quizData[currentQuiz];
            questionEl.innerText = currentQuizData.question;
            a_text.innerText = currentQuizData.a_1;
            b_text.innerText = currentQuizData.a_2;
            c_text.innerText = currentQuizData.a_3;
            d_text.innerText = currentQuizData.a_4;


            
        };//end loadQuiz

        function getSelected(){
           
            let answer = undefined;

            answerEls.forEach((answerEl) => {
                if(answerEl.checked){
                    answer = answerEl.id;
                }
            });//closes forEach

            return answer;
        }

        function deselectAnswers(){
            answerEls.forEach((answerEl) => {
                answerEl.checked = false;
            });//closes forEach
        }

    submitBtn.addEventListener('click', () =>{
        const answer = getSelected();

        console.log(answer);

        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;

            if(currentQuiz < quizData.length){
                loadQuiz();
            }else{
                //show final card
               // alert('all done');
               card.innerHTML = `<h1>You scored ${score}/${quizData.length}</h1> <button onclick="location.reload()">Reload</button`;
            }  
        };
        

        
    });