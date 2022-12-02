import Link from 'next/link';
import Avatar from './avatar';
import CoverImage from './cover-image';
import Date from './date';

export default function PostPreview({
	title,
	coverImage,

	excerpt,

	slug,
}) {
	return (
		<div>
			<div className="mb-5">
				{coverImage && (
					<CoverImage title={title} coverImage={coverImage} slug={slug} />
				)}
			</div>
			<h3 className="text-3xl text-center font-['Crimson-Text'] mb-3 leading-snug 2">
				<Link
					href={`/posts/${slug}`}
					className="hover:underline hover:underline-offset-8 hover:text-accent-cyan"
					dangerouslySetInnerHTML={{ __html: title }}
				></Link>
			</h3>

			<div
				className="text-lg text-center font-['Open-Sans'] leading-relaxed mb-4"
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
		</div>
	);
}
