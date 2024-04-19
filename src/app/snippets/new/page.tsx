import { redirect } from "next/navigation";
import { db } from "@/db/index";

const SnippetCreatePage = () => {
  const createSnippet = async (formData: FormData) => {
    // This needs to be a server action
    "use server";

    // Check the user's inputs and make sure they're valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);

    // Redirect the user back to the root route
    redirect("/");
  };

  return (
    <div className="create">
      <form action={createSnippet}>
        <h3>Create a Snippet</h3>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" id="title" />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <textarea name="code" id="code" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default SnippetCreatePage;
