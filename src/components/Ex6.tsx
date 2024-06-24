
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "./store/reducers/select";


const translations = {
  en: {
    hello: "Hello",
    welcome: "Welcome",
  },
  vi: {
    hello: "Xin chào",
    welcome: "Chào mừng",
  },
};

const translate = (key:string, language:string) => {
  return translations[language][key] || key;
};

const Ex6 = () => {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const handleChange = (event: { target: { value: any; }; }) => {
    const selectedLanguage = event.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };

  return (
    <div>
      <select value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h1>{translate("hello", language)}</h1>
      <p>{translate("welcome", language)}</p>
    </div>
  );
};

export default Ex6;
