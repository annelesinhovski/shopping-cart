import { useEffect } from "react";
import { useRouter } from "next/router";

const ENTRY_PAGE = "/checkout";

export default () => {
  const router = useRouter();

  useEffect(() => {
    router.push(ENTRY_PAGE);
  }, []);

  return null;
};
