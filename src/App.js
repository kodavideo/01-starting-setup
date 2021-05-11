//takoda studying react
// branch tings WHAT
// we keep to yolo 

import ExpenseItem from './components/ExpenseItem'

function App() {

// const are used for info passed through into jsx, big things happen here
const expenses = [
{
  id: 'e1',
  title: 'Toilet Paper',
  stock: 94.12,
  date: new Date(2021, 5, 6),
  price: '59.9 BTC',
  goonRating: 'GR 8',
  brand: 'Plump Knights'
}, {
  id: 'e2',
  title: 'Swag Token',
  stock: 0,
  date: new Date(2021, 5, 6),
  price: 3.99,
  goonRating: 'GR 3 hunned',
  brand: "Elon M."
}, {
  id: 'e3',
  title: 'Pants Duplicator',
  stock: 0,
  date: new Date(2021, 5, 6),
  price: 979,
  goonRating: 'GR 45',
  brand: "Soulja Boy"
}, {
  id: 'e4',
  title: 'Bool Relics',
  stock: 7,
  date: new Date(2021, 5, 6),
  price: 50,
  goonRating: '87',
  brand: "Public Item"
},
];

return (
  <div>
  <h2>APP - HTML HEADER </h2>

  <ExpenseItem
      title={expenses[0].title}
      stock={expenses[0].stock}
      price={expenses[0].price}
      date={expenses[0].date}
      goonRating={expenses[0].goonRating}
      brand={expenses[0].brand}
  ></ExpenseItem>

  <ExpenseItem
    title={expenses[1].title}
    stock={expenses[1].stock}
    price={expenses[1].price}
    date={expenses[1].date}
    goonRating={expenses[1].goonRating}
    brand={expenses[1].brand}
  ></ExpenseItem>

  <ExpenseItem
    title={expenses[2].title}
    stock={expenses[2].stock}
    price={expenses[2].price}
    date={expenses[2].date}
    goonRating={expenses[2].goonRating}
    brand={expenses[2].brand}
  ></ExpenseItem>

  <ExpenseItem
    title={expenses[3].title}
    stock={expenses[3].stock}
    price={expenses[3].price}
    date={expenses[3].date}
    goonRating={expenses[3].goonRating}
    brand={expenses[3].brand}
  ></ExpenseItem>

  <h3 align='right'>GR = Goon Rating</h3>

  </div>

);
}

export default App;
