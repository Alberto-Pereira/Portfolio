export default function DarkTheme(chosedTheme){

    if(chosedTheme === "dark"){
        localStorage.setItem("theme", "dark");
    }

    if(chosedTheme === "light"){
        localStorage.setItem("theme", "light");
    }

    window.location.reload();
    
}