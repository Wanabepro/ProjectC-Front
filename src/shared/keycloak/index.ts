import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
  url: "/keycloak",
  realm: "ProjectC",
  clientId: "front",
});
