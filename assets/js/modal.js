var modal = document.getElementById("modal");
var btns = document.getElementsByClassName("btn-modal");
var buy = document.getElementsByClassName("modal-flex__btn")[0];
var span = document.getElementsByClassName("modal-flex__close")[0];

for(let i = 0; i < btns.length; i++){
  btns[i].onclick = function () {
    modal.style.display = "block";
  }

  buy.onclick = function () {
    modal.style.display = "none";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}
  
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('privacy-policy-modal');
  const openModal = document.getElementById('privacy-policy-link'); // Обновил селектор
  const closeModal = document.querySelector('.modal-close');

  openModal.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
});
