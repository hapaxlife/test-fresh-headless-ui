import MyListbox from "../islands/Option.tsx";
import MyAutocomplete from "../islands/Autocomplete.tsx";
import MyPopover from "../islands/Popover.tsx";
import MyTab from "../islands/Tab.tsx";
import MyDropdown from "../islands/Dropdown.tsx";
import AsyncCombobox from "../islands/AsyncCombobox.tsx";

export default function Home() {
  return (
    <>
      <div class="columns-1 content-center">
       
      <div class="container mx-3">
        <p>Autocomplete</p>
        <MyAutocomplete className="flex h-16 items-center px-4" />
   </div>

      
        <p>listbox</p>
        <MyListbox></MyListbox>

        <div class="container mx-auto">

        <MyPopover />
        </div>
        <div class="container mx-auto">
        <MyTab></MyTab>
</div>
        


<div class="container mx-auto">
<MyDropdown></MyDropdown>
</div>
<div class="container mx-auto">
        <AsyncCombobox></AsyncCombobox>
</div>
        </div>

        
    </>
  );
}
