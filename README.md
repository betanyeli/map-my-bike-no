<p align="center">
<img src="https://betanyeli-images.s3.amazonaws.com/splash-screen+(1).png" alt="Map My Bike Logo">
</p>

# Map My Bike 🚲 🇳🇴 

📱React Native Application to show a Map Viewer that pulls data from Oslo City Bike Api.


### MapViewer
<img src="https://betanyeli-images.s3.amazonaws.com/WhatsApp+Image+2023-01-22+at+21.36.10.jpeg" alt="Image of a Map in Android" width="200"> <img src="https://betanyeli-images.s3.amazonaws.com/Simulator+Screen+Shot+-+iPhone+14+-+2023-01-22+at+23.19.32.png" alt="Image of a Map in iOS" width="200">

### List Stations
<img src="https://betanyeli-images.s3.amazonaws.com/WhatsApp+Image+2023-01-22+at+21.36.11.jpeg" alt="Image of a List Stations Bike in Android" width="200"> <img src="https://betanyeli-images.s3.amazonaws.com/Simulator+Screen+Shot+-+iPhone+14+-+2023-01-22+at+21.35.09.png" alt="Image List Stations Bike in iOS" width="200">

### Splash Screen, Loader, Error Screen
<img src="https://betanyeli-images.s3.amazonaws.com/Simulator+Screen+Shot+-+iPhone+14+-+2023-01-22+at+23.04.53.png" alt="Splash Screen" width="200"> <img src="https://betanyeli-images.s3.amazonaws.com/Simulator+Screen+Shot+-+iPhone+14+-+2023-01-22+at+23.05.57.png" alt="Loading Screen" width="200"> <img src="https://betanyeli-images.s3.amazonaws.com/WhatsApp+Image+2023-01-22+at+21.36.10+(1).jpeg" alt="Error Screen" width="200">


## 🛠Installation🛠

```bash
  npm install
  expo start
```

## 👩🏻‍💻Functional requirements👩🏻‍💻

- Should render a Map View :white_check_mark:
- Should render a markers with availables bikes :white_check_mark:
- Should render a tooltip to show if bycicle is available at location :white_check_mark:
- Should display a list stations sorted if the device is in Landscape mode :soon:
- Should display a bar graph with stations info :soon:

## ✨Non - Functional requirements✨

- Should have different device orientation support :white_check_mark:
- Should have pull to refresh support :soon:
- Should have an Screen error :white_check_mark:

## 👩🏻‍💻Tech stack👩🏻‍💻

- React Native + TS 
- Expo CLI
- Oslo City Bike Api
- `react-native-maps`** The original requirement specify to use Leaflet library, however, that library doesn't have proper support to android devices, and use webview to render the MapView, it could be decreases the performance of the App because the datasets responses could be too large.
- `react-navigation`
- Lottie , to render animations
- Figma to design Icon and Splash Screens
- Barlow font (Accessible friendly)


## Trello
https://trello.com/b/C0pQeKC2/map-my-bike
    
## ✨Color Palette✨

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Vibrant Palette | ![#00B4C5](https://via.placeholder.com/10/00b4c5?text=+) #00B4C5 |
| Black | ![#0000](https://via.placeholder.com/10/0000?text=+) #0000 |


Inspired by: Accessibles color palette generator: https://venngage.com/tools/accessible-color-palette-generator#colorGenerator


## 👩🏻‍💻Authors👩🏻‍💻

- [@Betanyeli](https://www.github.com/Betanyeli)

## ✨Feedback✨

If you have any feedback, please reach out to me at [LinkedIn](https://www.linkedin.com/in/betanyeli-bravo/)



