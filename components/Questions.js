import React, {useState} from 'react';
import {View, Text, Image, Pressable, Modal, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Question = ({picture, hintPicture, answer, setAnswer, option1, option2, option3, option4}) => {

    const [showHint, setShowHint] = useState(false);

    return (
        <View style={{
            marginBottom: 20,
            padding: 15,
            borderWidth: 1.5,
            borderColor: '#CDBBA8',
            borderRadius: 15,
            backgroundColor: '#FFFCF7',
        }}>

            <Text style={{
                fontSize: 18,
                color: '#513B32',
                marginBottom: 10
            }}>
                What is the name of this character?
            </Text>

            {/* Clickable Character Image */}
            <Pressable onPress={() => setShowHint(true)}>
                <Image
                    source={picture}
                    style={{
                        width: 300,
                        height: 250,
                        alignSelf: 'center'
                    }}
                    resizeMode="contain"
                />
            </Pressable>

            {/* Hint Pop-up */}
            <Modal
                visible={showHint}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowHint(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <View style={{
                        backgroundColor: '#FFFCF7',
                        padding: 20,
                        borderRadius: 15,
                        borderWidth: 1.5,
                        alignItems: 'center',
                        width: '85%'
                    }}>

                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginBottom: 10
                        }}>
                            Hint!
                        </Text>

                        <Text style={{
                            fontSize: 16,
                            marginBottom: 10
                        }}>
                            Here is a scene from the book:
                        </Text>

                        <Image
                            source={hintPicture}
                            style={{width: 250, height: 250}}
                            resizeMode="contain"
                        />

                        <Button
                            title="Close Hint"
                            onPress={() => setShowHint(false)}
                        />

                    </View>
                </View>
            </Modal>

            <Picker
                selectedValue={answer}
                onValueChange={(value) => setAnswer(value)}
            >
                <Picker.Item label="Select an answer" value="" />
                <Picker.Item label={option1} value={option1} />
                <Picker.Item label={option2} value={option2} />
                <Picker.Item label={option3} value={option3} />
                {option4 && (
                    <Picker.Item label={option4} value={option4} />
                )}
            </Picker>

        </View>
    );
};

export default Question;
