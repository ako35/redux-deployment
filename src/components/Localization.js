import React from "react";
import { Dropdown } from "react-bootstrap";
import { languagesList } from "../utils/languages/lang.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../store/language/languageSlice";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu.js";

const Localization = () => {
  const dispatch = useDispatch();

  const languageState = useSelector((state) => state.language);

  const handleSelect = (lang) => {
    dispatch(toggleLanguage(lang));
  }
  return (
    <Dropdown className="my-5">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dil Secin
      </Dropdown.Toggle>
      <DropdownMenu>
        {languagesList.map((lang) => (
          <Dropdown.Item
            onClick={() => handleSelect(lang)}
            key={lang}
            value={lang}
          >
            {lang}
          </Dropdown.Item>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Localization;
