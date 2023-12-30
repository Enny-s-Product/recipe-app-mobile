import {View, Text, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import Modal from 'react-native-modal';

interface IProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Popup: React.FC<IProps> = ({open, closeModal, children}) => {
  return (
    <Modal
      hasBackdrop
      isVisible={open}
      onModalHide={closeModal}
      animationIn="fadeIn"
      animationOut="fadeOutDown">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.99)',
    borderRadius: 8,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,

    // elevation: 12,
  },
});

export default Popup;
