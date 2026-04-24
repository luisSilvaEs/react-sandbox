import type { SubmitEvent, JSX } from "react";
import { useRef } from "react";

const LEVEL = [
  {
    label: "Beginner",
    value: "beginner",
  },
  {
    label: "Intermediate",
    value: "intermediate",
  },
  {
    label: "Advanced",
    value: "advanced",
  },
];

const CATEGORY = [
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "Backend",
    value: "backend",
  },
  {
    label: "Tools",
    value: "tools",
  },
];

const Form = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null); //<...> TS generics: “I want this thing to work with a specific type”
  /**
   * Generics is important because you get:
    •   autocomplete
	•	type safety
	•	fewer bugs
   */

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(formData.getAll("level"));
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>Skill Name</label>
      <input id="skill" name="skill" type="text" required />
      <br />
      <label>Level</label>
      <select name="level">
        {LEVEL.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      <br />
      <label>Category</label>
      <select name="category">
        {CATEGORY.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      <br />
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </div>
    </form>
  );
};

export default Form;
