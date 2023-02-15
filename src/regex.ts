export const regexList = {
  h1: /^# /,
  h2: /^## /,
  h3: /^### /,
  h4: /^#### /,
  h5: /^##### /,
  h6: /^###### /,

  horizontalLine: /^-{3,}/,
  // hr: /^((\s*(\-|\*)[^\n]+))+$/gm,

  blockquote: /^(\> )/,
  // blockquotes: /^((\s*(\>)[^\n]+))+$/gm,

  bold: /\*\*[^\*\n]+\*\*/gm,

  italic: /\_\_[^\_\n]+\_\_/gm,
  // italic: /^(\*)/,
  // italics: /^((\s*(\*)[^\n]+))+$/gm,

  code: /^(```)/,
  // codeblocks: /^((\s*(\`)[^\n]+))+$/gm,

  images: /^((\s*(\!)[^\n]+))+$/gm,

  ul: /^/,
  li: /^(\* )/,
  ol: /^(\d\. )/,
  // p: /^/,

  link: /^(\[)/,
  links: /^((\s*(\!)[^\n]+))+$/gm,
  lists: /^((\s*((\*|\-)|\d(\.|\))) [^\n]+))+$/gm,

  strikeLine: /^(\~\~)/,
  strikethroughs: /\~\~[^\~\n]+\~\~/gm,

  subscripts: /((\s*(\~)[^\n]+))+$/gm,
  // subscript: /^(\~)/,

  superscript: /^(\^)/,
  superscripts: /((\s*(\^)[^\n]+))+$/gm,

  underline: /^(\_\_)/,
  underlines: /^((\s*(\_)[^\n]+))+$/gm,
};
