import { FreshContext, Handlers } from "$fresh/server.ts";
import jwt from "jsonwebtoken";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import Register from "../components/Register.tsx";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    return ctx.render();
  },
  POST: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const form = await req.formData();
    const email = form.get("email")?.toString() || "";
    const password = form.get("password")?.toString() || "";
    const name = form.get("name")?.toString() || "";
    const res = await fetch("https://videoapp-api.deno.dev/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });
    if (res.status === 404) {
      return ctx.render({
        message: "Algo hay mal",
      });
    }
    if (res.status === 200) {
      const data = await res.json();
      const auth = jwt.sign(
        { email, id: data.id, name: data.name },
        Deno.env.get("JWT_SECRET"),
        { expiresIn: "24h" },
      );
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: auth,
        sameSite: "Lax",
        domain: url.hostname,
        path: "/",
        secure: true,
      });
      headers.set("location", "/videos");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
    return ctx.render();
  },
};

const Page = () => <Register></Register>;
export default Page;
