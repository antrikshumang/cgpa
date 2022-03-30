<script>
    function fun() {
        var o = parseInt(document.getElementsByName('o')[0].value);
        var ap = parseInt(document.getElementsByName('ap')[0].value);
        var a = parseInt(document.getElementsByName('a')[0].value);
        var bp = parseInt(document.getElementsByName('bp')[0].value);
        var b = parseInt(document.getElementsByName('b')[0].value);
        var c = parseInt(document.getElementsByName('c')[0].value);
        var f = parseInt(document.getElementsByName('f')[0].value);
        var cp;
        var cg;
        var cgpa1;
        var cgpa2;
        var cgpavg;
    
        
        cp = (10 * o) + (9 * ap) + (8 * a) + (7 * bp) + (6 * b) + (5 * c);
        cg = o + ap + a + bp + b + c + f;
        cgpa1 = (cp / cg) * 0.90;
        cgpa2 = (cp / cg) * 0.95;
        cgavg = (cgpa1 + cgpa2) / 1.982;
        alert ("agavg");
        
    }
    </script>