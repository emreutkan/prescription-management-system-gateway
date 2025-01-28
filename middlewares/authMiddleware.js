const { verifyToken } = require('../utils/env');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        req.user = verifyToken(token);
        next();
    } catch (error) {
        res.status(403).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = authMiddleware;
