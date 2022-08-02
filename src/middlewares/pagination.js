const handlePaginate = (req, res, next) => {
    let limit= req.query.limit; 
    let offset = req.query.offset;
    if(!limit || !offset) next();
    else{
        limit = Number(limit);
        offset = Number(offset);
        if(Number.isNaN(limit) || Number.isNaN(offset)) next();
        else{
            req.body.paginate = {limit, offset};
            next();
        }
    }
};

module.exports = handlePaginate;