function middleware1(req, res, next){
    console.log(req.headers);
    if(parseInt(req.headers.userid,10)===101){
        next();
    }else{
        req.sendStatus(403);
    }
}

module.exports = middleware1;

    