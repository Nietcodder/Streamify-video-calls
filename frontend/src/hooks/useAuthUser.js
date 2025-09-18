import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";


const useAuthUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const userData = await getAuthUser(); // this already returns res.data
        return userData; // ✅ no .data here
      } catch (err) {
        return null; // ✅ prevent undefined
      }
    },
    retry: false,
  });

  return {
    isLoading,
    authData: data || null,   // I used "authData" (like in your App.jsx)
    authUser: data?.user || null,
  };
};

export default useAuthUser;
