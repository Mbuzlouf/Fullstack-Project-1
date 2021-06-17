let container = document.querySelector(".is-searchResults");
container.innerHTML = null;

document.querySelector(".is-primary2").addEventListener("click", () => {
  event.preventDefault();

  container.innerHTML = null;

  fetch("./data.json", {
    mode: "no-cors",
    headers: { "Application-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      res.array.map((items) => {
        let area = document.querySelector("#yourArea").value;
        if (area == items.Location) {
          let widget = document.createElement("div");
          let widget_image = document.createElement("div");
          let widget_desc = document.createElement("div");
          let petImage = document.createElement("img");
          let petName = document.createElement("h4");
          let petGender = document.createElement("p");
          let petLocation = document.createElement("p");

          widget.className = "widget";
          widget_image.className = "widget__image";
          widget_desc.className = "widget__desc";

          petImage.src = items.image;
          petName.textContent = items.name;
          petGender.textContent = items.gender + " | " + items.age;
          petLocation.textContent = items.Location;

          widget_image.appendChild(petImage);
          widget_desc.appendChild(petName);
          widget_desc.appendChild(petGender);
          widget_desc.appendChild(petLocation);
          widget.appendChild(widget_image);
          widget.appendChild(widget_desc);
          container.appendChild(widget);
        }
      });
    });
});

document.querySelector(".meetYourMatch").id = "meetYourMatch";
document.querySelector(".is-primary").href = "#meetYourMatch";

// -----------------------------
document.getElementsByClassName("widgets")[2].innerHTML = "";

let stories = [
  {
    title: "This is how I met Kori",
    aStory:
      "1Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem ",
    img: "images/stories/1.png",
  },
  {
    title: "I can’t live without Nochi.",
    aStory:
      "2Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem ",
    img: "images/stories/2.png",
  },
  {
    title: "My cat, My new friend!",
    aStory:
      "3Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem ",
    img: "images/stories/3.png",
  },
];

for (let i = 0; i < stories.length; i++) {
  let story = `<div class="widget">
  <div class="widget__image">
    <img src=${stories[i].img} alt="graphic-image" />
  </div>
  <div class="widget__desc">
    <h3>${stories[i].title}</h3>
    <a class="link">Read More</a>
    <p id="thestories">${stories[i].aStory}}</p>
  </div>
  </div>`;
  document.getElementsByClassName("widgets")[2].innerHTML += story;
}

let readMore = document.getElementsByClassName("link");
let i;
for (i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener("click", function () {
    let para = this.nextElementSibling;
    if (para.style.maxHeight) {
      this.innerHTML = "Read More";
      para.style.maxHeight = null;
    } else {
      this.innerHTML = "Show less";
      para.style.maxHeight = para.scrollHeight + "px";
    }
  });
}
// ----------------------------------

let container5 = document.getElementsByClassName("container")[5];
container5.innerHTML =
  "<h2>Change a Life, Adopt a Pet</h2><div><a href='#' class='button is-secondary'>Find a pet</a><a href='#' class='button is-outline'>Donate</a></div>";
document.querySelector(".is-secondary").href = "#meetYourMatch";
document.getElementsByTagName("a")[13].href = "#meetYourMatch";
