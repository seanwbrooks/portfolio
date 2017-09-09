import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".portfolio-item"), "85%");
new RevealOnScroll($(".bio"), "60%");
