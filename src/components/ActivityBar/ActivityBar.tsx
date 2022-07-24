import React, { FC, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ActivityBar.module.scss';

interface ActivityBarProps {}

const ActivityBar: FC<ActivityBarProps> = () => {
  const themeContext = useContext(ThemeContext);

  const activityBarStyle = {
    backgroundColor: themeContext?.theme?.tertiary,
    color: themeContext?.theme?.medium
  }

  return (
    <div className={styles.ActivityBar} style={activityBarStyle}>
      ActivityBar Component
    </div>
  )
};

export default ActivityBar;
