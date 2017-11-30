let apiDomain
if (process.env.NODE_ENV === 'production') {
    apiDomain = 'http://120.78.177.9:1026'
} else {
    apiDomain = 'http://localhost:1026'
}

module.exports = {
    apiDomain
}
