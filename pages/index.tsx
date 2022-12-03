import { GetStaticProps } from 'next';
import Head from 'next/head';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import Navbar from '../components/navbar';
import { getAllPostsForHome, getPrimaryMenu } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts: { edges }, preview, menuItems }) {
	const heroPost = edges[0]?.node;
	const morePosts = edges.slice(1);

	return (
		<Layout preview={preview}>
			<Head>
				<title>Next.js Blog Example with {CMS_NAME}</title>
			</Head>
			<Navbar menuItems={menuItems} />
			<div className="px-5">
				{heroPost && (
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.featuredImage}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllPostsForHome(preview);
	const menuItems = await getPrimaryMenu();

	return {
		props: { allPosts, preview, menuItems },
		revalidate: 10,
	};
};
