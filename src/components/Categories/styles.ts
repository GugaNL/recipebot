import styled, { css } from 'styled-components/native';
import { ICategory } from '../../interfaces';
import { FlatList } from 'react-native';

type ItemButtonProps = {
  selected: boolean;
  index: number;
};

type TextButtonProps = {
  selected: boolean;
};

export const List = styled(FlatList as typeof FlatList<ICategory>)`
  margin-top: 24px;
  margin-left: -24px;
  margin-right: -24px;
`;

export const ItemButton = styled.TouchableOpacity.attrs(
  (props: ItemButtonProps) => ({
    selected: props.selected,
    index: props.index,
  }),
)<ItemButtonProps>`
  margin-right: 8px;
  margin-bottom: 14px;
  padding: 0 20px;

  ${props =>
    props.selected &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
      border-radius: 10px;
    `}

  ${props =>
    props.index === 1 &&
    css`
      margin-left: 24px;
    `}
`;

export const TextButton = styled.Text.attrs((props: TextButtonProps) => ({
  selected: props.selected,
}))<TextButtonProps>`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  padding: 12px 8px;

  ${props =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;
