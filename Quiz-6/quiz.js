
let count = 0;
function startQuiz(){
    document.querySelector('.start').classList.add("inactive");
    document.querySelector('#one').classList.add('question-active');
};

document.querySelectorAll('.answer-item').forEach(item => {
    item.addEventListener('click', event => {
        if(count === document.querySelectorAll('.question').length -1){
            console.log('toeto');
            document.querySelector('.start-again').classList.add('start-again--active');
            document.querySelectorAll('.question').forEach(item => {
                if (item.classList.contains('question-active')) {
                    item.classList.remove('question-active');
                }
            });
            return;
        } else {
            if(event.target.classList.contains('correct')){
                count++;
                document.querySelectorAll('.question').forEach(item => {
                    item.classList.add('question-correct');
                });
                document.querySelectorAll('.question').forEach(item => {
                    setTimeout(() => {
                        item.classList.remove('question-correct');
                    }, 200);
                });
                event.target.parentElement.parentElement.classList.add("inactive");
                event.target.parentElement.parentElement.classList.remove("question-active");
                event.target.parentElement.parentElement.nextElementSibling.classList.add("question-active");
            }
            else {
                document.querySelector('.wrong').classList.add('wrong--active');
                document.querySelector('.correct-answers').innerText = count;
                document.querySelectorAll('.question').forEach(item => {
                    if (item.classList.contains('question-active')) {
                        item.classList.remove('question-active');
                    }
                });
            }
        }
    })
  })

document.querySelector('.retry-quiz').addEventListener('click', ()=> {
    document.querySelector('.wrong').classList.remove('wrong--active')
    this.startAgainCallback();
})

document.querySelector('.again-quiz').addEventListener('click', (e)=> {
    document.querySelector('.start-again').classList.remove('start-again--active')
    this.startAgainCallback()
})

function startAgainCallback() {
    count = 0;
    document.querySelectorAll('.question').forEach(item => {
        if (item.classList.contains('question-active')) {
            item.classList.remove('question-active');
        }
    });
    document.querySelector('#one').classList.add('question-active');
}
