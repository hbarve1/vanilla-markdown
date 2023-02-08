import { createElement } from "./dom";
import { regexList } from "./regex";

export const parseH1 = {
  regex: regexList.h1,
  parse: (line: string) => {
    return createElement(
      "h1",
      "text-3xl font-bold text-slate-900",
      line.slice(2),
    ).outerHTML.toString();
  },
};
export const parseH2 = {
  regex: regexList.h2,
  parse: (line: string) => {
    return createElement(
      "h2",
      "text-3xl font-bold text-slate-900",
      line.slice(3),
    ).outerHTML.toString();
  },
};
export const parseH3 = {
  regex: regexList.h3,
  parse: (line: string) => {
    return createElement(
      "h3",
      "text-3xl font-bold text-slate-900",
      line.slice(3),
    ).outerHTML.toString();
  },
};
export const parseH4 = {
  regex: regexList.h4,
  parse: (line: string) => {
    return createElement(
      "h4",
      "text-3xl font-bold text-slate-900",
      line.slice(3),
    ).outerHTML.toString();
  },
};
export const parseH5 = {
  regex: regexList.h5,
  parse: (line: string) => {
    return createElement(
      "h5",
      "text-3xl font-bold text-slate-900",
      line.slice(3),
    ).outerHTML.toString();
  },
};
export const parseH6 = {
  regex: regexList.h6,
  parse: (line: string) => {
    return createElement(
      "h6",
      "text-3xl font-bold text-slate-900",
      line.slice(3),
    ).outerHTML.toString();
  },
};
export const parseHorizontalLine = {
  regex: regexList.horizontalLine,
  parse: () => {
    return createElement(
      "hr",
      "text-3xl font-bold text-slate-900",
      "",
    ).outerHTML.toString();
  },
};
export const parseBlockquote = {
  regex: regexList.blockquote,
  parse: (line: string) => {
    return createElement(
      "blockquote",
      "text-md",
      line.slice(2),
    ).outerHTML.toString();
  },
};
export const parseBold = {
  regex: regexList.bold,
  parse: (line: string) => {
    let newLine = line;

    line.match(regexList.bold)?.map((str) => {
      const newStr = createElement(
        "b",
        "font-bold text-slate-900",
        str.slice(2, -2),
      ).outerHTML.toString();

      line = newLine.replace(str, newStr);
    });

    return newLine;
  },
};

export function parseInput(input: string) {
  const lines = input.split("\n");
  const output = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (parseH1.regex.test(line)) {
      output.push(parseH1.parse(line));
    } else if (parseH2.regex.test(line)) {
      output.push(parseH2.parse(line));
    } else if (parseH3.regex.test(line)) {
      output.push(parseH3.parse(line));
    } else if (parseH4.regex.test(line)) {
      output.push(parseH4.parse(line));
    } else if (parseH5.regex.test(line)) {
      output.push(parseH5.parse(line));
    } else if (parseH6.regex.test(line)) {
      output.push(parseH6.parse(line));
    } else if (parseBlockquote.parse(line)) {
      line = line.slice(2);
      line = createElement("blockquote", "text-md", line).outerHTML.toString();
    } else if (line.startsWith("```")) {
      line = line.slice(4);
      let code = line;
      // const codeOutput = [];
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
