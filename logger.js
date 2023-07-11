
const logger = (req, res , next) => {
    console.log('Hello');
    console.log(req.protocol+'://'+req.get('host')+req.originalUrl) ;
    next();
};



module.exports = logger;