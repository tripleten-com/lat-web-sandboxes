import { UserCard } from "./components/UserCard.js";
import { DefaultCard } from "./components/DefaultCard.js";
import { messageList } from "./utils/constants.js";
import { Section } from "./components/Section.js";
import { SubmitForm } from "./components/SubmitForm.js";
import type { CardData } from "./types/types.js";

const cardList = new Section<CardData>(
  {
    data: messageList,
    renderer: (item) => {
      const card = item.isOwner
        ? new UserCard(item, "#card-template-user")
        : new DefaultCard(item, "#card-template-default");

      const cardElement = card.generateCard();
      cardList.setItem(cardElement);
    },
  },
  ".card-list",
);

cardList.renderItems();

const form = new SubmitForm({
  selector: "#form-template",
  // Definimos qué ocurre cuando se envía el formulario (acoplamiento débil)
  handleFormSubmit: (formData) => {
    // Creamos una nueva tarjeta con los datos del formulario
    const card = new UserCard(
      { text: formData.text, isOwner: true },
      "#card-template-user",
    );

    const cardElement = card.generateCard();
    // Añadimos la nueva tarjeta al chat usando la instancia de cardList
    cardList.setItem(cardElement);
  },
});

const formRenderer = new Section<unknown>(
  {
    data: [],
    renderer: () => {},
  },
  ".form-section",
);

const formElement = form.generateForm();

formRenderer.setItem(formElement);
