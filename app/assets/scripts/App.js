import $ from "jquery";
import RevealItems from "./modules/RevealItems";
import Modal from "./modules/Modal";

const modal = new Modal();
const revealItemFeatures = new RevealItems($(".feature-item"), "75%");
const revealItemTesti = new RevealItems($(".testimonials"), "80%");
