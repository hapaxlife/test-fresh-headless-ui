
  
  import { Handlers } from "$fresh/server.ts";

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

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";


  
    // this logic is moved from the client
    const filteredPeople = query === "" ? people : people.filter((person) => {
      return person.name.toLowerCase().includes(query.toLowerCase());
    });

    return new Response(JSON.stringify(filteredPeople), {
      headers: { "Content-Type": "application/json" },
    });
  },
};