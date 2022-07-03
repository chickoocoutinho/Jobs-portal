import Parser from "html-react-parser";

const DetailsText = ({ description }) => {
	return <div className="description">{Parser(description)}</div>;
};

export default DetailsText;
