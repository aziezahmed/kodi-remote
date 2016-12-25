# Kodi Remote

A web interface remote for osmc or kodi

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

* A web server such as [Apache](http://httpd.apache.org)

### Installing

Kodi remote does not make use of any build tools such as grunt, gulp, npm, etc. So you just need to clone the project and serve it.

```
git clone https://github.com/aziezahmed/kodi-remote.git
```

After cloning you will need to adjust the url for the computer running in .htaccess

```
RewriteEngine on

RewriteRule server http://osmc.local/jsonrpc [P]
```

### Features

* Send Text - Send text to Kodi
* YouTube Url - send a YouTube video id to Kodi for it to play
* Video Url - send a video url to Kodi for it to play

## Built With

* [jQuery](https://jquery.com)

## Authors

* **Aziez Ahmed Chawdhary(https://github.com/aziezahmed)**

## License

This project is licensed under the MIT License

