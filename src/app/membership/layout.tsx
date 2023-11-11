export default function MembershipLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					{children}
				</div>
			</section>
		</main>
	);
}
