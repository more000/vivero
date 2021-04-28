import React, {useState, useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import ItemDetail from '../components/ItemDetail';

 export default function ItemDetailContainer({open, close, content}) {
//export default function ItemDetailContainer({selectedItem}) {

/*     function getItem(){
        return
    } */
    //  const [openModal, setOpenModal] = useState(false);
/*    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                return selectedItem
            }, 2000)
        })
        promesa.then(task => task)
    }, []);    
    
 */
/*     const [selectedItem, setSelectedItem] = useState({});

     useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setSelectedItem(selectedItem)
            }, 2000)
        })
        promesa.then(task => task)
    }, []); */

/*     const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
 */
/*      function onHandleClick(data) {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setPictureURL(data.pictureURL);
        setStock(data.stock)
        setSelectedItem(data);
        setModalOpen(true);
      }
 */
    return (
        <Modal
        open={open}
        onClose={close}>
            <ItemDetail 
                title={content.title}
                description={content.description}
                price={content.price}
                pictureURL={content.pictureURL}
                stock={content.stock}
            />
      </Modal>
    )
}
