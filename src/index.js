var path = require('path');
var React = require('react');

var extnames = ['.html', '.htm'];

function parseHTML() {
  Object.keys(this.sources).forEach((function(filePath) {
    var source = this.sources[filePath];
    if (!source.page) return;
    var extname = path.extname(filePath).toLowerCase();
    if (extnames.indexOf(extname) === -1) return;
    var htmlContent = source.page.Content;
    var Content = React.createClass({
      render: function() {
        return <article dangerouslySetInnerHTML={{__html: htmlContent}}/>;
      }
    });
    source.page.Content = Content;
    this.log.verbose('parseHTML', source.page.Content);
  }).bind(this));
}

module.exports = parseHTML;
