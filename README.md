# ChatApp
## _This is an app that implements a chat using Gifted Chat_


## Features

- Create and update your user
- Write text messages on a group-style chat 
- Send pictures on the chat
- All the user, user data, messages and media files are hosted on Firebase

NYTimesApp is a lightweight project that represents my first contact with the development process of a mobile app using the React Native Framework
ChatApp is my second project using the React Native Framework, this time using more complex modules, such as [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat)

## Tech

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

The server can now be started with:

```sh
npm expo start
```

## Setting up Firebase

To integrate Firebase with the app, you first have to go to the [Firebase Console](https://console.firebase.google.com/), and login if prompted, 
then follow these steps:

### Step 1. Create a new FIrebase project

<img width="1535" alt="Create new project" src="https://user-images.githubusercontent.com/37547839/202476627-62d6cfc0-78e4-4269-b585-b26d5c2be5da.png">
<img width="1550" alt="Add new project name" src="https://user-images.githubusercontent.com/37547839/202478992-537b29fe-6d01-4896-b8df-e158ded89664.png">
<img width="1535" alt="Toggle off Google Analitics" src="https://user-images.githubusercontent.com/37547839/202476837-3f04ca84-04dc-4b71-ba13-3500cc39b527.png">
<img width="1535" alt="New project ready" src="https://user-images.githubusercontent.com/37547839/202476860-a56a5e1e-18dd-4aa1-8d78-0aaa2a5ce7ed.png">

### Step 2. Create a new App within the project

<img width="1550" alt="Project home new app" src="https://user-images.githubusercontent.com/37547839/202479379-6d80ec83-5b5c-4816-8da8-18cbc1f8af21.png">
<img width="1550" alt="Create new app name" src="https://user-images.githubusercontent.com/37547839/202480812-6756818e-d467-4663-bbdf-08fbec5683bb.png">
<img width="1550" alt="Api keys" src="https://user-images.githubusercontent.com/37547839/202482228-051427bd-129a-4a08-904f-f8fd227be885.png">

### Step 3. Activate the Authentication service

<img width="1550" alt="Project home created app" src="https://user-images.githubusercontent.com/37547839/202482717-6b581611-219d-4636-b56f-6c80a37cc324.png">
<img width="1550" alt="All products Auth" src="https://user-images.githubusercontent.com/37547839/202483413-b3c1cb30-6e0c-434a-9ca8-483fb53c732e.png">
<img width="1550" alt="New Auth Service" src="https://user-images.githubusercontent.com/37547839/202483538-a9b77ef6-66ac-472f-af53-1e03a1660836.png">
<img width="1550" alt="Auth Email set-up" src="https://user-images.githubusercontent.com/37547839/202482812-73492e16-faac-4ea6-96da-1054aa2fa5af.png">
<img width="1550" alt="Auth Email enable" src="https://user-images.githubusercontent.com/37547839/202482827-a23ff249-a84e-40a4-b397-e82f5790b9f4.png">

### Step 4. Initialize the Real Time Database

<img width="1550" alt="Project home created app" src="https://user-images.githubusercontent.com/37547839/202484086-af828e1d-784c-4dc1-b774-aebdcdc97b93.png">
<img width="1550" alt="All products Real Time DB" src="https://user-images.githubusercontent.com/37547839/202484121-91be63e9-67c0-4491-be79-5889cc34a5dd.png">
<img width="1550" alt="New real time DB" src="https://user-images.githubusercontent.com/37547839/202484154-974badd2-40e2-4cf7-98d2-9f198f26802e.png">
<img width="1550" alt="Real time DB location" src="https://user-images.githubusercontent.com/37547839/202484174-91bf9054-429f-400f-9ac5-4eed95972508.png">
<img width="1550" alt="Real time DB rules" src="https://user-images.githubusercontent.com/37547839/202484187-820bf539-098c-4269-9439-030c72cd2d58.png">
<img width="1550" alt="Real time DB link" src="https://user-images.githubusercontent.com/37547839/202484236-db513f81-8d53-4068-be69-70a3c25fa77a.png">

### Step 5. Initialize the Storage Bucket

<img width="1792" alt="All products Storage" src="https://user-images.githubusercontent.com/37547839/202484530-60e87827-9b65-4e49-86ff-3a84dba7bca5.png">
<img width="1792" alt="New Storage Bucket" src="https://user-images.githubusercontent.com/37547839/202484552-b37691e0-a137-49fd-b1af-d4e81f785952.png">
<img width="1792" alt="Storage Bucket Location" src="https://user-images.githubusercontent.com/37547839/202484577-8649bd6f-2dd2-48a5-a9fa-0ba75530a8e3.png">
<img width="1792" alt="Storage Bucket Rules" src="https://user-images.githubusercontent.com/37547839/202484596-8437381e-aa5a-4d78-9c39-1369b7408a70.png">
<img width="1792" alt="Storage link" src="https://user-images.githubusercontent.com/37547839/202484622-1c2cf288-6c71-4890-a08d-293491bcf073.png">

### Step 6. Putting it all together

The final step in integrating Firebase in our app is to save all the keys and links into a single file inside the project folder.
Create a new **.env** file at the root of the project folder. This file will contain the following:

```javascript
  FIREBASE_API_KEY:               apiKey              //from Step 2.
  FIREBASE_AUTH_DOMAIN:           authDomain          //from Step 2.
  FIREBASE_PROJECT_ID:            projectId           //from Step 2.
  FIREBASE_MESSAGING_SENDER_ID:   messagingSenderId   //from Step 2.
  FIREBASE_APP_ID:                appId               //from Step 2.
  FIREBASE_DATABASE_URL:          databaseUrl         //from Step 4.
  FIREBASE_STORAGE_BUCKET:        storageBucket       //from Step 5.
```
The app should now build successfully :D

## Important
### If you forked this project, or you use your own public version history system, make sure to add the **.env** file to the ignored files list. The Firebase security rules configured in the previous steps will allow any person with access to these keys to read and write data on the database until the timeframe expires (this includes sent messages, images and user credentials).






























# Template data below, will be deleted







## Modules

ChatApp is currently based on the following modules.
Instructions on how to use them in your own application are linked below.

| Module | Documentation |
| ------ | ------ |
| expo-app-loading | [AppLoading][expo-app-loading] |
| expo-font | [Font][expo-font] |
| expo-linear-gradient | [LinearGradient][expo-linear-gradient] |
| @react-navigation | [ReactNavigation][react-navigation] |

## Application Screens

### Homepage

The [Homepage][Booklist] consists of a **SectionList** component that displays the bestselling books shown on New York Times. The data is fetched from the API, filtered to select only the Title, Author and Cover Photo from the server response.

<img src="https://media.tenor.com/KEzW7ALwfUAAAAAC/cat-what.gif" width="300"/>

### Book Details Screen

Upon clicking on any SectionList item, the app will redirect the screen a [detailed view][Booklist2BookDetailsScreen] of the selected book. The data is filtered from the bestsellers list itself, this time also getting information regarding the book Description, and purchase links.

<img src="https://media.tenor.com/lL6gUPwa4aMAAAAd/cats-funny-cat.gif" width="300"/>

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

   [expo-app-loading]: <https://docs.expo.dev/versions/latest/sdk/app-loading/>
   [expo-font]: <https://docs.expo.dev/versions/latest/sdk/font/>
   [expo-linear-gradient]: <https://docs.expo.dev/versions/latest/sdk/linear-gradient/>
   [react-navigation]: <https://reactnavigation.org/docs/getting-started/>
   
   [Booklist]: <https://github.com/linca-tudor/NYTimesApp/blob/master/assets/gifs/Booklist.gif>
   [Booklist2BookDetailsScreen]: <https://github.com/linca-tudor/NYTimesApp/blob/master/assets/gifs/Booklist2BookDetailsScreen.gif>
   [BuyLinks]: <https://github.com/linca-tudor/NYTimesApp/blob/master/assets/gifs/BuyLinks.gif>
   [Search]: <https://github.com/linca-tudor/NYTimesApp/blob/master/assets/gifs/Search.gif>
