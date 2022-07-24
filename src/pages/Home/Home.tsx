import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ActivityBar from '../../components/ActivityBar/ActivityBar';
import SideBar from '../../components/SideBar/SideBar';
import ToolBar from '../../components/ToolBar/ToolBar';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
    <ActivityBar/>
    <SideBar/>
    <div className={styles.Workspace}>
      <ToolBar/>
      <Outlet/>
    </div>
  </div>
);

export default Home;
