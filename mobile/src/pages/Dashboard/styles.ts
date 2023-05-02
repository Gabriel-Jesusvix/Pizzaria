import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
justify-content: center;
align-items: center;
background: #1D1D2E;
`;

export const H1 = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color:  #FFFFFF;
  margin-bottom: 24px;
`; 



export const Input = styled.TextInput`
  height: 45px;
  width: 95%;
  background: #101026;
  margin-bottom: 24px;
  border-radius: 4px;
  font-size: 18px;
  text-align: center;
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