console.log(Clipboard)
console.log("hey!")

$(document).ready(function() { 
    new ClipboardJS('#copyToClipboardButton')

    chrome.tabs.getCurrent(function(tab) {
        console.log(tab)
    })
})

