import { expect } from "chai";
import { describe, it } from "mocha";
import { BASE_API } from "../utils/constants.js";
import request from "./config.test.js";
describe("User workflow", () => {
    it("Should Register user in DATABASE", async (done) => {
        let user = {
            firstName: "Arick",
            lastName: "Bulakali",
            email: "arickwalcott@gmail.com",
            password: "123456",
        };
        try {
            // 1) Register new User
            const res = await request
                .post(BASE_API + "/auth/register")
                .send(user);
            expect(res.status).to.be.equal(201);
            expect(res.body).to.be.a("object");
            expect(res.body.error).to.be.equal(null);
            done();
        } catch (err) {
            console.error(err);
            throw err;
        }
    });
    it("Should Login user", async (done) => {
        const user = {
            name: "Arick Bulakali",
            email: "arickwalcott@gmail.com",
            password: "123456",
        };
        try {
            // Login User
            const res = await request.post(BASE_API + "/auth/login").send({
                email: user.email,
                password: user.password,
            });

            expect(res.status).to.be.equal(200);
            expect(res.body.alert.error).to.be.equal(null);
            const { token } = res.body.alert;
            expect(token).exist();
            done();
        } catch (err) {
            console.error(err);
            throw err;
        }
    });
});
