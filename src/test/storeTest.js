describe('createUserRoutes', function(){
    //step2
      before(function(){
    //step3
        var JSONresponse = JSON.stringify(
        {todos: [{name: 'test1',done: true}] }
        )
    //step4
        var setupStub = sinon.stub(todo, 'setup')
        var server = sinon.fakeServer.create();
    //step5
        server.respondWith
        (
          "POST", 
          "http://localhost:7555/createUser", 
          [200, {"Content-Type":"application/json"}, JSONresponse]
        )
      })
    //step6
      it('todo.setup receives an array of todos after todo.init()',
      function() {
        todo.init();
        server.respond();
        assert(setupStub.calledOnce);
        assert(setupStub.calledWith(JSON.parse(JSONresponse.todos)));
      });
    });