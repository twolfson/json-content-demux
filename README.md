# json-content-demux

Break up JSON from content in a JSON-first file

## Getting Started
Install the module with: `npm install json-content-demux`

```javascript
// muxed.md
{
  "title": "This is some muxed JSON and content",
  "options": {
    "Hello": "World!"
  }
}

Here is some content
Om nom nom


// app.js
var jsonContentDemux = require('json-content-demux'),
    muxedContent = fs.readFileSync('muxed.md', 'utf8'),
    demuxedObj = jsonContentDemux(muxedStr);
demuxedObj.json; // {"title":"This is some muxed...","options"}
demuxedObj.content; // "Here is some content\nOm nom nom"
```

## Documentation
jsonContentDemux is currently a single function module with a single purpose.
```js
/**
 * @param {String} muxStr Muxed content to break up
 * @returns {Object} retObj
 * @returns {Object} retObj.json JSON found at the head of the content
 * @returns {String} retObj.content Content found in the body
 */
```

At some point, the scope may increasee to encapsulate any markup language as well as multiple sets of delimited items.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

## Donating
Support this project and [others by twolfson][twolfson-projects] via [donations][twolfson-support-me].

<http://twolfson.com/support-me>

[twolfson-projects]: http://twolfson.com/projects
[twolfson-support-me]: http://twolfson.com/support-me

## License
Copyright (c) 2012 Todd Wolfson
Licensed under the MIT license.
