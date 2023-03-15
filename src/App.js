import  {useState} from 'react'
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import CardList from "./components/CardList";
import {dataCard} from './DataForCard';

function App() {
  const [cardData, setCardData] = useState(dataCard)
  // Get all Catégory and unique
  const mycategory = ['all',...new Set(dataCard.map((el) => el.catégory))]
  // filter by category
  const filterByCategory = (cat) => {
    if(cat === 'all'){
      setCardData(dataCard)
    }else{
      const newArr = dataCard.filter((el) => el.catégory === cat)
      setCardData(newArr)
    }
  }
    // filter by Search
    const filterBySearch = (word) => {
      if(word !== ''){
        const newArrBySearch = dataCard.filter((el) => el.title === word)
        setCardData(newArrBySearch)
      }
    }
  return (
    <div className="color-body font width-100">
      <NavBar searchFilter={filterBySearch} />
      <Container>
        <Header finish={[mycategory]} filterCategory={filterByCategory} />
        <CardList cards={cardData}/>
      </Container>
    </div>
  );
}

export default App;
