import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getPost, getPosts, postLabel } from "@/lib/writing";

export const alt = "Article by Carlos Cortes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

/** Reads a file from /public as a data URL so it can be embedded in the card */
function publicDataUrl(src: string) {
  const file = fs.readFileSync(path.join(process.cwd(), "public", src));
  const type = src.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${type};base64,${file.toString("base64")}`;
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const font = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Inter.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#111318",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px 56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#34d399",
            }}
          >
            {post ? postLabel(post) : "Writing"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#f3f4f6",
            }}
          >
            {post?.title ?? "Writing"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 24,
              color: "#9ca3af",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#059669",
                color: "white",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              CC
            </div>
            Carlos Cortes · nthchild.one
          </div>
        </div>
        {post?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={publicDataUrl(post.image)}
            alt=""
            width={430}
            height={630}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: font, style: "normal" }],
    },
  );
}
