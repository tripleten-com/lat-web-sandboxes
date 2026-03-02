import { Section } from "./components/Section.js";
import { messageList } from "./utils/constants.js";
import { DefaultCard } from "./components/DefaultCard.js";
import { UserCard } from "./components/UserCard.js";
import { SubmitForm } from "./components/SubmitForm.js";
import { type CardData } from "./types/types.js";

const cardList = new Section<CardData>(
  {
    data: messageList,
    renderer: (item) => {
      const card = item.isOwner
        ? new UserCard(item, ".card-template_type_user")
        : new DefaultCard(item, ".card-template_type_default");

      const cardElement = card.generateCard();

      cardList.setItem(cardElement);
    },
  },
  ".card-list",
);

cardList.renderItems();

const form = new SubmitForm({
  selector: ".form-template",
  handleFormSubmit: (formData) => {
    const card = new UserCard(
      { text: formData.text, isOwner: true },
      ".card-template_type_user",
    );

    const cardElement = card.generateCard();
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
