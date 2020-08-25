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

    // document.querySelectorAll('.treatment').forEach((items) => {
    //     items.addEventListener('click', () => {
    //         document.querySelectorAll('.treatmentP').forEach((item) =>{
    //             item.classList.toggle('active')
    //         }
    //     );
    //     });
    // })
    document.querySelectorAll('.treatment').forEach((items) => {
        items.addEventListener('click', () => {
            items.classList.toggle('t-active');
            document.querySelector('.treatmentP').classList.toggle('active');
        })
    })
    document.querySelector('.drop-line').addEventListener('click', () => {
        document.querySelector('.dropdown').classList.toggle('pop-out');
    });
    dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('pop-out');
    });