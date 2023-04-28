import { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import styles from './styles.css';

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
  },
  {
    title: 'Mobile APP',
  },
  {
    viewport:
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover',
  },
];

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export default function App() {
  return (
    <html lang="zh-CN">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-300">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
