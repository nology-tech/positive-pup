import { customRender } from "../../utils/testUtils";
import CardList from "./CardList";
import servicesCardData from "../../assets/mockData/servicesCardData";

it("should match CardList component snapshot", () => {
  const { container } = customRender(<CardList cardData={servicesCardData} />);

  expect(container).toMatchSnapshot();
});
