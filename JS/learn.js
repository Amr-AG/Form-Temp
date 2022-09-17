let container = document.querySelector(".container");
let login = document.querySelector("#login");
let email = document.querySelector("#email");
let password = document.querySelector("#number");
let myAudio = document.querySelector("#audio");

login.addEventListener("click", (e) => {
  if (
    email.value === "" ||
    password.value === "" ||
    password.value.length < 6
  ) {
    e.preventDefault();
  } else {
    container.innerHTML = "";
    let content = document.createElement("div");
    content.className = "content";
    content.innerText = "Loading...";
    let load = document.createElement("div");
    load.className = "loading";

    let land = document.createElement("div");
    land.className = "landing";

    container.appendChild(content);
    container.appendChild(load);
    container.appendChild(land);

    load.style.display = "block";
    land.style.display = "block";

    setTimeout(() => {
      let done = document.createElement("div");
      done.innerHTML = "Welcome";
      done.className = "done";
      container.appendChild(done);
      done.style.cssText =
        "transition :2s;font-size: 40px;letter-spacing:2px;line-height: 1.8;padding: 31px 65px;border: solid 1px #202020;border: 1px solid #202020;box-shadow: rgb(0 0 0 / 12%) -11px 18px 1px 0px;-webkit-text-stroke-width: medium;";
      content.style.display = "none";
      load.style.display = "none";
      land.style.display = "none";
      myAudio.play();
    }, 6000);
  }
});
