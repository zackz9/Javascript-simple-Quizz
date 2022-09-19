// Collect Correct answers only 

const correctAnswers = ['A', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    //Setting a default score
    let score = 0;
    const userAnswers = [
        form.quest1.value, 
        form.quest2.value,
        form.quest3.value,
        form.quest4.value
    ];

    // Checking answers
    userAnswers.forEach((answ, index) => {

        //Comparing answ with the correctOnes
        if(answ === correctAnswers[index]) {
            //For the four questions we increment by 25%
            score += 25;
        }
    })

    // Set score on page 
    scrollTo(0, 0);
    setTimeout( () => {
        result.classList.remove('d-none')
    }, 400);

    let output = 0;
    const timer = setInterval(() => {
        console.log('first')
        result.querySelector('span').textContent = `${output}%`;

        if(output === score) {
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10);
    
})