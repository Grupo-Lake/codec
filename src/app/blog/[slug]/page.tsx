import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  formatPostDate,
  getPost,
  POSTS,
  REGISTRATION_URL,
  type PostBlock,
} from "@/data/posts";
import { EVENT_NAME, SITE_URL } from "@/lib/config";
import {
  Container,
  Eyebrow,
  ExternalLink,
  PillLink,
  Section,
} from "@/components/ui/primitives";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: path,
      type: "article",
      publishedTime: post.date,
      locale: "pt_BR",
      siteName: "2º CODEC",
      images: [post.image.src],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image.src],
    },
  };
}

const bodyLink = "font-semibold text-link hover:underline";

function Block({ block }: { block: PostBlock }) {
  if ("h2" in block) {
    return (
      <h2 className="mt-12 text-[clamp(26px,3.4vw,36px)] leading-[1.1] font-bold tracking-[-0.02em] text-balance">
        {block.h2}
      </h2>
    );
  }
  if ("p" in block) {
    return (
      <p className="mt-4 text-[clamp(17px,1.9vw,19px)] leading-[1.6] text-ink-soft text-pretty">
        {block.p}
      </p>
    );
  }
  if ("ul" in block) {
    return (
      <ul className="mt-4 flex list-disc flex-col gap-2 pl-6 text-[clamp(17px,1.9vw,19px)] leading-[1.5] text-ink-soft marker:text-brand-blue">
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if ("links" in block) {
    return (
      <ul className="mt-4 flex flex-col gap-2 text-[clamp(17px,1.9vw,19px)]">
        {block.links.map((l) => (
          <li key={l.href}>
            <ExternalLink href={l.href} className={bodyLink}>
              {l.label} ↗
            </ExternalLink>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <figure className="mt-6 rounded-[22px] bg-surface px-[26px] py-[28px]">
      <p className="text-[13px] font-semibold text-muted">
        @opamkarate no Instagram
      </p>
      <blockquote className="mt-3 text-[clamp(17px,1.9vw,19px)] leading-[1.5] text-ink-soft text-pretty">
        “{block.instagram.caption}”
      </blockquote>
      <ExternalLink
        href={block.instagram.href}
        className={`${bodyLink} mt-4 inline-block`}
      >
        Ver publicação no Instagram ↗
      </ExternalLink>
    </figure>
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image.src}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: EVENT_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: EVENT_NAME, url: SITE_URL },
  };

  return (
    <>
      <a href="#top" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Section id="top" className="bg-white">
          <Container>
            <nav aria-label="Trilha" className="text-xs text-muted">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>{" "}
              › {post.category}
            </nav>

            <div className="mt-6 grid items-start gap-10 min-[900px]:grid-cols-[1fr_340px] min-[900px]:gap-14">
              <article className="max-w-[720px]">
                <Eyebrow>{post.category}</Eyebrow>
                <h1 className="text-[clamp(34px,5vw,56px)] leading-[1.05] font-bold tracking-[-0.03em] text-balance">
                  {post.title}
                </h1>
                <p className="mt-4 text-sm text-muted">
                  {formatPostDate(post.date)} · {post.minutes} min de leitura
                </p>
                <div>
                  {post.body.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </article>

              <aside className="flex flex-col gap-4 min-[900px]:sticky min-[900px]:top-[76px]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-surface">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    priority
                    sizes="(min-width: 900px) 340px, 100vw"
                    className="object-cover"
                  />
                </div>
                <PillLink
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="text-center"
                >
                  Inscrever pelo WhatsApp
                </PillLink>
              </aside>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
              }}
            />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
