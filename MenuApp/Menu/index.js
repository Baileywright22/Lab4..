import React from "react"
import MenuItem from "../MenuItem"
export default class Menu extends React.Component {
  render() {
    return (
      <div><h1>{this.props.menuName} Menu</h1>
      <MenuItem {...this.props.menuItems[0]}></MenuItem>
      </div>
      )
    }}
      import "./App.css"
import MenuApp from "./components/MenuApp"

function App() {
  let menuData = [
    {
      menuName: "Dinner",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "20",
          itemName: "Steak",
          itemDescription:
            "10 oz. grilled sirloin steak with garlic mashed potatoes and mixed veggies.",
        },
        {
          itemId: 2,
          itemPrice: "15",
          itemName: "Seafood Paella",
          itemDescription: "Traditional Spanish rice dish with shrimp, mussels and lobster.",
        },
        {
          itemId: 3,
          itemPrice: "17",
          itemName: "Lamb Chops",
          itemDescription:
            "Tender and juicy 8 oz. lamb chops with rosemary and mint sauce.",
        },
      ],
    },
    {
      menuName: "Dessert",
      menuItems: [
        {
          itemId: 45,
          itemPrice: "8",
          itemName: "Crème Brûlée",
          itemDescription: "Classic French dessert with a caramelized sugar top.",
        },
        {
          itemId: 47,
          itemPrice: "6",
          itemName: "Chocolate Mousse",
          itemDescription: "Rich and creamy chocolate mousse topped with cocoa powder.",
        },
        {
          itemId: 49,
          itemPrice: "5",
          itemName: "Apple Pie",
          itemDescription:
            "Flaky pie crust filled with juicy apples, cinnamon, and sugar.",
        },
        {
          itemId: 50,
          itemPrice: "5",
          itemName: "Cappuccino",
          itemDescription: "Steamed milk with two ristretto shots and espresso",
        },
      ]
    }]}