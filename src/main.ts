import "./style.css";

const body = document.querySelector("body") as HTMLBodyElement;

function createElement(
  type: string,
  className: string = "",
  innerHTML: string = "",
  attributes: { [key: string]: string } = {},
) {
  const element = document.createElement(type);
  element.innerHTML = innerHTML;
  element.classList.add(...className.trim().split(" "));
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

function createButton(
  text: string,
  className: string = "p-4 m-2 bg-gray-200 rounded-md",
) {
  return createElement("button", className, text);
}

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
const regexList = {
  blockquote: /^(\> )/,
  blockquotes: /^((\s*(\>)[^\n]+))+$/gm,
  bold: /\*\*[^\*\n]+\*\*/gm,
  // bold: /^(\*\*)/,
  bolds: /^((\s*(\*\*)[^\n]+))+$/gm,
  code: /^(```)/,
  codeblocks: /^((\s*(\`)[^\n]+))+$/gm,
  h1: /^# /,
  h2: /^## /,
  h3: /^### /,
  h4: /^#### /,
  h5: /^##### /,
  h6: /^###### /,
  hr: /^((\s*(\-|\*)[^\n]+))+$/gm,
  // hr: /^(\-\-\-)/,
  images: /^((\s*(\!)[^\n]+))+$/gm,
  img: /^(\!\[)/,
  // italic: /^(\*)/,
  italic: /\_\_[^\_\n]+\_\_/gm,
  italics: /^((\s*(\*)[^\n]+))+$/gm,
  li: /^(\* )/,
  link: /^(\[)/,
  links: /^((\s*(\!)[^\n]+))+$/gm,
  lists: /^((\s*((\*|\-)|\d(\.|\))) [^\n]+))+$/gm,
  ol: /^(\d\. )/,
  p: /^/,
  strike: /^(\~\~)/,
  strikethroughs: /\~\~[^\~\n]+\~\~/gm,
  subscript: /^(\~)/,
  subscripts: /^((\s*(\~)[^\n]+))+$/gm,
  superscript: /^(\^)/,
  superscripts: /^((\s*(\^)[^\n]+))+$/gm,
  ul: /^(\* )/,
  underline: /^(\_\_)/,
  underlines: /^((\s*(\_)[^\n]+))+$/gm,
};

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
);

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

document.addEventListener("input", (e: Event) => {
  // console.log(e?.target?.value);
  inputText = parseInput(textareas.value);
  outputContainer.innerHTML = inputText;
});

function parseInput(input: string) {
  const lines = input.split("\n");
  const output = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.startsWith("# ")) {
      output.push(
        createElement(
          "h1",
          "text-3xl font-bold text-slate-900",
          line.slice(2),
        ).outerHTML.toString(),
      );
    } else if (line.startsWith("## ")) {
      output.push(
        createElement(
          "h2",
          "text-2xl font-bold text-slate-900",
          line.slice(3),
        ).outerHTML.toString(),
      );
    } else if (line.startsWith("### ")) {
      output.push(
        createElement(
          "h3",
          "text-xl font-bold text-slate-900",
          line.slice(4),
        ).outerHTML.toString(),
      );
    } else if (line.startsWith("#### ")) {
      output.push(
        createElement(
          "h4",
          "text-lg font-bold text-slate-900",
          line.slice(5),
        ).outerHTML.toString(),
      );
    } else if (line.startsWith("##### ")) {
      output.push(
        createElement(
          "h5",
          "text-base font-bold text-slate-900",
          line.slice(6),
        ).outerHTML.toString(),
      );
    } else if (line.startsWith("###### ")) {
      output.push(
        createElement(
          "h6",
          "text-sm font-bold text-slate-900",
          line.slice(7),
        ).outerHTML.toString(),
      );
    } else if (line.startsWith("> ")) {
      line = line.slice(2);
      line = createElement("blockquote", "text-md", line).outerHTML.toString();
    }
    console.log(line);

    if (line.startsWith("```")) {
      line = line.slice(4);
      let code = line;
      const codeOutput = [];
      console.log({ code });
      i += 1;
      for (let j = i; j < lines.length; j++, i++) {
        if (lines[j].startsWith("```")) {
          break;
        }
        code += "\n" + lines[j];
        // codeOutput.push(
        //   createElement("code", "text-md", lines[j]).outerHTML.toString(),
        // );
        console.log({ code });
      }
      const codeTag = createElement(
        "code",
        "text-md",
        code,
      ).outerHTML.toString();
      const preTag = createElement(
        "pre",
        "whitespace-pre-wrap italic bg-slate-500 rounded-md p-2 text-slate-200",
        codeTag,
      ).outerHTML.toString();

      output.push(preTag);

      continue;
    }

    if (regexList.bold.test(line)) {
      line.match(regexList.bold)?.map((str) => {
        const newStr = createElement(
          "b",
          "font-bold text-slate-900",
          str.slice(2, -2),
        ).outerHTML.toString();

        line = line.replace(str, newStr);
      });
    }
    if (regexList.italic.test(line)) {
      line.match(regexList.italic)?.map((str) => {
        const newStr = createElement(
          "i",
          "bg-red text-slate-900 italic",
          str.slice(2, -2),
        ).outerHTML.toString();

        line = line.replace(str, newStr);
      });
    }
    if (regexList.strikethroughs.test(line)) {
      line.match(regexList.strikethroughs)?.map((str) => {
        const newStr = createElement(
          "del",
          "bg-red-500 text-slate-900 italic",
          str.slice(2, -2),
        ).outerHTML.toString();

        line = line.replace(str, newStr);
      });
    }
    if (regexList.underlines.test(line)) {
      line.match(regexList.underlines)?.map((str) => {
        const newStr = createElement(
          "ins",
          "bg-red-500 text-slate-900 italic",
          str.slice(1, -1),
        ).outerHTML.toString();

        line = line.replace(str, newStr);
      });
    }

    output.push(createElement("p", "text-md", line).outerHTML.toString());
  }

  return output.join("");

  return lines
    .map((line) => {
      if (line.startsWith("# ")) {
        return createElement(
          "h1",
          "text-3xl font-bold text-slate-900",
          line.slice(2),
        ).outerHTML.toString();
      }
      if (line.startsWith("## ")) {
        return createElement(
          "h2",
          "text-2xl font-bold text-slate-900",
          line.slice(3),
        ).outerHTML.toString();
      }
      if (line.startsWith("### ")) {
        return createElement(
          "h3",
          "text-xl font-bold text-slate-900",
          line.slice(4),
        ).outerHTML.toString();
      }
      if (line.startsWith("#### ")) {
        return createElement(
          "h4",
          "text-lg font-bold text-slate-900",
          line.slice(5),
        ).outerHTML.toString();
      }
      if (line.startsWith("##### ")) {
        return createElement(
          "h5",
          "text-base font-bold text-slate-900",
          line.slice(6),
        ).outerHTML.toString();
      }
      if (line.startsWith("###### ")) {
        return createElement(
          "h6",
          "text-sm font-bold text-slate-900",
          line.slice(7),
        ).outerHTML.toString();
      }
      if (regexList.bold.test(line)) {
        line.match(regexList.bold)?.map((str) => {
          const newStr = createElement(
            "b",
            "font-bold text-slate-900",
            str.slice(2, -2),
          ).outerHTML.toString();

          line = line.replace(str, newStr);
        });
      }
      if (regexList.italic.test(line)) {
        line.match(regexList.italic)?.map((str) => {
          const newStr = createElement(
            "i",
            "bg-red text-slate-900 italic",
            str.slice(2, -2),
          ).outerHTML.toString();

          line = line.replace(str, newStr);
        });
      }
      if (regexList.strikethroughs.test(line)) {
        line.match(regexList.strikethroughs)?.map((str) => {
          const newStr = createElement(
            "del",
            "bg-red-500 text-slate-900 italic",
            str.slice(2, -2),
          ).outerHTML.toString();

          line = line.replace(str, newStr);
        });
      }
      if (regexList.strikethroughs.test(line)) {
        line.match(regexList.strikethroughs)?.map((str) => {
          const newStr = createElement(
            "del",
            "bg-red-500 text-slate-900 italic",
            str.slice(2, -2),
          ).outerHTML.toString();

          line = line.replace(str, newStr);
        });
      }

      return createElement("p", "text-md", line).outerHTML.toString();
    })
    .join("");
}
