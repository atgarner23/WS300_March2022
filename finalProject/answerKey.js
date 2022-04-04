quizData = [
    {
        question: 'Which of these people are not original members of Fall Out Boy?',
        a_1: 'Pete Wentz',
        a_2: 'Joe Trohman',
        a_3: 'Patrick Stump',
        a_4: 'Mike Pareskuwicz',
        correct: 'a_4'
    },
    {
        question: 'Match these lyrics to the song title: <br><span>"I\'m looking forward to the future, but my eyesight is going bad. And this crytal ball, it\'s always cloudy except for, when you look into the past."</span>',
        a_1: 'thnks fr the mmrs',
        a_2: 'Sugar, We\'re Goin down',
        a_3: 'Of All The Gin Joints In All The World',
        a_4: 'Calm Before the Storm',
        correct: 'a_1'
    },
    {
        question: 'What suburb of Chicago did Fall Out Boy form in?',
        a_1: 'Wilmette, IL',
        a_2: 'Winnetka, IL',
        a_3: 'Waukegan, IL',
        a_4: 'Evanson, IL',
        correct: 'a_1'
    },
    {
        question: 'What is the name of Fall Out Boy\'s first studio album?',
        a_1: 'Take This to Your Grave',
        a_2: 'From Under the cork Tree',
        a_3: 'Folie a Deux',
        a_4: 'Infinity on High',
        correct: 'a_1'
    },
    {
        question: 'Which member of Fall Out Boy starred in an episode of Law and Order?',
        a_1: 'Patrick Stump',
        a_2: 'Pete Wentz',
        a_3: 'Andy Hurley',
        a_4: 'Joe Trohman',
        correct: 'a_1'
    },
    {
        question: 'Fall Out Boy Bassist/Lyricist Pete Wentz Co-Founded which of these Emo record labels?',
        a_1: 'Fueled By Ramen',
        a_2: 'Decadynce',
        a_3: 'Epitaph',
        a_4: 'Victory',
        correct: 'a_1'
    },
    {
        question: 'Which of these bands produced 4 Platinum records for Fueled by Ramen?',
        a_1: 'Paramore',
        a_2: 'TwentyOnePilots',
        a_3: 'Panic! at the disco',
        a_4: 'Gym Class Heroes',
        correct: 'a_3'
    },
    {
        question: 'Which state is Brendan Urie of Panic! at the Disco from?',
        a_1: 'Nevada',
        a_2: 'Utah',
        a_3: 'Colrado',
        a_4: 'California',
        correct: 'a_2'
    },
    {
        question: 'What "band" is currently only comprised of 1 official member?',
        a_1: 'Paramore',
        a_2: 'My Chemical Romance',
        a_3: 'Panic! at the Disco',
        a_4: 'The Used',
        correct: 'a_3'
    },
    {
        question: 'Which of the following song titles does NOT belong to Panic! at the Disco?',
        a_1: 'Lying is the Most Fun a Girl Can Have Without Taking Her Clothes Off',
        a_2: 'Disloyal Order of the Water Buffaloes',
        a_3: 'The Only Difference Between Martyrdom and Suicide is Press Coverage',
        a_4: 'LA Devotee',
        correct: 'a_2'
    },
    {
        question: 'Match these lyrics to the song title: <br><span>"Oh, well in fact. We\'ll all look at it this way, I mean, technically, our marriage is saved. Well this calls for a toast. So pour the champagne, pour the champagne!"</span>',
        a_1: 'I Write Sins not Tragedies',
        a_2: 'The Green Gentleman',
        a_3: 'Death of a Bachelor',
        a_4: 'Emporer\'s New Clothes',
        correct: 'a_1'
    },
    {
        question: 'Which of these was My Chemical Romance\'s First Studio Album?',
        a_1: 'Three Cheers to Sweet Revenge',
        a_2: 'I Brought You My Bullets, You Brought Me Your Love',
        a_3: 'The Black Parade',
        a_4: 'Dange Days: The True Lives of the Fabulous Killjoys',
        correct: 'a_2'
    },
    
];

    /* shuffle array according to trish

        function shuffle(array){
            for(let i =array.length-1; i > 0; i--){
                let j = Math.floor( Math.random() * (i+1));// places j in a random spot in the array
                [array[i], array[j]] = [array[j], array[i]]; //swaps places of index i and index j
            }
        }
    
    
    */


       //'use strict';
       const answerEls = document.querySelectorAll('.answers');
       const card = document.getElementById('card');
        const questionEl = document.getElementById('question'),
              a_text = document.getElementById('a_text'),
              b_text = document.getElementById('b_text'),
              c_text = document.getElementById('c_text'),
              d_text = document.getElementById('d_text'),
              submitBtn = document.getElementById('submit'),
              startBtn = document.getElementById('start-btn');

        let currentQuiz = 0;
        let score = 0;
        let answer = undefined;

        function shuffle(array){
            for(let i =array.length-1; i > 0; i--){
                let j = Math.floor( Math.random() * (i+1));// places j in a random spot in the array
                [array[i], array[j]] = [array[j], array[i]]; //swaps places of index i and index j
            }
        };//closes shuffle

        shuffle(quizData);
        const randQuiz = quizData.slice(0, 10);
        //shuffle(quizData.answer); //need to play around with this one some more have to figure out how to shuffle the answers. Probably need to make them an array within the question object and shuffle them

        loadQuiz();

        function loadQuiz(){
            deselectAnswers();
            const currentQuizData = randQuiz[currentQuiz];
            questionEl.innerHTML = currentQuizData.question;
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
            if(answer === randQuiz[currentQuiz].correct){
                score++;
            }
            currentQuiz++;

            if(currentQuiz < randQuiz.length){
                loadQuiz();
            }else{
                //show final card
               // alert('all done');
               card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <button onclick="location.reload()">Reload</button`;
            }  
        };
    });//closes submitBtn event listener
    startBtn.addEventListener('click', () =>{
        document.querySelector('.start').classList.add('hidden');
        document.querySelector('.question').classList.remove('hidden');
    });//closes startBtn Event listener
