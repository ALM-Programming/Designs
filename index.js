function openModal(i) {  
  document.getElementById("modal-img").src = i.src;
  let modalContainer = document.getElementsByClassName("open-img-container");
  modalContainer[0].style.display = "flex";
}

function closeModal() {
  let modalContainer = document.getElementsByClassName("open-img-container");
  modalContainer[0].style.display = "none";  
}