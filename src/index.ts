import { UserCard } from "./components/UserCard.js";
import { DefaultCard } from "./components/DefaultCard.js";
import { messageList } from "./utils/constants.js";

messageList.forEach((item) => {
  const card = item.isOwner 
    ? new UserCard(item, "#card-template-user")
    : new DefaultCard(item, "#card-template-default");

  const cardElement = card.generateCard();
  document.body.append(cardElement);
});

