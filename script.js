function initialize_app(){
  calculate_button=document.getElementById('calculate');
  calculate_button.addEventListener('click',math_calculate);
}

function addLog(msg){
  var ul=document.getElementById('log');
  var li=document.createElement('li');
  var msg_text_node=document.createTextNode(msg);
  li.appendChild(msg_text_node);
  ul.appendChild(li);
}

function calculate(){
  expression = document.getElementById("expression").value;
  if(expression){
    try{
      answer= (eval(expression));
      document.getElementById('expression').value = answer;
      addLog(expression + "=" + answer);
    }catch(e){
      addLog(expression + " is Bad, please fix it.");
    }
  }
}

function math_calculate(){
  expression = document.getElementById("expression").value;
  if(expression){
    try{
      answer= (math.evaluate(expression));
      document.getElementById('expression').value = answer;
      addLog(expression + "=" + answer);
    }catch(e){
      addLog(expression + " is Bad, please fix it.");
    }
  }
}