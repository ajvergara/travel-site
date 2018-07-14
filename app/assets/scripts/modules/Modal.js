import $ from "jquery";

class Modal{
  constructor(){
    this.modalItself = $(".modal");
    this.openModalBtn = $(".open-modal");
    this.closeModalBtn = $(".modal__close-x");
    this.body = $("body");
    this.events();
  }

  events(){
    this.openModalBtn.on("click", this.openModalFN.bind(this));
    this.closeModalBtn.on("click", this.closeModalFN.bind(this));
    $(document).on("keyup", this.keyPress.bind(this));
  }

  keyPress(e){
    if(e.keyCode == "27"){
      return this.closeModalFN();
    }
  }

  openModalFN(){
    this.modalItself.addClass("modal--is-visible");
    this.body.addClass("body--is-fixed");
    return false;
  }

  closeModalFN(){
    this.modalItself.removeClass("modal--is-visible");
    this.body.removeClass("body--is-fixed");
  }
}

export default Modal;
