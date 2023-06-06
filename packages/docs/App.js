import { NavigationContainer } from '@react-navigation/native' 
import styled from 'styled-components/native'
import { Routes } from './src/routes/tabbar'

export const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
   <NavigationContainer>
        <Routes />
    </NavigationContainer>
 
  )
}

let AppEntryPoint = App

 
  // AppEntryPoint = require('./.storybook').default
 

export default AppEntryPoint
