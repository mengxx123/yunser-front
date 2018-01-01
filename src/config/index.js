let apiDomain
let domain

if (process.env.NODE_ENV === 'production') {
    // apiDomain = 'http://120.78.177.9:1026'
    // apiDomain = 'https://api.yunser.com'
    domain = {
        api: 'https://api.yunser.com'
    }
} else {
    domain = {
        // api = 'http://localhost:1026'
        api: 'http://localhost:1030',
        img: 'img1.yunser.com'
    }
}

module.exports = {
    apiDomain,
    domain
}
