import Cards from "./Cards"
import Home from "./home"

export default function Images() {
    const images = [
        {
            img: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            img: "https://images.pexels.com/photos/47334/meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]
    console.log(images[0].img)
    return (
        <div>
            {
                images.map((image) => (
                    <Cards pic={image.img} />

                ))
            }
        </div>
    )
}