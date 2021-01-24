import Router from "next/router";
import useSWR from "swr";

const CHECK_SESSION_URL = "/api/session";

const fetchSession = async () => {
  const response = await fetch(CHECK_SESSION_URL);
  return await response.json();
};

export default function useUser({ redirectTo = "/login", doRedirect = true }) {
  const { data: session } = useSWR(CHECK_SESSION_URL, fetchSession);

  console.log("user logged in", session);

  if (
    // If redirectTo is set, redirect if the user was not found.
    doRedirect &&
    redirectTo &&
    !session
  ) {
    Router.push(redirectTo);
  }

  return { session };
}
