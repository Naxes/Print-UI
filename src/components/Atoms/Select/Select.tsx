import { styled } from 'stitches.config';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import useOnClickOutside from 'src/hooks/useOnClickOutside';
import React, { useRef, useState, createContext, useContext } from 'react';

type Props = {
  placeholder?: string,
  defaultValue?: string,
  children: React.ReactNode,
  onChange?: (option: string) => void,
};

const SelectContainer = styled('div', {
  userSelect: 'none',
  alignItems: 'center',
  backgroundColor: '$loContrast',
  border: '1px solid $slate6',
  borderRadius: '$4',
  color: '$hiContrast',
  cursor: 'pointer',
  display: 'flex',
  position: 'relative',
  my: '$3',
  p: '$3',
  'svg': {
    position: 'absolute',
    right: '$3',
  },
});

const DropdownContainer = styled('ul', {
  backgroundColor: '$loContrast',
  border: '1px solid $slate6',
  borderBottomLeftRadius: '$4',
  borderBottomRightRadius: '$4',
  color: '$hiContrast',
  listStyle: 'none',
  mt: '-$4',
  overflow: 'hidden',
  p: '0',
});

export const SelectContext = createContext({
  selectedOption: '',
  changeSelectedOption: (option: string) => {},
});

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('Error creating context');
  }
  return context;
};

export const Select = ({ children, defaultValue, placeholder, onChange }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');

  const selectContainerRef = useRef(null);
  const selectPlaceholder = placeholder || "Choose an option";

  const clickOutsideHandler = () => setShowDropdown(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: string) => {
    if (onChange) {
      onChange(option);
    }

    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider value={{ selectedOption, changeSelectedOption: updateSelectedOption }}>
      <SelectContainer
        className=".tk-karmina-sans"
        onClick={showDropdownHandler}
        ref={selectContainerRef}
        css={{
          'svg': {
            transform: showDropdown
              ? 'rotate(180deg)'
              : 'none'
          },
          borderBottomLeftRadius: showDropdown ? '0' : '$4',
          borderBottomRightRadius: showDropdown ? '0' : '$4',
        }}
      >
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
          <ChevronDownIcon width="15" />
        </div>
      </SelectContainer>
      <DropdownContainer
        css={{
          display: showDropdown
            ? 'block' : 'none'
        }}
      >
        {children}
      </DropdownContainer>
    </SelectContext.Provider>
  );
};