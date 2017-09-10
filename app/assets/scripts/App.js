import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".portfolio-item"), "85%");
new RevealOnScroll($(".bio"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
