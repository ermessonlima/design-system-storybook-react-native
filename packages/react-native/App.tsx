import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <Container>
      <TouchableOpacity>
        <Text>App</Text>
      </TouchableOpacity>
    </Container>
  )
}
