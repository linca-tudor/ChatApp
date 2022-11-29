# ChatApp
## _This is an app that implements a chat using Gifted Chat_

## Features

- Create and update your user
- Write text messages on a group-style chat 
- Send pictures on the chat
- All the user, user data, messages and media files are hosted on Firebase

ChatApp is my second project using the React Native Framework, this time using more complex modules, such as [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat) and the [Firebase API](https://firebase.google.com/docs/reference/).

## Frameworks and libraries

This app uses the following:

- [ReactNative] - "An open source JavaScript Mobile framework specially designed to build native mobile apps for iOS and Android."
- [Expo] - "Developer tooling and NPM libraries built on top of React-Native."
- [FirebaseAPI] - "The Firebase API provides tools to create, modify and authenticate user, as well as storing data on the firebase Real Time Database and Firebase Storage."
- [Watchman] - "It exists to watch files and record when they change."

## Installing the app

ChatApp requires [Node.js](https://nodejs.org/) v16+ and [React.js](https://reactnative.dev/docs/0.68/environment-setup) v68.2 to run.

Clone this repository

```sh
gh repo clone https://github.com/linca-tudor/ChatApp
```

Navigate to the folder where the repository has been cloned and install the dependencies and devDependencies

```sh
cd chatappp
npm i
```

## Setting up Firebase

To successfully build and use the app, Firebase SDKs must be initialised and included in the project. To do so, please follow the steps shown in the [Firebase Configuration Guide](FIREBASE-CONFIG.md).

## Starting the app


The app can be started by running the server with:

```sh
npm expo start
```

## Modules

ChatApp is currently based on the following modules.
Instructions on how to use them in your own application are linked below.

| Module | Documentation |
| :------: | :------: |
| expo-splash-screen | [Splashscreen][expo-splash-screen] |
| expo-image-picker | [Image picker][expo-image-picker] |
| firebase | [Firebase][firebase] |
| lottie | [Android][lottie-react-native] or [iOS][lottie-ios]|
| moment | [MomentJS Library][moment]|
| react-native-gifted-chat | [Gifted Chat][react-native-gifted-chat] |
| react-native-reanimated | [Reanimated][react-native-reanimated]|

## Application Screens

### Welcome, Sign Up & Sign In Screen

Unless there is an existend logged in user, this is the screen the app will display. It contains links to the Sign Up and Sign In screens. The **Password** field also features a hide text toggle button.

<img src="https://user-images.githubusercontent.com/37547839/202610885-b4213eaa-b6a2-4c67-9f05-fb87687fdf21.png" width="250"/> <img src="https://user-images.githubusercontent.com/37547839/202615181-2fb2369c-b123-48c9-be7a-28ecd3e5ae69.gif" width="250"/> <img src="https://user-images.githubusercontent.com/37547839/202620069-8c78e13d-df8c-40fc-a10a-76edd9aab0e7.gif" width="250"/>

From the Sign In screen it is also possible to opt for an account **passowrd reset**. It can be done as shown below, and a sample response from the server can be also seen below. The link will redirect the user to a webpage hosted by Firebase where the password can be reset.

<img src="https://user-images.githubusercontent.com/37547839/202615631-2f57b470-4127-4e42-9e00-aff459cfe1da.gif" width="205"/> <img src="https://user-images.githubusercontent.com/37547839/202617481-04853bd4-0453-4cbb-a5a8-15bd72f5bd8e.png" width="621"/> 


### Chat Screen

After a successful login the app displays the chat screen. This screen has the following elements:

#### The Chat Bubbles Area
This element has a central view which contains all the sent messages. Messages sent by other users are shown on the left side, while messages sent by the current user are displayed on the right side. The messages sent by the current user do not have the username displayed, and for the other messages the username is only shown if the messages belong to different users (the name does not repeat for each message)

The following images show how the chat screen looks from the perspective of the four different users in this conversation:

<img src="https://user-images.githubusercontent.com/37547839/202598675-e837a3aa-510c-4a3c-9035-892595d2e013.png" width="245"/> <img src="https://user-images.githubusercontent.com/37547839/202598681-3248c909-c621-44b8-b24e-be1b5bbc2651.png" width="245"/> <img src="https://user-images.githubusercontent.com/37547839/202598690-1b97377d-29b1-4ee1-a4a0-501dcbae486a.png" width="245"/> <img src="https://user-images.githubusercontent.com/37547839/202598696-64697b81-67c9-4fbe-a2b0-4fc3348144e1.png" width="245"/>

Depending on the upload time of the messages, the timestamp is displayed in one of four ways:
- Full date for messages older than a week
- Full day name for messages sent during the current week
- "Yesterday" for messages sent during the previous day
- "Today" for messages sent during the current day

#### The Text Input Area
The text input area has three main components:
- The text input field
- The **Send** button
- The **attachment** button

The **Send** is only shown if there is any text inside the input field, and it's appearance is animated using React Reanimated.

<img src="https://user-images.githubusercontent.com/37547839/202601641-6973cc6a-cadd-4026-9486-982bafe72ae3.gif" width="500"/>

The **attachment** button shows upon click a Modal that let's the user to upload a picture either by taking a picture, or by selecting one from the device's photo gallery.

Upon selection, the upload process will begin. Until the picture is uploaded to the server, a local placeholder is shown, and the chat image will have a *pending* status indicator. When the upload is completed, the local placeholder is replaced by the server image with a  corresponding *completed* status indicator (two checkmarks).

The following example shows a user uploading a picture. Note the difference between the locally rendered placeholder, and the moment the picture is uploaded. That is also the moment when the other users see the image in the chat screen.

<img src="https://user-images.githubusercontent.com/37547839/202612830-a2f971d6-14cc-4727-91f9-5c8b4cba9d43.gif" width="1000"/>

### Profile Screen
The Profile Screen features a minimalist UI, displaying:
- A user profile picture, or a placeholder if no picture is uploaded
- The user's name (if it is uploaded), and the e-mail address user for the account
- A **Contact me** button that will redirect the user to the e-mail app with my contact address filled in
- A **Source Code** button that will redirect the user to this repo
- A **Copyright** button that will redirect the user to the License File associated with this project

When the uses taps on the profile picture (or the placeholder) the app will redirect to the editing screen. Here the user can choose a new profile picture, and a new name. The dislplay name field come prefilled with the current name save on the database. If there is no text when the **Save** button is pressed, an alert will pop up, giving the user the following choices:
- Use the name from the e-mail as display name; this is automatically extracted from the e-mail address using the following bit of code:
  ```javascript
  const email = auth.currentUser.email;
  const extractedName = email.substring(0, email.lastIndexOf('@'));
  setName(extractedName);
  ```
- Set a display name manually; this will close the alert and will let the user to input text in the field again

These features are shown in the following images: 

<img src="https://user-images.githubusercontent.com/37547839/202626592-88f07f45-f7e5-4199-aa05-b15ccb8e234f.png" width="250" /> <img src="https://user-images.githubusercontent.com/37547839/202628506-a9e1d496-f51d-4e70-990f-8a09819b06f3.gif" width="250" /> <img src="https://user-images.githubusercontent.com/37547839/202628516-c084ddd7-d53d-4a08-a2d5-22e253b87317.gif" width="250" />

## Core Mechanics

### Authentication and Navigation Routes
The authentication process uses [Firebase Auth SDK](https://firebase.google.com/docs/reference/js/v8/firebase.auth). The process is managed by a watcher that will check for any change in the current user state.

```javascript
const useAuthentication = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
      setLoading(false);
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user,
    loading,
  };
};
```

This authentication state is constantly monitored, such that the main app navigator shows the appropriate navigation stack to the user:
- When there is no user currently logged in, the Welcome/Sign In/Sign Up navigation stack is called
- When there is a user currently logged in, the Profile/Chat navigation stack is called. 

The following ```<RootNavigator>``` handles this process as follows:

```javascript
const RootNavigation = () => {
  const { user, loading } = useAuthentication();

  if (loading) {
    return <LoadingScreen />;
  }

  return user ? <UserStack /> : <AuthStack />;
};
```

Furthermore, all user-related data interactions (such as setting/updating names and profile pictures) are also handled by Firebase Auth. Media storage is not included here.

### Real Time Database vs. Storage Bucket

Right now, the storage structure looks like this:

| Storage Bucket Stores | Real Time Database Stores|
| :------------: | :----------------: |
| User profile pictures| Users Objects|
| Message Attachments (Images)| Message Objects|

A user object looks like this: 

```json
{
   "_id":"7oikS5AkIQTDAQBlzqbfGSylyKr2",
   "avatar":"link from Storage Bucket",
   "name":"Francesca Collin"
}
```

A text message object includes a user object and looks like this:

```json
{
   "_id":"bb53a94e-aa07-46b4-8d8c-5c0bcab52346",
   "createdAt":1667128020987,
   "received":true,
   "sent":true,
   "text":"Yeah count me in.",
   "user":{
      "_id":"7oikS5AkIQTDAQBlzqbfGSylyKr2",
      "avatar":"link from Storage Bucket",
      "name":"Francesca Collin"
   }
}
```

A simple image sent in chat looks like this:

```json
{
   "_id":"7cab2a4d-0f6a-4ead-851d-0fa6216ff499",
   "createdAt":1668437501234,
   "image":"link from Storage Bucket",
   "received":true,
   "sent":true,
   "user":{
      "_id":"ZdpStKCsKbUyhpo4wpWuQdohZCD2",
      "avatar":"another link from Storage Bucked",
      "name":"Beatriz Bridges"
   }
}
```

Firebase Real Time Database is the main DB that will store all the messages and users, keeping track of their respective IDs.
Storage Bucket is simply a server space where all media is dumped. Where each piece of media belongs is handled by the Real Time Database.


## Further improvements
  
### Error handling with Firebase
  
Currently there are some basic error check being made, such as those for incorrect credentials or file upload, but they can be further improved by displaying the errors in a formatted way, filtering the error codes. Furthermore, ways to correct these errors could be implemented (such as prompts to reupload media, or resend messages).

### Support for more attachment types
 
Right now only pictures can be sent via chat. Voice memos and videos would a at least two additions to the list, bringing this project closer to real-world implementations.

### Separate chatrooms

At the moment, the app only supports a single groupchat. Because the entire app is built around user IDs and message IDs, it could be fairly easy to implement a separate chat functionality.

## Conclusions

As my second React Native project, during the development process I started to understand the core concepts of React with more ease. The biggest realisation was how trully flexible the development process is when one is working with well-made libraries and modules that are made to be built upon. I am confident that this new approach to coding, especially to writing reactive code only represents the beginning. Still, moving forward I am actively seeking to improve on the following:
 - File versioning with *Github* (separate, feature-based branches that are merged after a review process)
 - Building more reusable components from the get go
 - Proper state management, as components are starting to increase in complexity (Context API and Hooks, Redux, etc)
  
  

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [FirebaseAPI]: <https://firebase.google.com/docs/reference/>
   [Expo]: <https://expo.dev/home>
   [node.js]: <http://nodejs.org>
   [ReactNative]: <https://reactnative.dev/>
   [Watchman]: <https://facebook.github.io/watchman/>

   [expo-splash-screen]: <https://docs.expo.dev/versions/latest/sdk/splash-screen/>
   [expo-image-picker]: <https://docs.expo.dev/versions/latest/sdk/imagepicker/>
   [firebase]: <https://firebase.google.com/docs/reference/>
   [lottie-react-native]: <https://github.com/lottie-react-native/lottie-react-native>
   [lottie-ios]: <https://github.com/airbnb/lottie-ios>
   [moment]: <https://github.com/moment/moment/>
   [react-native-gifted-chat]: <https://github.com/FaridSafi/react-native-gifted-chat>
   [react-native-reanimated]: <https://github.com/software-mansion/react-native-reanimated>
   
   
