import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../public/bulma.min.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)}

export default MyApp
