while(document.body == null)
{}
if(document.body)
{
    document.body.classList.toggle("light", false);
    document.body.classList.toggle("dark", true);
}