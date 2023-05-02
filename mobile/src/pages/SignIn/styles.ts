import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background: #1D1D2E;
`;

export const Logo = styled.Image`
  margin-bottom: 50px;
`;


export const Wrapper = styled.View`
  width: 95%;
  justify-content: center;
  align-items: center;
` 

export const Input = styled.TextInput`
  height: 45px;
  width: 95%;
  background: #101026;
  margin-bottom: 12px;
  border-radius: 4px;
  padding: 8px;
  color: #FFFFFF;
`

export const Button = styled.TouchableOpacity`
  width: 95%;
  height: 45px;
  background-color: #3FFFA3;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`


export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:  #101026;
`