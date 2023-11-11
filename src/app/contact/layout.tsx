export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='justify-center inline-block max-w-lg text-center md:max-w-4xl'>
          {children}
        </div>
      </section>
    </main >
  );
}
