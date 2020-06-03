
document.querySelector("#formAuthor").addEventListener('submit', e => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let lastname = document.querySelector("#lastname").value;
    let biography = document.querySelector("#biography").value;
    let birth = document.querySelector("#birht").value;
    let nationality = document.querySelector("#nationality").value;

    if(name === '' || lastname === '' || biography === '' || birth === '' || nationality === '') return false;

    fetch('http://127.0.0.1:3000/register-author', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            lastname: lastname,
            biography: biography,
            birth: birth,
            nationality: nationality
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.message === 'success'){
            document.querySelector("#name").value = '';
            document.querySelector("#lastname").value = '';
            document.querySelector("#biography").value = '';
            document.querySelector("#birht").value = '';
            document.querySelector("#nationality").value = '';
        }
    })
});