'use strict'

const yaml = require('yaml')
const path = require('node:path')
const fs = require('node:fs')

function include(filename) {
  return {
    tag: '!include',
    resolve(relative) {
      const resolved = path.resolve(path.dirname(filename), relative)
      return parse(resolved)
    }
  }
}

function parse(filename) {
  const text = fs.readFileSync(filename , 'utf8')
  return yaml.parse(text, { customTags: [ include(filename) ], merge: true })
}

const text = yaml.stringify(parse(process.argv[2]), {
  'blockQuote': 'literal',
  'lineWidth': 200,
})

console.log([
  '# =================================================== #',
  '# Automatically Generated Workflow File, DO NOT EDIT! #',
  '# =================================================== #',
  '',
  text,
].join('\n'))
