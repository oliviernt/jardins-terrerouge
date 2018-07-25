' use strict';

(function(w, d) {
    var url = "https://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=44.524087,+2.546291&aq=&sll=44.491722,2.519737&sspn=0.194949,0.442543&t=v&ie=UTF8&ll=44.524087,2.546291&spn=0.389681,0.885086&z=11&output=embed";
    //doesn't block the load event
    function createIframe() {
      var m = d.getElementById("map"),
        i = d.createElement("iframe");
      i.src = url;
      i.title = "Position du lieut-dit l'Evescat sur Google Maps";
      i.frameborder = '0';
      i.marginheight = '0';
      i.marginwidth = '0';
      i.width = '100%';
      i.height = 250;
      i.style.border = 'none';
      i.addEventListener('error', function() {
          m.removeChild(i);
      });
      m.appendChild(i);
    }
        
    // Check for browser support of event handling capability
    if (w.addEventListener) {
        w.addEventListener("load", createIframe, false);
    } else if (w.attachEvent) {
        w.attachEvent("onload", createIframe);
    } else {
        w.onload = createIframe;
    }
})(window, document);
