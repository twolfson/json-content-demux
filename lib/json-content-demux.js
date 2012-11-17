/**
 * @param {String} muxStr Muxed content to break up
 * TODO: options is not yet used
 * @param {Object} [options] Options to break up by
 * @param {String|RegExp} [options.delimiter=/\n\r?\n\r?/] Delimiter between JSON and content
 * @returns {Object} retObj
 * @returns {Object} retObj.json JSON found at the head of the content
 * @returns {String} retObj.content Content found in the body
 */
function jsonContentDemux(muxStr, options) {
  // Find where the JSON ends
  var delimiter = /\n\r?\n\r?/g,
      delimiterIndex = muxStr.search();

  // Fallback the dblLineBreakIndex
  if (delimiterIndex === -1) {
    delimiterIndex = 0;
  }

  // Break up the json and content
  var jsonStr = article.slice(0, muxStr),
      json = new Function('return ' + jsonStr + ';')(),
      content = article.slice(muxStr);

  // Prepare a retObj and return
  var retObj = {
        'json': json,
        'content': content
      };
  return retObj;
}

// Export jsonContentDemux
module.exports = jsonContentDemux;