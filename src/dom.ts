export function createElement(
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

export function createButton(
  text: string,
  className: string = "p-4 m-2 bg-gray-200 rounded-md",
) {
  return createElement("button", className, text);
}
