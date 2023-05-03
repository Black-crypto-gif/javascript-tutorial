Event handling in JavaScript is the process of responding to events, such as a user clicking a button or a webpage finishing loading. In order to handle events, you need to add an event listener to the element you want to monitor for events.

Here's an example of how to add an event listener to a button:

```html
<button id="myButton">Click me!</button>
```

```js
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
  console.log('Button clicked!');
});
```

In this example, we first get a reference to the button using `getElementById()`. We then add an event listener to the button using `addEventListener()`. The first argument to `addEventListener()` is the type of event we want to listen for (in this case, `'click'`). The second argument is a callback function that will be executed when the event is fired.

Inside the callback function, we can access information about the event through the `event` parameter. For example, we could prevent the default behavior of a form submission like this:

```js
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted!');
});
```

In this example, we're listening for the `'submit'` event on a form element. When the event is fired, we prevent the default behavior of submitting the form using `event.preventDefault()`, and then log a message to the console.

Understanding event handling is an important part of building dynamic web applications with JavaScript.
