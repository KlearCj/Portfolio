import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';


const theme = extendTheme({
  styles: {
    global:(props)=>({
      body: {
        margin: 0,
        "font-family":
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        bg: mode('#DCD6F7', '#250227')(props)
      },
      code: {
        " font-family":
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      },
      breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "990px",
        xl: "1200px",
        xxl: "1536px",
      }
    })}
    })

export default theme;
