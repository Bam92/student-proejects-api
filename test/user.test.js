import { expect } from "chai";
import { describe, it } from "mocha";
import { BASE_API } from "../utils/constants.js";
import request from "./config.test.js";
describe("User workflow", () => {
    let str = (Math.random() + 10).toString(36).substring(7);
    it("Should Register user in DATABASE", (done) => {
        let user = {
            firstName: "Arick",
            lastName: "Bulakali",
            email: str + "@gmail.com",
            password: "123456",
        };
        // 1) Register new User
        request
            .post(BASE_API + "/auth/register")
            .send(user)
            .then((res) => {
                expect(res.status).to.be.equal(201);
                expect(res.body).to.be.a("object");
                done();
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    });
    it("Should Login user", (done) => {
        const user = {
            name: "Arick Bulakali",
            email: "arickwalcott@gmail.com",
            password: "123456",
        };

        // Login User
        request
            .post(BASE_API + "/auth/login")
            .send({
                email: user.email,
                password: user.password,
            })
            .then((res) => {
                expect(res.status).to.be.equal(200);
                // const { token } = res.body.otherData;
                // expect(token).exist();
                done();
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    });
});
