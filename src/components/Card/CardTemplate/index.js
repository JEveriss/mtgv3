import { TemplateWrapper } from "../Card.style";

import NewCard from "../NewCard";

function CardTemplate({ fetchData, cardData }) {
  // const [show, setShow] = useState(false);

  return (
    <TemplateWrapper>
      <NewCard cardData={cardData} />
    </TemplateWrapper>
  );
}
export default CardTemplate;
