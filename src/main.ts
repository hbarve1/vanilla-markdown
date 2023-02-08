import "./style.css";
import { parseInput } from "./parsers";
import { createElement, createButton } from "./dom";

const body = document.querySelector("body") as HTMLBodyElement;

const toolbar = createElement("div", "flex");
const h1 = createButton("H1");
const h2 = createButton("H2");
const h3 = createButton("H3");
const h4 = createButton("H4");
const h5 = createButton("H5");
const h6 = createButton("H6");
const Bold = createButton("B");
const Italic = createButton("I");
// const Underline =  createButton("");
// const Strike =   createButton("");
// const Left =   createButton("");
// const Center =   createButton("");
// const Right =  createButton("");
// const Justify =  createButton("");
// const Link =   createButton("");
// const Unlink =   createButton("");
// const Image =  createButton("");
// const List =   createButton("");
// const OrderedList =  createButton("");
// const Indent =   createButton("");
// const Outdent =  createButton("");
// const Undo =   createButton("");
// const Redo =   createButton("");
// const Code =   createButton("");
// const Quote =  createButton("");
// const Source =   createButton("");
// const FullScreen =   createButton("");
// const Preview =  createButton("");
// const Print =  createButton("");
// const Save =   createButton("");
// const Clear =  createButton("");
// const SelectAll =  createButton("");
// const RemoveFormat =   createButton("");
// const SpellCheck =   createButton("");
// const FontName =   createButton("");
// const FontSize =   createButton("");
// const FontColor =  createButton("");
// const BackgroundColor =  createButton("");
// const Subscript =  createButton("");
// const Superscript =  createButton("");
// const Table =  createButton("");
// const Emoticons =  createButton("");
// const Characters =   createButton("");
// const InsertHorizontalRule =   createButton("");

const editor = createElement("div", "flex");

body.appendChild(toolbar);
body.appendChild(editor);

toolbar.appendChild(h1);
toolbar.appendChild(h2);
toolbar.appendChild(h3);
toolbar.appendChild(h4);
toolbar.appendChild(h5);
toolbar.appendChild(h6);
toolbar.appendChild(Bold);
toolbar.appendChild(Italic);
// toolbar.appendChild(Underline);
// toolbar.appendChild(Strike);
// toolbar.appendChild(Left);
// toolbar.appendChild(Center);
// toolbar.appendChild(Right);
// toolbar.appendChild(Justify);
// toolbar.appendChild(Link);
// toolbar.appendChild(Unlink);
// toolbar.appendChild(Image);
// toolbar.appendChild(List);
// toolbar.appendChild(OrderedList);
// toolbar.appendChild(Indent);
// toolbar.appendChild(Outdent);
// toolbar.appendChild(Undo);
// toolbar.appendChild(Redo);
// toolbar.appendChild(Code);
// toolbar.appendChild(Quote);
// toolbar.appendChild(Source);
// toolbar.appendChild(FullScreen);
// toolbar.appendChild(Preview);
// toolbar.appendChild(Print);
// toolbar.appendChild(Save);
// toolbar.appendChild(Clear);
// toolbar.appendChild(SelectAll);
// toolbar.appendChild(RemoveFormat);
// toolbar.appendChild(SpellCheck);
// toolbar.appendChild(FontName);
// toolbar.appendChild(FontSize);
// toolbar.appendChild(FontColor);
// toolbar.appendChild(BackgroundColor);
// toolbar.appendChild(Subscript);
// toolbar.appendChild(Superscript);
// toolbar.appendChild(Table);
// toolbar.appendChild(Emoticons);
// toolbar.appendChild(Characters);
// toolbar.appendChild(InsertHorizontalRule);

let inputText = `
# Hello World
## This is a heading
### This is a subheading
#### This is a subheading
##### This is a subheading
###### This is a subheading
This is a paragraph
This is a paragraph

This is a paragraph
* This is a list item
* This is a list item

I **this** to be **bold** and this to be __italic__ and this to be ~~strikethrough~~
this is a link [link](https://www.google.com)
this is an image ![image](https://www.google.com)
this is a code block

_this is a underline_




`;

const textareas = createElement(
  "textarea",
  "w-1/2 m-2 p-2 border border-md border-gray-200 rounded-md resize-none",
  inputText,
  {
    id: "textareas",
    name: "textareas",
    cols: "100",
    rows: "60",
    placeholder: "Enter your text here...",
  },
) as HTMLTextAreaElement;

editor.appendChild(textareas);
const outputContainer = createElement(
  "div",
  "w-1/2 m-2 p-2 border border-md border-gray-200 rounded-md",
  "",
  {
    id: "outputContainer",
  },
);
editor.appendChild(outputContainer);
outputContainer.innerHTML = parseInput(inputText);

document.addEventListener("input", () => {
  outputContainer.innerHTML = parseInput(textareas.value);
});
