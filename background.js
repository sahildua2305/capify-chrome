// Set up context menu at install time
chrome.runtime.onInstalled.addListener(function(){
	var context = "selection";
	var title = "Convert to Upper case";
	var id = chrome.contextMenus.create({
		"title": title,
		"contexts": [context],
		"id": "uppercase"
	});
});

// Add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function
function onClickHandler(info, tab){
	//var sText = info.selectionText;
	var sText = window.getSelection();
	var url = "https://www.google.com/search?q="+encodeURIComponent(sText);
	if(info.editable){
		window.open(url, '_blank');
	}
}