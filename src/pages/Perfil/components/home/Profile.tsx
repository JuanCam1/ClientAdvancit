import { useState } from 'react';
import CompanyProfile from '../compProfile/CompanyProfile';
import UserProfile from '../userTable/UserProfile';
import styles from './Profile.module.css';

const Profile = () => {
  const [isCompanies, setIsCompanies] = useState(false); 
  return (
    <div className={styles.containerProfile}>
      <UserProfile />
      <div className={styles.checkeds}>
        <label className={styles.clCheckbox}>
          <input
            type='checkbox'
            checked={isCompanies}
            onChange={() => {
              setIsCompanies(!isCompanies);
            }}
          />
          <span></span>
        </label>
      </div>
      {isCompanies && <CompanyProfile />}
    </div>
  );
};

export default Profile;
