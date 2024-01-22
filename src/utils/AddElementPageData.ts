import { STRING_CONSTANTS } from "./stringConstants";
import HeadlineSVG from "./../assets/icons/headline.svg";
import SubHeadlineSVG from "../assets/icons/sub-headline.svg";
import ParagraphSVG from "../assets/icons/paragraph.svg";
import listSVG from "../assets/icons/list.svg";
import ImageSVG from "../assets/icons/image.svg";

export interface IElementPage {
  category: string;
  items: IElementItem[];
}

export interface IElementItem {
  name: string;
  image: string;
}

export const addElementPageData: IElementPage[] = [
  {
    category: STRING_CONSTANTS.TEXT,
    items: [
      {
        name: STRING_CONSTANTS.HEADLINE,
        image: HeadlineSVG,
      },
      {
        name: STRING_CONSTANTS.SUB_HEADLINE,
        image: SubHeadlineSVG,
      },

      {
        name: STRING_CONSTANTS.PARAGRAPH,
        image: ParagraphSVG,
      },
      {
        name: STRING_CONSTANTS.BULLET_LIST,
        image: listSVG,
      },
    ],
  },
  {
    category: STRING_CONSTANTS.MEDIA,
    items: [
      {
        name: STRING_CONSTANTS.IMAGE,
        image: ImageSVG,
      },
    ],
  },
];
