function FnLookDetail() {
  document.getElementById('txt').style = 'visibility:visible';
  document.getElementById('product').style = 'visibility:hidden';
  document.getElementById('advice').style = 'visibility:hidden';
};
function FnLookProduct() {
  document.getElementById('product').style = 'visibility:visible';
  document.getElementById('txt').style = 'visibility:hidden';
  document.getElementById('advice').style = 'visibility:hidden';
};
function FnLookAdvice() {
  document.getElementById('advice').style = 'visibility:visible';
  document.getElementById('product').style = 'visibility:hidden';
  document.getElementById('txt').style = 'visibility:hidden';
};