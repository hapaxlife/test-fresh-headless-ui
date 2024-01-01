import { Context, Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { logger } from "https://deno.land/x/hono/middleware.ts";

const app = new Hono();

export interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

app.all("/", (c) => c.text("hello"));

// app.all('/api/person', (c) => c.json('person', 200))

app.get("/api/person", (c: Context) => {
  // our backend accepts a "q" query param.
  // this is the query from the autocomplete component.
  const query = c.req.query("q") || "";

  // this logic is moved from the client
  const filteredPeople = query === "" ? people : people.filter((person) => {
    return person.name.toLowerCase().includes(query.toLowerCase());
  });

  return c.json(filteredPeople, 200);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});

app.use("*", logger());

Deno.serve({ port: 8787 }, app.fetch);
