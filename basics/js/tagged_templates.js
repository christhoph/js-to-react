// Tagged templates | template``

const taggedTemplate = (strings, ...values) => {
  let newContent = "";
  strings.forEach((string, i) => {
    const strong = values[i] ? `<strong>${values[i]}</strong>` : "";
    newContent += `${string} ${strong}`;
  });
  return `<p>${newContent}</p>`;
};

const messageTemplate = taggedTemplate`El ${"trabajo duro"} supera al ${"talento natural"}`;
document.body.innerHTML = messageTemplate;
