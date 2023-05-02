import { api } from "../../../services/api";
import { ButtonTrash, Container, Title } from "./styles";
import { Feather } from '@expo/vector-icons'


interface ProductProps {
 data: {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
 };
 deleteItem: (product_id: string) => void
}
export function ListProduct ({ data, deleteItem } : ProductProps) {


  async function handleDeleteProductOrder() {
    deleteItem(data.id)
  }
  return (
    <Container>
      <Title>{data.amount} - {data.name}</Title>

      <ButtonTrash onPress={handleDeleteProductOrder}>
        <Feather 
          name="trash-2"
          size={25}
          color="#FF3F4B"
        />
      </ButtonTrash>
    </Container>
  )

}