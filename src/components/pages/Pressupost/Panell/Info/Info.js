import { Modal } from './Info.styled';

const Info = ({close, text}) =>
    <Modal className="modal" onClick={close}>
        <div className="container">
            <div className="content">
                <h3>Estàs demanant pressupost per una pàgina web amb</h3>
                <h4>{text}</h4>
            </div>
        </div>
    </Modal>
;

export default Info;