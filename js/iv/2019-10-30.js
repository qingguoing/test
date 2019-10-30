var a = 0, b = 0;

function A(a) {
  A = function(b) {
    alert(a+b++);
  }
  alert(a++);
}

A(1);
A(2);