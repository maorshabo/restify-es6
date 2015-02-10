class Request {
    constructor(httpRequest) {
        //this.user = new User();
        this.timestamp = new Date().valueOf();
        this.requestId = new Date().valueOf();
        this.headers = httpRequest.headers;
        this.body = httpRequest.body || '';
        this.version = httpRequest.version;
        this.method = httpRequest.method;
        this.errors = [];
    }
}
export default Request;