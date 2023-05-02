import React, { useEffect, useState } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { 
  ButtonTrash, 
  Container, 
  Header, 
  Table,
  PickerCategory,
  PickerCategoryName,
  PickerProductCategory,
  PickerProductyName,
  WrraperContent,
  QuantityContainer,
  QuantityText,
  InputQuantity,
  ActionsContainer,
  AddItemOrderButton,
  AddItemOrderText,
  SendOrderButton,
  SendOrderText,
  Modal
} from './styles';
import { api } from '../../services/api';
import { ModalPicker } from '../../components/ModalPicker';
import { FlatList } from 'react-native';
import { ListProduct } from '../../components/ModalPicker/ListProduct';

interface OrderRouteParams {
  order_id: string;
  table:  number | string;
  name?: string;
} 

export type CategoryList =  {
  id: string;
  name: string;
}

type ProductProps = {
  id: string;
  name: string;
}

type productItens = {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
}

export function Order(){
  const route = useRoute();
  const { goBack, navigate } = useNavigation()
  const { order_id, table, name } = route.params as OrderRouteParams;
  const [categories, setCategories] = useState<CategoryList[]| []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryList | undefined>();
  const [visibleModalCategory, setVisibleModalCategory] = useState(false);
  const [amount, setAmount] = useState('');
  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [productSelected, setProductSelected] = useState<ProductProps | undefined>();``
  const [modalProductVisible, setModalProductVisible] = useState(false);
  const [productItens, setProductItens] = useState<productItens[] | []>([]);


  useEffect(() => {
    async function getCategories() {
      const {data} = await api.get('/category')
      setCategories(data)
      setCategorySelected(data[0])
    }
    getCategories()
  }, [])


  useEffect(() => {
    async function loadProductsByCategory() {
      const { data } = await api.get('/category/product', {
        params: {
          catagory_id: categorySelected?.id
        }
      })
      
      setProducts(data)
      setProductSelected(data[0])
    }


    loadProductsByCategory()
  }, [categorySelected])



  async function handleCloseOrder() {
    try {
      await api.delete('/order', {
      params: {
        order_id,
      }
      });

      alert('Pedido fechado...')
      goBack();
    } catch (error) {
      console.log(error)
    }
 }

 function handleChangeCategory(item: CategoryList) {
  setCategorySelected(item);
 }

  function handleChangeProduct(item: ProductProps){
    setProductSelected(item)
  }

  async function handleAddProductOfOrder() {
   const { data } = await api.post('/order/add',{
    order_id: order_id,
    product_id: productSelected?.id,
    amount: Number(amount)
   });
   let response = {
    id: data.id,
    product_id: productSelected?.id as string,
    name: productSelected?.name as string,
    amount,
   }

   setProductItens(oldState => [...oldState,response]);

  }
  
  async function handleRemoveProductOrder(product_id: string) {
    await api.delete('/order/remove', {
      params: {
        product_id: product_id
      }
    }) 
    // @ts-ignore
    const removeProductOrder = productItens.filter( product => product.id !== product_id)
    setProductItens(removeProductOrder)
  }


  async function finishOrder() {
    navigate('FinishOrder', {
      table,
      order_id,
      name,
    })
  }






  return (
    <Container>
      <Header>
        <Table>Mesa: {table}</Table>
        {
          productItens.length === 0 && (
            <ButtonTrash onPress={handleCloseOrder}>
                <Feather  name='trash-2' size={25} color="#FF3F4B"/>
            </ButtonTrash>
          )
        }
        
      </Header>
      <WrraperContent>
        {categories.length !== 0 && (
          <PickerCategory onPress={() => setVisibleModalCategory(true)}>
            <PickerCategoryName>
              {categorySelected?.name}
            </PickerCategoryName>
          </PickerCategory>
        )}


        {
          products.length !== 0 && (
            <PickerProductCategory onPress={() => setModalProductVisible(true)}>
              <PickerProductyName>{productSelected?.name}</PickerProductyName>
            </PickerProductCategory>
          )
        }


        <QuantityContainer>
          <QuantityText>Quantidade</QuantityText>
          <InputQuantity 
            placeholderTextColor="#F0F0F0"
            keyboardType='numeric'
            value={amount}
            onChangeText={(amount) => setAmount(amount)}
          />

        </QuantityContainer>


        <ActionsContainer>
          <AddItemOrderButton onPress={handleAddProductOfOrder}> 
            <AddItemOrderText>
              + 
            </AddItemOrderText>
          </AddItemOrderButton>

          <SendOrderButton 
            disabled={productItens.length === 0}
            style={{ opacity: productItens.length === 0 ? 0.3 : 1}}
            onPress={finishOrder}
          >
            <SendOrderText>
              AVANÇAR
            </SendOrderText>
          </SendOrderButton>
          
        </ActionsContainer>
      </WrraperContent>
      

      <FlatList 
        showsVerticalScrollIndicator
        data={productItens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListProduct data={item} deleteItem={handleRemoveProductOrder}/> }
      />
      <Modal
        transparent
        visible={visibleModalCategory}
        animationType='fade'
      >
          <ModalPicker
            handleCloseModal={() => setVisibleModalCategory(false)}
            options={categories}
            selectedItem={handleChangeCategory}
          />
      </Modal>
      
      <Modal
        transparent
        visible={modalProductVisible}
        animationType='fade'
      >
          <ModalPicker
            handleCloseModal={() => setModalProductVisible(false)}
            options={products}
            selectedItem={handleChangeProduct}
          />
      </Modal>
      
     

    </Container>
  );
}