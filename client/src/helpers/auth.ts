import keycloak from "./keycloak";

async function InitialiseKeycloak() {
  try {
    await keycloak.init({});
    const login = keycloak.authenticated;
    const token = keycloak.token;
    const userInfo = {
        "username": keycloak.idTokenParsed!.preferred_username,
        "email": keycloak.idTokenParsed!.email,
        "name":keycloak.idTokenParsed!.name,
    }

    console.log(keycloak)

    return {
        userInfo, login, token
    }
  } catch (err: any) {
        console.error(err)
  }
}

export default InitialiseKeycloak
