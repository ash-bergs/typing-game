
# Building a Typing Game with React! 

[Play Here!](https://typing-game-beta-one.vercel.app/)

This project is a simple typing game built with React. I built this to get some practice with React, project file structure, string manipulation, and refresh my memory of DOM mechanics. A user is given a word from a pre-made list of words, the goal is to type the most words correctly in a time limit. 

This was built using a tutorial, once built I will refactor it and make it my own. There's nothing wrong with learning from our betters! 📺🏫

# Version One: 

In the first version of this app, following a Udemy tutorial, we built the basics. 

5 Components: 

- App 

- Container 

- Button 

- Results 

- Typeracer 

Styles have also been added, that included responsive flow achieved quite eloquently. 

![entry screenshot](https://i.ibb.co/GPTPN3g/typing-Game-One.jpg)

![gameplay screenshot](https://i.ibb.co/5vKTBT3/typing-Game-Two.jpg)

# Version Two: 

The tutorial was quite short, and just completed the bare minimum. I've been working to bring more functionality to the app, hopefully making it a little more interactive. 

For starters I changed the color scheme just a bit. The coral red was a little harsh in my opinion. Furthermore, using the same color for both correct and incorrect words in the Results component was confusing. I replaced this color with seagreen, and retained it for the incorrect words visualized in Results. 

![updated colors screenshot](https://i.ibb.co/x3Xr87G/typing-Game-Three.jpg)

You'll also notice that the score (at the very top of the right-hand side of the screen) now shows both the user's current score (number of correctly typed words) against the *total* number of attempts. I think this gave the user a nice bit of information they might find interesting. 


### Note on this Repository:

This directory is a brief example of a [React](https://reactjs.org/) app with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction) that can be deployed with Vercel and zero configuration.

#### Deploy Your Own

Deploy your own React project, along with Serverless Functions, with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/vercel/tree/main/examples/create-react-app-functions)

_Live Example: https://create-react-app.now-examples.now.sh/_

#### How We Created This Example

To get started with React, along with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction), with Vercel, you can use the [Create-React-App CLI](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to initialize the project:

```shell
$ npx create-react-app my-app
```

### Future Versions: 

- Easy, Intermediate, Expert levels - generate different lists of words based on included letters, words with x's, p's, q's for example could be in the algorithm for "expert mode" for example, or longer length words 

Preliminary research: 

- (medium article)[https://medium.com/jsunderthescope/generating-a-list-of-valid-words-in-javascript-efd3955c8912]