# Coogle Docs
Simple Google Docs Copycat.

## Features
- Write and Edit the document.
- Style the selected text (fontSize, fontWeight, fontStyle).
- Highlight button when clicked text is styled.
- Unstyle clicked text with button.
- Insert tab when tab key pressed.

## How it works
Editing text with "contenteditable" attribute.<br>
Get selection and its range with Selection & Range API.<br>
Generate styled node and replace the selection. 

## Structure
- model
  - **Editor**
      - Manage editor actions.
  - **Range**
      - Selection & Range wrapper.
  - Document (not implemented)
      - Manage document history.
- **EditorView**
  - Manage UI and User Input Events.

## Known Bugs
- Selected text is not unstyled when click the button.
- 2 Depth styling is not supported.
- Applying multiple styles together is not supported.

## Fruther possible improvement
- Fix bugs.
- Support more styles (lineHeight, fontFamily).
- Support Image embeding.
- Implement Document model for save, load, undo, redo the document using LocalStorage.

