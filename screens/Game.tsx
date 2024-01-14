import Card from "../components/Card";
import images, { imagesArr } from './../images'
export default function Game() {
  console.log('images: ', images)
  return (
    // Object.keys(images).map(imgKey => <Card imgKey={imgKey} />)
    imagesArr.map(imgSrc => <Card imgKey={imgSrc} />)
  )
}