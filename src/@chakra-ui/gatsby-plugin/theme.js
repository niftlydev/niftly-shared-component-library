import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme ({
    colors: {
      brand: {
        100: "#f7fafc",
        500: "#1E324A", // for buttons
        900: "#1a202c",
        navbarColor: "#1E324A",
        footbarColor: "#1E324A",
        footbarTitleColor: "#75EC3D"
      },
    },
})
  

export default theme