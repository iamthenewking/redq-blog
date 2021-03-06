export default function HeroShape({ id, className = '' }) {
	return (
		<div className={className}>
			<svg viewBox="0 0 1920 950" fill="none">
				<mask
					mask-type="alpha"
					mask-units="userSpaceOnUse"
					x="0"
					y="0"
					width="1920"
					height="950"
				>
					<rect width="1920" height="950" fill="#EFF1F7" />
				</mask>
				<g>
					<g opacity="0.5">
						<path
							d="M282.712 232.92C368.661 87.7661 492.366 61.0064 642.104 64.6246C770.219 67.7411 908.806 101.379 1027.06 51.6925C1144.96 2.14948 1226.53 -86.8703 1353.61 -81.7835C1524 -74.9055 1597.36 61.3288 1587.07 195.056C1572.8 380.475 1413.09 474.94 1254.71 464.909C1123.62 456.634 984.858 444.956 867.786 530.859C759.964 609.992 686.638 773.165 537.51 788.067C243.234 817.478 123.724 501.377 282.712 232.92Z"
							fill={`url(#paint${id}0_linear)`}
						/>
					</g>
					<g opacity="0.5">
						<path
							d="M1494.12 254.662C1460.1 199.35 1387.01 181.928 1331.69 215.947L503.198 725.484C447.885 759.503 430.463 832.593 464.483 887.906C498.503 943.219 571.593 960.641 626.905 926.621L1455.4 417.109C1510.71 383.089 1528.14 309.975 1494.12 254.662Z"
							fill={`url(#paint${id}1_linear)`}
						/>
					</g>
					<g opacity="0.4">
						<path
							d="M1300.88 595.458C1320.45 624.585 1360.34 632.406 1389.46 612.83L1825.89 319.508C1855.02 299.931 1862.84 260.05 1843.27 230.923C1823.69 201.795 1783.81 193.974 1754.68 213.551L1318.25 506.873C1289.09 526.443 1281.28 566.294 1300.88 595.458Z"
							fill={`url(#paint${id}2_linear)`}
						/>
					</g>
				</g>
				<defs>
					<linearGradient
						id={`paint${id}0_linear`}
						x1="724"
						y1="5.49999"
						x2="1030.08"
						y2="713.248"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" stopOpacity="0.3" />
						<stop offset="1" stopColor="white" />
					</linearGradient>
					<linearGradient
						id={`paint${id}1_linear`}
						x1="1453"
						y1="237.5"
						x2="447.501"
						y2="852.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#E8ECF9" />
						<stop offset="1" stopColor="#E8ECF9" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id={`paint${id}2_linear`}
						x1="1336.14"
						y1="579.486"
						x2="1721.09"
						y2="293.059"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<clipPath>
						<rect
							width="1376"
							height="872"
							fill="white"
							transform="translate(212 -82)"
						/>
					</clipPath>
					<clipPath>
						<rect
							width="923.611"
							height="923.611"
							fill="white"
							transform="translate(637.153 15) rotate(13.4069)"
						/>
					</clipPath>
					<clipPath>
						<rect
							width="499.338"
							height="499.338"
							fill="white"
							transform="translate(1375.1 120.124) rotate(11.0952)"
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
