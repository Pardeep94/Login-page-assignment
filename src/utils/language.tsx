import { LanguageCode } from "./languageCodes";

type Translations = {
  [key in LanguageCode]: {
    login: string;
    email: string;
    password: string;
    language: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    emailError: string;
    rememberMe: string;
    forgetPassword: string;

  };
};

const translations: Translations = {
    en: {
        login: 'Log In',
        email: 'Email:',
        password: 'Password:',
        language: 'Language:',
        emailPlaceholder: 'Enter your corporate email',
        passwordPlaceholder: 'Enter your password',
        emailError: 'Please enter a valid corporate email.',
        rememberMe: 'Remember me',
        forgetPassword: 'Forgot password?'
      },
      hi: {
        login: 'लॉगिन',
        email: 'ईमेल:',
        password: 'पासवर्ड',
        language: 'भाषा:',
        emailPlaceholder: 'अपना कॉर्पोरेट ईमेल दर्ज करें',
        passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
        emailError: 'कृपया एक वैध कॉर्पोरेट ईमेल दर्ज करें',
        rememberMe: 'मुझे याद रखें',
        forgetPassword: 'पासवर्ड भूल गए?'
      },
      pa: {
        login: 'ਲੌਗਇਨ',
        email: 'ਈਮੇਲ:',
        password: 'ਪਾਸਵਰਡ:',
        language: 'ਭਾਸ਼ਾ:',
        emailPlaceholder: 'ਆਪਣੀ ਕਾਰਪੋਰੇਟ ਈਮੇਲ ਦਰਜ ਕਰੋ',
        passwordPlaceholder: 'ਆਪਣਾ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ',
        emailError: 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਕਾਰਪੋਰੇਟ ਈਮੇਲ ਦਾਖਲ ਕਰੋ।',
        rememberMe: 'ਮੈਨੂੰ ਯਾਦ ਰੱਖੋ',
        forgetPassword: 'ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?'
      },
};

export default translations;