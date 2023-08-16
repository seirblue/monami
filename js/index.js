let status = true;
let ele = document.querySelectorAll(".text ul");
document.getElementById("menu").onclick = function () {
  document.getElementById("bg").classList.toggle("bg");
  if (status) {
    ele.classList.replace("sub", "sub-A");
  } else {
    ele.classList.replace("sub-A", "sub");
  }
  status = !status;
};
