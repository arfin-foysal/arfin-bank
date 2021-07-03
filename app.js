const loginBtn=document.getElementById("login")
loginBtn.addEventListener("click",function () {
    document.getElementById("login-aria").style.display="none";
    document.getElementById("transaction").style.display="block";
})

//deposite
const depositeBtn=document.getElementById("depositeBtn")
  depositeBtn.addEventListener("click",function(){
  const ANumber = allButtonInput("depositeAmmount")
  updateSpainValue("correntValue",ANumber)
  updateSpainValue("courrentBalance",ANumber)
  document.getElementById("depositeAmmount").value=""
})

//Withdraw
const withdrowBtn=document.getElementById("withdrowBtn")
withdrowBtn.addEventListener("click",function(){
  const ANumber = allButtonInput("withdrowAmount")
  updateSpainValue("correntWithdraw",ANumber)
  updateSpainValue("courrentBalance",-1* ANumber)
  document.getElementById("withdrowAmount").value=""
})

//   Repeted input Function
function allButtonInput(id) {
  const Ammount=document.getElementById(id).value;
  const ANumber=Number(Ammount)
  return ANumber;
}


//   Repeted UpdateFunction
function updateSpainValue(id,depositeNumber) {
  const correntAmount=document.getElementById(id).innerText;
  const Value=Number(correntAmount)
  const totalAmount=depositeNumber+Value;
  document.getElementById(id).innerText=totalAmount
}