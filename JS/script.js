function validateForm() {
    let x = document.forms["forms"]["nome"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }