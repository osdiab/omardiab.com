import type { APIRoute } from "astro";
import z from "zod";
import { serialize } from "cookie";
import isAbsoluteUrl from "is-absolute-url";

const bodySchema = z.object({
  theme: z.enum(["light", "dark"]).optional(),
  path: z
    .string()
    .refine((v) => !isAbsoluteUrl(v), "Must be relative")
    .optional(),
});
export const post: APIRoute = async ({ request }) => {
  const { theme, path } = bodySchema.parse(
    Object.fromEntries(
      [...(await request.formData()).entries()].map(([key, value]) => [
        key,
        value.valueOf(),
      ])
    )
  );
  const headers = new Headers();
  headers.set(
    "Set-Cookie",
    serialize(
      "theme",
      theme ?? "",
      theme ? undefined : { expires: new Date(0) }
    )
  );
  headers.set("Location", path ?? "/");
  return new Response(JSON.stringify({ success: true }), {
    status: 302,
    headers,
  });
};
