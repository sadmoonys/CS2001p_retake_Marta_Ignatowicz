class Auth {
    constructor(props){
        this.authenticated = false;
    }

    login(response) {
        const resp = JSON.stringify(response)
        const resp2  = JSON.parse(resp)
        console.log('im here')
        if(resp2.status == 200){
            return this.authenticated = true;
        }
    }
    

    logout(cb){
        this.authenticated = false;
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Auth();