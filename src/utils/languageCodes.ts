export const LanguageCodes = {
    en: 'en',
    hi: 'hi',
    pa: 'pa',
  } as const;
  
  export type LanguageCode = keyof typeof LanguageCodes;
  
  