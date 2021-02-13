WEB_APP_CLIENT_URL = process.env.WEB_APP_CLIENT_URL;
WEB_APP_CLIENT_DASHBOARD_URL = `${WEB_APP_CLIENT_URL}/dashboard`;

module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({
        authenticated: false,
        message: "user has not been authenticated",
      });
    }
  },
};
