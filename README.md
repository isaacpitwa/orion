# Orion Talent React Native Project

Welcome to the Orion Talent React Native project! This project is set up with various dependencies and scripts to help you get started with building a mobile app. This README file will guide you through the steps required to run the project locally on your development machine.

## Prerequisites

Before you start, make sure you have the following software installed on your machine:

- Node.js (>=16)
- Yarn or npm (Yarn is recommended)
- React Native CLI
- Xcode and Android Studio (if you plan to run the app on iOS and Android simulators/emulators)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/isaacpitwa/orion
   cd oriontalent
   ```

2. **Install Dependencies:**

   Use Yarn or npm to install the project dependencies by running the following command:

   ```bash
   yarn install
   # or
   npm install
   ```

## Running the App

You can run the app on both iOS and Android simulators/emulators or on physical devices. Make sure you have the necessary simulators/emulators set up or a device connected to your development machine.

### iOS

To run the app on an iOS simulator or device:

1. Navigate to the project directory.

2. Start the Metro Bundler:

   ```bash
   yarn start
   # or
   npm start
   ```

3. In a separate terminal, run the following command to launch the app on the iOS simulator:

   ```bash
   yarn ios
   # or
   npm run ios
   ```

### Android

To run the app on an Android emulator or device:

1. Navigate to the project directory.

2. Start the Metro Bundler:

   ```bash
   yarn start
   # or
   npm start
   ```

3. In a separate terminal, run the following command to launch the app on the Android emulator:

   ```bash
   yarn android
   # or
   npm run android
   ```

## Additional Scripts

- `yarn lint` or `npm run lint`: Run ESLint to check and fix code style issues.
- `yarn test` or `npm test`: Run Jest for running tests.
- `yarn start` or `npm start`: Start the Metro Bundler.
- Other scripts mentioned in the `package.json` file can also be executed as needed.

## Folder Structure

Here's an overview of the project structure for the Orion Talent React Native app:

- `src/` - Source files
  - `components/` - Reusable app components
  - `screens/` - Application screens
  - `api/` - API integrations
  - `util/` - Application utility files

- `ios/` - iOS platform-specific code
  - Contains configurations and native code for iOS.

- `android/` - Android platform-specific code
  - Contains configurations and native code for Android.

- Your source code can be found in the project root, particularly in the `src` directory.
- Configuration files are typically located in the project root as well.


## Troubleshooting

If you encounter any issues while setting up or running the project, please refer to the documentation of the specific libraries and tools you are using. Additionally, feel free to reach out to the project maintainers or the community for assistance.

Happy coding!


