import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import VideoList from "../components/VideoList.tsx";
import { Video } from "../types.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const res = await fetch(`
            https://videoapp-api.deno.dev/videos/${ctx.state.id}`);
    const data = await res.json();
    return ctx.render({
      videos: data,
      userId: ctx.state.id,
      userName: ctx.state.name,
    });
  },
};

const Page = (
  props: PageProps<{ videos: Video[]; userId: string; userName: string }>,
) => {
  return (
    <VideoList
      videos={props.data.videos}
      userid={props.data.userId}
      username={props.data.userName}
    />
  );
};
export default Page;
