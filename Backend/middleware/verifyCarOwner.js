// middleware/authMiddleware.js
// middleware/verifyCarOwner.js
const verifyCarOwner = (req, res, next) => {
  if (req.session && req.session.carOwnerEmail) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized: Car owner login required" });
  }
};

export default verifyCarOwner;




