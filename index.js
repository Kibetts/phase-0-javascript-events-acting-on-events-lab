// Your code here
function moveDodgerLeft(){
    function moveDodgerLeft() {
        let dodger = document.getElementById('dodger');
        let left = parseInt(dodger.style.left);
        if (left > 0) {
          dodger.style.left = `${left - 1}px`;
        }
      }
}