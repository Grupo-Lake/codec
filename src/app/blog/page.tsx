import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { formatPostDate, POSTS } from "@/data/posts";
import {
  Container,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/ui/primitives";

const title = "Blog do CODEC – novidades e apoios";
const description =
  "Novidades, eventos e iniciativas apoiadas pelo CODEC, o Congresso de Desenvolvimento nos Esportes de Contato.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "2º CODEC" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BlogPage() {
  return (
    <>
      <a href="#top" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Section id="top" className="bg-white">
          <Container>
            <Eyebrow>Blog</Eyebrow>
            <SectionTitle className="max-w-[760px]">
              Novidades do CODEC.
            </SectionTitle>
            <p className="mt-6 max-w-[620px] text-[clamp(17px,1.9vw,21px)] leading-[1.45] text-muted text-pretty">
              Eventos, cursos e iniciativas que o CODEC apoia.
            </p>

            <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
              {POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[22px] bg-surface no-underline"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-line-soft">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(min-width: 1080px) 340px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-[26px] py-[28px]">
                    <p className="text-[13px] text-muted">
                      {post.category} · {formatPostDate(post.date)}
                    </p>
                    <h2 className="text-[26px] leading-[1.12] font-bold tracking-[-0.02em] text-ink group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="text-base leading-[1.45] text-muted text-pretty">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto pt-2 text-base font-semibold text-link">
                      Ler mais ›
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
