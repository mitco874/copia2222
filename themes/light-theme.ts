import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    components:{
      MuiTextField: {
        styleOverrides: {
          root: {
            marginBlock:"10px"
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor:"#323845",
            height:"10vh"
          }
        }
      },
      MuiInputLabel:{
        styleOverrides: {
          root: {
            color:"#A9A9A9"
          }
        }
      },
      MuiListItemIcon:{
        styleOverrides: {
          root: {
            justifyContent: 'center'
          }
        }
      }
    }
})

