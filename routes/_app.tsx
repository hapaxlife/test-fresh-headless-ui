import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-projectHeadless</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main className="mx-auto max-w-md">
          <h1 className="mt-5 text-center text-3xl font-bold">
            Combobox Example
          </h1>
          <div className="mt-5 shadow-xl focus-within:ring-2 focus-within:ring-blue-500">
            <Component />
          </div>
        </main>
      </body>
    </html>
  );
}
