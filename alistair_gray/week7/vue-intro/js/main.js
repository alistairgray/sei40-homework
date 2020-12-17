Vue.component('dog-info', {
  props: ['name', 'roundness'],
  data: function(){
    return {
      age: 5
    };
  },
  methods: {
    incrementAge: function(){
      this.age++;
    }
  },
  template: `
    <div>
      <h3 @click="incrementAge">{{name}}</h3>
      <p>
      Roundness: {{roundness}}
      </p>
      <p>
      Age: {{age}}
      </p>
    </div>
  `
}); // end of dog-info component


const myApp = new Vue({
  // Where does this Vue app attach to on the DOM
  el: '#app', // el === element

  // What is the state of the app?
  // i.e. What is the collection of variables that change as a user interacts with your app?
  data: {
    bills: [
      'http://www.fillmurray.com/200/200',
      'http://www.fillmurray.com/300/300',
    ],
    todoList: [
      {text: 'Learn Vue'},
      {text: 'Finish HW'},
      {text: 'Relax'}
    ],
    errorStatus: 'allgood',
    showDiv: true,
    message: 'Hello World!',
    secretGreeting: 'Oi! Stop hovering over me!'
  }, // data

  methods: {

    changeMessage: function(){
      console.log('Button Clicked!');
      this.message = this.message.toUpperCase();
      this.showDiv = !this.showDiv;
    }, // changeMessage()

    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('');
    }// reverseMessage()

  }, // methods

}); // end of new Vue()
