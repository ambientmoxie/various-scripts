// Context: Indesign 

// Create a variable for the active document
var doc = app.activeDocument;

// Get the selected item
var selectedItem = app.selection[0];

// Check if an item is selected
if (!selectedItem) {
    alert("You need to select the item you want to copy");
    exit();
}

// Get the bounds of the selected item
var itemBounds = selectedItem.geometricBounds;

// Loop through each page in the document
for (var i = 0; i < doc.pages.length; i++) {
    var page = doc.pages[i];
    
    // Duplicate the selected item on the current page
    var newItem = selectedItem.duplicate(page);
    
    // Set the bounds of the new item to match the original item
    newItem.geometricBounds = itemBounds;
}

alert("Element copied to all pages!");
