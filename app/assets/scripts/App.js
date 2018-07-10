import $ from "jquery";
import RevealItems from "./modules/RevealItems";
import Modal from "./modules/Modal";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";

const modal = new Modal();
const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
const revealItemFeatures = new RevealItems($(".feature-item"), "75%");
const revealItemTesti = new RevealItems($(".testimonials"), "80%");
