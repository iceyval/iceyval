
if(document.body)
{
    function set_theme(theme)
    {
        document.body.classList.toggle("light", theme);
        document.body.classList.toggle("dark", !theme);
        if(window.localStorage)
                window.localStorage.setItem("theme", theme ? "light" : "dark");
    }
    if(!window.localStorage || !window.localStorage.getItem("theme") || window.localStorage.getItem("theme") == "dark")
    {
        set_theme(false);
    }
    else
    {
        set_theme(true);
    }
}