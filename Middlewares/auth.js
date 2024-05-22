import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  try {
    const header = req.get("Authorization").split("Bearer ");
    const token = header[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401);
  }
};

export default authentication;
