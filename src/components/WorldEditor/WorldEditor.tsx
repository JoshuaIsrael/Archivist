import React, { FC, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './WorldEditor.module.scss';

interface WorldEditorProps {}

const WorldEditor: FC<WorldEditorProps> = () => {
  const themeContext = useContext(ThemeContext);

  const worldEditorStyle = {
    backgroundColor: themeContext?.theme?.secondary,
    color: themeContext?.theme?.medium
  }

  return (
    <div className={styles.WorldEditor} style={worldEditorStyle}>
      WorldEditor Component
    </div>
  )
};

export default WorldEditor;
