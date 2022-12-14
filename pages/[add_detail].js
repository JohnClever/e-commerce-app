import Head from 'next/head';
import { DetailScreen } from '../screens';

export default function ProductDetail() {
	return (
		<div>
			<Head>
				<title>E-Commerce demo app</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<DetailScreen />
		</div>
	);
}
