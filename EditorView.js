class EditorView {
    constructor() {
        this.editor = new Editor("CoogleDocs");

        this.editorView = document.getElementById("editor");
        this.boldButton = document.getElementById("bold-button");
        this.italicButton = document.getElementById("italic-button");
        this.fontSizeButton = document.getElementById('font-size-button');

        this.bindEventListeners();
    }

    bindEventListeners() {
        this.editorView.addEventListener("keyup", (event) => this.highlightButtons());
        this.editorView.addEventListener("click", () => this.highlightButtons());

        this.editorView.addEventListener("keydown", (event) => this.editor.addTab(event));
        this.boldButton.addEventListener("click", () => this.editor.toggleStyle("font-weight", "bold"));
        this.italicButton.addEventListener("click", () => this.editor.toggleStyle("font-style", "italic"));
        this.fontSizeButton.addEventListener('change', () => {
            this.editor.applyStyle("font-size", `${this.fontSizeButton.value}px`);
        });
    }

    highlightButtons() {
        const style = this.editor.getStyle();
        this.toggleBoldButton(style);
        this.toggleItalicButton(style);
        this.updateFontSizeButton(style);
    }

    toggleBoldButton(style) {
        if (style["font-weight"] == "bold") {
            this.boldButton.classList.add("highlight");
        } else {
            this.boldButton.classList.remove("highlight");
        }
    }

    toggleItalicButton(style) {
        if (style["font-style"] == "italic") {
            this.italicButton.classList.add("highlight");
        } else {
            this.italicButton.classList.remove("highlight");
        }
    }

    updateFontSizeButton(style) {
        const fontSize = (style["font-size"] ? style["font-size"].replace(/\D/g,'') : 18);
        this.fontSizeButton.value = fontSize;
    }

}

const editorView = new EditorView();