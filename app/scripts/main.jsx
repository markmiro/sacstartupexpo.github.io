(function () {
  'use strict';
  // console.log($('html'));
})();

var $ = document.querySelector.bind(document);

var x = React.createClass({
  render: function () {
    return <div class="x">{this.props.children}</div>;
  }
});

var Bla = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello</h1>
        <x>Something</x>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
});

// React.render(<h1>Hello, world!</h1>, $('.hero'));
