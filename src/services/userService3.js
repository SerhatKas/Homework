import { users } from "../data/users.js"
import { DataError } from "../models/dataErrors.js"

export default class UserService3 {
    constructor() {
        this.customers = []
        this.employees = []
        this.errors = []
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (this.validateCustomer(user) && this.validateEmail(user)) {
                        this.customers.push(user)
                    }

                    break;
                case "employee":
                    if (this.validateCustomer(user)) {
                        this.customers.push(user)
                    }
                    break;


                default:
                    this.errors.push(new DataError("Geçersiz Veri", user))
                    break;
            }

        }
    }

    validateCustomer(user) {
        let requiredFields = ["id", "firstName", "lastName", "age"];
        let hasErrors = false;
        for (const field of requiredFields) {
            if (!user[field]) {
                this.errors.push(new DataError("Geçersiz Alan :" + field, user))
                hasErrors = true;
            }
        }
        if (user.age < 0 && hasErrors === false || !Number.isInteger(user.age)) {
            this.errors.push(new DataError("Yaş 0 'dan küçük ve String değer" + user.age, user))
            hasErrors=true

        }


        return !hasErrors;
    }

    validateEmail(user){
        let hasErrorEmail = false;
        if( !user.email.includes("@") && !user.email.endsWith(".com")){
            this.errors.push(new DataError("Email Geçersiz."+user.email,user))
            hasErrorEmail = true
        }
        return !hasErrorEmail;
    }




}