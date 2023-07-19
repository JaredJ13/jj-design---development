import styled, { ThemeProvider } from 'styled-components'

import Home from './pages/Home'


// Themes
const lightTheme = {
  background: '#ffffff',
  color: '#000000',
}

const darkTheme = {
  background: '#000000',
  color: '#fff',
}

// container for the theme
const Container = styled.div`
color: ${(props) => props.theme.color};
background-color: ${(props) => props.theme.background};
`

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
