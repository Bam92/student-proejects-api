import { hash } from "bcrypt";
import { expect } from "chai";
import { BASE_API } from "../utils/constants.js";
import request from "./setup.test.js";
describe("Should regist a user", async (done) => {
    const password = await hash("7288", 12);
    const user = {
        firstName: "Cedric",
        lastName: "Kahungu",
        email: "cedrickahungu@gmail.com",
        password,
    };
    request
        .post(BASE_API + "/auth/register")
        .send(user)
        .then((res) => {
            expect(res.body).to.be.a("object");
            expect(res.status).to.be.equal(201);
            done();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
});
