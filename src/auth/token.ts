import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = "oh_access_token";

function isHttps() {
  return window.location.protocol === "https:";
}

export function getAccessToken(): string | undefined {
  return Cookies.get(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token: string) {
  Cookies.set(ACCESS_TOKEN_KEY, token, {
    sameSite: "lax",
    secure: isHttps(),
  });
}

export function clearAccessToken() {
  Cookies.remove(ACCESS_TOKEN_KEY);
}
