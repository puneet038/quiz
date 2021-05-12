const quizdb=
[
    {
    question:"Q1. HTML stands for -",
a: "HighText Machine Language",
b: "HyperText and links Markup Language",
c: "HyperText Markup Language",
d:"None of these",
ans: "ans1"
    },
    
        {
            question:"Q2. A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
        
        a: "Encapsulation",
        b: "Polymorphism",
        c: "Abstraction",
        d:"Inheritance",
        ans: "ans1"
            },
            {
                question:"Q3. A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
            
            a: "Encapsulation",
            b: "Polymorphism",
            c: "Abstraction",
            d:"Inheritance",
            ans: "ans1"
                },
                {
                    question:"Q4. A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
                
                a: "Encapsulation",
                b: "Polymorphism",
                c: "Abstraction",
                d:"Inheritance",
                ans: "ans1"
                    },

                    {
                        question:"Q5. A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
                    
                    a: "Encapsulation",
                    b: "Polymorphism",
                    c: "Abstraction",
                    d:"Inheritance",
                    ans: "ans1"
                        },{
                            question:"Q6. A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
                        
                        a: "Encapsulation",
                        b: "Polymorphism",
                        c: "Abstraction",
                        d:"Inheritance",
                        ans: "ans1"
                            },{
                                question:"Q7. A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
                            
                            a: "Encapsulation",
                            b: "Polymorphism",
                            c: "Abstraction",
                            d:"Inheritance",
                            ans: "ans1"
                                },

                                {
                                    question:"Q8. A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
                                
                                a: "Encapsulation",
                                b: "Polymorphism",
                                c: "Abstraction",
                                d:"Inheritance",
                                ans: "ans1"
                                    }
                                ];
                                const question =document.querySelector('.question');
                                 const option1 =document.querySelector('#option1');
                                const option2 =document.querySelector('#option2');
                                const option3 =document.querySelector('#option3');
                                const option4 =document.querySelector('#option4');
                                const submit =document.querySelector('#submit');
                                const answers=document.querySelectorAll('.answer');
                                const showscore=document.querySelector('#showscore');
                               let countquestion=0;
                               let score=0;
                                const uploadquestion=()=>{
                                    const questionList=quizdb[countquestion];
                                   question.innerText=questionList.question;
                                    option1.innerText=questionList.a;
                                    option2.innerText=questionList.b;
                                    option3.innerText=questionList.c;
                                    option4.innerText=questionList.d;

                                }
                                uploadquestion();
                                const getcheckanswer =()=>
                                {
                                    let answer;
                                    answers.forEach((currentelement) => {
                                        if(currentelement.checked)
                                        {
                                       answer=currentelement.id;
                                        }
                                    });
                                    return answer;

                                }
                                 const deSelect = () =>
                                 {
                                    answers.forEach((currentelement) => currentelement.checked=false);
                                 }
                                submit.addEventListener('click',() =>
                                {
                                    const checkAnswer=getcheckanswer();
                                    console.log(checkAnswer);
                                   if(checkAnswer == quizdb[countquestion].ans)
                                    {
                                       score++;
                                    };
                                    countquestion++;
                                    deSelect();
                                    if(countquestion<quizdb.length)
                                    {
                                        uploadquestion();
                                    }
                                   else{
                                    showscore.innerHTML=`
                                    <h1>your score is ${score}/${quizdb.length}</h1>
                                     <button class ="btn" onclick ="location.reload()">play again</button>
                                     
                                    `
                                    showscore.classList.remove(scaorearea);
                                   }

                                });
