import { Overlay, ContenedorModal, EncabezadoModal,BotonCerrar } from '@/styledComponent' 

type Props = {
  children: JSX.Element | JSX.Element[];
  estado: boolean;
  cambiarEstado: (isState: boolean) => void;
	titulo: string;
	mostrarHeader: boolean;
	mostrarOverlay: boolean;
	posicionModal: string;
	width: string;
	// heigth: string;
}


const Modal = ({
	children,
	estado,
	cambiarEstado,
	titulo = 'Alerta',
	mostrarHeader,
	mostrarOverlay,
	posicionModal,
	width
}: Props) => {
	return (
		<>
			{estado && 
				<Overlay mostrarOverlay = {mostrarOverlay} posicionModal={posicionModal}>
					<ContenedorModal width={width}>
						{mostrarHeader && 
							<EncabezadoModal>
								<h3>{titulo}</h3>
							</EncabezadoModal>
						}

						<BotonCerrar onClick={() => cambiarEstado(false)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</BotonCerrar>

						{children}
					</ContenedorModal>
				</Overlay>
			}
		</>
	);
}
 
export default Modal;

