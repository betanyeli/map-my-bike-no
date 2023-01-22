
# Map My Bike 🚲 🇳🇴 

📱React Native Application to show a Map Viewer that pulls data from Oslo City Bike Api.

## Trello
https://trello.com/b/C0pQeKC2/map-my-bike

## 🛠Installation🛠

```bash
  npm install
  expo start
```
    
## ✨Color Palette✨

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Vibrant Palette | ![#00B4C5](https://via.placeholder.com/10/00b4c5?text=+) #00B4C5 |
| Black | ![#0000](https://via.placeholder.com/10/0000?text=+) #0000 |


Inspired by: Accessibles color palette generator: https://venngage.com/tools/accessible-color-palette-generator#colorGenerator


## 👩🏻‍💻Functional requirements👩🏻‍💻

- Should render a Map View 
- Should render a markers with availables bikes
- Should render a tooltip to show if bycicle is available at location
- Should display a list stations sorted if the device is in Landscape mode
- Should display a bar graph with stations info

## ✨Non - Functional requirements✨

- Should have different device orientation support
- Should have pull to refresh support
- Should have an Screen error

## 👩🏻‍💻Tech stack👩🏻‍💻

- React Native + TS 
- Expo CLI
- Oslo City Bike Api
- `react-native-maps`** The original requirement specify to use Leaflet library, however, that library doesn't have proper support to android devices, and use webview to render the MapView, it could be decreases the performance of the App because the datasets responses could be too large.
- `react-navigation`
- Lottie , to render animations
- Figma to design Icon and Splash Screens


## 👩🏻‍💻Authors👩🏻‍💻

- [@Betanyeli](https://www.github.com/Betanyeli)

## ✨Feedback✨

If you have any feedback, please reach out to me at [LinkedIn](https://www.linkedin.com/in/betanyeli-bravo/)



