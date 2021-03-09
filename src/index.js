import "./styles.css";
import "../node_modules/@pnotify/core/dist/PNotify.css";
import "../node_modules/@pnotify/mobile/dist/PNotifyMobile.css";
import "lodash.debounce";
import fetchCountries from "./js/fetchCountries";
import refs from "./js/refs";
import debounce from "lodash.debounce";

refs.inputCountry.addEventListener("input", debounce(fetchCountries, 500));
