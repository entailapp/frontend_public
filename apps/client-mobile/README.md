# client-mobile

This is a [React Native](https://reactnative.dev/) and [Expo](https://docs.expo.io/) application.

## how to start development

You **can not** use `pnpm` to download and install this application's dependencies; you **must** use `yarn` instead.

Follow the instructions under [_React Native CLI quickstart_](https://reactnative.dev/docs/environment-setup) for your development OS and target OS
to install the required dependencies and configure your settings for Android Studio or XCode.

You can start the expo developer tools using the `nx` CLI as follows:

```
$ nx run client-mobile:start
```

From here you have two options:

1.  Launch the application on an emulator.
2.  Launch the application via the [Expo Go app.](https://expo.io/client)

## code standards

### component styles

We use Tailwind for the component styles via the [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) library.

`tailwind-rn` requires a `styles.json` file to be generated via: `npm run tailwind`

This file only needs to be regenerated when changes are made to the Tailwind configuration file.
