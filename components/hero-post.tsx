import Link from 'next/link';
import Avatar from './avatar';
import CoverImage from './cover-image';
import Date from './date';

export default function HeroPost({ title, coverImage, excerpt, slug }) {
	return (
		<section className="relative top-32">
			<div className="mb-8 md:mb-16">
				{coverImage && (
					<CoverImage title={title} coverImage={coverImage} slug={slug} />
				)}
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div className="text-center">
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight font-['Crimson-Text']">
						<Link
							href={`/posts/${slug}`}
							className="hover:underline"
							dangerouslySetInnerHTML={{ __html: title }}
						></Link>
					</h3>
				</div>
				<div>
					<div
						className="text-lg text-center leading-relaxed mb-4 font-['Open-Sans']"
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
				</div>
				<div className="border-b-accent-7 border-b-2 mt-8"></div>
			</div>
		</section>
	);
}
