function setupDisqus() {
    var disqus_shortname = 'aceapi';
    var dsqId = "disqusScript";
    
    //var paths = window.location.pathname.split("/");
    //var fileName = paths[paths.length - 2] + "/" + paths[paths.length - 1];
    
    //var disqus_identifier = fileName;

    var lochash    = location.hash.substr(1);
    var disqus_identifier = "api/" + (lochash.substr(lochash.indexOf('api=')).split('&')[0].split('=')[1] || "index") + ".html";
    
    (function() {
        if (document.getElementById(dsqId) === null) {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);       
        }
    })();
}