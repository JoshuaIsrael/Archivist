import React, { FC, useContext, useState } from 'react';
import { ActivityType } from '../../app/types';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Activity.module.scss';

interface ActivityProps {
  activity: ActivityType
}

const Activity: FC<ActivityProps> = ({ activity }) => {
  const themeContext = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const activityStyle = {
    color: themeContext?.theme?.light
  }

  const hoveredActivityStyle = {
    backgroundColor: themeContext?.theme?.quaternary,
    color: themeContext?.theme?.heavy
  }

  return (
    <div className={styles.Activity} style={isHovered ? hoveredActivityStyle : activityStyle} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
      <div className={styles.Icon}>{activity.icon}</div>
      <div className={styles.Label}>{activity.name}</div>
    </div>
  )
};

export default Activity;
