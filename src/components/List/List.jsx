import Results from "./Results/Results";
import Search from "./Search/Search";

import { useSelector } from "react-redux";

import { BarLoader } from "react-spinners";
import { colors } from "../../theme/theme";

const List = () => {
	const [loading] = useSelector((state) => [state.jobResults.loading]);

	return (
		<>
			<Search />
			{loading && <BarLoader width={"100%"} color={colors.primary} />}
			<Results />
		</>
	);
};

export default List;
