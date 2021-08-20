import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}



const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Kanit', sans-serif;
}

#logoImg {
  width: 100px !important;
  height: 100px !important;
}

body {
  background: #F5F5F5; 
  text-align: center;
  
  img {
    height: auto;
    max-width: 100%;
  }
  [color="primary"] {
    color: #E45E5E !important;
    fill: #E45E5E !important;
  }

  a[variant="subtle"] {
    height: 36px;
    background: #E45E5E;
    box-shadow: 0px 2px 4px 0px rgba(66, 37, 125, 0.37);
  }

  a[variant="tertiary"] {
    height: 36px;
    color: #707070;
  }

  #farmButton > div {
    background: #FDF3F3;
  }
  button[scale="md"] {
    color: #ffffff !important;
    background: #E45E5E !important;
    div[color="primary"] {
      background: transparent !important;
      color: #ffffff !important;
    }
  }
  button[aria-label="Toggle menu"] {
    color: #333333 !important;;
    background: transparent !important;
  }
  button[aria-label="Hide or show expandable content"] {
    color: #333333 !important;;
    background: transparent !important;
    svg {
      fill: #ABABAB !important;
    }
  }
  button[aria-label="Close the dialog"] {
    background: transparent !important;
  }
  #menu {
    button {
      background-color: #F6F0FF;
      color: #491ACD;
    }
    div{
      nav > div > a {
        svg {
          display: none;
        };
        background-image: url(/logo.png);
        background-repeat: no-repeat;
        height: 44px;
        width: 58px;
        background-size: contain;
      }
      nav {
        background: #ffffff;
        border-bottom: none !important;
        div > button[aria-label="Toggle menu"] > svg {
          fill: #E45E5E !important;
        }
        div:nth-child(2)> div > button {
          color: #E45E5E !important;
          background: #FDF3F3 !important;
        }
      } 
      div > div > div > div > div:nth-child(2) > [role="button"] {
        background-color: #FFFCFC;
      }
      
      nav + div > div:nth-child(1)  { 
        text-align:left !important;
        div:nth-child(2) > div:nth-child(1) > a > svg,  div:nth-child(2) > div:nth-child(1) > a > div{
          display: none; 
        } 
        div:nth-child(2) > div:nth-child(2) > button {
          display: none; 
        } 
        div:nth-child(2) > div:nth-child(2) > div> button {
          display: flex; 
        }
      }
    }
  }
  [role="button"] > a > div {
    display: block !important;
  }
  #menu > div > div > div:nth-child(1) > div:nth-child(2) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    > div:nth-child(1) > div:nth-child(1) {
      display: none;
    }
    > div:nth-child(1) > div {
      svg {
        fill: #E45E5E !important;
      }
    }
    > div:nth-child(2) > div:nth-child(2) > button {
      background-color: #FDF3F3 !important;
      color: #491ACD !important;
      svg {
        fill: #E45E5E !important;
      }
      > div {
        color: #E45E5E !important;
      }
    }
  }

  div[id="toggle"] > div {
    background-color: #FDF3F3;
  }
  div[id="toggle"] > div[color="text"] {
    background-color: transparent;
  }
}
`
export default GlobalStyle
