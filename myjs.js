function handleCountry() {
  document.getElementById("bttn").style.display = "none";
  fetch("https://ipapi.co/json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      sessionStorage.setItem("customerCountry", data.country);
    })
    .then(() => {
      const myDiv = document.getElementById("country");
      let myCountry = sessionStorage.getItem("customerCountry");
      myDiv.innerHTML = "You are currently in " + myCountry;
      setTimeout(() => {
        document.getElementById("fun").innerHTML = "Have fun!";
      }, 2000);

      var customerCountryString = sessionStorage.getItem("customerCountry");
      console.log("customer country is " + customerCountryString);
    })

    .catch((error) => console.error("FETCH ERROR:", error));
}
