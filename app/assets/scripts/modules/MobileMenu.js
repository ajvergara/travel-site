import $ from "jquery";

class MobileMenu{
  constructor(){
    this.mobileIcon = $(".site-header__menu-icon");
    this.siteHeader = $(".site-header");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events(){
    this.mobileIcon.on("click", this.toggleMenu.bind(this));
  }

  // Methods here
  toggleMenu(){
    this.siteHeader.toggleClass("site-header--dark");
    this.menuContent.toggleClass("site-header__menu-content--is-expanded");
  }
}

export default MobileMenu;
