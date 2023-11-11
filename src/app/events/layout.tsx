export default function EventsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
			<section className="flex gap-4 h-full py-8 md:py-10">
				<div className="inline-block max-w-max gap-4">
					{children}
				</div>
			</section>
		</main>
	);
}
