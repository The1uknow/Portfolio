// src/i18n.ts
import ru from "@/locales/ru";
import en from "@/locales/en";
import uz from "@/locales/uz";

export type Lang = "ru" | "en" | "uz";

// Подключаем словари
const dictionaries: Record<Lang, any> = { ru, en, uz };

// Текущий язык (по умолчанию RU)
let currentLang: Lang = "ru";

// === Инициализация языка при старте ===
export function initLang() {
  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved && dictionaries[saved]) {
    currentLang = saved;
  } else {
    currentLang = "ru";
  }
}

// === Смена языка ===
export function setLang(lang: Lang) {
  if (!dictionaries[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  window.location.reload(); // чтобы обновился весь текст
}

// === Получение текущего языка ===
export function getCurrentLang(): Lang {
  return currentLang;
}

// === Перевод строки ===
// Пример ключа: "hero.title"
export function t(path: string): string {
  const parts = path.split(".");
  let obj: any = dictionaries[currentLang];
  for (const p of parts) {
    obj = obj?.[p];
    if (!obj) return path; // если ключ не найден
  }
  return typeof obj === "string" ? obj : path;
}

// === Получение массивов (услуги, навыки и т.п.) ===
export function tArray(path: string): string[] {
  const parts = path.split(".");
  let obj: any = dictionaries[currentLang];
  for (const p of parts) {
    obj = obj?.[p];
    if (!obj) return [];
  }
  return Array.isArray(obj) ? obj : [];
}