function copyToClipboard(value, callback) {
    var textarea = document.createElement("textarea");
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("Copy");
    textarea.parentNode.removeChild(textarea);
    if (typeof callback === "function") {
        callback(value);
    }
}
