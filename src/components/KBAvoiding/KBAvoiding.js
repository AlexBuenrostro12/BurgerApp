import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

const KBAvoiding = (props) => (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
        {props.children}
    </KeyboardAvoidingView>
);

export default KBAvoiding;