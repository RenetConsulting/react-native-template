// jest.config.js
const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
    ...tsjPreset,
    preset: "react-native",
    transform: {
        ...tsjPreset.transform,
        "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    },
    globals: {
        "ts-jest": {
            babelConfig: true
        }
    },
    transformIgnorePatterns: [
        "node_modules/(?!(react-native|lottie-react-native|expo|react-native-maps|react-native-svg|react-native-branch|native-base-shoutem-theme|react-native-easy-grid|react-native-drawer|react-native-vector-icons|react-native-keyboard-aware-scroll-view|react-navigation|native-base|@expo|react-native-scrollable-tab-view|react-native-iphone-x-helper)/)"
    ]
};