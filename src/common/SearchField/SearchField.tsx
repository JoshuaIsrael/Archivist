import ThemeContext from '../../contexts/ThemeContext';
import { TextField } from '@mui/material';
import React, { FC, useContext } from 'react';
import styles from './SearchField.module.scss';
import { red } from '@mui/material/colors';

interface SearchFieldProps {}

const SearchField: FC<SearchFieldProps> = () => {
  const themeContext = useContext(ThemeContext);

  const searcFieldStyle = {
    '& label.Mui-focused': {
      color: themeContext?.theme?.medium,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: themeContext?.theme?.quaternary,
    },
    '& .MuiInputLabel-root': {
      color: themeContext?.theme?.medium,
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        color: themeContext?.theme?.heavy
      },
      '& fieldset': {
        borderColor: themeContext?.theme?.quaternary,
      },
      '&:hover fieldset': {
        borderColor: themeContext?.theme?.quaternary,
      },
      '&.Mui-focused fieldset': {
        borderColor: themeContext?.theme?.quaternary,
      }
    }
  }

  return (
    <div className={styles.SearchField}>
      <TextField id="outlined-basic" label="Search" size='small' variant="outlined" sx={searcFieldStyle}/>
    </div>
  )
};

export default SearchField;
