import { useContext } from "react";
import {TranslationContext} from "../contexts/TranslationContext.tsx";

function Header() {

  const translation = useContext(TranslationContext);

  if (!translation) {
    return null;
  }

  return (
      <h1>
        {translation.greeting}
      </h1>
  );
}

export default Header;