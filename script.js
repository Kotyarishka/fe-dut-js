const modalButtons = document.querySelectorAll("[data-modal-open-id]");

let activeModal = null;

modalButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const modalId = button.dataset.modalOpenId;
    const modal = document.querySelector(`[data-modal-id="${modalId}"]`);
    modal.classList.add("modal--open");

    activeModal = modal;
  });
});

const closeButtons = document.querySelectorAll("[data-modal-close-id]");
closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const modalId = button.dataset.modalCloseId;
    const modal = document.querySelector(`[data-modal-id="${modalId}"]`);
    modal.classList.remove("modal--open");

    activeModal = null;
  });
});

const modalContainer = document.querySelector(".modal-container");

modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    activeModal.classList.remove("modal--open");
    activeModal = null;
  }
});
