import logo from "../../../../assets/logoName.png";
import styles from "./UserProfile.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { useCompanyStore } from "@/store";

const UserProfile = () => {
  const user = useCompanyStore((state) => state.user);

  return (
    <div className={styles.containerUserP}>
      <div className={styles.contentProfile}>
        <div className={styles.imgProfile}>
          <img src={logo} alt="logo company" />
        </div>
        <div className={styles.userProfile}>
          <form autoComplete="off">
            {/* <div>
              <BsPencilSquare />
              <input
                type='text'
                value={`Usuario: ${user. || 'Usuario'} `}
                disabled
              />
            </div> */}
            <div>
              <BsPencilSquare />
              <input
                type="text"
                name="nameUser"
                value={`Nombre: ${user.nameUser || "Nombre"} `}
                disabled
              />
            </div>
            <div>
              <BsPencilSquare />
              <input
                type="text"
                name="emailUser"
                value={`Email: ${user.emailUser || "Email"} `}
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
