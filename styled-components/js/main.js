const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'small', 'div', 'main', 'section', 'header', 'nav', 'aside', 'footer', 'button'];

function render(component, container) {
  container.innerHTML = component;
}

function component(strings, ...values) {
  return (props) => {
    let newContent = strings.slice();
    values.forEach((value, index) => {
      newContent[index] += props[value];
    });
    return newContent.join("");
  };
}

function styledComponent(tag) {
  return (styles) => (content) => `
    <${tag} style="${styles}">
      ${content}
    </${tag}>
  `;
}

function generateStyledAPI() {
  return tags.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: styledComponent(curr),
    }),
    {}
  );
}

const styled = generateStyledAPI();

const TitleStyles = styled.h1`
  color: blue;
  font-family: system-ui;
  font-size: 50px;
  text-shadow: 2.5px 2.5px 0 #000;
`;

const props = {
  username: "Cristopher",
  message: "No Te Rindas",
};

const TitleComponent = component`Bienvenido ${"username"}, ${"message"}`(props);

render(TitleStyles(TitleComponent), window.root);
