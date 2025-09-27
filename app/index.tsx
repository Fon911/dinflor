import { Redirect } from "expo-router";

const Page = () => {
  const isSignedIn = true;

  if (isSignedIn) {
    return <Redirect href="/(root)/home" />;
  }

  return <Redirect href="/(auth)/login" />;
};

export default Page;
