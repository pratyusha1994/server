
var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
const expect = chai.expect;

var server = require("../server");

let chaiHttp = require("chai-http");
chai.use(chaiHttp);
 /**
     * Test the GET route
     */
  describe("GET", () => {
    it("It should GET all the tasks", (done) => {
        chai.request(server)
            .get("/api/client/getclient")
            .end((err, res) => {
            //     res.should.have.status(200);
            //    res.body.json;
            //     res.body.should.be.a('object');
            //    res.body.length.should.be.eql(2);
            expect(res.status).to.be.equal(200);   
                expect(res.body).to.be.a('object');
                done();
            });
    });
   })
   describe("POST /amazon/", () => {
    it("It should POST a new Grocery item", (done) => {
      
        chai.request(server)                
           .post("/api/client/addclient")
           .send( {
            couriers: "gift",
            ecommerce: "Myntra",
            orders: "seven"
        })
           .end((err, res) => {
               res.should.have.status(200);
                            
           done();
            });
   });
})

describe("DELETE ", () => {
    it("It should DELETE an existing task", (done) => {
        const id = 'ten';
        chai.request(server)                
            .delete("/api/client/deleteclient/" + id)
            
            .end((err, response) => {
                response.should.have.status(200);
            done();
            });
    });

})
describe("UPDATE ", () => {
    it("It should UPDATE an existing task", (done) => {
        const id = 'two';
        chai.request(server)                
            .put("/api/client/updateclient/:id" + id)
            .send({
            couriers: "nextstep",
            ecommerce: "trends",
            orders: "welcome"
            })
            .end((err, response) => {
                response.should.have.status(200);
            done();
            });
    });

})