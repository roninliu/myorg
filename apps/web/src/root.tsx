import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
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
    title: 'Web App',
  },
  {
    viewport: 'width=device-width,initial-scale=1',
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
    <html lang="zh-CN" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-sm min-h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
