'use strict';

const mermaid = require('mermaid');

const initIdGeneratior = class iterator {
  constructor(deterministic, seed) {
    this.deterministic = deterministic;
    this.seed = seed;

    this.count = seed ? seed.length : 0;
  }

  next() {
    if (!this.deterministic) return Date.now() + '' + this.count++;

    return this.count++;
  }
};

const functions = {
  options: {},
  idGeneratior: null,

  initialize(options) {
    if (options) {
      this.options = options;
      this.idGeneratior = new initIdGeneratior(false, 'mermaid');
      mermaid.initialize(options);
    }
  },

  getMarkup(txt) {
    var parserMermaidTxt = this.parserMermaid(txt);
    return `<div class="mermaid">\n${parserMermaidTxt}\n</div>\n`;
  },

  parserMermaid(txt) {
    var parserMermaidTxt;
    const id = 'mermaid-' + this.idGeneratior.next();
    txt = this.entityDecode(txt)
      .trim()
      .replace(/<br\s*\/?>/gi, '<br/>');
    try {
      mermaid.render(id, txt, function (svgCode) {
        parserMermaidTxt = svgCode;
      })
      return parserMermaidTxt;
    } catch (error) {
      return `<pre>\n${error}</pre>`
    }

  },

  entityDecode(html) {
    var decoder = document.createElement('div');
    // Escape HTML before decoding for HTML Entities
    html = escape(html).replace(/%26/g, '&').replace(/%23/g, '#').replace(/%3B/g, ';');
    // decoding
    decoder.innerHTML = html;
    return unescape(decoder.textContent);
  },

}

module.exports = {
  functions
};
