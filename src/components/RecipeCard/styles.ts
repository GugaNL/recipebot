import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    width: RFValue(240),
    height: RFValue(85),
    marginBottom: 32,
    marginTop: 46,
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

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 10px;
  margin-top: 46px;
  margin-bottom: 32px;
  margin-right: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentSmall = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
`;

export const ImageRecipe = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-top: -40px;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const DurationIcon = styled(MaterialIcons)`
  font-size: 16px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const DurationText = styled.Text`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 11px;
`;

export const ContainerRating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconStar = styled(FontAwesome)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.yellow};
`;
