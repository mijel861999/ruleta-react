

export const handleSetBackground = ( color ) => {
    switch ( color ) {
        case "black": 
            return "#000000";
        case "red": 
            return "tomato";
        default:
            return "green";
    }
}
