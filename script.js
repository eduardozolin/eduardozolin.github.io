function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // tag img
  const img = document.querySelector("#profile img")

  // replace img
  if (html.classList.contains("light")) {
    // light mode, activate light image
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // no light mode, keep the regular image
    img.setAttribute("src", "./assets/avatar.png")
  }
}
