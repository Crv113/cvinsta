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
