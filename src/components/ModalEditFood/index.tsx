import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

import { FormHandles } from '@unform/core'

interface FoodDataProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => Promise<void>;
  handleUpdateFood: (Food: FoodDataProps) => Promise<void>;
  editingFood: FoodDataProps
}

function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalEditFoodProps) {
  const ref = useRef<FormHandles>(null);

  async function handleSubmit(data: FoodDataProps) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={ref} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
