const express = require("express");
const passport = require("passport");
const router = express.Router();

WEB_APP_CLIENT_URL = process.env.WEB_APP_CLIENT_URL;
WEB_APP_CLIENT_DASHBOARD_URL = `${WEB_APP_CLIENT_URL}/dashboard`;

// @desc auth with google
// @route GET /api/auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc google auth callback
// @route GET /api/auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: WEB_APP_CLIENT_DASHBOARD_URL,
    failureRedirect: WEB_APP_CLIENT_URL,
  }),
  (req, res) => {
    console.log(req.user);
  }
);

// @desc logout user
// @route GET /api/auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(WEB_APP_CLIENT_URL);
});

module.exports = router;
