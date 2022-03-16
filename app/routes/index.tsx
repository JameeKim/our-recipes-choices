import {
  ActionFunction,
  Form,
  LoaderFunction,
  json,
  redirect,
  useLoaderData,
} from "remix";
import Snack, { SnackData } from "~/models/snack";

type LoaderData = (SnackData & { _id: string })[];

export const loader: LoaderFunction = async () => {
  const snacks = await Snack.find({}, {}, { limit: 20 });
  return json(snacks);
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const flavour = form.get("flavour");
  const snack = new Snack({ flavour });
  await snack.save();
  return redirect("/");
};

export default function Index() {
  const snacks = useLoaderData<LoaderData>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Form method="post">
        <input type="hidden" name="flavour" value="sweet" />
        <button type="submit" className="btn btn-primary">
          Add Snack
        </button>
      </Form>
      <ul>
        {snacks.map((snack) => (
          <li key={snack._id}>Yummy {snack.flavour} snack</li>
        ))}
      </ul>
    </div>
  );
}
