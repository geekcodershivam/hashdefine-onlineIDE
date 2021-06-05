# hashdefine-onlineIDE

Hash Define IDE is an online IDE which supports compilation of multiple programming languages.


## Deployment

[Hash Define Ide](https://hashide.herokuapp.com/)  

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Commits to master and PRs are automatically built and deployed by Heroku.

![image](https://user-images.githubusercontent.com/31733809/120905739-cf82ec00-c671-11eb-8604-bec3f88a9a26.JPG)



## Contributing

Contributions are always welcome.

 - Steps:

1. [Fork](https://github.com/geekcodershivam/hashdefine-onlineIDE.git) this repository to your own GitHub account
2. Clone it to your local machine
3. Navigate to the cloned folder: `cd client`
4. Install the dependencies: `npm install`
5. Navigate to the server folder: `cd server`
6. Run `node server.js` & Navigate to the client folder.
7. Run `npm start`runs the app in the development mode
    - Open http://localhost:3000 to view it in the browser.




## Table of Contents
- [Build Setup](#build-setup)
- [Features](#features)
- [Functions](#functions)
- [API](#api)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build

```


## Features
This responsive online code editor and compiler have the following features.

|Feature|Details|
|-------|-------|
|**Multiple Language Support**|Java, C++, C, Python, Javascript.|
|**Download Code**|Code can be downloaded with the name specified by the user.|
|**Custom Input**|A custom input box available for the user where user can enter inputs required by the program to run.|
|**Download Output**|User can download or copy output of the program.|
|**Fonts**|7 different fonts for the editor.|
|**Font Size**|User can also set font size for the editor.|


## Functions
|Button|Function|
|------|--------|
|**RUN**|Use the button to compile the code.|
|**INPUT**|Use to toggle custom input-ouput box.|
|**DOWNLOAD**|Use the button to download the code in the editor into a file.|


## API 
|Request|End Point|
|------|--------|
|**POST**|  /api/compiler  |


