import React from 'react';


import { Container,OptionButton,OptionText,Span } from './styles';
import { CategoryList } from '../../pages/Order';
import { StyleSheet, Dimensions, View, ScrollView, FlatList } from 'react-native';

type ModalProps = {
  handleCloseModal: () => void;
  options: CategoryList[];
  selectedItem: (item: CategoryList) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export function ModalPicker({ handleCloseModal,options,selectedItem}: ModalProps){

  function handleSelectedItem(item: CategoryList) {
    selectedItem(item)
    handleCloseModal()
  }

  return (
    <Container onPress={handleCloseModal}>
      <View style={styles.content}>  
        <FlatList 
          data={options}
          keyExtractor={item => item.id}
          renderItem={(item) => (
            <OptionButton key={item.index} onPress={() => handleSelectedItem(item.item)}>
             <OptionText>{item?.item?.name}</OptionText>
            </OptionButton>
          )}
        />
      </View>

    </Container>
  );
}


const styles = StyleSheet.create({
  content: {
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    bordeColor: '#8A8A8A',
    borderRadius: 4,
  }
})