import { expect } from "chai";
import { describe, it } from "mocha";
import { BASE_API } from "../utils/constants.js";
import request from "./config.test.js";
describe("CATEGORIE /api/v1/categories", () => {
    it("Should create a categori", (done) => {
        const str = (Math.random() + 15).toString(36).substring(17);
        const category = {
            name: str,
            description: "",
        };
        request
            .post(BASE_API + "/categories/add")
            .send(category)
            .then((res) => {
                expect(res.status).to.be.equal(201);
                expect(res.body).to.be.a("object");
                done();
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    });
});
