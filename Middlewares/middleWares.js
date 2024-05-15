// MIDDLEWARES

const authMiddleWare = (req, res, next) => {
  console.log(req.query);
  if (req.query.password === "123" || req.query.password === "revanth") {
    next();
  } else {
    res.sendStatus(401);
  }
};

const dataMiddleWare = (req, res, next) => {
  console.log(req.query);
  if (req.query.auth === "xyz") {
    next();
  } else {
    res.sendStatus(404);
  }
};
