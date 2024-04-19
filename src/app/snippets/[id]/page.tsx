import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import * as action from "@/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = action.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <h3>Snippet</h3>
      <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
      <form action={deleteSnippetAction}>
        <button>Delete</button>
      </form>
      <div>
        <h4>{snippet.title}</h4>
        <p>{snippet.code}</p>
      </div>
    </div>
  );
};

export default SnippetShowPage;
