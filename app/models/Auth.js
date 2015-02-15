/***
 * Authentication module - used to authenticate users with the API
 */
const tokenDefaultExpireTime = new Date().valueOf() + 86400; // 24 Hours from now
class Auth {
    constructor(email, fullName, gender) {

    }

    /**
     * Login function, used to login user with the server
     * @param userId - user FB ID
     * @param generatedPassword - user generated password
     */
    static login(userId,generatedPassword) {
        // first: validate credentials

        // query the db for the relevant user
        // TODO: query the db for userId and generated password
        // TODO: check the results from the query if the is exists
        // TODO: if user is exists
            // TODO: return the user object from the db
        // TODO: if not
            // TODO: return null
    }

    static logout(userId,generatedPassword) {

    }

    static register() {

    }

    /**
     * function used to validate that the userId and generated password actually exists in the DB
     * @param userId
     * @param generatedPassword
     * @returns {null}
     */
    static validateCredentials(userId,generatedPassword) {
        // validate if @userId and @generatedPassword are not empty
        if (!userId || !generatedPassword) {
            return null;
        }

    }
}

export default Auth;