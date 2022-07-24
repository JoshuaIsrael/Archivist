import React, { FC, useContext, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ActivityBar.module.scss';
import Activities from '../../features/activities/Activities'
import Activity from '../../common/Activity/Activity';
import SearchField from '../../common/SearchField/SearchField';

interface ActivityBarProps {}

const ActivityBar: FC<ActivityBarProps> = () => {
  const themeContext = useContext(ThemeContext);
  const [activities, setActivities] = useState(Activities);

  const activityBarStyle = {
    backgroundColor: themeContext?.theme?.tertiary,
    color: themeContext?.theme?.medium
  }

  return (
    <div className={styles.ActivityBar} style={activityBarStyle}>
      <SearchField/>
      {
        activities.map(activity => {
          return (
            <Activity activity={activity}/>
          )
        })
      }
    </div>
  )
};

export default ActivityBar;
