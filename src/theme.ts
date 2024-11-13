
import { defineTextStyles } from "@chakra-ui/react/styled-system"
// import  "../src/assets/css/iransans-ltr.css"


export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "iransans",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  h3:{
    value:{
      fontFamily: "tahoma"
    }
  }
  },
})






