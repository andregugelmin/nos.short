import useAsync from "../useAsync";
import * as service from "../../services/api";

export default function useSignUpHost() {
	const { data, loading, act, error } = useAsync(service.createShortLink, false);

	return {
		createShortLinkData: data,
		loadingCreatingShortLink: loading,
		createShortLink: act,
		crateShortLinkError: error,
	};
}