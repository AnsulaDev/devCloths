import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
    {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.postimg.cc/MKH6qtm6/hats.jpg",
    route:'shop/hats'
    },
    {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.postimg.cc/6QJtVKJq/jackets.jpg",
    route:'shop/jackets'
    },
    {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.postimg.cc/nL4Z0Wpk/sneakers.jpg",
    route:'shop/sneakers'   
    },
    {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.postimg.cc/nhrq9M64/women.jpg",
    route:'shop/womens'
    },
    {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.postimg.cc/13dwGsQL/men.jpg",
    route:'shop/mens'
    }
];

const Directory = () => {

    return(
        <div className='directory-container'>
            {categories.map((category) => (
                <DirectoryItem  key={category.id} category={category} />
            ))}
        </div>

    )
}

export default Directory;
