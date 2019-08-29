module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.ts$": "ts-jest"
    },
    "moduleNameMapper": {
      "\\.(css|sass|scss)$": "identity-obj-proxy",
        "~(.*)$": "<rootDir>/src/$1",
    }
};
