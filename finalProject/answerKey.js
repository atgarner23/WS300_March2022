quizData = [
    {
        question: '<h2>Which of these people was NOT an original member of Fall Out Boy?</h2>',
        a_4: 'Pete Wentz',
        a_2: 'Joe Trohman',
        a_3: 'Patrick Stump',
        a_1: 'Mike Pareskuwicz',
    },
    {
        question: '<h2>Match these lyrics to the song title:</h2><q>I\'m looking forward to the future, but my eyesight is going bad. And this crytal ball, it\'s always cloudy except for, when you look into the past.</q>',
        a_1: 'Thnks fr the Mmrs',
        a_2: 'Sugar, We\'re Goin down',
        a_3: 'Of All The Gin Joints In All The World',
        a_4: 'Calm Before the Storm',
    },
    {
        question: '<h2>What suburb of Chicago did Fall Out Boy form in?</h2>',
        a_1: 'Wilmette, IL',
        a_2: 'Winnetka, IL',
        a_3: 'Waukegan, IL',
        a_4: 'Evanson, IL',
    },
    {
        question: '<h2>What is the name of Fall Out Boy\'s first studio album?</h2>',
        a_1: 'Take This to Your Grave',
        a_2: 'From Under the Cork Tree',
        a_3: 'Folie a Deux',
        a_4: 'Infinity on High',
    },
    {
        question: '<h2>Which member of Fall Out Boy starred in an episode of Law and Order?</h2>',
        a_1: 'Patrick Stump',
        a_2: 'Pete Wentz',
        a_3: 'Andy Hurley',
        a_4: 'Joe Trohman',
    },
    {
        question: '<h2>Fall Out Boy Bassist/Lyricist Pete Wentz Co-Founded which of these Emo record labels?</h2>',
        a_1: 'Fueled By Ramen',
        a_2: 'Decadynce',
        a_3: 'Epitaph',
        a_4: 'Victory',
    },
    {
        question: '<h2>Which of these bands produced 4 Platinum records for Fueled by Ramen</h2>?',
        a_3: 'Paramore',
        a_2: 'TwentyOnePilots',
        a_1: 'Panic! at the Disco',
        a_4: 'Gym Class Heroes',
    },
    {
        question: '<h2>Which state is Brendan Urie of Panic! at the Disco from?</h2>',
        a_2: 'Nevada',
        a_1: 'Utah',
        a_3: 'Colorado',
        a_4: 'California',
    },
    {
        question: '<h2>What "band" is currently only comprised of 1 official member?</h2>',
        a_3: 'Paramore',
        a_2: 'My Chemical Romance',
        a_1: 'Panic! at the Disco',
        a_4: 'The Used',
    },
    {
        question: '<h2>Which of the following song titles does NOT belong to Panic! at the Disco?</h2>',
        a_2: 'Lying is the Most Fun a Girl Can Have Without Taking Her Clothes Off',
        a_1: 'Disloyal Order of the Water Buffaloes',
        a_3: 'The Only Difference Between Martyrdom and Suicide is Press Coverage',
        a_4: 'LA Devotee',
    },
    {
        question: '<h2>Match these lyrics to the song title: </h2><q>Oh, well in fact. We\'ll all look at it this way, I mean, technically, our marriage is saved. Well this calls for a toast. So pour the champagne, pour the champagne!</q>',
        a_1: 'I Write Sins Not Tragedies',
        a_2: 'The Green Gentleman',
        a_3: 'Death of a Bachelor',
        a_4: 'Emporer\'s New Clothes',
    },
    {
        question: '<h2>Which of these was My Chemical Romance\'s First Studio Album?</h2>',
        a_2: 'Three Cheers to Sweet Revenge',
        a_1: 'I Brought You My Bullets, You Brought Me Your Love',
        a_3: 'The Black Parade',
        a_4: 'Danger Days: The True Lives of the Fabulous Killjoys',
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
    let counter = 1;
    let timeLeft = 30;
    var countdown;

    
     function startTimer(){
        
        document.getElementById("timer").innerHTML = timeLeft + " seconds";
        timeLeft--;
        if(timeLeft >= 0){
            countdown = setTimeout(startTimer,1000);
        }
        if(timeLeft < 0){
            openModal();
        }
        
     };//close startTimer
    
     function endTimer(){
        clearTimeout(countdown);
    };//close endTimer

    

    function shuffle(array){
        for(let i =array.length-1; i > 0; i--){
            let j = Math.floor( Math.random() * (i+1));// places j in a random spot in the array
            [array[i], array[j]] = [array[j], array[i]]; //swaps places of index i and index j
        }
    };//closes shuffle

        function shuffleAnswer(){
        var list = document.querySelector('.answer'), i;
        for (i = list.children.length; i >= 0; i--) {
            list.appendChild(list.children[Math.random() * i | 0]);
        };
    
        };//closes shuffleAnswer

    shuffle(quizData);
    const randQuiz = quizData.slice(0, 10);
    

    loadQuiz();

    shuffleAnswer();

    function loadQuiz(){
        deselectAnswers();
        const currentQuizData = randQuiz[currentQuiz];
        questionEl.innerHTML = currentQuizData.question;
        a_text.innerText = currentQuizData.a_1;
        b_text.innerText = currentQuizData.a_2;
        c_text.innerText = currentQuizData.a_3;
        d_text.innerText = currentQuizData.a_4;
        document.getElementById('counter').innerText = `${counter}/${randQuiz.length}`;

    };//end loadQuiz

    function getSelected(){
        let answer = undefined;
        answerEls.forEach((answerEl) => {
            if(answerEl.checked){
                answer = answerEl.id;
            };
        });//closes forEach
        return answer;
    };//closes getSelected

    function deselectAnswers(){
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });//closes forEach
    };//closes deselectAnswers

    submitBtn.addEventListener('click', () =>{
        openModal();
        
    });//closes submitBtn event listener

    startBtn.addEventListener('click', () =>{
        document.querySelector('.start').classList.add('hidden');
        document.querySelector('.question').classList.remove('hidden');
        startTimer();
    });//closes startBtn Event listener

    function openModal(){
    // modal from w3 school
        let modal = document.getElementById("myModal");// Get the modal
        let span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
        const answer = getSelected();//gets what is selected
        modal.style.display = "block";//opens the modal when function is run\
        endTimer();
            if(answer === 'a_1'){
                document.querySelector('.modal-content h3').innerText = `Correct!`;
                score++;
            };
            if(answer !== 'a_1' || answer == undefined){
                document.querySelector('.modal-content h3').innerText = `Wrong!`;
                document.querySelector('.modal-content p').innerText = `The right answer is: ${randQuiz[currentQuiz].a_1}`;
            };
            if(timeLeft <= 0){
                document.querySelector('.modal-content h3').innerText = `Out of Time!`;
            }
            currentQuiz++;
            counter++;
        
        
        function closeModal(){
            modal.style.display = "none";
            document.querySelector('.modal-content h3').innerText = ``;
            document.querySelector('.modal-content p').innerText = ``;
            if(currentQuiz < randQuiz.length){
                loadQuiz();
                timeLeft = 30;
                startTimer();
            }else{
                //show final card
            //card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <button onclick="location.reload()">Reload</button`;
                finalScore();
            } 
        };//closes closeModal
        window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
            if (event.target == modal || event.target == span) {
                closeModal();
            };
        };//closes window.onclick
    };//closes openModal

    

    function finalScore(){
        //get the score value
        //compare score value to a list of predetermined catagories
        //get the html from that catagorie
        //display html on the final score card
        switch (score){
            case 0:
            case 1:
                card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <p>Have you ever even heard Emo music?!</p> <button onclick="location.reload()">Reload</button`; 
            break;
            case 2:
            case 3:
                card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <p>Hot Topic is a store in the mall right?</p> <button onclick="location.reload()">Reload</button`; 
            break;
            case 4:
            case 5:
                card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <p>Not bad, but you have a ways to go.</p> <button onclick="location.reload()">Reload</button`; 
            break;
            case 6:
            case 7:
                card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <p>I bet you have been to Vans Warped Tour more than once haven't you?</p> <button onclick="location.reload()">Reload</button`; 
            break;
            case 8:
            case 9:
                card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <p>I'm impressed. Time to bust out that studded belt and head to Vegas. I'll see you at 'When We Were Young'</p> <button onclick="location.reload()">Reload</button`; 
            break;
            case 10:
                card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <p>Look, no one like a cheater. But I guess you made it this far so Congrats on being able to Google as well as me!</p> <button onclick="location.reload()">Reload</button`; 
            break;
            default:
                card.innerHTML = `<h1>You scored ${score}/${randQuiz.length}</h1> <button onclick="location.reload()">Reload</button`;
        }
    };//closes finalScore

    //add a timer