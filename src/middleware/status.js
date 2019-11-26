module.exports = () => {
  return function status(req, res, next) {
    res.json({
      status: 'OK'
    });
  };
};
