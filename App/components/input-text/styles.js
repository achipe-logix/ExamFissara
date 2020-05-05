import { StyleSheet, Dimensions} from "react-native";

let backgroundColor = "#F9F9F9"
let primaryText = "#1E1D4D";

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: backgroundColor,
        paddingVertical: 20,
        paddingHorizontal : 10,
        fontSize: 15,
        textAlign: "left",
        alignSelf: "stretch",
        color: primaryText,
        borderRadius: 10,
    },

    passwordContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: backgroundColor,
        borderRadius: 10,
    },
    passwordInput: {
        paddingVertical: 20,
        paddingHorizontal : 10,
        flex: 1,
    },
    boxSpacing: {
        paddingVertical: 20
    },
    eyeIcon: { 
        alignSelf: 'flex-end',
        paddingVertical: 20,
        paddingHorizontal : 15,
    }
    
  });


  export default styles