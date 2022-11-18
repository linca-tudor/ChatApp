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

### Welcome screen

The [Homepage][Booklist] consists of a **SectionList** component that displays the bestselling books shown on New York Times. The data is fetched from the API, filtered to select only the Title, Author and Cover Photo from the server response.

<img src="https://media.tenor.com/KEzW7ALwfUAAAAAC/cat-what.gif" width="300"/>

### Chat Screen

After a successful login the app displays the chat screen. This screen has the following elements:

#### The Chat Bubbles Area
This element has a central view which contains all the sent messages. Messages sent by other users are shown on the left side, while messages sent by the current user are displayed on the right side. The messages sent by the current user do not have the username displayed, and for the other messages the username is only shown if the messages belong to different users (the name does not repeat for each message)

#### The Text Input Area
The text input area has three main components:
- The text input field
- The **Send** button
- Media attachment button

The **Send** is only shown if there is any text inside the input field, and it's appearance is animated using React Reanimated.

<img src="https://user-images.githubusercontent.com/37547839/202601641-6973cc6a-cadd-4026-9486-982bafe72ae3.gif" width="500"/>

The following images show how the chat screen looks from the perspective of the four different users in this conversation:

<img src="https://user-images.githubusercontent.com/37547839/202598675-e837a3aa-510c-4a3c-9035-892595d2e013.png" width="248"/> <img src="https://user-images.githubusercontent.com/37547839/202598681-3248c909-c621-44b8-b24e-be1b5bbc2651.png" width="248"/> <img src="https://user-images.githubusercontent.com/37547839/202598690-1b97377d-29b1-4ee1-a4a0-501dcbae486a.png" width="248"/> <img src="https://user-images.githubusercontent.com/37547839/202598696-64697b81-67c9-4fbe-a2b0-4fc3348144e1.png" width="248"/>

Depending on the upload time of the messages, the timestamp is displayed in one of four ways:
- Full date for messages older than a week
- Full day name for messages sent during the current week
- "Yesterday" for messages sent during the previous day
- "Today" for messages sent during the current day















The [purchase links][BuyLinks] are displayed using a **modal** that is triggered by the "Purchase Book" button. The modal itself renders a **Flatlist** component that offers pressable buttons which redirect the user to the respective URL.
The redirect is managed by using the *openURL* method of the Linking core module.

<img src="https://media.tenor.com/7r-BGEoIohkAAAAd/meme-cat.gif" width="300"/>

### Search Screen
  
On the second tab of the navigation menu a [Search Screen][Search] was implemented. It uses **SearchBar** component and a **Flatlist** component do display the search results. The Search Bar is implemented using a **TextInput** component such that when the user enters any characters in the text field, the state of the input field changes, and that triggers a search based on the typed characters. To limit the number of search requests, the function that handles the input update is being debounced using the similarily named method from the *"lodash"* module. 
  
<img src="https://media.tenor.com/zrpyKEyxZGwAAAAd/fat-cat-laser-eyes.gif" width="300"/>
  
Similarly to the Homepage list items, the search results can also be clicked, revealing the detailed view for that particular result. 
  
  ## Navigation
  
  The app uses a general **Tab** navigator, and each screen from the tab uses a **Stack** navigator. The tabs function as independent parts of the same app, the results or information displayed on one screen not being affected by changing said screen. 

<img src="https://media.tenor.com/D0mk5R5x1G8AAAAd/cat-fat-cat.gif" width="300" />
  
This is done by having in the App.js component the main *AppNavigation* functional component switching between the Stack navigator, as shown here:
  
```javascript
const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
<Tab.Navigator 
/* Tab.Navigator options and styling */
>
  <Tab.Screen name="Booklist" component={BookListNavigator} />
  <Tab.Screen name="Search" component={SearchScreenNavigator} />
</Tab.Navigator>
 );
```
  Each screen has then their own internal navigator:
  
  ### Homepage (BookList) 
  
  ```javascript
const Stack = createStackNavigator();
<Stack.Navigator
  initialRouteName={Routes.BookListScreen}
  /* Options */
>
  <Stack.Screen
    name={Routes.BookListScreen}
    component={BookListScreen}
    /* Options */
  />
  <Stack.Screen
    name={Routes.BookDetailsScreen}
    component={BookDetails}
    /* Options */
  />
</Stack.Navigator>;
  ```
  
  ### Search
  
  ```javascript
const Stack = createStackNavigator();
<Stack.Navigator
  initialRouteName={Routes.SearchScreen}
  /* Options */
>
  <Stack.Screen
    name={Routes.SearchScreen}
    component={SearchScreen}
    /* Options */
  />
  <Stack.Screen
    name={Routes.BookDetailsScreen}
    component={BookDetails}
    /* Options */
  />
</Stack.Navigator>;
  ```
  
## User Experience
  
  To make the user experience as seamless as possible, there have been implemented placeholder visual elements to aid the user to better navigate to the wished screen and/or action. Such elements are: 
  
  - gradients at list end to suggest scrolling
  - search file icon to suggest that searching happens in that screen
  - missing file icons when search returns no result
  - loading animation when fetching data
  
  | Homepage Loading Animation | Element Loading Animation | Search Bar Interaction |
  | :------------------------: | :-----------------------: | :--------------------: |
  | <img style="display: block; margin-left: auto; margin-right: auto; width: 250" src="https://github.com/linca-tudor/NYTimesApp/blob/master/assets/gifs/LoadingBooklist.gif"/> | <img style="display: block; margin-left: auto; margin-right: auto; width: 250" src="https://github.com/linca-tudor/NYTimesApp/blob/master/assets/gifs/LoadingAnimation.gif"/> | <img style="display: block; margin-left: auto; margin-right: auto; width: 250" src="https://github.com/linca-tudor/NYTimesApp/blob/master/assets/gifs/SearchBarCloseButton.gif"/> |
  
## Further improvements
  
### Sharing and *deep links*
  
Right now the app only manages hyperlinks from within the app to the outside world. It would be a great thing to implement a share button that cand generate a *deep link* that would enable the person that has been sent a particular book link to open the app and automaticallt navigate to said book

### Caching fetched data
 
Currently, every time data is needed a *fetch()* is called. During the app development I discovered that the NY Times API recommends a sleep period of 6 seconds beteween calls to ensure that the request quota per 60 seconds is not exceeded. Although the input text handler function is debounced using lodash.debounce, there still are occasions where the app becomes unresponsivness due to the server refusing to answer requests. A method for caching the fetched data and only refreshing it on manual refresh gesture and app restart neets to be implemented. This way the search field can also be sped up, thus providing a more fluid user experience.

## Conclusions

As my first React Native project, the learning curve was steep. Altough many steps along the way proved to be fairly intuitive, the development process has not taken place without certain insecure moments. Following this project I am planning to work more to further increase the depth of my knowledge in the following areas of interest: 
 - Passing data from one component to another using *Props*
 - Component *State* and proper component lifecycle management (*useRef, useState, useEffect, useCallback*) 
 - File structure and naming convention
 - Separating function from interface; logic should not be done in visual components
  
  

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
   
   
