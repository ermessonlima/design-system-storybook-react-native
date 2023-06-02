import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <TouchableOpacity>
        <Text>Apssp</Text>
      </TouchableOpacity>
    </Container>
  )
}

let AppEntryPoint = App

// if (true) {
AppEntryPoint = require('./.storybook').default
// }

export default AppEntryPoint
