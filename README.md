<br/>
<p align="center">
  <a href="https://github.com/JannieHamberg/XPLORE">
    <img src="https://i.ibb.co/GCHdCyj/xplore-Logga-Purpule.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">XPLORE Image Search</h3>

  <p align="center">
    Fullstack app using React, Typescript ,NodeJs and integrating Google Custom Search and Auth0 
    <br/>
    <br/>
  </p>
</p>



## About The Project

![Screen Shot](https://i.ibb.co/0yT3QbG/img1234.png
)

This application is a straightforward yet functional platform designed as a part of our school project. It features user authentication with Google or GitHub via Auth0, allowing personalized access to the application's main features.

On the client side, users can search for images using Google Custom Search, with a helpful suggestion mechanism for correcting any misspelled queries. The search results are neatly displayed along with the time taken for the search to execute. Furthermore, users have the ability to mark images as favorites, which adds them to a personal collection that can be revisited anytime.

The server complements the client by managing a JSON-based storage system that records each user's favorite images. This is complemented by endpoints that not only facilitate the storage of these images but also ensure data integrity with Joi validation. In essence, the project serves as a functional demonstration of integrating various technologies to create a cohesive and user-focused experience.



## Built With

React

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm
* Nodejs
* Google Custom Search JSON API key
* Auth0 application

```sh
npm install npm@latest -g
```

### Installation

Client:

1. Clone the repo

```sh
git clone https://github.com/JannieHamberg/XPLORE.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a .env file in root of project and add the following with your own API key, Auth0 client ID etc:

```JS
VITE_AUTH0_DOMAIN= 
VITE_AUTH0_CLIENT_ID=
VITE_GOOGLE_API_KEY=
VITE_GOOGLE_CX=
```

4. Run the following in terminal

```sh
npm run dev
```

Now you can visit http://localhost:5173/ on your browser.

Server:

1. Clone the repo

```sh
git clone https://github.com/JannieHamberg/XPLORE.git
```

2. Install NPM packages

```sh
npm install
```

3. Run the following in terminal

```sh
npm run dev
```

## Usage

This application lets a user login and add favorite images to their own library.
It is responsive and provides some animation to create a fun user experience.

![Screen Shot](https://i.ibb.co/MVVG0nw/img123443.png
)
![Screen Shot](https://i.ibb.co/y0gCtnx/img112234.png
)
![Screen Shot](https://i.ibb.co/ZhKTj55/img484.png
)
![Screen Shot](https://i.ibb.co/GP5yQCq/img433.png
)
![Screen Shot](https://i.ibb.co/bzvFQKD/img333233.png
)

## License

Distributed under the MIT License. See [LICENSE](https://github.com/JannieHamberg/XPLORE/blob/main/LICENSE.md) for more information.

## Authors

* **Jannie Hamberg** - *Fullstack developer student at Medieinstitutet* - [Jannie Hamberg](httpshttps://github.com/JannieHamberg://github.com/ShaanCoding/) - **



