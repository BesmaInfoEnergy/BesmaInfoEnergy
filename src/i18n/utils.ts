import { ui, defaultLang, showDefaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang !== undefined && lang in ui) return lang as Lang;
  return defaultLang as Lang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof lang]) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: string = lang) {
    const pathWithoutSlash = path.replace(/^\/+/, "").replace(/\/+$/, "");
    const isDefaultLang = l === defaultLang;
    const langPrefix = !isDefaultLang || showDefaultLang ? `/${l}` : "";
    if (pathWithoutSlash) {
      return `${langPrefix}/${pathWithoutSlash}`;
    }
    return `${langPrefix || "/"}`;
  };
}
