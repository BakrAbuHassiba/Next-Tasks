import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }: any) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name} style={{ margin: "1rem" }}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
