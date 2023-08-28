import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderRadius: 12,
    backgroundColor: '#e9e9e9',
    padding: 10,
    width: RFValue(170),
    height: RFValue(170),
    marginTop: 70,
    marginBottom: 32,
    marginHorizontal: 16,
    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    // Android
    elevation: 9,
  },
});

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  text-align: center;
`;

export const ImageRecipe = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 60px;
  margin-top: -60px;
  align-self: center;
`;

export const DurationIcon = styled(MaterialIcons)`
  font-size: 18px;
  margin-left: 8px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const DurationText = styled.Text`
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: 12px;
  font-weight: bold;
`;
