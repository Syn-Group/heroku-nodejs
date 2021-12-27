const PORT = process.env.PORT || 80;
const App = require('./_App')

App.listen(PORT, () => console.log(`Listening on ${ PORT }`))