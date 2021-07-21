import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column !important;
  height: 350px;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 80vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 50%;
  opacity: 0.7;
  position: absolute;
  top: 230px;
  display: none;
  background-color: #d3d3d3;
  font-size: 12px;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    font-size: 12px;
   
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: auto;
    
  display: flex;
  justify-content: space-between;
  font-size: 20px;
 
  color: #d3d3d3;
  background-color: black;

 
  text-align: left;
  padding: 0px 15px;
  padding-top: 14px;
  

  @media screen and (max-width: 800px) {
    height: auto;
    margin: auto;
    text-align: left;
    padding: 0px 15px;
    padding-top: 14px;
    font-size: 18px;
  }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  margin-right: 12px;
`;