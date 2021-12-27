exports["action"] = async (request, response, next) => {
    console.log('Middleware Working');
    next()
}