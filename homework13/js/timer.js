var hour=0, min=0, sec=0;
    function timer() {
        setInterval(tick, 1000);
        }
        function tick() {
        sec++;
            if (sec>=60) {min++; sec=0;}
            if (min>=60) {hour++; min=0;}
            if (sec<10) {document.getElementById("seconds").childNodes[0].nodeValue = "0" + sec;}
            else {document.getElementById("seconds").childNodes[0].nodeValue = sec;}
            if (min<10) {document.getElementById("minutes").childNodes[0].nodeValue = "0" + min;}
            else {document.getElementById("minutes").childNodes[0].nodeValue = min + ":";}
            if (hour<10) {document.getElementById("hours").childNodes[0].nodeValue = "0" + hour;}
            else {document.getElementById("hours").childNodes[0].nodeValue = hour;}              
        }