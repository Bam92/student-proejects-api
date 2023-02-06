import { BASE_API } from "../utils/constants.js";
import request from "./setup.test.js";
describe("User workflow", () => {
    it("Should Register user in DATABASE", (done) => {
        let user = {
            name: "Arick Bulakali",
            email: "arickwalcott@gmail.com",
            password: "123456",
        };

        // 1) Register new User
        request
            .post(BASE_API + "/auth/register")
            .send(user)
            .then((res) => {
                expect(res.status).to.be.equal(201);
                expect(res.body).to.be.a("object");
                expect(res.body.alert.error).to.be.equal(null);
                done();
            })
            .catch((err) => {
                done();
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
                expect(res.body.alert.error).to.be.equal(null);
                const { token } = res.body.alert;
                expect(token).exist();
                done();
            })
            .catch((err) => {
                done();
                throw err;
            });
    });
});
