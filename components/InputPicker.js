import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon, Picker, Form } from 'native-base';

const InputPicker = ({ pickerContainer, pickerStyle }) => {
    const [selected, setSelected] = useState(null);

    const onValueChange = (value) =>  {
        setSelected(value)
    };
    
    return (
        <View style={{...pickerContainer}}>
            <Form  style={{...pickerStyle}}>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholderIconColor="red"
                    selectedValue={selected}
                    onValueChange={(value) => onValueChange(value)}
                >
                    <Picker.Item label="Europe" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                </Picker>
            </Form>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default InputPicker;