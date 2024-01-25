      function openModal() {
        document.querySelector("#fbModal").style.display = "block";
        document.querySelector("#fbModal").style.opacity = "1";
        return false;
      }

      function closeModal(e) {
        document.querySelector("#fbModal").style.display = "none";
        document.querySelector("#fbModal").style.opacity = "0";
      }

      function fbConfirm(e) {
        event.preventDefault();
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        }
        document.querySelector("#fbForm").style.display = "none";
        document.querySelector("#fbConfirm").style.display = "block";
      }

      window.addEventListener("load", function() {
        document.querySelector("#fbModal").addEventListener("click", closeModal);
        let buttons = document.querySelectorAll("#fbForm button");
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", fbConfirm);
        }
      });