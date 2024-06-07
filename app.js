const Questions = [
    {
        'que' : 'What does HTML stand for?',
        'a' : 'HyperText Markup Language',
        'b' : 'HyperText Machine Language',
        'c' : 'HyperText and Links Markup Language',
        'd' : 'HyperTool Multi-Language',
        'correct' : 'a'
    },
    {
        'que' : 'Which of the following is a JavaScript framework??',
        'a' : 'Django',
        'b' : 'Angular',
        'c' : 'Laravel',
        'd' : 'Flask',
        'correct' : 'b'
    },
    {
        'que' : 'In CSS, what does the "C" stand for?',
        'a' : 'Creative',
        'b' : 'computer',
        'c' : 'Complex',  
        'd' : 'Cascading',
        'correct' : 'd'
    },
    {
        'que' : 'Which HTML element is used to define the title of a document?',
        'a' : '<meta>',
        'b' : '<title>',
        'c' : '<head>',  
        'd' : '<header>',
        'correct' : 'b'
    },
    {
        'que' : 'What is the purpose of the `viewport` meta tag in HTML?',
        'a' : 'To improve SEO',
        'b' : 'To link external CSS files',
        'c' : 'To control the page dimensions and scaling on different devices',
        'd' : 'To define the character set used by the document',
        'correct' : 'c'
    },
]

    let index = 0;
    let total = Questions.length;
    let right = 0 , wrong = 5;
    const heading = document.getElementById("heading");
    const loadOptions = document.querySelectorAll(".options");

    const loadQuestions = () =>{
        if(index===total){
            return endQuiz();
        }
        reset();
        const data = Questions[index];
        heading.innerText=` ${index+1+")"} ${data.que}`;
        loadOptions[0].nextElementSibling.innerText=data.a;
        loadOptions[1].nextElementSibling.innerText=data.b;
        loadOptions[2].nextElementSibling.innerText=data.c;
        loadOptions[3].nextElementSibling.innerText=data.d;
        
    }

    const submitQuiz = ()=>{
        const data = Questions[index];
        const ans = getAnswer();
        console.log(ans,data.correct)
        if(ans==data.correct){
            right++;
        }
        index++;
        loadQuestions();

    }

    const getAnswer=()=>{
        let answer;
        loadOptions.forEach(
            (input)=>{
            if(input.checked){
                answer = input.value;
                
            }
           
        }
        )
        return answer;
    }

    const reset = () => {
        loadOptions.forEach((input)=>{
            input.checked = false;
        }
        )
    }

    const endQuiz = ()=>{
        document.getElementById("box").innerHTML = `
        <h1 style="text-align:center">ThankYou for playing Quiz</h1>
        <h2 style="text-align:center"> ${right}/${wrong} are correct`;
    }
    //initial call

    loadQuestions();