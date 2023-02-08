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

  // italic: /^(\*)/,
  italic: /\_\_[^\_\n]+\_\_/gm,
  // italics: /^((\s*(\*)[^\n]+))+$/gm,

  code: /^(```)/,
  // codeblocks: /^((\s*(\`)[^\n]+))+$/gm,

  images: /^((\s*(\!)[^\n]+))+$/gm,

  // p: /^/,
  ul: /^/,
  li: /^(\* )/,
  ol: /^(\d\. )/,

  link: /^(\[)/,
  links: /^((\s*(\!)[^\n]+))+$/gm,
  lists: /^((\s*((\*|\-)|\d(\.|\))) [^\n]+))+$/gm,

  strikeLine: /^(\~\~)/,
  strikethroughs: /\~\~[^\~\n]+\~\~/gm,

  // subscript: /^(\~)/,
  subscripts: /((\s*(\~)[^\n]+))+$/gm,

  superscript: /^(\^)/,
  superscripts: /((\s*(\^)[^\n]+))+$/gm,

  underline: /^(\_\_)/,
  underlines: /^((\s*(\_)[^\n]+))+$/gm,
};
