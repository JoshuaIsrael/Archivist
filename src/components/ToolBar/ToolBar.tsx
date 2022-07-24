import React, { FC, useContext } from 'react';
import ThemeSwitch from '../../common/ThemeSwitch/ThemeSwitch';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ToolBar.module.scss';

interface ToolBarProps {}

const ToolBar: FC<ToolBarProps> = () => {
  const themeContext = useContext(ThemeContext);

  const toolBarStyle = {
    backgroundColor: themeContext?.theme?.tertiary,
    color: themeContext?.theme?.medium
  }

  return (
    <div className={styles.ToolBar} style={toolBarStyle}>
      ToolBar component
      <ThemeSwitch/>
    </div>
  )
};

export default ToolBar;
