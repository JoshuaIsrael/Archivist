import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React, { FC, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { DarkTheme } from '../../themes/dark-theme';
import { LightTheme } from '../../themes/light-theme';
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import styles from './ThemeSwitch.module.scss';

interface ThemeSwitchProps {}

const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  const themeContext = useContext(ThemeContext);

  const onThemeChange = async (e: any) => {
    e.target.checked ? themeContext?.setTheme(DarkTheme) : themeContext?.setTheme(LightTheme);
  }

  return (
    <div className={styles.ThemeSwitch}>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked onChange={onThemeChange}/>} label={
          <div className={styles.SwitchLabel}>
            {themeContext?.theme === DarkTheme ? <BsSunFill/> : <BsMoonFill/>}
          </div>
        } />
      </FormGroup>
    </div>
  )
};

export default ThemeSwitch;
