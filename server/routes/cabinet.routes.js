const { verifySignUp, authJwt } = require('../middleware');
const controller = require('../controllers/cabinet.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get(
        "/api/pub/cabinets",
        controller.getCabinets
    );
    app.post(
        "/api/pub/cabinets",
        [
            authJwt.verifyToken,
            verifySignUp.checkCabinetNameExisted,
            authJwt.isAdmin
        ],
        controller.setCabinets
    );
};