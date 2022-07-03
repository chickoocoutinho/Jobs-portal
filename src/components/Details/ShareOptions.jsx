import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	LinkedinIcon,
	FacebookIcon,
	TwitterIcon,
} from "react-share";

const ShareOptions = ({ applyUrl, company, title }) => {
	const message = `${company} is Hiring a ${title}. Apply Here`;
	return (
		<div className="share-links">
			<FacebookShareButton url={applyUrl} quote={message}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>
			<LinkedinShareButton url={applyUrl}>
				<LinkedinIcon size={32} round />
			</LinkedinShareButton>
			<TwitterShareButton url={applyUrl} title={message}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>
		</div>
	);
};

export default ShareOptions;
