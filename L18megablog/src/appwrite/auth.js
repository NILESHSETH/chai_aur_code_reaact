import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService { // this is the service which provides all the service to the user like login  to the new hotel and the other thing
    client = new Client();// think like that the form where the user is comming means in this client meathod the the following will be present ---------------
    // loction of the user i.e form where he is coming which url like that 
    account;// in this all the details of the user will be present  

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid);

            // now given all the detail os the use in the upper part
            // now the iser has been identified now the user is persent in the reception area now we can allot te room by taking its account details// the following part is taking/making the user receptoin book first page // means crating a new section mor that user
        this.account = new Account(this.client);
            
    }
        /// now the services providing to the users
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService