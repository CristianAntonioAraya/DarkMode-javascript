const btn = document.getElementById('btn');
const userConfig = window.matchMedia('(prefers-color-scheme: dark)').matches


btn.addEventListener( 'click', () => {
    //Ask if the user prefers the dark theme in the OS
    if(userConfig){
        document.body.classList.toggle('lightTheme')
    }
    else{
        document.body.classList.toggle('darkTheme')
    }

})