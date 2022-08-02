export interface Lecturer {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  starting_date: string;
  image: string;
}

export interface Course {
  course_code: string;
  course_name: string;
  course_description: string;
  course_price: string;
  course_starting_date: string;
  num_of_lessons: number;
  course_category: string;
  course_lecturer: string;
}

export type sortColumn = 'name' | 'price';
export interface CourseSort {
  column: sortColumn;
  dirAsc: boolean;
}

export interface FilePath {
  name: string;
}
