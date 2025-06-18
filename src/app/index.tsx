import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router/dom";
import { Provider } from "react-redux";

import { keycloak } from "shared/keycloak";
import store from "app/providers/store";
import { router } from "app/providers/routes";

const App: React.FC = () => {
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    if (!authCheck) {
      keycloak.init({ onLoad: "check-sso", pkceMethod: "S256" }).then(() => {
        setAuthCheck(true);
      });
    }
  }, [authCheck]);

  return (
    <React.StrictMode>
      {authCheck && (
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      )}
    </React.StrictMode>
  );
};

export default App;
