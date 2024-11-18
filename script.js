const body = document.body;
const toggleThemeButton = document.getElementById('toggle-theme');

//verifica o tema salvo no localstorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme){
    body.classList.add(savedTheme);
}else{
    body.classList.add('light');
}

//alterar e salvar tema no localstorage
if(toggleThemeButton){
    toggleThemeButton.addEventListener('click', ()=>{
        if(body.classList.contains('light')){
            body.classList.remove('light');
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            body.classList.remove('dark');
            body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    });
}