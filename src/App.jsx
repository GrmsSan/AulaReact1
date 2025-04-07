
import style from './App.module.css'
import { Menu } from './components/menu'

function App() {


  return (
    <>
     <Menu option01='Sessao 01' option02='Sessao 02' option03='Sessao 03'></Menu>
     <main>
      <section id='s1'>
        <h2>sessaozada01 </h2>
         </section>

      <section id='s2'>
          <h2>sessaozada02 </h2>
        </section>

      <section id='s3'>
           <h2>sessaozada03 </h2>
         </section>

     </main>
    </>
  )
}

export default App
