function generateCard() {
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const dob = document.getElementById("dob").value;
  const blood = document.getElementById("bloodGroup").value;
  const allergies = document.getElementById("allergies").value;
  const address = document.getElementById("address").value;

  document.getElementById("c-name").textContent = name;
  document.getElementById("c-contact").textContent = contact;
  document.getElementById("c-dob").textContent = dob;
  document.getElementById("c-bloodGroup").textContent = blood;
  document.getElementById("c-allergies").textContent = allergies;
  document.getElementById("c-address").textContent = address;

  document.getElementById("cardDetails").style.display = "block";
}

function printCard() {
  window.print();
}
