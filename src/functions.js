/**
 * 
 * @param {string} text 
 * @param {string} indentationString 
 * 
 * @returns {string}
 */
 function createDocumentationComment(text, indentationString) {
    // Add the [indentationString] to all but the first line
    return text.trim().split("\n").map((line, index) => ((index > 0) ? `${indentationString}` : ``) + `/// ${line}`).join("\n")
}

Pulsar.registerFunction("createDocumentationComment", createDocumentationComment)

Pulsar.registerFunction("includeOriginName", function (tokens, valueToInclude) {
  return tokens.filter(token => {
    return token.origin.name.toLowerCase().indexOf(valueToInclude.toLowerCase()) >= 0;
  });
});