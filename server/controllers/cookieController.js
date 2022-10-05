const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('ssid', req.body.username, { httpOnly: true })
  return next()
}

module.exports = cookieController;