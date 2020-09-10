topButton = document.querySelector('#topBtn');
header = document.querySelector('header');

    window.onscroll = function() {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.documentElement.scrollTop > 300) {
            topButton.style.display = "block";
            header.style.position = 'fixed'
            header.style.boxShadow = '4px 3px 2px #ccc'
        }else {
            topButton.style.display = "none";
            header.style.position = 'initial'

        };
    };

    function topFunction() {
        document.documentElement.scrollTop = 0;
    }
    document.querySelector('#copyright')
        .appendChild(document.createTextNode(new Date().getFullYear()));

        
    document.querySelector('.drop-line').addEventListener('click', () => {
        document.querySelector('.dropdown').classList.toggle('pop-out');
    });
    dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('pop-out');
    });

    let questions = document.querySelectorAll('.questions');

    questions.forEach((question) => {
        let btn = question.querySelector('.question-btn');

        btn.addEventListener('click', () => {
            questions.forEach((item) => {
                if (item !== question) {
                    item.classList.remove('show-text')
                }
            })
            question.classList.toggle('show-text')
        })
    })