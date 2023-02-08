import { createElement } from "./dom";
import { regexList } from "./regex";

export function parseInput(input: string) {
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
