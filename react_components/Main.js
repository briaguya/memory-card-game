/** @jsx React.DOM */

var React = require('react'),
  Card = require('./Card');

var Gameboard = React.createClass({

  render: function () {
    var cardArray = [
      'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D',
      'E', 'E',
      'F', 'F',
      'G', 'G',
      'H', 'H'
    ];

    var shuffle = function () {
      var copy = [], length = cardArray.length, i;

      // while there is something left to shuffle
      while (length) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * length--);
        // Move it to the new array.
        copy.push(cardArray.splice(i, 1)[0]);
      }
      return copy;
    };

    var handleClick = function () {
      console.log("flip1");
      setTimeout(100);
      console.log("flip2");
    };

    var cards = shuffle().map(function (card, i) {
      return (
        <Card card={card} key={i} onClick={this.handleClick} ref={'card' + i}/>
      );
    }, this);

    return (
      <div className="container">
        <div className="row"><h1 className="text-center">Memory Game</h1></div>
        <div className="row">
          <div className="board">
            {cards}
          </div>
        </div>
      </div>
    );
  }
});

React.renderComponent(
  <Gameboard/>,
  document.querySelector('Gameboard')
);
