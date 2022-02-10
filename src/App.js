import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useSelector } from "react-redux";
import { setToken } from "./Services/HttpRequest";
import { IntlProvider } from "react-intl";
import switcher from "./locale/switcher";

function App() {
  const user = useSelector((state) => state.AuthReducer.user);
  const locale = useSelector((state) => state.LangReducer.locale);
  let isAuth = false;
  if (user !== null) {
    setToken("token", user.jwt);
    isAuth = true;
  } else {
    isAuth = false;
  }
  return (
    <IntlProvider
      locale={locale}
      messages={switcher(locale)}
      defaultLocale="en"
    >
      <Router>
        {!isAuth && <PublicRoutes />}
        {isAuth && <PrivateRoutes />}
      </Router>
    </IntlProvider>
  );
}

export default App;
