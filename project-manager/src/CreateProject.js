import React, { useState } from "react";

export default function CreateProject() {
  function handleToggleCreateProject() {
    setIsCreatingNewProject(!isCreatingNewProject);
  }
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);
  return (
    <div style={{ marginTop: "20px" }}>
      <span
        style={{ backgroundColor: "black", color: "crimson" }}
        onClick={handleToggleCreateProject}
      >
        <hr/>
        🖋 New Project
      </span>
      {isCreatingNewProject && (
        <form>
          <input placeholder="create new project" />
          <br />
          <button>Create</button>
        </form>
      )}
    </div>
  );
}
