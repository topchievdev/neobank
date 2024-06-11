# Описание:

> **Несколько слов о Webpack:**
> Основной файл конфига находится в корне. Его декомпозированные части находятся в папке config.

## 1. Список команд

```
npm start             — запустить проект
```

```
npm run lint:ts       — проверка линтером
```

```
npm run lint:ts:fix   — фикс линтером
```

```
npm run prettier      — фикс форматтером
```

```
npm run build:dev     — сборка в dev режиме
```

```
npm run build:prod    — сборка в prod режиме
```

## 2. На основе методологии FSD

FEATURE SLICED DESIGN — https://feature-sliced.design/ru/docs/get-started/overview

### Кратко о структуре проекта:

`Сначала имя папки, затем ниже пример`

- `App` — настройки, стили и провайдеры для всего приложения.
  > Примеры: **AppRouter, StoreProvider, style.css, types.ts**
- `Pages` — страницы.
  > Примеры: **HomePage, LoanPage**
- `widgets` (виджеты) — \*\*самостоятельные блоки. (Здесь в них могут соединяться фичи и сущности)
  > Примеры: **Header, Footer, все секции находятся здесь**
- `features` (фичи) — взаимодействия с пользователем, действия, бизнес-логика
  > Примеры: **SendComment, AddToCart, UsersSearch**
- `entities` (сущности) — бизнес-сущности
  > Примеры: **User, Product, Order**
- `shared` — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса
  > Примеры **UIKit, libs, API, const, types, assets**

---

**Слои разделяются на слайсы, которые в свою очередь имеют сегменты, вот примерный вид:**
(processes - устаревший слой, сложные сценарии, покрывающие несколько)

![Схема папок FSD](https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg)
