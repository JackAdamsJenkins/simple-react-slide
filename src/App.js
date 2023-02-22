import Slider from './component/slider/slider';

const images = ['https://placebear.com/2048/600', 'https://placekitten.com/2048/600', 'https://baconmockup.com/2048/600', 'https://placebeard.it/2048x600', 'https://picsum.photos/2048/600']

function App() {
  return (
    <div class="container">
      <Slider images={images} />
    </div>
  );
}

export default App;
