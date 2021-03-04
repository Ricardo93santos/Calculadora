//Função para receber os valores
function inserir(num){
  var n = document.getElementById("visor").innerHTML;
  document.querySelector("#visor").innerHTML = n + num;
}
//função limpar
function limpar(){
  document.querySelector("#visor").innerHTML = "";
}
//função para apagar valor por valor
function apaga(){
  var res = document.querySelector("#visor").innerHTML;
  document.querySelector("#visor").innerHTML =  res.substring(0, res.length -1);
}
//função calcular
function igual(){
  var res = document.querySelector("#visor").innerHTML;
  if(res){
    document.querySelector("#visor").innerHTML = eval(res);
  }else{
    document.querySelector("#visor").innerHTML = `ERRO!`;
  }
}
//função calcular raiz
function raiz(){
  var res = document.querySelector("#visor").innerHTML;
  document.querySelector("#visor").innerHTML = Math.sqrt(res);
}
//função calcular potencia
function potencia(){
  var res = document.querySelector("#visor").innerHTML;
  document.querySelector("#visor").innerHTML = Math.pow(res,2);
}