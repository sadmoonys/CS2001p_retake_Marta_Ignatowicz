class Auth {
    constructor(props) {
        this.authenticated = false;
    }

    token;

    authBearer(data) {
        const resp = JSON.stringify(data)
        const resp2 = JSON.parse(resp)
        this.token = resp2.accessToken
        return this.token
    }

    login(response) {
        const resp = JSON.stringify(response)
        const resp2 = JSON.parse(resp)
        if (resp2.status == 200) {
            return this.authenticated = true;
        }
    }


    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();