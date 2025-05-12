import { Outlet } from "react-router-dom";

const Layout = ({ style }) => {
  return (
    <>
      <header>
        <h1 className={ style?.color }>Layout Hello</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 Base React</p>
      </footer>
    </>
  )
}

export default Layout;