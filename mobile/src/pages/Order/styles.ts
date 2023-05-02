import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1D1D2E;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
  margin-top: 24px;
  padding: 10px;
  justify-content: space-between;
`
export const Table = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
  margin-right: 14px;
`
export const ButtonTrash = styled.TouchableOpacity``

export const WrraperContent = styled.View`
  padding: 10px;
`


export const PickerCategory = styled.TouchableOpacity`
  background: #101026;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  justify-content: center;
  padding: 10px;
`
export const PickerCategoryName = styled.Text`
  color: #FFFFFF;
`


export const PickerProductCategory = styled.TouchableOpacity`
  background: #101026;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  justify-content: center;
  padding: 10px;
`
export const PickerProductyName = styled.Text`
  color: #FFFFFF;
`

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const QuantityText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
`;


export const InputQuantity = styled.TextInput`
  background: #101026;
  border-radius: 4px;
  width: 55%;
  height: 40px;
  margin-bottom: 12px;
  justify-content: center;
  padding: 10px;
  text-align: center;
  font-size: 30px;
  color: #FFFFFF;

`

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const AddItemOrderButton = styled.TouchableOpacity`
  background: #3FD1FF;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
  width: 20%;
`

export const AddItemOrderText = styled.Text`
  font-size: 18px;
  color: #101026;
  font-weight: bold;
`



export const SendOrderButton = styled.TouchableOpacity`
  background: #3FFFA3;
  height: 40px;
  border-radius: 4px;
  width: 75%;
  justify-content: center;
  align-items: center;
`

export const SendOrderText = styled.Text`
  font-size: 18px;
  color: #101026;
  font-weight: bold;

`

export const Modal = styled.Modal``