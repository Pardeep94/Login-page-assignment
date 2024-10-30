import translations from "./language";
import { LanguageCode } from "./languageCodes";

const isValidLanguageCode = (lang: string): lang is LanguageCode => {
    return lang in translations;
  };

  export default isValidLanguageCode;