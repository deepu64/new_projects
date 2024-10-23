import './App.css';
import React from 'react';
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generate';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QrCodeGenerator from './components/qr-code-generator';
import ChangeTheme from './components/change-theme';
import ScrollPercentage from './components/scroll-percentage';
import ModalContainer from './components/modal-popup/modal-test';
import ProfileFinder from './components/github-profile-finder';
import Weather from './components/weatherApp/weather';
import TestFetch from './components/useFetch/testUseFetch';
import ClickOutSide from './components/use-outside-click/test';
import TestWindowResize from './components/use-window-resize/test';

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating noOfStar={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"20"} />
      <LoadMoreData />
      <QrCodeGenerator />
      <ChangeTheme />
      <ScrollPercentage url={`https://dummyjson.com/products?limit=100`} />
      <ModalContainer />
      <ProfileFinder />
      <Weather />
      <TestFetch />
      <ClickOutSide />
      <TestWindowResize />
    </div>
  );
}

export default App;
