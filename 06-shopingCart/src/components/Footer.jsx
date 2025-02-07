import "./Footer.css"

export default function Footer({filters}) {
    console.log(filters)
  return (
    <footer className='footer'>
      <h4>Prueva técnica de react - <span>@Lawliet</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
