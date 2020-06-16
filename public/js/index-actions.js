window.onload = function() {

    const btnSignUp = document.querySelector("#btnSignUp")
    btnSignUp.addEventListener('click', event => {
        event.preventDefault();
    
        let formSignUp = document.querySelector(".signup-box");
        formSignUp.style.display = 'flex';
    });
}