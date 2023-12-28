const authenticationMiddleware = (req, res, next) => {
  // Check if the user is authenticated
  if (!req.session || !req.session.user) {
    req.session['url'] = req.url;
    return res.redirect("/login");
  }
  next();
};

module.exports = authenticationMiddleware;
