import { useState, useEffect, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { usePagination } from "../../hooks";
import { ICompany } from "../../model";
import { Buttons } from "../index";
import { Modal } from "@/components";
import { Boton, Contenido } from "@/styledComponent";
import styles from "./Table.module.css";

type companyProps = {
  companies: ICompany[];
};
const Table = ({ companies }: companyProps) => {
  const [isModal, setIsModal] = useState(false);
  const [isLinkDian, setIsLinkDian] = useState(false);
  const [isLinkFact, setIsLinkFact] = useState(false);
  const [dataModal, setDataModal] = useState<ICompany>();
  const { info, page, totalPages, onNextPage, onPrevPage } = usePagination(
    companies,
    8
  );

  const notify = () => toast.success("Copiado!!!");

  return (
    <>
      <div className={styles.listTable}>
        <table>
          <thead>
            <tr>
              <th scope="col">Empresa</th>
              <th scope="col">Nit</th>
              <th scope="col">IdSoftware</th>
              <th scope="col">Pascer</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {info.map((comp) => {
              return (
                <tr key={comp.idCompany}>
                  <td data-label="Empresa" className={styles.textCap}>
                    {comp.nameCompany}
                  </td>
                  <td data-label="Nit">{comp.nitCompany}</td>
                  <td data-label="IdSoftware" className={styles.textCap}>
                    {comp.idSoftware}
                  </td>
                  <td data-label="Pascer" className={styles.textCap}>
                    {comp.pascerCompany}
                  </td>
                  <td data-label="Opciones">
                    <div className={styles.buttons}>
                      <button
                        className={styles.info}
                        title="Ver"
                        onClick={() => {
                          setDataModal(comp);
                          setIsModal(true);
                        }}
                      >
                        <BsArrowUpRightSquareFill />
                      </button>
                      <button
                        className={styles.dian}
                        onClick={() => {
                          setDataModal(comp);
                          setIsLinkDian(true);
                        }}
                      >
                        Link Dian
                      </button>
                      <button
                        className={styles.fact}
                        onClick={() => {
                          setDataModal(comp);
                          setIsLinkFact(true);
                        }}
                      >
                        Link Factura
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Buttons
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        page={page}
        totalPages={totalPages}
      />

      <Modal
        estado={isModal}
        cambiarEstado={setIsModal}
        titulo="Empresa"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        width="300"
      >
        <Contenido>
          <h1>{dataModal?.nameCompany}</h1>
          <p>NIT: {dataModal?.nitCompany}</p>
          <p>idSoftware: {dataModal?.idSoftware}</p>
          <Boton
            colorButton="#35388d"
            colorButtonHov="#2c2e72"
            onClick={() => setIsModal(!isModal)}
          >
            Aceptar
          </Boton>
        </Contenido>
      </Modal>

      <Modal
        estado={isLinkDian}
        cambiarEstado={setIsLinkDian}
        titulo="Link Dian"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        width="700"
      >
        <Contenido>
          <h1>{dataModal?.nameCompany}</h1>
          <p>{`http://conector.advancit.co/ws_dian_produccion/dian/vendor/conresolucion.php?pascer=${dataModal?.pascerCompany}&nitemp=${dataModal?.nitCompany}&idesof=${dataModal?.idSoftware}`}</p>

          <CopyToClipboard
            text={`http://conector.advancit.co/ws_dian_produccion/dian/vendor/conresolucion.php?pascer=${dataModal?.pascerCompany}&nitemp=${dataModal?.nitCompany}&idesof=${dataModal?.idSoftware}`}
          >
            <div className={styles.copyCont}>
              <button className={styles.copy} onClick={notify}>
                <i className="fa-sharp fa-regular fa-copy"></i>
              </button>
            </div>
          </CopyToClipboard>
        </Contenido>
      </Modal>

      <Modal
        estado={isLinkFact}
        cambiarEstado={setIsLinkFact}
        titulo="Link Factura"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        width="700"
      >
        <Contenido>
          <h1>{dataModal?.nameCompany}</h1>
          <p>{`https://mff.advancit.co/mmf_facele_prd/cons_document_basic_2.php?IDEDOC=${dataModal?.idCompany}&NITEMP=${dataModal?.nitCompany}&CUFE=${dataModal?.pascerCompany}`}</p>

          <CopyToClipboard
            text={`https://mff.advancit.co/mmf_facele_prd/cons_document_basic_2.php?IDEDOC=${dataModal?.idCompany}&NITEMP=${dataModal?.nitCompany}&CUFE=${dataModal?.cufeCompany}`}
          >
            <div className={styles.copyCont}>
              <button className={styles.copy} onClick={notify}>
                <i className="fa-sharp fa-regular fa-copy"></i>
              </button>
            </div>
          </CopyToClipboard>
        </Contenido>
      </Modal>

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Table;
