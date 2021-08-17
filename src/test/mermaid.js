'use strict'

const md = require('markdown-it')
const mermaidPlugin = require('./../index.js')

describe('markdown-it-mermaid: mermaid', function() {

  it('test logging', function () {
    console.log(md().use(mermaidPlugin).render(`\`\`\`mermaid
    graph TD
        A[Christmas] -->|Get money| B(Go shopping)
        B --> C{Let me think}
        C -->|One| D[Laptop]
        C -->|Two| E[iPhone]
        C -->|Three| F[Car]
    \`\`\``));
  });

})
