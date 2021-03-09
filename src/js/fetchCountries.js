import refs from "./refs";
import { renderCountries, errorMsg } from "./renderCountries";

export default () => {
  if (!refs.inputCountry.value) {
    refs.countriesContainer.innerHTML = "";
    return;
  }
  return fetch(
    `https://restcountries.eu/rest/v2/name/${refs.inputCountry.value}`,
  )
    .then(responce => {
      if (!responce.ok) throw new Error();
      return responce.json();
    })
    .then(renderCountries)
    .catch(errorMsg);
};
