import { Outlet } from "react-router"


function RootLayout() {
  return (
    <div>
        Root
      <Outlet />
    </div>
  )
}

export default RootLayout
