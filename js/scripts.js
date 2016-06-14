function Account(name, balance){
  this.name = name;
  this.balance = balance;
}

var resetFields = function(){
  $("input#name").val("");
  $("input#initial-deposit").val("");
  $("#deposit-amount").val("");
  $("#withdraw-amount").val("");
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
}

Account.prototype.withdraw = function(amount){
  this.balance -= amount;
}

$(document).ready(function() {
  var newAccount = new Account(null, null);
  $("form#account").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitial = parseInt($("input#initial-deposit").val());
    if(inputtedName && inputtedInitial){
      newAccount.name = inputtedName;
      newAccount.balance = inputtedInitial;
      console.log(newAccount.balance);

      $(".total-amount").text(newAccount.balance);
      $("#total").show();
    }
    else{
      alert("Please enter all values");
    }
    resetFields();
  });
  $("#deposit").click(function() {
    var inputtedDeosit = parseInt($("#deposit-amount").val());

    if(inputtedDeosit && newAccount.balance){
      newAccount.deposit(inputtedDeosit);
      $(".total-amount").text(newAccount.balance);
    }
    else{
      alert("Please create an account and enter all values");
    }
    resetFields();
  });

  $("#withdraw").click(function() {
    var inputtedWithdraw = parseInt($("#withdraw-amount").val());
    if(inputtedWithdraw && newAccount.balance){
      newAccount.withdraw(inputtedWithdraw);
      $(".total-amount").text(newAccount.balance);
    }
    else{
      alert("Please create an account and enter all values");
    }
    resetFields();
  });
});
