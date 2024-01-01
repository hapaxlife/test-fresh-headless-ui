import { Combobox } from '@headlessui/react'
import { Person } from "../api/persons.ts";
import { useState, useEffect } from "preact/compat";
import { useSignal } from "@preact/signals";
import IconSearch from "tabler_icons_tsx/search.tsx"


function LoadingSpinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      >
      </circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      >
      </path>
    </svg>
  );
}

const comparePeople = (a?: Person, b?: Person): boolean =>
  a?.name.toLowerCase() === b?.name.toLowerCase();

async function fetcher(url: string, query: string): Promise<Person[]> {
  const data = await fetch(`${url}?q=${query}`);
  return data.json();
}

const AsyncCombobox = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | undefined>(
    { id:0, name:""},
  );
  const [query, setQuery] = useState("");
  const filteredPeople = useSignal([ { id: 0, name: "" },])

  let isLoading = true;

  useEffect(() => {
    let isSubscribed = true;

    // declare the async data fetching function
    const fetchData = async () => {
      isLoading = true
      const resp = await fetcher("api/person", query);
      isLoading = false
      if (isSubscribed) {
        if (resp) {
          filteredPeople.value = [...resp];
        } else {
          filteredPeople.value = [];
        }
      }
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);

    // cancel any future `setData`
    return () => isSubscribed = false;
  }, [query]);

  return (
    <Combobox
      value={selectedPerson}
      by={comparePeople}
      onChange={setSelectedPerson}
    >
      <div className={"flex items-center bg-gray-100 px-3"}>
        <IconSearch
          className={"inline-block h-5 w-5 text-gray-500"}
        />
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: Person) => person?.name ?? ""}
          className={"w-full bg-gray-100 py-2 px-3 outline-none"}
          autoComplete={"off"}
        />
        {isLoading && <LoadingSpinner />}
      </div>

      <Combobox.Options>
        {filteredPeople.value?.map((person) => (
          <Combobox.Option
            key={person.id}
            value={person}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-800 py-2 px-3"
          >
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default AsyncCombobox;
