const errorHandler = (err, req, res) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    console.log(err);
    res.status(status).send({ message });
};

module.exports = errorHandler;