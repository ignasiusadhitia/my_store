<!-- PROJECT LOGO -->
<br />
<div align="center"> 
  
  [![my_store ][product-logo]](https://ignasiusadhitia.github.io/my_store)
  
   
    
  <h3 align="center">My Store</h3>

  <p align="center">
    A minimalist bike store catalog.
    <br />
    <a href="https://github.com/ignasiusadhitia/my_store"><strong>Explore the docs »</strong></a>
    <br />
    <br /> 
     <a href="https://ignasiusadhitia.github.io/my_store">View Live Demo</a>
    ·   
    <a href="https://github.com/ignasiusadhitia/my_store/issues">Report Bug</a>
    ·
    <a href="https://github.com/ignasiusadhitia/my_store/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>    
    <li><a href="#project-files-structure">Project Files Structure</a></li>  
    <li><a href="#project-links">Projects Link</a></li>
    <li><a href="#contact">Contact</a></li>       
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![my_store ][product-screenshot]](https://ignasiusadhitia.github.io/my_store)

My store is a minimalist bike store online catalog. There are several features on the page such as:

- **Login-Logout**: Functionality to log into or to log out from the dashboard. Please use this credentials to access the dashboard:
  
  ```sh
  email: bot@example.com
  password: bot
  ```
- **Dashboard**: The main page displayed products list.
- **Delete Product**: Delete product in the products list.



  
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This My Store project was built with [React.js](https://reactjs.org/).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Please make sure you have the latest version of [Node Package Manager (NPM)](https://www.npmjs.com/) on your system.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_This is how to run the project on your local environment._

1. Clone the repo
   ```sh
   git clone https://github.com/ignasiusadhitia/my_store.git
   ```
2. Open the repo directory
   ```sh
   cd my_store
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the project
   ```js
   npm start
   ```
5. Your browser will open automatically or you can open it manually and enter this address:
   ```js
   http://localhost:3000/
   ```
   
<p align="right">(<a href="#top">back to top</a>)</p>





<!-- PROJECT FILES STRUCTURE -->
## Project Files Structure

```js
src/
┣ assets/
┃ ┣ css/
┃ ┃ ┗ style.css
┃ ┗ images/
┃   ┣ pen-to-square-solid.svg
┃   ┣ screenshot.png
┃   ┗ trash-can-solid.svg
┣ components/
┃ ┣ AddButton.js
┃ ┣ Dashboard.js
┃ ┣ DeleteIcon.js
┃ ┣ EditIcon.js
┃ ┣ Footer.js
┃ ┣ Header.js
┃ ┣ Login.js
┃ ┣ LogInLogOut.js
┃ ┣ ProductImage.js
┃ ┣ ProductInfo.js
┃ ┣ ProductItem.js
┃ ┣ ProductsList.js
┃ ┗ ProtectedRoute.js
┣ context/
┃ ┗ AuthContext.js
┣ utils/
┃ ┗ index.js
┣ index.js
┗ MyStoreApp.js

```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- PROJECT LINK -->
## Project Links

Project Link: [https://github.com/ignasiusadhitia/my_store](https://github.com/ignasiusadhitia/my_store)

Project Live Demo: [https://ignasiusadhitia.github.io/my_store](https://ignasiusadhitia.github.io/my_store)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ignasius Yuda Adhitia - [Github](https://github.com/ignasiusadhitia/) - [Gitlab](https://gitlab.com/ignasiusadhitia/) - [LinkedIn](https://www.linkedin.com/in/ignasiusadhitia/) - [Email](hi@ignasiusadhitia.com) - [Website](www.ignasiusadhitia.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[product-logo]: src/assets/images/logo.png
[product-screenshot]: src/assets/images/screenshot.png



