export default function EventsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex gap-4 h-full py-8 md:py-10">
			<div className="inline-block max-w-max gap-4">
				{children}
			</div>
		</section>
	);
}
