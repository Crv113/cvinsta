// Switch grid post view & identify post view
document.getElementById("myPosts").addEventListener("click", () => {
  console.log("mes posts");
  document.querySelector(".accountPostsList").style.display = "";
  document.querySelector(".identifyPostsList").style.display = "none";

  document.getElementById("myPosts").classList.add("active");
  document.getElementById("identifyPosts").classList.remove("active");
});

document.getElementById("identifyPosts").addEventListener("click", () => {
  console.log("identify posts");
  document.querySelector(".accountPostsList").style.display = "none";
  document.querySelector(".identifyPostsList").style.display = "block";

  document.getElementById("myPosts").classList.remove("active");
  document.getElementById("identifyPosts").classList.add("active");
});

// Main Story JS
function closeStory() {
  document.querySelector(".story").style.display = "none";
}

document.querySelector(".imgWrap").addEventListener("click", () => {
  document.querySelector(".story").style.display = "block";
  document
    .querySelector(".profilePicture .imgWrap")
    .classList.add("storyViewed");
  timer = window.setTimeout(closeStory, 5000);
});

document.querySelector(".storyCloseBtn").addEventListener("click", () => {
  document.querySelector(".story").style.display = "none";
  clearTimeout(timer);
});
