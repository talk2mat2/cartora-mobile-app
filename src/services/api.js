import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { AsyncGetItem } from "../components/Helpers";
import getEnvVars from "./env";
// import https from "https"

const baseUrl = getEnvVars().apiUrl;

// axios.defaults.httpAgent=new https.Agent({
//   rejectUnauthorized:false
// })
const rootApi = (hash) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    headers: {
      Accept: "application/json",
      Authorization: `token ${hash}`,
    },
  });
};

export const useClientQuery = (key) => {
  const { data, isError, isLoading } = useQuery(key, async () => {
    const hash = (await AsyncGetItem("token")) || "";
    return rootApi(hash)
      .get("/")
      .then((res) => res.data)
      .catch((err) => { throw err.response.data});
  });

  return { data, isError, isLoading };
};

// export const useClientMutation = (key, datas = {}, method) => {
//   const { data, isError, isLoading, mutate } = useMutation(key, async () => {
//     const hash = (await AsyncGetItem("token")) || "";
//     return rootApi()
//       [method](key, datas)
//       .then((res) =>res.data).catch(err=>{throw res.data});
//   });

//   return { data, isError, isLoading, mutate };
// };

export const useMutations = () => {
  const mutateFunction = async ({ key, method, data = {} }) => {
    const hash = (await AsyncGetItem("token")) || "";
     return rootApi(hash)
      [method?.toLowerCase()](`/${key}`, data)
      .then((res) => res.data)
      .catch((err) => { throw err.response?.data});
  };
  const {
    mutate: reactQueryMuate,
    isError,
    error,
    isLoading,
  } = useMutation(mutateFunction);

  // useEffect(() => {
  //   if (isError) {
  //     // console.log(error.response);
  //     // Handle mutation errors here
  //     handleError(error);
  //   }
  // }, [isError, error]);

  const mutate = (
    { key, method, data },
    { onSuccess = () => {}, onError = () => {}, onSettled = () => {} }
  ) => {
    reactQueryMuate(
      { key, method, data },
      {
        onError,
        onSettled,
        onSuccess,
      }
    );
  };
  return { mutate, isLoading };
};
