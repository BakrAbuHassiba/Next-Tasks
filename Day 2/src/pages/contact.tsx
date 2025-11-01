import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Conatct</title>
      </Head>
      <div className="container py-10 mx-auto w-100 text-center">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p>Email: support@moviebase.com</p>
      </div>
    </>
  );
}
