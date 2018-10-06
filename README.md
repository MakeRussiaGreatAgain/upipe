# µPipe

### Installation
Let's got down to the business. How do you run it?
<br />
Straightforward Way:
<br>
Run npm or yarn - whichever package manager you have decided to go with:
```
$npm install
```
```
$yarn
```
Once this is done, you have installed all the dependencies required to run this project. Make sure you have your phone connected to the device and run the app.
```
$react-native run-android
```
```
$react-native run-ios
```
The app should be running now on your device or emolator.
<br />
<br />
Unconventional Way:
If the above method doesn't work then try this:
<br />
Create a new project:
```
$react-native init upipe
```
Once this is done, go to package.jason and change the version of React-Native to the last least broken version
```
"dependencies": {
    "react-native": "0.57.1"
  }
  ```
Run npm or yarn to install dependencies
```
$npm install
```
```
$yarn
```
We aren't done yet. The least broken version of React-Native is nevertheless still broken. To fix this we need to install babel/runtime. This can be done as follows:
```
$npm install --save @babel/runtime
```
Finally, we have working React-Native project!
<br />
Replace the App.js file with that from this repository and add the `./src/` folder.
You should be good to go.
<br />
<br />
Still facing any issue? 
<br />
Open an issue and we will look into it. If you personally know the devs, you can reach out to us and we will help you the best we can.
