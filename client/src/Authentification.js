import React from "react";
import passport from "passport";

export default function Authentification({ location }) {
  const params = new URLSearchParams(location.search);

  const provider = params.get("p");

  //   if (provider === "google") {
  //     passport.authenticate("google", succe);
  //   }

  return <div></div>;
}
