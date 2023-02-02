import { should } from "chai";
import { describe, it } from "mocha";
import { BASE_API } from "../utils/constants.js";
import request from "./setup.test.js";
should();
describe("USER api/v1/auth/register", () => {
    it("Should regist a user", (done) => {
        const password = "7288";
        const user = {
            firstName: "Cedric",
            lastName: "Kahungu",
            email: "cedrickahungu@gmail.com",
            password,
        };
        request
            .post(BASE_API + "/auth/register")
            .send(user)
            .end((err, res) => {
                res.body.should.to.be.a("object");
                res.status.should.to.be.equal(201);
                done();
            });
    });
});
