class Editor {
    constructor(name) {
        this.name = name;
        this.document = [];
        this.range = new Range();

        this.editor = document.getElementById("editor");
        this.boldButton = document.getElementById("bold-button");
        this.italicButton = document.getElementById("italic-button");
        this.fontSizeButton = document.getElementById('font-size-button');

        this.bindEventListeners();
    }

    bindEventListeners() {
        this.editor.addEventListener("keydown", (event) => this.addTab(event));
        this.editor.addEventListener("keyup", (event) => this.highlightButtons());
        this.editor.addEventListener("click", () => this.highlightButtons());
        this.boldButton.addEventListener("click", () => this.toggleStyle("font-weight", "bold"));
        this.italicButton.addEventListener("click", () => this.toggleStyle("font-style", "italic"));
        this.fontSizeButton.addEventListener('change', () => {
            this.applyStyle("font-size", `${this.fontSizeButton.value}px`);
        });
    }

    highlightButtons() {
        const currentNode = this.range.getCurrentNode();

        if (currentNode.style["font-weight"] == "bold") {
            this.boldButton.classList.add("highlight");
        } else {
            this.boldButton.classList.remove("highlight");
        }

        if (currentNode.style["font-style"] == "italic") {
            this.italicButton.classList.add("highlight");
        } else {
            this.italicButton.classList.remove("highlight");
        }

        const fontSize = (currentNode.style["font-size"] ? currentNode.style["font-size"].replace(/\D/g,'') : 18);
        this.fontSizeButton.value = fontSize;
        this.fontSizeButton.dispatchEvent(new Event('change'));
    }

    addTab(event) {
        if (event.keyCode == 9) {
            event.preventDefault();
            const tab = document.createTextNode('\t');
            this.range.addNode(tab);
        }
    }

    toggleStyle(attribute, value) {
        if (this.range.getLength() == 0) {
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
        const currentNode = this.range.getCurrentNode();
        currentNode.style[attribute] = "";
    }

}


// save and load
// history
// fontsize
// view 분리