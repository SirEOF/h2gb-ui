H2gb.Router.map(function() {
//  this.resource('binary', function() {
//    this.route('list', { path: '/' } );
//    this.route('show', { path: '/binary/:binary_id' });
//  });
  this.resource('binaries', { path: '/' });
  this.resource('binary', { path: '/binary/:binary_id' }, function() {
    this.route('disassemble');
  });
  this.resource('test');
});

H2gb.BinariesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('binary');
  }
});

H2gb.BinaryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('binary', params.binary_id);
  }
});

H2gb.BinaryDisassembleRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('binary', params.binary_id);
  }
});


//Todos.TodosActiveRoute = Ember.Route.extend({
//  model: function(){
//    return this.store.filter('todo', function(todo) {
//      return !todo.get('isCompleted');
//    });
//  },
//  renderTemplate: function(controller) {
//    this.render('todos/index', {controller: controller});
//  }
//});
