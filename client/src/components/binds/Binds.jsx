import Search from "./Search";
import BindsGrid from "./BindsGrid";

import { BindsProvider } from './../../contexts/bindsContext';

export default function Binds() {
   return (
     <>
       <BindsProvider>
       <Search />
            <BindsGrid />
         </BindsProvider>
     </>
   );
}