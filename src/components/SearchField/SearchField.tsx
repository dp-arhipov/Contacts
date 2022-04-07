import React, {useState} from 'react';
import styles from './searchField.module.scss';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {setSearchString} from '../../store/reducers/contactsSlice';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useAppDispatch} from '../../hooks/redux';
import ClearIcon from '@mui/icons-material/Clear';
import useDebounce from '../../hooks/useDebounce';
interface SearchFieldProps {
  onAdd: () => void;
}
const SearchField: React.FC<SearchFieldProps> = ({onAdd}) => {
  const [value, setValue] = useState<string>();
  const dispatch = useAppDispatch();

  const setSearchStringDebounced = useDebounce(
    (str: string) => dispatch(setSearchString(str)),
    300
  );
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchStringDebounced(e.target.value);
    setValue(e.target.value.trim());
  };

  const onClear = () => {
    dispatch(setSearchString(''));
    setValue('');
  };

  return (
    <div className={styles.searchField}>
      <Paper component="form" sx={{p: '5px 10px', display: 'flex', alignItems: 'center'}}>
        <InputBase
          sx={{ml: 1, flex: 1}}
          placeholder="Поиск контактов..."
          value={value}
          onChange={onChangeHandler}
        />
        <IconButton sx={{p: '10px'}} aria-label="search">
          {value ? <ClearIcon onClick={() => onClear()} /> : <SearchIcon />}
        </IconButton>
        <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />

        <IconButton color="primary" sx={{p: '10px'}} onClick={onAdd}>
          <AddCircleIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchField;
