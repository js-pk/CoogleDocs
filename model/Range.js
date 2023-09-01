class Range {
    constructor() {
        this.selection = window.getSelection();
    }

    getRange() {
        if (this.selection.anchorNode) {
            return this.selection.getRangeAt(0);
        } else {
            return false;
        }
    }

    getLength() {
        const range = this.getRange();
        if (!range) return false;

        return range.startOffset - range.endOffset;
    }

    getParentNode() {
        const range = this.getRange();
        if (!range) return false;

        return(range.commonAncestorContainer.parentNode);
    }

    addNode(node) {
        const range = this.getRange();
        if (!range) return false;

        range.insertNode(node);
        this.setCursorToNodeEnd(node);
    }

    replaceNode(newElement) {
        const range = this.getRange();
        if (!range) return false;

        const oldContent = document.createTextNode(range.toString());
        if (oldContent.length > 0) {
            newElement.append(oldContent);
            range.deleteContents();
            range.insertNode(newElement);
        }
    }

    setCursorToNodeEnd(node) {
        const range = this.getRange();
        if (!range) return false;

        range.setStartAfter(node);
        range.setEndAfter(node);
        this.selection.removeAllRanges();
        this.selection.addRange(range);
    }

}