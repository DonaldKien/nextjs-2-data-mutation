"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";

const SnippetCreatePage = () => {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <div className="create">
      <form action={action}>
        <h3>Create a Snippet</h3>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" id="title" />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <textarea name="code" id="code" />
        </div>
        {<div>{formState.message}</div>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default SnippetCreatePage;
