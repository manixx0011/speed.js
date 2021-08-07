<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript">


        function calculatetime(){
            var form = document.timeform;
            var i = form.distunits.selectedIndex;
            var distunitsvalue = form.distunits.options[i].value; 
            var j = form.speedunits.selectedIndex;
            var speedunitsvalue = form.speedunits.options[j].value;
        
        
            var d = form.distvalue.value;
            if (isblank(d)) d = '0';
              else
                d = parseFloat(d);
            
            var s = form.speedvalue.value;
            if (isblank(s)) s = '0';
              else
                s = parseFloat(s);
        
        
            var t = (d * distunitsvalue) / (s * speedunitsvalue);
        
        
            form.hourvalue.value = Math.floor(t / 3600);
            t = t - (form.hourvalue.value * 3600);
            form.minutevalue.value = Math.floor(t / 60);
            form.secondvalue.value = Math.floor(t - (form.minutevalue.value * 60));
        
         return true;
        }
        
        function calculatedistance(){
            var form = document.distform;
        
            var i = form.distunits.selectedIndex;
            var distunitsvalue = form.distunits.options[i].value; 
            var j = form.speedunits.selectedIndex;
            var speedunitsvalue = form.speedunits.options[j].value;
        
            var h = form.hourvalue.value;
            if (isblank(h)) h = '0';
              else
                h = parseFloat(h);
        
            var m = form.minutevalue.value;
            if (isblank(m)) m = '0';
              else
                m = parseFloat(m);
        
            var s = form.secondvalue.value;
            if (isblank(s)) s = '0';
              else
                s = parseFloat(s);
        
            var sp = form.speedvalue.value;
            if (isblank(sp)) sp = '0';
              else
                sp = parseFloat(sp);
        
        
            var temp = (h * 3600) + (m * 60) + s;
        
            form.distvalue.value = roundoff(((sp * speedunitsvalue) * temp) / distunitsvalue, 5); 
            
         return true;
        }
        
        function calculatespeed(){
            var form = document.speedform;
        
            var i = form.distunits.selectedIndex;
            var distunitsvalue = form.distunits.options[i].value; 
            var j = form.speedunits.selectedIndex;
            var speedunitsvalue = form.speedunits.options[j].value;
        
            var h = form.hourvalue.value;
            if (isblank(h)) h = '0';
              else
                h = parseFloat(h);
        
            var m = form.minutevalue.value;
            if (isblank(m)) m = '0';
              else
                m = parseFloat(m);
        
            var s = form.secondvalue.value;
            if (isblank(s)) s = '0';
              else
                s = parseFloat(s);
        
            var d = form.distvalue.value;
            if (isblank(d)) d = '0';
              else
                d = parseFloat(d);
        
        
            var temp = (h * 3600) + (m * 60) + s;
        
            form.speedvalue.value = roundoff(((d * distunitsvalue)  / (temp * speedunitsvalue)), 5); 
        
         return true;
        }
        
        
        function roundoff(x,y){             
          x = parseFloat(x);
          y = parseFloat(y);
          x = Math.round(x * Math.pow(10,y))/Math.pow(10,y);
          return x;
        }
        
        function isblank(s)
        {
          for(var i = 0; i < s.length; i++) {
              var c = s.charAt(i);
              if ((c != ' ') && (c != '\n') && (c != '\t')) return false;
          }
          return true;
        }
        
        
        //-->
        </SCRIPT>
      