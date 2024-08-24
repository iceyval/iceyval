highlight();
window.refresh = function(a)
{
    if(typeof(a) == 'undefined' || typeof(a.content) == 'undefined')
        console.error("undefined");
    highlight();
}
function highlight()
{
    function highlight() {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
        });
        $('pre code[highlight-lines]').each(function (i, block) {
          if (block.innerHTML === "") return;
          var lines = block.innerHTML.split('\n');
    
          queryString = block.getAttribute('highlight-lines');
          if (!queryString) return;
    
          var ranges = queryString.split(',');
          for (var j = 0, range; range = ranges[j++];) {
            var found = range.match(/^(\d+)\-(\d+)?$/);
            if (found) {
              // consider region as `{startlinenumber}-{endlinenumber}`, in which {endlinenumber} is optional
              var start = +found[1];
              var end = +found[2];
              if (isNaN(end) || end > lines.length) {
                end = lines.length;
              }
            } else {
              // consider region as a sigine line number
              if (isNaN(range)) continue;
              var start = +range;
              var end = start;
            }
            if (start <= 0 || end <= 0 || start > end || start > lines.length) {
              // skip current region if invalid
              continue;
            }
            lines[start - 1] = '<span class="line-highlight">' + lines[start - 1];
            lines[end - 1] = lines[end - 1] + '</span>';
          }
    
          block.innerHTML = lines.join('\n');
        });
      }
    
}
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