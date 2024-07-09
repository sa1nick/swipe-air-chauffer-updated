import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
} from "react-native";
import SAD from "../SAD";

function SADFloatingLabelInput({
  containerStyle,
  placeholderText,
  onChangeText,
  error,
  keyboardType,
  icon,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 120,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 15,
    top: labelPosition.interpolate({
      inputRange: [0, 1.4],
      outputRange: [15, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [1, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [SAD.colors.grey9A9A9A, SAD.colors.grey9A9A9A],
    }),
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.innerContainer, error && { borderColor: "red" }]}>
        <Animated.Text style={[styles.label, labelStyle]}>
          {placeholderText}
        </Animated.Text>
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            style={styles.input}
            keyboardType={keyboardType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            value={text}
            textAlignVertical="center"
            textContentType={
              props.secureTextEntry
                ? "newPassword"
                : props.textContentType || undefined
            }
            secureTextEntry={showPassword}
          />
          {!props.secureTextEntry && icon && (
            <Image source={icon} style={styles.icon} />
          )}
          {props.secureTextEntry && (
            <Pressable
              style={{ width: 20 }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                source={showPassword ? SAD.image.eyeOff : SAD.image.eyeOn}
                style={styles.icon}
              />
            </Pressable>
          )}
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: 390,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    backgroundColor: SAD.colors.white,
    marginLeft: 17,
    marginVertical: 10,
  },
  label: {
    position: "absolute",
    color: SAD.colors.grey9A9A9A,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    marginTop: 16,
    paddingLeft: 15,
    color: SAD.colors.black,
    fontSize: 14,
    fontFamily: "Rubik-Regular",
  },
  icon: {
    marginRight: 10,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
  },
});

export default SADFloatingLabelInput;
