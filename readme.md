# NOTES

- Не нужно писать `import * as React from 'react'` в jsx файлах.
- Предыдущее работает как в .jsx, так и в .js. Т.е. jsx можно использовать в .js и причем без импорта.
- Правда в .js не работает автокомплит для jsx. :(
- "a" tag won't perform client-side navigation; it navigates to the page via the server.
- In order to support client-side navigation, we need to use Next.js's Link API, which is exported via `next/link`.
- When you hit the Back button `next/link` does all the `location.history` handling for you.
- If you need to style `next/link`, you need to do it to the underlying component.
- The only requirement for components placed inside a Link is they should accept an `onClick` prop.
- We can create a page by exporting a React component, and putting that component inside the `pages` directory. Так можно дебажить отдельные компоненты.
