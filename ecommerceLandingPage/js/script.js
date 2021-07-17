const form = document.getElementById('form');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let loadingPlace = document.getElementById('loadingPlace');

    // console.log('resultados do form',event);
    // console.log('valores dos inputs',name,email);
    // localStorage.setItem(event.target);

    let formData ={
        name: name,
        email: email,
    }
    localStorage.setItem('compact-form-Data', JSON.stringify(formData));
    
    setTimeout(() => {
        loadingPlace.innerHTML = `<p> Enviando... </p>`
        setTimeout(() => {
            loadingPlace.innerHTML = `<p> Enviado! </p>`
        },1000);
    },2000);
    
}



)