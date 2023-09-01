class Range {
    constructor() {
        this.selection = window.getSelection();
    }

    getRange() {
        return this.selection.getRangeAt(0);
    }

    getLength() {
        const range = this.getRange();
        return range.startOffset - range.endOffset;
    }

    getParentNode() {
        const range = this.getRange();
        return(range.commonAncestorContainer.parentNode);
    }

    addNode(node) {
        const range = this.getRange();
        range.insertNode(node);
        this.setCursorToNodeEnd(node);
    }

    replaceNode(newElement) {
        const range = this.getRange();
        const oldContent = document.createTextNode(range.toString());
        if (oldContent.length > 0) {
            newElement.append(oldContent);
            range.deleteContents();
            range.insertNode(newElement);
        }
    }

    setCursorToNodeEnd(node) {
        const range = this.getRange();
        range.setStartAfter(node);
        range.setEndAfter(node);
        this.selection.removeAllRanges();
        this.selection.addRange(range);
    }

}