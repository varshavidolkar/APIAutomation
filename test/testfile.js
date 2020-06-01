
    var chai = require('chai');
    var supertest = require('supertest');
var server = supertest.agent('http://jsonplaceholder.typicode.com');

describe('Test Suite', function () {
// As response is taking much longer than normal, increasing timeout to 70 Secounds
    this.timeout(70000);

    it('verify GET Method', function (done) {
        
        server.get('/posts/1')
            .expect(200)
            .end(function (err, res) {
                if(!err){
                    console.log(res.body);
                    chai.expect(res.body).to.have.property("userId",1);
                    chai.expect(res.body).to.have.property("id",1);
                    chai.expect(res.body).to.have.property("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
                    chai.expect(res.body).to.have.property("body","quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");

                    done();
                }
                else{
                    console.log(err);
                }
            });
    });

    it('Verify POST Method', function (done) {
        
        server.post('/posts')
              .set('Content-Type', 'application/json')
              .send({
                            title: "foo",
                            body: "bar",
                            userId: 1,
                        })
              .expect(201)
            .end(function (err, res) {
                if(!err){
                    console.log(res.body);
                    chai.expect(res.body).to.have.property("userId",1);
                    chai.expect(res.body).to.have.property("id",101);
                    chai.expect(res.body).to.have.property("title","foo");
                    chai.expect(res.body).to.have.property("body","bar");

                    done();
                }
                else{
                    console.log(err);
                }
            });
    });

    it('Verify PUT Method', function (done) {
        
        server.put('/posts/1')
              .set('Content-Type', 'application/json')
              .send({
                            title: "foo",
                            body: "bar",
                            userId: 1,
                        })
              .expect(200)
            .end(function (err, res) {
                if(!err){
                    console.log(res.body);
                    chai.expect(res.body).to.have.property("userId",1);
                    chai.expect(res.body).to.have.property("id",1);
                    chai.expect(res.body).to.have.property("title","foo");
                    chai.expect(res.body).to.have.property("body","bar");

                    done();
                }
                else{
                    console.log(err);
                }
            });
    });

    // it('Verify PATCH Method', function (done) {
        
    //     server.patch('/posts/1')
    //           .set('Content-Type', 'application/json')
    //           .send({
    //                         title: "foo-PATCH"
    //                     })
    //           .expect(200)
    //         .end(function (err, res) {
    //             if(!err){
    //                 console.log(res.body);
    //                 chai.expect(res.body).to.have.property("userId",1);
    //                 chai.expect(res.body).to.have.property("id",1);
    //                 chai.expect(res.body).to.have.property("title","foo-PATCH");
    //                 chai.expect(res.body).to.have.property("body","bar");

    //                 done();
    //             }
    //             else{
    //                 console.log(err);
    //             }
    //         });
    // });


    // it('Verify DELETE Method', function (done) {
        
    //     server.patch('/posts/1')
    //           .set('Content-Type', 'application/json')
    //           .send({
    //                         title: "foo-PATCH"
    //                     })
    //           .expect(200,done)
    // });

});