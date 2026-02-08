import './App.css'
import Card from './components/Card'
import { ChaiCard } from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import { Counter } from './components/Counter'
import OrderForm from './components/OrderForm'
import type { Chai } from './typs/types'

function App() {

  const data: Chai[] = [
    {
      id: 1,
      name: "masala",
      price: 40
    },
    {
      id: 2,
      name: "lemon",
      price: 84
    },
    {
      id: 3,
      name: "ginger",
      price: 10
    }
  ]
  return (
    <div>

      <h1>Vite + React</h1>
      {/* <ChaiCard
        name={"Masala"}
        price={20}
        isSpecial
      />
      <ChaiCard
        name={"lemon"}
        price={40}
      />
      <div>
        <Counter />
      </div>
      <ChaiList items={data} /> */}
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("placeOrder: ", order)
          }}
        />
      </div>
      <div>
        <Card
          title='Chai aur TS'
          children
          footer={<button>OrderNow</button>}
        />
      </div>

    </div>
  )
}

export default App
