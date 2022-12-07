window.onload = function searchPhotos() {
  const clientId = "frW4i384SKivDaHyJPtcuuwDpH-hLSxwQDmK1bnKTjk";
  const query = document.querySelector("#search");
  const baseURL = `https://api.unsplash.com/photos/random/?client_id=${clientId}&query=${query}`;

  // Request to the API using Fetch

  fetch(baseURL)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      //getting all the tags from the html
      let img = document.createElement("img");
      let link = document.getElementById("photos");
      let span = document.getElementById("username");
      let userLink = document.getElementById("userLink");

      //assigning the attributes and data to the tags selected
      img.setAttribute("src", data.urls.regular);
      img.setAttribute("height", "200");
      img.setAttribute("width", "auto");
      link.setAttribute("href", data.links.html);
      span.innerText = data.user.name;
      userLink.setAttribute("href", data.user.links.html);
      document.getElementById("photos").appendChild(img);
    })
    .catch((error) => {
      console.error("Error:", error);
      // let container = document.querySelector(".container");
      let errorMessage = document.createElement("h2");
      let h3 = document.getElementById("user");

      document.querySelector(".container").appendChild(errorMessage);
      document.querySelector(".container").removeChild(h3);
      document.querySelector("h2").innerText =
        "No images to show, check back later on.";
    });
};
