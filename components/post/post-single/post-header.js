import cn from 'classnames';
import { motion } from 'framer-motion';
import Container from '../../container';
import DateFormatter from '../../date-formatter';
import Img from '../../image';
import SocialShare from '../../social-share';
import Categories from '../../categories';
import { getPostCategories } from '../../../lib/utils';
// motion variant
let easing = [0.175, 0.85, 0.42, 0.96];
const fadeIn = {
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: easing,
		},
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: easing,
		},
	},
};
const fadeInTop = {
	exit: {
		y: -8,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
};
const fadeInBottom = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
};
const fadeInBottomDelay = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
};
const heightTransition = {
	exit: {
		height: 0,
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
	enter: {
		height: 'auto',
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
};

export default function PostHeader({ title, coverImage, date, category }) {
	return (
		<>
			<motion.div
				variants={heightTransition}
				className="mb-10 sm:mb-12 w-screen bg-rq-gray-300 transform -translate-x-1/2 pt-32 pb-20 sm:pb-24 md:pt-36 md:pb-32 relative overflow-hidden"
				style={{ marginLeft: '50%' }}
			>
				<Container className="px-5 pb-1">
					<motion.div
						variants={fadeInBottomDelay}
						className="mb-6 text-rq-blue-800 uppercase tracking-widest text-sm font-semibold"
					>
						{date !== undefined && date !== '' ? (
							<DateFormatter dateString={date} />
						) : (
							''
						)}
					</motion.div>
					{/* End of post meta */}
					<motion.h1
						variants={fadeInBottom}
						className="max-w-screen-md text-3xl sm:text-4xl md:text-5xl md:leading-tight font-bold mb-8"
					>
						{title}
					</motion.h1>
					{/* End of post title */}
					<motion.div variants={fadeInTop}>
						<SocialShare title={title} />
					</motion.div>
					{/* End of post's social share */}
				</Container>
				<motion.div
					variants={fadeIn}
					className="absolute hidden md:block"
					style={{
						opacity: 0.4,
						backgroundColor: '#EFF1F7',
						backgroundImage: 'radial-gradient(#2950DB 1px, #EFF1F7 1px)',
						backgroundSize: '22px 22px',
						right: '8px',
						width: '24%',
						height: '50%',
						bottom: '18px',
						zIndex: -1,
					}}
				></motion.div>
				{/* End banner dot pattern */}
			</motion.div>
			<div className="max-w-3xl mx-auto mb-10">
				<Categories className="mb-6" items={getPostCategories(category)} />
				{/* End of post categories */}
				<motion.div variants={fadeInBottom}>
					<Img
						className={cn('shadow-xl')}
						title={title}
						src={coverImage}
						width={768}
						height={470}
					/>
				</motion.div>
			</div>
		</>
	);
}
