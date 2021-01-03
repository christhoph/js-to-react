// Templates literals | ``

const name = "John Doe";
const greeting = "Hi,\n my name is " + name;

const greetingLiteral = `Hi,
  my name is ${name}
`;

const userTemplate = (user) => `
  <article class="user">
    <img src="${user.avatar}" alt="${user.name}" />
    <p>${user.name}</p>
  </article>
`;

// Tag template
const userTagTemplate = (strings, value) => `
  <p>${strings[0]}<strong>${value}</strong></p>
`;

userTagTemplate`username: ${name}`;
