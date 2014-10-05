/** @jsx React.DOM */

var React = require('react');

var Card = React.createClass({

  render: function () {

    return (
      <div className="col-xs-6 col-md-3">
        <div className="thumbnail">
          {this.props.card}
        </div>
      </div>
    );
  }
});

module.exports = Card;
