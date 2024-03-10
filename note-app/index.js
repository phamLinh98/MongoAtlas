const prefixApi = "http://localhost:3344";
const url = '/sso-login';

function post(a,b){
    return a + b;
}

const login = post(prefixApi, url);
console.log('login', login)