import Card from "../components/Card";
import images from './../images'
export default function Game() {
  console.log('images: ', images)
  return (
    Object.keys(images).map(imgKey => <Card imgKey={imgKey} />)
  )
}