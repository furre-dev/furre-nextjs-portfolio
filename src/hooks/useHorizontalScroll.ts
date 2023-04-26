import { useEffect } from "react";

export const useHorizontalScroll = (ref: React.RefObject<HTMLDivElement>) => {
	const onScroll = (e: WheelEvent) => {
		if (ref.current) {
			ref.current.scrollLeft += e.deltaY;
		}
	};

	useEffect(() => {
		const scrollContainer = ref.current;
		if (scrollContainer) {
			scrollContainer.addEventListener("wheel", onScroll);
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("wheel", onScroll);
			}
		};
	}, [ref]);
};
