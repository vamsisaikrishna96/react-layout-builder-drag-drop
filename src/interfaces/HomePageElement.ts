export interface IHomePageElement {
  type: string;
  id: string;
  columns?: IHomePageColumnElement[];
}

export interface IHomePageColumnElement {
  contentType: string;
  //"UNSET" | "HEADLINE" | "SUB HEADLINE" | "PARAGRAPH" | "IMAGE";
  data?: string | null;
  id: string;
}
