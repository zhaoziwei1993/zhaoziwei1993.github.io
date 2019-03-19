function copyToClipboard(value, callback) {
    var textarea = document.createElement("textarea");
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("Copy");
    if (typeof callback === "function") {
        callback(value);
    }
    textarea.parentNode.removeChild(textarea);
}
