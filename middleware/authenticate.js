// import jwt from "jsonwebtoken";
// import User from "../models/user";

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = async (req, res, next) => {
    console.log(req.cookies);
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, 'tokens.token': token });

        if (!rootUser) {
            throw new Error("User cannot find!!");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (error) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(error);
    }
};

module.exports = authenticate;














// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// const SECRET_KEY = process.env.SECRET_KEY;

// const authenticate = async (req, res, next) => {
//     console.log(req.cookies);
//     try {
//         const token = req.cookies.jwtoken;
//         const verifyToken = jwt.verify(token, SECRET_KEY);

//         const rootUser = await User.findOne({ _id: verifyToken._id, 'tokens.token': token });

//         if (!rootUser) {
//             throw new Error("User cannot find!!");
//         }

//         req.token = token;
//         req.rootUser = rootUser;
//         req.userID = rootUser._id;
//         next();

//     } catch (error) {
//         res.status(401).send('Unauthorized: No token provided');
//         console.log(error);
//     }
// };

// module.exports = authenticate;
