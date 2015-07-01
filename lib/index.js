'use strict';

var path = require('path');
var marked = require('marked');
var React = require('react');

var extnames = ['.html', '.htm'];

function parseHTML() {
  Object.keys(this.sources).forEach((function (filePath) {
    var source = this.sources[filePath];
    if (!source.page) return;
    var extname = path.extname(filePath).toLowerCase();
    if (extnames.indexOf(extname) === -1) return;
    var htmlContent = source.page.content;
    source.page.content = React.createClass({
      displayName: 'Content',
      render: function render() {
        return React.createElement('article', { dangerouslySetInnerHTML: { __html: htmlContent } });
      }
    });
    this.log.verbose('parseHTML', source.page.content);
  }).bind(this));
}

module.exports = parseHTML;