import en from "./en";
import fr from "./fr";

const messages = (locale) => {
  if (locale === "en") {
    return en;
  }
  if (locale === "fr") {
    return fr;
  }
};
export default messages;
