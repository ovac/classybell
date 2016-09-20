//Private middleware for testing authentication.

var authenticate = function(rank) {
  
    var userRank = rank || 0;

    return function(req, res, next) {
        req.isAuthenticated() && req.user.rank >= userRank ? next() : res.status(401).json({
            failed: 'unauthorized'
        });
    };

};

module.exports = authenticate;
