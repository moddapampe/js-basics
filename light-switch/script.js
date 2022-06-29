document.getElementById('switch').addEventListener('click', function() {
    if (this.classList.contains('off')) {

      this.classList.remove('off');
    } else {
      this.classList.add('off');
    }
  });
  