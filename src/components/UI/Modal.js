import React from 'react';
import { View, Modal } from 'react-native';

const CustomModal = (props) => (
    <View style={{ flex: 1 }}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isShowModal}
            onRequestClose={() => props.dispatchIsShowModal({ type: 'showModalHandler' })}
        >
            {props.children}
        </Modal>
    </View>
);

export default CustomModal;