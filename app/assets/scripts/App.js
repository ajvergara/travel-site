import $ from "jquery";
import RevealItems from "./modules/RevealItems";
import Modal from "./modules/Modal";
import MobileMenu from "./modules/MobileMenu";

const modal = new Modal();
const mobileMenu = new MobileMenu();
const revealItemFeatures = new RevealItems($(".feature-item"), "75%");
const revealItemTesti = new RevealItems($(".testimonials"), "80%");
