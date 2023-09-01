class Editor {
    constructor() {
        this.range = new Range();
    }

    addTab(event) {
        if (event.keyCode == 9) {
            event.preventDefault();
            const tab = document.createTextNode('\t');
            this.range.addNode(tab);
        }
    }

    getStyle() {
        const parentNode = this.range.getParentNode();
        const editableStyleAttributes = ["font-weight", "font-size", "font-style"];
        const style = {};

        editableStyleAttributes.forEach(attribute => {
            style[attribute] = parentNode.style[attribute];
        });
        return style;
    }

    toggleStyle(attribute, value) {
        if (this.range.getRange() && this.range.getLength() == 0) {
            this.removeStyle(attribute);
        } else {
            this.applyStyle(attribute, value);
        }
    }

    applyStyle(attribute, value) {
        const styledNode = document.createElement("span");
        styledNode.style[attribute] = value;
        this.range.replaceNode(styledNode);
    }

    removeStyle(attribute) {
        const parentNode = this.range.getParentNode();
        parentNode.style[attribute] = "";
    }
}


// save and load
// history