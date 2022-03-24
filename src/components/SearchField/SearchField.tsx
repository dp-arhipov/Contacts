import React, {useState} from 'react';
import styles from './searchField.module.scss';
import TextField from '@mui/material/TextField';
const SearchField: React.FC = () => {
  const [value, setValue] = useState<string>();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.searchField}>
      <TextField fullWidth value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default SearchField;
