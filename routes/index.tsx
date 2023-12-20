import MyListbox from "../islands/Option.tsx";
import MyAutocomplete from "../islands/Autocomplete.tsx";
import MyPopover from "../islands/Popover.tsx";
import MyTab from "../islands/Tab.tsx";
import MyDropdown from "../islands/Dropdown.tsx";


export default function Home() {
  return (
    <>
      <div class="columns-3 content-center">
       
      <div class="container mx-3">
        <p>Autocomplete</p>
        <MyAutocomplete class="flex h-16 items-center px-4" />
   </div>

      
        <p>listbox</p>
        <MyListbox></MyListbox>

        <div class="container mx-auto">

        <MyPopover />
        </div>
        <div class="container mx-auto">
        <MyTab></MyTab>
</div>
        
<MyDropdown></MyDropdown>

        </div>
    </>
  );
}
