import { regexList } from "./regex";

describe("regex suits", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should match H1", () => {
    expect(regexList.h1.test("# This is h1")).toBe(true);
  });
  test("should match H1", () => {
    expect(regexList.h1.test("# This is h1")).toBe(true);
  });
  test("should match H2", () => {
    expect(regexList.h2.test("## this is h2")).toBe(true);
  });
  test("should match H3", () => {
    expect(regexList.h3.test("### This is h3")).toBe(true);
  });
  test("should match H4", () => {
    expect(regexList.h4.test("#### This is h4")).toBe(true);
  });
  test("should match H5", () => {
    expect(regexList.h5.test("##### This is h5")).toBe(true);
  });
  test("should match H6", () => {
    expect(regexList.h6.test("###### This is h6")).toBe(true);
  });

  test("should match bold", () => {
    expect(regexList.bold.test("This is **bolasdd** a")).toBe(true);
  });

  test("should match italic", () => {
    expect(regexList.italic.test("This is __italic__")).toBe(true);
  });
  test("should match underline", () => {
    expect(regexList.underlines.test("This is __ underline")).toBe(false);
  });
  test("should match horizontal line", () => {
    expect(regexList.horizontalLine.test("This is __--- horizontal line")).toBe(
      false,
    );
    expect(regexList.horizontalLine.test("---")).toBe(true);
    expect(regexList.horizontalLine.test("--- anything")).toBe(true);
    expect(regexList.horizontalLine.test(" --- anything")).toBe(false);
  });

  // test("should match link", () => {
  //   expect(regexList.links.test("[link](https://www.google.com)")).toBe(false);
  // });

  test("should match image", () => {
    expect(regexList.images.test("![image](https://www.google.com)")).toBe(
      true,
    );
  });

  test("should match code", () => {
    expect(regexList.code.test("```")).toBe(true);
  });

  test("should match strikeLine", () => {
    expect(regexList.strikeLine.test("~~")).toBe(true);
    expect(regexList.strikeLine.test("~~ This is canceled line")).toBe(true);
  });

  test("should match blockquote", () => {
    expect(regexList.blockquote.test("> This is blockquote")).toBe(true);
  });

  test("should match strikethrough", () => {
    expect(regexList.strikethroughs.test("~~This is strikethrough~~")).toBe(
      true,
    );
  });

  test("should match subscript", () => {
    expect(regexList.subscripts.test("This is ~subscript ")).toBe(true);
  });

  test("should match superscript", () => {
    expect(regexList.superscripts.test("This is ^superscript ")).toBe(true);
  });

  // test("should match list", () => {
  //   expect(regexList.lists.test("This is list")).toBe(false);
  // });

  // test("should match ordered list", () => {
  //   expect(regexList.ol.test("1. This is ordered list")).toBe(true);
  // });

  // test("should match unordered list", () => {
  //   expect(regexList.ul.test("* This is unordered list")).toBe(true);
  // });

  // test("should match paragraph", () => {
  //   expect(regexList.p.test("This is paragraph")).toBe(true);
  // });
});
