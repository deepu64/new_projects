import { useState } from "react"
import Modal from "./modal"
import './modal.css'



function ModalContainer() {

    const [openModal, setOpenModal] = useState(false)

    const handleToggleModal = () => {
        setOpenModal(!openModal)
    }

    function handleClose() {
        setOpenModal(false)
    }

    return (
        <div>
            <button onClick={handleToggleModal}>Open Modal</button>
            {openModal && <Modal
                header={<h2>cutomized header</h2>}
                footer={<h2>customized footer</h2>}
                onclose={handleClose}
                body={<div>this body is from props</div>} />}
        </div>
    )
}

export default ModalContainer