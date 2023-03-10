import MenuItem from "../MenuItem"
function MenuApp() {
  let menuItem = {         
    "itemId": 1,         
    "itemPrice": "12",         
    "itemName": "Lasagne",         
    "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions." 
  }
  return (
    <div className="App">
      <MenuItem {...menuItem}></MenuItem>
    </div>
  )
}

export default MenuApp

import "./App.css"
import MenuApp from "./components/MenuApp"
// let data = {...} (include the data array from above).
function App() {
  return (
    <div className="App">
    <MenuApp></MenuApp>
    </div>
  )
}