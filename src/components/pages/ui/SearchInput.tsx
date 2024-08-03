import React, { useState, useEffect } from 'react';
import { TextField, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

interface FormValues {
  search: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const { control, watch } = useForm<FormValues>({
    defaultValues: {
      search: ''
    }
  });

  const [debouncedValue, setDebouncedValue] = useState<string>('');
  const searchValue = watch('search');


  useEffect(() => {
    const handler = setTimeout(() => {
      const trimmedValue = searchValue.trim();
      setDebouncedValue(trimmedValue ? trimmedValue : '');
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue);
    }else{
        onSearch('')
    }
  }, [debouncedValue, onSearch]);

  return (
    <Container>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
    </Container>
  );
};

export default SearchInput;
