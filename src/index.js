'use strict';

const mermaid = require('mermaid');
const mermaidParser = require('./mermaid-parser.js');

module.exports = function mermaid_plugin(md, options) {
  md.mermaid = mermaid;
  options = options || {};
  mermaidParser.functions.initialize(options);
  const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    const code = token.content.trim()
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''
    let langName = ''

    if (info) {
      langName = info.split(/\s+/g)[0]
    }
    if (langName === 'mermaid') {
      return mermaidParser.functions.getMarkup(code)
    }

    return defaultRenderer(tokens, idx, options, env, slf)
  }
}