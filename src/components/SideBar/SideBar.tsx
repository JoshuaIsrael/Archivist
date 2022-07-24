import React, { FC, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './SideBar.module.scss';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const themeContext = useContext(ThemeContext);

  const sideBarStyle = {
    backgroundColor: themeContext?.theme?.tertiary,
    color: themeContext?.theme?.medium
  }

  return (
    <div className={styles.SideBar} style={sideBarStyle}>
      SideBar Component
    </div>
  )
};

export default SideBar;
