for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {

    var current = document.getElementsByClassName("ilumina");

    if (current.length > 0) {

      current[0].className = current[0].className.replace("ilumina", "");

    }

    this.className += "ilumina";
  });
}
