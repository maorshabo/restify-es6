const errorCodes = [400,401,403,404,405,410,415,422,429];
class Error {
    constructor(code,message,description) {
        this.code = errorCodes.indexOf(code);
        this.message = message;
        this.description = description;
    }
}
export default Error;