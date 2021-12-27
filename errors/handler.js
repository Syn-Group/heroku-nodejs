exports["not-found"] = async (request, response) => {
    response.status(404);
    response.send('Error 404')
}