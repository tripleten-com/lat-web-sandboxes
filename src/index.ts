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

// Instanciamos el formulario
const form = new SubmitForm({
  selector: "#form-template",
});

// Usamos Section para renderizar un solo elemento (el formulario)
// Como no hay lista de datos, pasamos un array vacío y un renderer vacío
const formRenderer = new Section<unknown>(
  {
    data: [],
    renderer: () => {},
  },
  ".form-section",
);

const formElement = form.generateForm();
formRenderer.setItem(formElement); // El formulario aparece en el DOM
