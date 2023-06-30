import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();

		setLoading(true);
		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then((response) => {
					if (!response.ok) {
						throw new Error('Could not fetch the data for that resource');
					}

					return response.json();
				})
				.then((data) => {
					return setData(data);
				})
				.catch((error) => {
					if (error.name === 'AbortError') {
						console.log('Fetch Aborted');
					}

					console.error({ error });
				})
				.finally(() => setLoading(false));
		}, 1000);

		return () => abortController.abort();
	}, [url]);

	return { data, loading };
};
