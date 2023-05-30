import styled from 'styled-components';

type PropsOverlay = {
  mostrarOverlay: boolean;
  posicionModal: string;
};

type PropsButton = {
  colorButton?: string;
  colorButtonHov?: string;
  colorText?: string;
};

export const ContenedorBotones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Boton = styled.button<PropsButton>`
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.colorButton ? props.colorButton : '#0066FF'};
  border: none;
  font-weight: bolder;
  color: ${(props) => (props.colorText ? props.colorText : 'white')};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  margin-top: 10px;

  &:hover {
    background: ${(props) =>
      props.colorButtonHov ? props.colorButtonHov : '#0066FF'};
  }
`;

export const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 700;
    margin: 5px;
  }

  p {
    font-size: 18px;
    margin: 5px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }

  @media screen and (max-width: 600px) {
    p {
			width: 100%;
			height: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Overlay = styled.div<PropsOverlay>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)'};
  padding: 40px;
  display: flex;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : 'center'};
  justify-content: center;
`;

type PropsContenedorModal = {
  width: string;
  // height: string
};
export const ContenedorModal = styled.div<PropsContenedorModal>`
  height: auto;
  min-height: 100px;
  max-width: ${(props) => props.width}px;
  width: 100%;
  background: #fff;
  position: relative;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
    margin: 5px;
    padding-bottom: 5px;
  }
`;

export const BotonCerrar = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: 1px solid #cecece;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
