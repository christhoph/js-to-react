const user = {
  name: "Ash",
  lastName: "Ketchum",
  avatar: "./images/ash.jpg",
  bio:
    "Tengo 10 años y mi sueño es convertime en maestro pokemon. Actualmente viajo con Pikachu y Go.",
  city: "Pueblo Paleta",
  social: [150, 160, 130, 255],
};

const User = ({ name, lastName, avatar, bio, city, social }) => {
  const fullname = `${name} ${lastName}`;
  const socialValues = social.map((value) => `<p>${value}</p>`).join("");

  return `
    <div class="user">
      <img src="${avatar}" alt="${fullname}" width="140" height="140" />
      <div class="details">
        <p>${fullname}</p>
      </div>
      <p class="city"><em>${city}</em></p>
      <div class="social">
        ${socialValues}
      </div>
      <div class="bio">
        <p>${bio}</p>
      </div>
    </div>
  `;
};

window.user.innerHTML = User(user);
