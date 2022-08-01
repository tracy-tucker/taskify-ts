// The Todo is going to be used in a lot of places
// It makes since to create a separate file (model.ts) to
// store all of the properties of Todo, to make the shape
// of the Todo reusable throughout the project.

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// The file type is .ts because there is no jsx being used.
