const errorHandler = (err, req, res,next) => {
    const status = err.status || 500;
    const message = err.message || 'Algo salió mal';	
    console.log(err);
    res.status(status).send({ message });
};

module.exports = errorHandler;