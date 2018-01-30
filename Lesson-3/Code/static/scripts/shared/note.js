"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTitle(content) {
    var lineEnd = content.indexOf("\n");
    if (content === "" || lineEnd === 0) {
        return "Untitled";
    }
    if (lineEnd === -1) {
        // Note contains one line
        return content;
    }
    // Get first line
    return content.substring(0, lineEnd);
}
exports.getTitle = getTitle;

//# sourceMappingURL=note.js.map
