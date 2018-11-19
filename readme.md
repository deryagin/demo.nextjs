# NOTES

- Не нужно писать `import * as React from 'react'` в jsx файлах?
- Предыдущее работает как в .jsx, так и в .js. Т.е. jsx можно использовать в .js и причем без импорта.
- Правда в .js не работает автокомплит для jsx. :(
- "a" tag won't perform client-side navigation; it navigates to the page via the server.
- In order to support client-side navigation, we need to use Next.js's Link API, which is exported via `next/link`.
- When you hit the Back button `next/link` does all the `location.history` handling for you.
- If you need to style `next/link`, you need to do it to the underlying component.
- The only requirement for components placed inside a Link is they should accept an `onClick` prop.
- We can create a page by exporting a React component, and putting that component inside the `pages` directory. Так можно дебажить отдельные компоненты. Делаем symlink из `pages` на компонент и дебажим его.
- HOC `withRouter` from "next/router" will inject the Next.js router as a property.
- In the `<Link>` element, we have used another prop called `as`. That's the URL which we need to show on the browser. The URL your app sees is mentioned in the `href` prop. Но лучше это не юзать. Т.к. это трэшь, когда в браузере показывается один URL, а внутри приложения используется совсем лругой URL.
- Next.js comes with a standard API to fetch data for pages. We do it using an async function called `getInitialProps`.  We can write our `getInitialProps` to work on both server and the client.
- First of all we need to install `isomorphic-unfetch`. Возможно `axios` лучше?
-

# TODO
- Настроить TS.
- Настроить импорты от корня проекта.
- Попробывать настроить структуру
    client
    public
    server
    shared